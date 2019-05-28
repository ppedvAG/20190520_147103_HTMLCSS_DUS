/* var1 */
var reg = new RegExp('a+'); /* wie gibt man die Flags in dieser Var an? */
/* var2 */
var reg1 = /a+/gi; /* g - global, i - case insensitiv */
var zk = "Mark war gestern in Aachen";
/* regexp.test(string), rw: true/false */
if (reg.test(zk)) {
    document.getElementById('outp1').innerText = "Gefunden";
}
else {
    document.getElementById('outp1').innerText = "Nicht gefunden";
}
/* regexp.exec(string), rw: array */
/* ohne flag g ist die Schleife endlos */
var results = [];
results = reg1.exec(zk);
while (results) {
    document.getElementById('outp2').innerText += results[0] + " | ";
    results = reg1.exec(zk);
}
/* string.replace(regexp, ersetzungsmuster) */
var text3 = "Max Mustermann";
var reg3 = /(\w+)\s(\w+)/;
document.getElementById('outp3').innerText = text3.replace(reg3, "$2, $1");
/* string.match(regexp), rw: array */
var text4 = "Master of Disaster, Master";
var reg4 = /M+/g; /* ohne g kommt Array mit erstem Treffer und benannten Feldern zurück, mit g kommt normales Array mit allen Treffern zurück */
var arr4 = text4.match(reg4);
console.log(arr4);
for (var el in arr4) {
    document.getElementById('outp4').innerText += arr4[el] + "  ";
}
/* string.search(regexp), rw: index */
document.getElementById('outp5').innerText = "";
/* string.split(regexp), rw: array aus strings */
document.getElementById('outp6').innerText = "";
//# sourceMappingURL=js-regexp.js.map