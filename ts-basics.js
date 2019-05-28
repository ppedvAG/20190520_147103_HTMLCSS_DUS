var Person = /** @class */ (function () {
    function Person(firstname, lastname, birthdate) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthdate = birthdate;
    }
    return Person;
}());
/* so bekommt man HTMLInputElement */
//let inFname = document.getElementsByTagName("input")[0];
/* HTMLElement */
var inFname = document.getElementById('fname');
var inLname = document.getElementById('lname');
var inBDate = document.getElementById('birth');
var tlnArray = [];
function checkInput() {
    /* if() {
        alert("");
    } else {
        
    } */
    var p = { firstname: inFname.value, lastname: inLname.value, birthdate: new Date(inBDate.value) };
    console.log(p);
    tlnArray[tlnArray.length] = p;
    var list = document.getElementById('participants');
    list.innerHTML = "";
    for (var _i = 0, tlnArray_1 = tlnArray; _i < tlnArray_1.length; _i++) {
        var el = tlnArray_1[_i];
        list.innerHTML += "<li> " + el.lastname + ", " + el.firstname + ", geb. " + el.birthdate.toLocaleDateString() + "</li>";
    }
}
//# sourceMappingURL=ts-basics.js.map