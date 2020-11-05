//creating blank retrievedStudent object, empty retrievedCourses array and retrievedMotivering object
var retrievedStudent = {
    personnummer: null,
    forrnamn: null,
    efternamn: null,
    adress: null,
    coAdress: null,
    postnummer: null,
    ort: null,
    telefon: null,
    telefonMobil: null,
    email: null,
    confirmEmail: null,
    hemkommun: null,
    modersmal: null
};

var retrievedCourses = [];

var retrievedMotivering = {
    studiemedel: null,
    studietakt: null,
    motivering: null
}

//updating retrievedStudent, retrievedCourses and retrievedMotivering with data
//saved in local storage
function loadCourses() {
    retrievedCourses = JSON.parse(localStorage.getItem("courseArray"));
}

function loadStudentInfo() {
    retrievedStudent = JSON.parse(localStorage.getItem("student"));
}

function loadMotiveringAnswers() {
    retrievedMotivering = JSON.parse(localStorage.getItem("motiveringAnswers"));
}


loadCourses();
loadStudentInfo();
loadMotiveringAnswers();


//function for inserting student information into the HTML spans
function insertStudentInformation() {

    for (var key in retrievedStudent) {
        if (document.getElementById(key).nodeName == "SPAN") {
            document.getElementById(key).innerHTML = retrievedStudent[key];
        }
        else if (document.getElementById(key).nodeName == "INPUT") {
            document.getElementById(key).value = retrievedStudent[key];
        }
    }
}

//function for inserting course information into a table in HTML
function insertCourseInformation() {
    for (let i = 0; i < retrievedCourses.length; i++) {
        let slctcourse = "<tr>";
        for (let key in retrievedCourses[i]) {
            slctcourse += "<td>" + retrievedCourses[i][key] + "</td>";
        }
        slctcourse += "<tr>";
        document.getElementById("selectedCourseList").innerHTML += slctcourse;
    }
}

//function for inserting motivering information into a table in HTML
function insertMotivering() {

    let motivering = "<br>";
    for (let key in retrievedMotivering) {
        console.log(retrievedMotivering[key]);
        motivering += "<tr><td class= \"bold-text\">" + key + "</td>";
        motivering += "<td class=\"wide-field\">" + retrievedMotivering[key] + "</td></tr>";
    }
    document.getElementById("motiveringList").innerHTML += motivering;
}

insertCourseInformation();
insertStudentInformation();
insertMotivering()