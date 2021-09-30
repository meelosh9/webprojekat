import { Stanica } from "./stanica.js";


export class Lokacija
{
    constructor(id,naziv,stanice){
        this.id=id;
        this.naziv = naziv;        
        this.stanice = stanice;        
    }

    dodajStanicu(stan){
        this.stanice.push(stan);
    }
    crtajLokacije(host,ids,nms){
        if (!host)
            throw new Exception("Roditeljski element ne postoji");

            var mainlok = document.createElement("div")
            
            var lokbox = document.createElement("div")

            var title = document.createElement("label")

            
            mainlok.appendChild(title)
            mainlok.appendChild(lokbox)
            mainlok.classList = "mainlok"+ this.id+ " mainlok"      

            title.innerHTML = this.naziv
            
            nms.push(this.naziv)
            ids.push(this.id)

            
            lokbox.classList = "lokbox"+" lokbox"+this.id
            if(this.stanice!=null)
            this.stanice.forEach(stanica => {       
                
                var str = new Stanica(stanica.id,stanica.naziv,stanica.temperatura,stanica.opis,stanica.merenje)         
                str.crtajStanice(lokbox,stanica.meteorolog);   
            }             
            );
            host.appendChild(mainlok)
    }
    
}