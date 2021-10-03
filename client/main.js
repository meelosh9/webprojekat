import { Lokacija } from "./lokacija.js";
import { Meteorolog } from "./meteorolog.js";
import { Stanica } from "./stanica.js";


var adminPanel = document.createElement("div");
document.body.appendChild(adminPanel)
adminPanel.className="adminPanel"

var displayPanel = document.createElement("div");
document.body.appendChild(displayPanel)
displayPanel.className="displayPanel"


var dodajLokaciju = document.createElement("div");
var dodajStanicu = document.createElement("div");
var dodajMeteorologa = document.createElement("div");
var postaviMeteorologa = document.createElement("div");
var postaviVreme = document.createElement("div");
var brisanjeGeneral = document.createElement("div");


var ll = document.createElement("label");
ll.innerHTML = "Dodaj lokaciju";


var lnl = document.createElement("label");
var lkl = document.createElement("label");
lnl.innerHTML = "Naziv";
lkl.innerHTML = "Kapacitet";
var lni = document.createElement("input");
var lki = document.createElement("input")

lni.className = "dodajLokInN"
lki.className = "dodajLokInMK"
var lokbox = document.createElement("div")
lokbox.className = "adminBox"

var loklabels = document.createElement("div")

loklabels.appendChild(lnl);
loklabels.appendChild(lkl);
loklabels.className = "adminBoxInner"

lokbox.appendChild(loklabels);

var lokins = document.createElement("div");

lokins.appendChild(lni)
lokins.appendChild(lki)
lokins.className = "adminBoxInner"

lokbox.appendChild(lokins)


var dodajLokacijuButton = document.createElement("button");
dodajLokacijuButton.innerHTML = "Dodaj";

dodajLokaciju.appendChild(ll);
dodajLokaciju.appendChild(lokbox);
dodajLokaciju.appendChild(dodajLokacijuButton)



var sl = document.createElement("label");
sl.innerHTML = "Dodaj stanicu";


var snl = document.createElement("label");
var sll = document.createElement("label");
snl.innerHTML = "Naziv"
sll.innerHTML = "Lokacija"
var sni = document.createElement("input");
var sli = document.createElement("select");
sni.className = "dodajStanInN"
sli.className = "dodajStanInL"
var stanbox = document.createElement("div")
stanbox.className = "adminBox"

var stanlabels = document.createElement("div");

stanlabels.appendChild(snl)
stanlabels.appendChild(sll)
stanlabels.className = "adminBoxInner"

stanbox.appendChild(stanlabels)

var stanins = document.createElement("div");

stanins.appendChild(sni)
stanins.appendChild(sli)
stanins.className= "adminBoxInner"

stanbox.appendChild(stanins)

var dodajStanicuButton = document.createElement("button");
dodajStanicuButton.innerHTML = "Dodaj"

dodajLokaciju.appendChild(sl)
dodajLokaciju.appendChild(stanbox)
dodajLokaciju.appendChild(dodajStanicuButton)


var ml = document.createElement("label");
ml.innerHTML = "Dodaj meteorologa"

var dmil = document.createElement("label");
var dmal = document.createElement("label");
dmil.innerHTML = "Ime"
dmal.innerHTML = "Adresa"
var dmii = document.createElement("input");
var dmai = document.createElement("input");
dmii.className = "dodajMeteoInI"
dmai.className = "dodajMeteoInA"

var metbox = document.createElement("div")
metbox.className = "adminBox"

var metlables = document.createElement("div");

metlables.appendChild(dmil)
metlables.appendChild(dmal)
metlables.className = "adminBoxInner"

metbox.appendChild(metlables)

var metins = document.createElement("div");

metins.appendChild(dmii)
metins.appendChild(dmai)
metins.className = "adminBoxInner"


metbox.appendChild(metins)


var dodajMeteorologaButton = document.createElement("button");
dodajMeteorologaButton.innerHTML = "Dodaj";

dodajMeteorologa.appendChild(ml)
dodajMeteorologa.appendChild(metbox)
dodajMeteorologa.appendChild(dodajMeteorologaButton)



var pml = document.createElement("label");
pml.innerHTML = "Postavi meteorloga";

var pmil = document.createElement("label");
var pmsl = document.createElement("label");
pmil.innerHTML = "Meteorolog";
pmsl.innerHTML = "Stanica";
var pmii = document.createElement("select");
var pmsi = document.createElement("select");
pmii.className = "postaviMeteoInM";
pmsi.className = "postaviMeteoInS";

var posmetebox = document.createElement("div");
posmetebox.className = "adminBox";

var posmeteolabels = document.createElement("div");

posmeteolabels.appendChild(pmil);
posmeteolabels.appendChild(pmsl);
posmeteolabels.className = "adminBoxInner";

posmetebox.appendChild(posmeteolabels)

var posmeteins = document.createElement("div");

posmeteins.appendChild(pmii);
posmeteins.appendChild(pmsi);
posmeteins.className = "adminBoxInner"

posmetebox.appendChild(posmeteins)

var postaviMeteorologaButton = document.createElement("button");
postaviMeteorologaButton.innerHTML ="Postavi";

postaviMeteorologa.appendChild(pml)
postaviMeteorologa.appendChild(posmetebox)
postaviMeteorologa.appendChild(postaviMeteorologaButton)


var pvl = document.createElement("label");
pvl.innerHTML = "Postavi vreme"
var pvs = document.createElement("label");
var pvtl = document.createElement("label");
var pvol = document.createElement("label");
pvs.innerHTML = "Stanica"
pvtl.innerHTML = "Temeperatura"
pvol.innerHTML = "Opis"
var pvsi = document.createElement("select");
var pvti = document.createElement("input");
var pvoi = document.createElement("input");
pvti.className = "postaviVremeInT"
pvoi.className = "postaviVremeInO"
pvsi.className = "postaviVremeInS"

var pvbox = document.createElement("div");
pvbox.className = "adminBox"

var pvlabels = document.createElement("div");
pvlabels.appendChild(pvs)
pvlabels.appendChild(pvtl)
pvlabels.appendChild(pvol)
pvlabels.className = "adminBoxInner"

pvbox.appendChild(pvlabels)

var pvins = document.createElement("div");
pvins.appendChild(pvsi)
pvins.appendChild(pvti)
pvins.appendChild(pvoi)
pvins.className = "adminBoxInner"


pvbox.appendChild(pvins)

var postaviVremeButton = document.createElement("button");
postaviVremeButton.innerHTML = "Postavi"

postaviVreme.appendChild(pvl)
postaviVreme.appendChild(pvbox)
postaviVreme.appendChild(postaviVremeButton)

ll.classList = "naslov"
sl.classList = "naslov"
ml.classList = "naslov"
pml.classList = "naslov"
pvl.classList = "naslov"


var brisanjeLokacijeLabel = document.createElement("label");
var brisanjeLokacijeInput = document.createElement("select");
var brisanjeLokacijeButton = document.createElement("button");
brisanjeLokacijeLabel.innerHTML = "Ime lokacije"
brisanjeLokacijeInput.className = "brisanjeLokIn"
brisanjeLokacijeButton.innerHTML = "Obrisi"
var brisanjeStaniceLabel = document.createElement("label");
var brisanjeStaniceInput = document.createElement("select");
var brisanjeStaniceButton = document.createElement("button");
brisanjeStaniceLabel.innerHTML = "Stanica"
brisanjeStaniceInput.className = "brisanjeStanIn"
brisanjeStaniceButton.innerHTML = "Obrisi"
var brisanjeMeteorlogaLabel = document.createElement("label");
var brisanjeMeteorlogaInput = document.createElement("select");
var brisanjeMeteorlogaButton = document.createElement("button");
brisanjeMeteorlogaLabel.innerHTML = "Meteorolog"
brisanjeMeteorlogaInput.className = "brisanjeMeteoIn"
brisanjeMeteorlogaButton.innerHTML = "Obrisi"
var brisanjeLabelBox = document.createElement("div");
brisanjeLabelBox.className = "adminBoxInner"
brisanjeLabelBox.appendChild(brisanjeLokacijeLabel)
brisanjeLabelBox.appendChild(brisanjeStaniceLabel)
brisanjeLabelBox.appendChild(brisanjeMeteorlogaLabel)
var brisanjeInputBox = document.createElement("div");
brisanjeInputBox.className = "adminBoxInner"
brisanjeInputBox.appendChild(brisanjeLokacijeInput)
brisanjeInputBox.appendChild(brisanjeStaniceInput)
brisanjeInputBox.appendChild(brisanjeMeteorlogaInput)
var brisanjeButtonBox = document.createElement("div");
brisanjeButtonBox.appendChild(brisanjeLokacijeButton)
brisanjeButtonBox.appendChild(brisanjeStaniceButton)
brisanjeButtonBox.appendChild(brisanjeMeteorlogaButton)
brisanjeButtonBox.className = "adminBoxInner"

brisanjeGeneral.appendChild(brisanjeLabelBox)
brisanjeGeneral.appendChild(brisanjeInputBox)
brisanjeGeneral.appendChild(brisanjeButtonBox)
var napomena = document.createElement("label")
napomena.innerHTML = "*Pri brisanju stanice uneti i njenu lokaciju u polje iznad"


dodajLokaciju.className="dodajLokaciju";
dodajStanicu.className="dodajLokaciju";
dodajMeteorologa.className="dodajLokaciju";
postaviMeteorologa.className="dodajLokaciju";
postaviVreme.className="dodajLokaciju";
brisanjeGeneral.className="adminBox";


var meteosBoxMain =document.createElement("div")
var meteosBoxID =document.createElement("div")
var meteosBoxIme =document.createElement("div")
var meteosBoxAdresa =document.createElement("div")


meteosBoxIme.classList = "mes"
meteosBoxAdresa.classList = "mes"
var meteos  =document.createElement("div")
var meteoslabel = document.createElement("label")
meteoslabel.innerHTML = "Lista meteorloga"

var x = document.createElement("strong")
var v = document.createElement("strong")

x.innerHTML = "Ime"
v.innerHTML = "Adresa"

meteoslabel.classList= "meteo"


meteosBoxMain.appendChild(meteosBoxIme)
meteosBoxMain.appendChild(meteosBoxAdresa)

meteosBoxIme.appendChild(x)
meteosBoxAdresa.appendChild(v)
meteosBoxMain.classList = "adminBox"

meteos.appendChild(meteoslabel)
meteos.appendChild(meteosBoxMain)
meteos.className="mes";


adminPanel.appendChild(dodajLokaciju);
adminPanel.appendChild(dodajStanicu);
adminPanel.appendChild(dodajMeteorologa);
adminPanel.appendChild(postaviMeteorologa);
adminPanel.appendChild(postaviVreme);
adminPanel.appendChild(brisanjeGeneral);
adminPanel.appendChild(napomena)
adminPanel.appendChild(meteos)


dodajLokacijuButton.onclick=(ev)=>{
 
    var n = adminPanel.querySelectorAll(".dodajLokInN")[0].value;
    var mk = adminPanel.querySelectorAll(".dodajLokInMK")[0].value;
    
    if(n=="" ||mk=="" && isNaN(query[1]))
        alert("Unesite ispravne podatke")
    else
        fetch("https://localhost:5001/Stanice/postLokacija/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                naziv: n,
                maxkapacitet: mk
                })
        }).then(p => {
            if (p.ok) {
                p.json().then(data=>{

                    var lok = new Lokacija(data,n,null)
                    lok.crtajLokacije(displayPanel)
                    
                   
                })

            }
            else 
            {
            alert("Greška prilikom upisa.");
            }
        }).catch(p => {
            alert("Nema kapaciteta.");
        });

    
}
dodajMeteorologaButton.onclick=(ev)=>{

    var ime = adminPanel.querySelectorAll(".dodajMeteoInI")[0].value
    var adresa = adminPanel.querySelectorAll(".dodajMeteoInA")[0].value

    if(ime=="" || adresa=="")
        alert("Unesite ispravne podatke")
    else
        fetch("https://localhost:5001/Stanice/postMeteorolog/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                naziv: ime,
                adresa: adresa
                })
        }).then(p => {
            if (p.ok) {
                p.json().then(data=>{

                    
                    var met = new Meteorolog(data,ime,adresa)


                    met.crtajMeteorologe(meteosBoxIme,meteosBoxAdresa)
                })
                
        }
            else {
                alert("Greška prilikom upisa.");
                 }
        }).catch(p => {
            alert("Greška prilikom upisa.");
        });
}
dodajStanicuButton.onclick=(ev)=>{


    var naziv = adminPanel.querySelectorAll(".dodajStanInN")[0].value
    var lokacija = adminPanel.querySelectorAll(".dodajStanInL")[0].value

    if(naziv=="" || lokacija=="")
        alert("Unesite ispravne podatke")    
    else
        fetch("https://localhost:5001/Stanice/postStanica/"+lokacija,  {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                naziv: naziv
                })
        }).then(p => {
            if (p.ok) {
                p.json().then(data=>{
                    console.log(data);
                    var option = document.createElement("option");
                    option.value = data;
                    option.text = naziv;

                    pmsi.appendChild(option)

                    option = document.createElement("option");
                    option.value = data;
                    option.text = naziv;

                    brisanjeStaniceInput.appendChild(option)


                    option = document.createElement("option");
                    option.value = data;
                    option.text = naziv;
                    
                    pvsi.appendChild(option)


                    var lok = displayPanel.querySelector(".lokbox"+lokacija)
                    
                    var stan = new Stanica(data,naziv,null,null,null)
                    stan.crtajStanice(lok,null)

                })
                
        }
            else {
                alert("Nema kapaciteta");
                 }
        }).catch(p => {
            console.log(p);
            alert("Greška prilikom upisa.");
        });
}
postaviVremeButton.onclick=(ev)=>{

    var idS = adminPanel.querySelectorAll(".postaviVremeInS")[0].value
    var t = adminPanel.querySelectorAll(".postaviVremeInT")[0].value
    var op = adminPanel.querySelectorAll(".postaviVremeInO")[0].value


    var vreme = displayPanel.querySelector(".st"+idS)
    if(t=="" || idS=="" || op=="" || isNaN(t))
        alert("Unesite ispravne podatke")
    else if ( vreme == null)
        alert("Stanica ne postoji")
    else
        fetch("https://localhost:5001/Stanice/setVreme/"+ idS, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                opis: op,
                temperatura: t
                })
            
        }).then(p => {
            if (p.ok) {

                p.json().then(data=>{   
               
                    vreme.innerHTML = "Vreme : "+t + "'C " + op;                    
                    var merenje = displayPanel.querySelector(".sv"+idS)
                    console.log(data);
                    merenje.innerHTML = "Izmereno : "+data
                }).catch(p => {
                    console.log(p);
                })
                
        }
            else {
                    alert("1Greška prilikom upisa.");
             }
        }).catch(p => {
            alert("Greška prilikom upisa.");
        });
}
postaviMeteorologaButton.onclick=(ev)=>{

    var idM = adminPanel.querySelectorAll(".postaviMeteoInM")[0].value
    var idS = adminPanel.querySelectorAll(".postaviMeteoInS")[0].value
    var test = displayPanel.querySelector(".ssm"+idS)


    if(idM=="" || idS=="")
        alert("Unesite ispravne podatke")

    else
        fetch("https://localhost:5001/Stanice/setMeteorolog/"+ idS +"/" + idM, {
            method: "PUT"
            
            
        }).then(p => {
            if (p.ok) {

                p.json().then(data=>{
                    test.classList = "sm" + idM +" ssm"+ idS
                    test.innerHTML = "Meteorolog : "+data;
                }).catch(p => {
                    console.log(p);
                })
                
        }
            else {
                    alert("1Greška prilikom upisa.");
             }
        }).catch(p => {
            alert("Greška prilikom upisa.");
        });
}
brisanjeLokacijeButton.onclick=(ev)=>{

    var lokacija = adminPanel.querySelectorAll(".brisanjeLokIn")[0].value
    
    if(lokacija=="")
        alert("Unesite ispravne podatke")
    else
    fetch("https://localhost:5001/Stanice/deleteLokacija/"+lokacija, {
    headers: {
        'Access-Token': 'token'
        },
        method: 'delete'
        }).then((data) => {

            var children = Array.from(document.querySelector(".lokbox" + lokacija).children)
            // console.log(children);
            children.forEach(el => {
                var pom = el.className.replace(/\D/g, '')
                
                var inp = document.querySelector(".postaviMeteoInS")
                
                console.log(inp);
            for (var i=0; i<inp.length; i++) {
                
                if (inp.options[i].value == pom)
                inp.remove(i);
            }

            inp = document.querySelector(".postaviVremeInS")

            for (var i=0; i<inp.length; i++) {

                if (inp.options[i].value == pom)
                inp.remove(i);
            }

            inp = document.querySelector(".brisanjeStanIn")

            for (var i=0; i<inp.length; i++) {

                if (inp.options[i].value == pom)
                inp.remove(i);
            }

            })
            
            document.querySelectorAll(".mainlok" + lokacija).forEach(el => el.remove());

           


            var inp = document.querySelector(".brisanjeLokIn")

            for (var i=0; i<inp.length; i++) {
                console.log(inp.options[i].value);
                if (inp.options[i].value == lokacija)
                inp.remove(i);
            }

            inp = document.querySelector(".dodajStanInL")

            for (var i=0; i<inp.length; i++) {

                if (inp.options[i].value == lokacija)
                inp.remove(i);
            }

       
            data.text().then(text => console.log(text));
    });
}
brisanjeMeteorlogaButton.onclick=(ev)=>{
    var met = adminPanel.querySelectorAll(".brisanjeMeteoIn")[0].value
    
    if(met=="")
        alert("Unesite ispravne podatke")
    else {
        var lokacija = document.querySelectorAll(".sm"+met)       
        
    }
    if(lokacija == null)
        alert("Lokacija ne postoji")
    else
    fetch("https://localhost:5001/Stanice/deleteMeteorolog/"+met, {
    headers: {
        'Access-Token': 'token'
        },
        method: 'delete'
        }).then((data) => {
            
            lokacija.forEach(el => el.innerHTML = "");

            lokacija = document.querySelector(".postaviMeteoInM") //
            
            for (var i=0; i<lokacija.length; i++) {
                if (lokacija.options[i].value == met)
                lokacija.remove(i);
            }

            lokacija = document.querySelectorAll(".brisanjeMeteoIn")
            
            for (var i=0; i<lokacija.length; i++) {
                
                if (lokacija[0].options[i].value == met)
                lokacija[0].remove(i);
            }

            document.querySelectorAll(".m"+met).forEach(el => el.remove());

        data.text().then(text => console.log(text));
    });

}
brisanjeStaniceButton.onclick=(ev)=>{

    var lokacija = adminPanel.querySelectorAll(".brisanjeLokIn")[0].value
    var idStanice = adminPanel.querySelectorAll(".brisanjeStanIn")[0].value
    if(lokacija=="")
        alert("Unesite ispravne podatke")    
    else
    fetch("https://localhost:5001/Stanice/deleteStanica/"+idStanice+"/"+lokacija, {
    headers: {
        'Access-Token': 'token'
        },
        method: 'delete'
        }).then((data) => {

            var inp = document.querySelector(".postaviMeteoInS")
            console.log(inp);
            for (var i=0; i<inp.length; i++) {
                
                if (inp.options[i].value == idStanice)
                inp.remove(i);
            }

            inp = document.querySelector(".postaviVremeInS")

            for (var i=0; i<inp.length; i++) {

                if (inp.options[i].value == idStanice)
                inp.remove(i);
            }

            inp = document.querySelector(".brisanjeStanIn")

            for (var i=0; i<inp.length; i++) {

                if (inp.options[i].value == idStanice)
                inp.remove(i);
            }


            document.querySelectorAll(".s" + idStanice).forEach(el => el.remove());
            data.text().then(text => console.log(text));
    });

}





fetch("https://localhost:5001/Stanice/getAllLokacije",{

    method:"GET",
    headers: {
        "Content-Type": "application/json"
    },
}).then(p => {

        p.json().then(data =>{
            data.forEach(element => {                

                var displayPanel = document.querySelector(".displayPanel")
                var lok = new Lokacija(element.id,element.naziv,element.stanice)
                lok.crtajLokacije(displayPanel)
            });
        })
       
    
  
}).catch(p=> {
    alert("Greška prilikom preuzimanja podataka");
})

fetch("https://localhost:5001/Stanice/getAllMeteorolog",{
    method:"GET",
    headers: {
        "Content-Type": "application/json"
    },
}).then(p => {

        p.json().then(data =>{

            
            data.forEach(element =>{                
               var met = new Meteorolog(element.id,element.naziv,element.adresa)            
               met.crtajMeteorologe(meteosBoxIme,meteosBoxAdresa)
            })
            
            
        })
       
    
  
}).catch(p=> {
    alert("Greška prilikom preuzimanja podataka");
})