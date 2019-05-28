class Person {
    firstname: string;
    lastname: string;
    birthdate: Date;
    constructor(firstname: string, lastname: string, birthdate: Date){
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthdate = birthdate;
    }
}
/* so bekommt man HTMLInputElement */
//let inFname = document.getElementsByTagName("input")[0];
/* HTMLElement */
let inFname: HTMLInputElement = <HTMLInputElement> document.getElementById('fname');
let inLname: HTMLInputElement = <HTMLInputElement> document.getElementById('lname');
let inBDate: HTMLInputElement = <HTMLInputElement> document.getElementById('birth');
let tlnArray: Array<Person> = [];

function checkInput(): void{
    /* if() {
        alert("");
    } else {
        
    } */


    let p: Person = {firstname: inFname.value, lastname: inLname.value, birthdate: new Date(inBDate.value)}
    console.log(p);
    tlnArray[tlnArray.length] = p;
    let list = document.getElementById('participants');
    list.innerHTML = "";
    for (let el of tlnArray){
        list.innerHTML += `<li> ${el.lastname}, ${el.firstname}, geb. ${el.birthdate.toLocaleDateString()}</li>`;
    }
}

