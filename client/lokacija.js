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
    crtajLokacije(host){
        if (!host)
            throw new Exception("Roditeljski element ne postoji");
            
            var mainlok = document.createElement("div")
            
            var lokbox = document.createElement("div")

            var title = document.createElement("strong")

            
            mainlok.appendChild(title)
            mainlok.appendChild(lokbox)
            mainlok.classList = "mainlok"+ this.id+ " mainlok"      

            title.innerHTML = this.naziv           


            var option = document.createElement("option");
            option.value = this.id;
            option.text = this.naziv;

            
            var select1  = document.querySelector(".brisanjeLokIn")
            
            var option = document.createElement("option");
            option.value = this.id;
            option.text = this.naziv;

            select1.appendChild(option)

            select1  = document.querySelector(".dodajStanInL")
            
            var option = document.createElement("option");
            option.value = this.id;
            option.text = this.naziv;

            select1.appendChild(option);
            

            select1 = document.querySelector(".postaviVremeInS")
            var select2 = document.querySelector(".brisanjeStanIn")
            var select3 = document.querySelector(".postaviMeteoInS")
            
            lokbox.classList = "lokbox"+" lokbox"+this.id
            
            if(this.stanice!=null)
            this.stanice.forEach(stanica => {       
                option = document.createElement("option");
                option.value = stanica.id;
                option.text = stanica.naziv;
                
                select1.appendChild(option);
                option = document.createElement("option");
                option.value = stanica.id;
                option.text = stanica.naziv;

                select2.appendChild(option);
                option = document.createElement("option");
                option.value = stanica.id;
                option.text = stanica.naziv;
                select3.appendChild(option);
                var str = new Stanica(stanica.id,stanica.naziv,stanica.temperatura,stanica.opis,stanica.merenje)         
                str.crtajStanice(lokbox,stanica.meteorolog);   
            }             
            );
            host.appendChild(mainlok)
    }
    
}