// creating object of student
var student = {
    personnummer: "19931211-2437",
    forrnamn: "Luke",
    efternamn: "Haresign",
    adress: "148b Övre Långvinkelsgatan",
    coAdress: "NA",
    postnummer: 25436,
    ort: "Helsingborg",
    telefon: "NA",
    telefonMobil: "+447595869197",
    email: "luke@lukeharesign.com",
    confirmEmail: "luke@lukeharesign.com",
    hemkommun: "Helsingborg",
    modersmal: "Engelska"
};

// retrieving the student saved in local storage and updating the student to those values
function updateStudent() {
    var retrievedObject = localStorage.getItem('student');
    retrievedObject = JSON.parse(retrievedObject);

    for (var key in student) {
        student[key] = retrievedObject[key];

    }
    student.personnummer = "19931211-2437";
    student.forrnamn = "Luke";
    student.efternamn = "Haresign";
    student.modersmal = "Engelska";
}

updateStudent();

// looping through the keys in the student object and displaying them in the relevant span/inputs
// in the kontakt information section
function insertStudentInformation() {

    for (var key in student) {
        if (document.getElementById(key).nodeName == "SPAN") {
            document.getElementById(key).innerHTML = student[key];
        }
        else if (document.getElementById(key).nodeName == "INPUT") {
            document.getElementById(key).value = student[key];
        }
    }
}

insertStudentInformation();

// if users presses edit, changing editable spans to inputs so they can take info
// populating inputs with current span info
function editData() {

    var editableFields = document.querySelectorAll(".edit-me");

    for (let i = 0; i < editableFields.length; i++) {
        var idValue = editableFields[i].getAttribute("id");
        var newNode = document.createElement('input');

        newNode.setAttribute("id", idValue);
        newNode.setAttribute("class", "edit-me info-input");
        editableFields[i].parentNode.replaceChild(newNode, editableFields[i]);
        document.getElementById(idValue).value = student[idValue];
    }

}

// function to be called when user tries to save update
function saveUpdates() {
    document.getElementById("displaymsg").style.display = "none";
    //document.getElementById("displaymsg").innerHTML = "";

    var address = document.getElementById("adress").value;
    var postcode = document.getElementById("postnummer").value;
    var town = document.getElementById("ort").value;
    var mobile = document.getElementById("telefonMobil").value;
    var emailAddress = document.getElementById("email").value;
    var emailConfirm = document.getElementById("confirmEmail").value;
    var homeCommunity = document.getElementById("hemkommun").value;
    var asterix = document.querySelectorAll(".obligatory-asterix");

    var success = true;

    // when user presses save, checking if all obligatory fields are populated
    // if not, displaying asterix by obligatory field and displaying warning message
    if ((address.length === 0) || (postcode.length === 0) || (town.length === 0) || (mobile.length === 0) || (emailAddress.length === 0) || (emailConfirm.length === 0) || (homeCommunity.length === 0)) {
        success = false;
        document.getElementById("displaymsg").style.display = "block";
        document.getElementById("displaymsg").innerHTML = "Du måste fylla i det obligatoriska(*) fältet";
        for (let i = 0; i < asterix.length; i++) {
            asterix[i].style.display = "inline";
        }
    }

    // if all fields are populated correctly, changing inputs to spans with the new values

    if (success) {
        for (var key in student) {


            if (document.getElementById(key).nodeName == "SPAN") {
                student[key] = document.getElementById(key).innerHTML;
            }
            else if (document.getElementById(key).nodeName == "INPUT") {
                student[key] = document.getElementById(key).value;
            }
        }


        var editableFields = document.querySelectorAll(".edit-me");
        for (let i = 0; i < editableFields.length; i++) {
            var idValue = editableFields[i].getAttribute("id");
            var newNode = document.createElement('span');

            newNode.setAttribute("id", idValue);
            newNode.setAttribute("class", "edit-me info-span");
            editableFields[i].parentNode.replaceChild(newNode, editableFields[i]);
            document.getElementById(idValue).innerHTML = student[idValue];
        }
        // hiding all asterix 

        for (let i = 0; i < asterix.length; i++) {
            asterix[i].style.display = "none";
        }

        // saving new values in student object in local storage
        localStorage.setItem('student', JSON.stringify(student))
    }

}