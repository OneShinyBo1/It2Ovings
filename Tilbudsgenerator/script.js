const formEl = document.getElementById("form");

const areaEl = document.getElementById("area");

var TV = document.getElementById("TV");

var Wifi = document.getElementById("Wifi");

let data;

var pris = 0;

formEl.addEventListener("submit", function (e) {

    e.preventDefault();

    data = formEl.elements;

    var name = data.navn.value;

    var nett = data.internett.value;

    //console.log(name);


    areaEl.innerHTML = "Hei " + name + " og takk for en hyggelig telefonsamtale." + '\n';

    areaEl.innerHTML += "Sender deg som avtalt tilbud på "

    //console.log(data.Wifin);


    for (var i = 0; i < data.Wifin.length; i++) {
        var Wifin = data.Wifin;

        if (Wifin[i].checked) {
            if (Wifin[i + 1] == undefined || !Wifin[i+1].checked){
                areaEl.innerHTML += Wifin[i].value + " og ";
            } else{
                areaEl.innerHTML += Wifin[i].value + ", ";
            }
        }
    }





    areaEl.innerHTML +=  nett + " internett" + '\n' + '\n';

    areaEl.innerHTML += "Prisen vil da bli" + '\n';

    console.log(pris);

});