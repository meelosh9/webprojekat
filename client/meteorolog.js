export class Meteorolog
{
    constructor(id,naziv,adresa){
        this.id=id;
        this.naziv = naziv;
        this.adresa = adresa;
    }
    crtajMeteorologe(host2,host3){
        if (!host2 || !host3)
        throw new Exception("Roditeljski element ne postoji");           
            
        var lokacija = document.querySelectorAll(".brisanjeMeteoIn")

        var option = document.createElement("option");
        option.value = this.id;
        option.text = this.naziv;

        lokacija[0].appendChild(option)

        lokacija = document.querySelector(".postaviMeteoInM") 

        var option = document.createElement("option");
        option.value = this.id;
        option.text = this.naziv;


         lokacija.appendChild(option)
         console.log(this.adresa);
        
        var metdiv = document.createElement("div")
        var meteonames = document.createElement("label")
        metdiv.appendChild(meteonames)
        metdiv.classList = "metdiv m"+this.id

        host2.appendChild(metdiv)        
        meteonames.innerHTML = this.naziv
        meteonames.classList = ".m"+this.id

        metdiv = document.createElement("div")
        var meteoads = document.createElement("label")
        metdiv.appendChild(meteoads)
        metdiv.classList = "metdiv m"+this.id
        meteoads.innerHTML = this.adresa
        
        meteonames.classList = ".m"+this.id


        host3.appendChild(metdiv)             

    }
}