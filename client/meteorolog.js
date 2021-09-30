export class Meteorolog
{
    constructor(id,naziv,adresa){
        this.id=id;
        this.naziv = naziv;
        this.adresa = adresa;
    }
    crtajMeteorologe(host1,host2,host3){
        if (!host1 || !host2 || !host3)
        throw new Exception("Roditeljski element ne postoji");           
           
                          
            
            var meteoids = document.createElement("label")
            meteoids.innerHTML = this.id
            var meteonames = document.createElement("label")
            meteonames.innerHTML = this.naziv
            var meteoads = document.createElement("label")
            meteoads.innerHTML = this.adresa

            host1.appendChild(meteoids)
            host2.appendChild(meteonames)        

            host3.appendChild(meteoads)             

    }
}