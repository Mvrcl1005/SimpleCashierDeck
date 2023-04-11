counter1 = 0;
counter2 = 0;
counter3 = 0;
counter4 = 0;
counter5 = 0;
counter6 = 0;
counter7 = 0;
counter8 = 0;
counter9 = 0;
counter10 = 0;
counter11 = 0;
counter12 = 0;

bez_prod1 = "Hamburger";            //Enter your product names here
bez_prod2 = "Cheeseburger"
bez_prod3 = "Fries (small)";
bez_prod4 = "Fries (big)";
bez_prod5 = "Sausage";
bez_prod6 = "Coke";
bez_prod7 = "Lemonade";
bez_prod8 = "Soda";
bez_prod9 = "Ice-Cream";
bez_prod10 = "Coffee";
bez_prod11 = "Cappucino";
bez_prod12 = "Ice-Coffee";


preisprod1 = 5.00;              //Enter product prices here
preisprod2 = 5.50;
preisprod3 = 2.50;
preisprod4 = 3.50;
preisprod5 = 4.00;
preisprod6 = 2.00;
preisprod7 = 2.50;
preisprod8 = 1.50;
preisprod9 = 1.00;
preisprod10 = 2.50;
preisprod11 = 2.90;
preisprod12 = 3.20;

ergebnis = 0;

function prod(name) {
    switch(name){
        case 1: 
            counter1++;
            preis = counter1 * preisprod1;
            s_preis = preisprod1;
            bez = bez_prod1;
            count = counter1;
        
            addrow(count, bez, preis);
            summe(s_preis);
        break;

        case 2:
            counter2++;
            preis = counter2 * preisprod2;
            s_preis = preisprod2;
            bez = bez_prod2;
            count = counter2;
        
            addrow(count, bez, preis);
            summe(s_preis);
        break;

        case 3:
            counter3++;
            preis = counter3 * preisprod3;
            s_preis = preisprod3;
            bez = bez_prod3;
            count = counter3;
        
            addrow(count, bez, preis);
            summe(s_preis);
        break;

        case 4:
            counter4++;
            preis = counter4 * preisprod4;
            s_preis = preisprod4;
            bez = bez_prod4;
            count = counter4;
        
            addrow(count, bez, preis);
            summe(s_preis);
        break;

        case 5:
            counter5++;
            preis = counter5 * preisprod5;
            s_preis = preisprod5;
            bez = bez_prod5;
            count = counter5;
        
            addrow(count, bez, preis);
            summe(s_preis);
        break;

        case 6:
            counter6++;
            preis = counter6 * preisprod6;
            s_preis = preisprod6;
            bez = bez_prod6;
            count = counter6;
        
            addrow(count, bez, preis);
            summe(s_preis);
        break;

        case 7:
            counter7++;
            preis = counter7 * preisprod7;
            s_preis = preisprod7;
            bez = bez_prod7;
            count = counter7;
        
            addrow(count, bez, preis);
            summe(s_preis);
        break;
        
        case 8:
            counter8++;
            preis = counter8 * preisprod8;
            s_preis = preisprod8;
            bez = bez_prod8;
            count = counter8;
        
            addrow(count, bez, preis);
            summe(s_preis);
        break;

        case 9:
            counter9++;
            preis = counter9 * preisprod9;
            s_preis = preisprod9;
            bez = bez_prod9;
            count = counter9;
        
            addrow(count, bez, preis);
            summe(s_preis);
        break;

        case 10:
            counter10++;
            preis = counter10 * preisprod10;
            s_preis = preisprod10;
            bez = bez_prod10;
            count = counter10;
        
            addrow(count, bez, preis);
            summe(s_preis);
        break;

        case 11:
            counter11++;
            preis = counter11 * preisprod11;
            s_preis = preisprod11;
            bez = bez_prod11;
            count = counter11;
        
            addrow(count, bez, preis);
            summe(s_preis);
        break;

        case 12:
            counter12++;
            preis = counter12 * preisprod12;
            s_preis = preisprod12;
            bez = bez_prod12;
            count = counter12;
        
            addrow(count, bez, preis);
            summe(s_preis);
        break;

        default:
        break;
    }
}


function addrow (count, bez, preis) {
    number = 1;
    var trhtml = document.getElementById("table2").insertRow(number);

    tdhtml = document.createElement("td");
    tdhtml.id = "tab2";
    tdhtml.innerHTML = count+"x";

    tdhtml1 = document.createElement("td");                          
    tdhtml1.id = "tab2";
    tdhtml1.innerHTML = bez;

    tdhtml2 = document.createElement("td");                             
    tdhtml2.id = "tab2";
    tdhtml2.innerHTML = preis.toFixed(2)+" &dollar;";

    trhtml.appendChild(tdhtml);
    trhtml.appendChild(tdhtml1);
    trhtml.appendChild(tdhtml2);
}

function addsum (ergebnis) {
    document.getElementById("sum").innerHTML = "<b>" + ergebnis.toFixed(2)+" &dollar;</b>";
}

function summe(s_preis) {
    ergebnis = ergebnis + s_preis;
    addsum(ergebnis);
}

function zahlen () {
    location.reload(true);
}

