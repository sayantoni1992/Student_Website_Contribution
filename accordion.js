// accordion

var i;
var acc = document.getElementsByClassName("accordion");

// looping through the accordion panels to add an event listener
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;

        // tagging css class of active when accordion panel is clicked,
        //and displaying the accordion content if hidden, and hiding if displayed 
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}