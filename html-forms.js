console.log("ts");
function trycatch1() {
    console.log("trycatch()");
    var inpValue = document.getElementById('inpAge').value;
    var err;
    try {
        /* auch bei Buchstaben ist "" */
        if (inpValue == "")
            throw "Eingabe fehlt";
        if (+inpValue < 7)
            throw "zu jung";
        if (+inpValue > 65)
            throw "zu alt";
    }
    catch (err) {
        document.getElementById('outpErr').innerText = "Meldung von err: " + err;
        this.err = err;
    }
    finally {
        if (+inpValue >= 7 && +inpValue <= 16) {
            document.getElementById('outpErr').innerText = "";
            document.getElementById('outpWelcome').innerText = "Willkommen beim Kindermarathon";
        }
    }
}
function getSelected() {
    var extrasArr = document.getElementsByName('inpCheck');
    var outPizza = document.getElementById('outPizza');
    extrasArr.forEach(function (el) { return outPizza.innerText += el; });
}
function showPrice() {
}
//# sourceMappingURL=html-forms.js.map