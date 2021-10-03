export class Stanica {

    constructor(id,naziv,temp,opis,merenje){

        this.id = id;        
        this.naziv = naziv;
        this.opis = opis;
        this.temp = temp;
        this.merenje = merenje;
        this.meteorolog = null;
    }


    crtajStanice(host,meteorolog){

        

        var s = document.createElement("div")
        s.classList= "s" + this.id+" stanica"
        host.appendChild(s)
        
        // var id = document.createElement("label")
        var ns = document.createElement("label")
        var ms = document.createElement("label")
        var tv = document.createElement("label")
        var pm = document.createElement("label")

        // id.className= "s" + this.id
        ns.className= "s" + this.id 
        tv.className= "st" + this.id
        pm.className= "sv" + this.id
        ms.className= "ssm" +this.id
        
        // id.innerHTML = "ID : "+this.id
        ns.innerHTML = "Naziv stanice : "+this.naziv
        if(meteorolog != null){
            ms.innerHTML = "Meteorolog : "+meteorolog.naziv
            ms.className= "sm" + meteorolog.id +" ssm"+this.id
        }
        if(this.temp != null)
            tv.innerHTML = "Vreme : "+this.temp + "'C " + this.opis
        if(this.merenje != null)
            pm.innerHTML = "Izmereno : "+this.merenje

        // s.appendChild(id)
        s.appendChild(ns)
        s.appendChild(ms)
        s.appendChild(tv)
        s.appendChild(pm)

    }
    
}