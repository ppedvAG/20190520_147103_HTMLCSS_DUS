/* var1 */
let reg: RegExp = new RegExp('a+');/* wie gibt man die Flags in dieser Var an? */
/* var2 */
let reg1 = /a+/gi; /* g - global, i - case insensitiv */
let zk = "Mark war gestern in Aachen";

/* regexp.test(string), rw: true/false */
if(reg.test(zk)){
    document.getElementById('outp1').innerText = "Gefunden";
} else {
    document.getElementById('outp1').innerText = "Nicht gefunden";
}

/* regexp.exec(string), rw: array */
/* ohne flag g ist die Schleife endlos */
let results: Array<string> = [];
results = reg1.exec(zk);
while(results){
    document.getElementById('outp2').innerText += results[0] + " | ";
    results = reg1.exec(zk);
}

/* string.replace(regexp, ersetzungsmuster) */
let text3: string = "Max Mustermann";
let reg3: RegExp = /(\w+)\s(\w+)/;
document.getElementById('outp3').innerText = text3.replace(reg3, "$2, $1");

/* string.match(regexp), rw: array */
let text4: string = "Master of Disaster, Master";
let reg4: RegExp = /M+/g; /* ohne g kommt Array mit erstem Treffer und benannten Feldern zurück, mit g kommt normales Array mit allen Treffern zurück */
let arr4: Array<any> = text4.match(reg4);
console.log(arr4);
for(let el in arr4){
    document.getElementById('outp4').innerText += arr4[el] + "  " ;
}

/* string.search(regexp), rw: index */
document.getElementById('outp5').innerText= "";

/* string.split(regexp), rw: array aus strings */
document.getElementById('outp6').innerText= "";




