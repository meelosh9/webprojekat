using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using webprog.Models;
using webprog.Helper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;


namespace webprog.Controllers 
{
    [ApiController]
    [Route("[controller]")]
    public class StaniceController : ControllerBase
    {
        public StaniceContext Context {get; set;}
        public StaniceController(StaniceContext context)
        {
            Context = context;
        }
        [Route("getAllLokacije")]
        [HttpGet]
        public async Task<List<Lokacija>> getAllLokacije() //Task se uvek pise za asinhroni poziv
        {
            return await Context.Lokacije.Include(p => p.Stanice).ThenInclude(d => d.Meteorolog).ToListAsync();//navedemo sta vraca i napisemo await da bi bio asinhroni poziv
        }

        [Route("getAllMeteorolog")]
        [HttpGet]
        public async Task<List<Meteorolog>> getAllMeteorolog() //Task se uvek pise za asinhroni poziv
        {
            return await Context.Meteorolog.Include(p => p.Stanice).ToListAsync();//navedemo sta vraca i napisemo await da bi bio asinhroni poziv
        }
        [Route("postLokacija")]
        [HttpPost]
        public async Task<IActionResult> postLokacija([FromBody] Lokacija lokacija)
        {
            var exists = Context.Lokacije.Where( p=> p.Naziv == lokacija.Naziv).FirstOrDefault();
            if(exists == null)
            {
                Context.Lokacije.Add(lokacija);
                await Context.SaveChangesAsync();
                return Ok(lokacija.ID);
            }
            else
            {
                return StatusCode(406);
            }

        }
        [Route("postMeteorolog")]
        [HttpPost]
        public async Task<IActionResult> postMeteorolog([FromBody] Meteorolog meteorolog)
        {
            Context.Meteorolog.Add(meteorolog);
            await Context.SaveChangesAsync();
            return Ok(meteorolog.ID);
        }
        [Route("postStanica/{idLok}")]
        [HttpPost]
        public async Task<IActionResult> postStanica(int idLok,[FromBody] Stanica stanica)        
        {
            
            var lokacija = Context.Lokacije.Include(p=>p.Stanice).Where( p=> p.ID == idLok).FirstOrDefault();
            if(lokacija != null)
            {
                
                if(lokacija.MaxKapacitet >= lokacija.Kapacitet + 1)
                {
                    Context.Stanice.Add(stanica);                    
                    await Context.SaveChangesAsync();
                    //var st = Context.Stanice.Where(p=> p.Naziv == stanica.Naziv).FirstOrDefault();
                    var st = await Context.Stanice.FindAsync(stanica.ID);
                    lokacija.Stanice.Add(st);
                    lokacija.Kapacitet++;
                    Context.Update<Lokacija>(lokacija);
                    await Context.SaveChangesAsync();
                    return Ok(stanica.ID);
                }else
                {
                    return StatusCode(406);
                }
            }
            else
            {
                return StatusCode(404);
            }            
        }
        
        [Route("setMeteorolog/{idStanica}/{idMeteorolog}")]
        [HttpPut]

        public async Task<IActionResult> setMeteorolog(int idStanica, int idMeteorolog)
        {   
            var meteorolog = Context.Meteorolog.Include(p=>p.Stanice).Where( p=> p.ID == idMeteorolog).FirstOrDefault();
            var stanica =  await Context.Stanice.FindAsync(idStanica);
            if(meteorolog != null && stanica != null && stanica.Meteorolog == null)
            {
                
                meteorolog.Stanice.Add(stanica);
                stanica.Meteorolog = meteorolog;
                Context.Update<Stanica>(stanica);
                Context.Update<Meteorolog>(meteorolog);
                await Context.SaveChangesAsync();
                return Ok('"'+meteorolog.Naziv+'"');
            }
            else
            {
                return StatusCode(404);
            }
        }
        [Route("setVreme/{idStanica}")]
        [HttpPut]

        public async Task<IActionResult> setVreme(int idStanica,[FromBody] Vreme vreme)
        {   
            var stanica =  await Context.Stanice.FindAsync(idStanica);
            stanica.Temperatura = vreme.Temperatura.ToString();
            stanica.Opis = vreme.Opis;
            stanica.Merenje = DateTime.Now.ToString();
            await Context.SaveChangesAsync();
            return Ok('"'+stanica.Merenje+'"');
        }
        [Route("deleteLokacija/{idLokacija}")]
        [HttpDelete]

        public async Task deleteLokacija(int idLokacija)
        {
            var lokacija = await Context.Lokacije.FindAsync(idLokacija);
            if(lokacija != null)
            {
                var stanice = await Context.Stanice.Where( p=> p.Lokacija == lokacija).ToListAsync();
                 var ids = stanice.Select( p => p.ID).ToList();

                foreach(int element in ids)
                    await deleteStanica(element,idLokacija);

                Context.Remove(lokacija);
                await Context.SaveChangesAsync();
            }
            else
            {
                throw new Exception("Lokacija not found");
            }
            
        }
        
        [Route("deleteStanica/{idStanica}/{idLok}")]
        [HttpDelete]
                        
        public async Task deleteStanica(int idStanica, int idLok)
        {

            var stanica = await Context.Stanice.FindAsync(idStanica);
            var lokacija = await Context.Lokacije.FindAsync(idLok);
            if(stanica != null)
            {
                lokacija.Kapacitet--;
                Context.Update<Lokacija>(lokacija);
                var meteorolog = stanica.Meteorolog;                
                if(meteorolog != null)
                    meteorolog.Stanice.Remove(stanica);                
                Context.Remove(stanica);
                await Context.SaveChangesAsync();
                
                
            }
            else
            {
                throw new Exception("Stanica not found");
            }
        }
        
        [Route("deleteMeteorolog/{idMeteorlog}")]
        [HttpDelete]
        
        public async Task deleteMeteorolog(int idMeteorlog)
        {
            var meteorolog = Context.Meteorolog.Where(p => p.ID == idMeteorlog).FirstOrDefault();
            if(meteorolog != null)
            {
                var stanice = Context.Stanice.Select( p => p.ID).ToList();

                if(stanice != null)
                {                   
                    foreach(int element in stanice)
                    {
                        var current = await Context.Stanice.FindAsync(element);
                        current.Meteorolog = null;                        
                    } 
                    await Context.SaveChangesAsync();                  
                }
                Context.Remove(meteorolog);
                await Context.SaveChangesAsync();
            }
            else
                throw new Exception("Meteorolog not found");
        }
    }
}