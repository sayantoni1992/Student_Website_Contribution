//adding in three courses that have been completed to be displayed as certificates

var coursesCompleted = {
    kursNamn: "HTML",
    slutDatum: "19/09/2020",
    betyg: "A",
    points: 100
};

var coursesCompletedX = {
    kursNamn: "CSS",
    slutDatum: "30/09/2020",
    betyg: "B",
    points: 200
};

var coursesCompletedY = {
    kursNamn: "JavaScript",
    slutDatum: "10/10/2020",
    betyg: "C",
    points: 300
};

//adding in the courses to a coursesArray
var coursesArray = [coursesCompleted, coursesCompletedX, coursesCompletedY];

//retrieving student information from local storage
var student = localStorage.getItem('student');
student = JSON.parse(student);



//function for creating certificates using javascript
function createCertificate() {

    //looping through the courses array to take the course information saved in the objects of the array
    for (let i = 0; i < coursesArray.length; i++) {
        var student_name = student["forrnamn"] + " " + student["efternamn"];
        var kursNamn = coursesArray[i]["kursNamn"];
        var slutDatum = coursesArray[i]["slutDatum"];

        //retrieving the certificates container
        var main_node = document.getElementById("certificates-container");
        var div_node_model_c = document.createElement('div');
        //creating a div element with css class modal-container
        div_node_model_c.setAttribute("class", "modal-container");
        //appending div to certificates container
        main_node.appendChild(div_node_model_c);

        //setting nodes to HTML information with course information variables inside
        var nodes = "<div class=\"certificate\" onclick=\"displayModal(this)\"> \
                    <h3 class=\"kurstitle\">" + kursNamn + "</h3> \
                 </div> \
                 <div class=\"modal\"> \
                    <div class=\"close\">&times;</div> \
                    <div class=\"modal-box\"> \
                        <img src=\"images/komvuxlogo.png\" alt=\"Logo\" class=\"img_style\"> \
                        <h4> KOMVUX HELSINGBORG </h4> \
                        <h1>Congratulations!</h1> \
                        <h3><em>This is to certify that:</em></h3> \
                        <h3 class=\"namn\">" + student_name + "</h3> \
                        <h3><em>has successfully completed the</em></h3> \
                        <h3 class=\"kursNamn\">" + kursNamn + "</h3> \
                        <h3><em>on <span class=\"slutDatum\">" + slutDatum + "</span></em></h3> \
                    </div> \
                </div>";
        //setting innerHTML of modal container to equals nodes HTML above
        document.getElementsByClassName("modal-container")[i].innerHTML = nodes;
    }
}

//function that displays the certificate when the user clicks on the associated buttons
function displayModal(element) {

    //displays the modal div when the certificates div is clicked
    var modal = element.nextElementSibling;
    modal.style.display = "block";

    //if the user presses the cross when modal is displayed, close the modal
    var cross = modal.getElementsByClassName("close")[0];
    cross.addEventListener("click", function () {

        if (modal.style.display == "block") {
            modal.style.display = "none";
        }
    })

}


createCertificate();































// FOR MODAL DOCS

// Assign modal-doc to modalDoc and the close span to closeSpan.
var modalDoc = document.getElementsByClassName("modal-doc");
var closeSpan = document.getElementsByClassName("close");


// Loop through each of the modal-doc elements
for (let i = 0; i < modalDoc.length; i++) {

    // Add an on-click listener to each of the modal-doc elements
    modalDoc[i].addEventListener("click", function () {

        // Assign modal-box to modalBox and fetch modal-content and model-caption
        var modalBox = this.nextElementSibling;
        let modalContent = modalBox.querySelector('.modal-content');
        let captionText = modalBox.querySelector('.modal-caption');

        // Display modalBox, set modal-content src and alt to modal-doc src and alt
        modalBox.style.display = "block";
        modalContent.src = modalDoc[i].src;
        captionText.innerHTML = modalDoc[i].alt;

        // Add an onlcick listener to close modal image when X is clicked
        closeSpan[i].addEventListener("click", function () {

            // Display modalBox
            modalBox.style.display = "none";

        });
    }
    );
}