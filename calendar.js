
/*---------------Looking for the calender element-----------------------------*/
var calendar = document.getElementById("schedule-table");

var columns = 8; // columns identify day of the week and an added column of time
var rows = 8; // rows identify hour of the day

function createTable() {
    for (let i = 0; i < rows; i++) {
        var text = "<tr>";
        var time;

        // Assigning the right hour of the day in ascending order of row
        switch (i) {
            case 0:
                time = "09:00 - 10:00";
                break;
            case 1:
                time = "10:00 - 11:00";
                break;
            case 2:
                time = "11:00 - 12:00";
                break;
            case 3 : 
                time = "12:00 - 13:00";
                break;
            case 4 : 
                time = "13:00 - 14:00";
                break;
            case 5 : 
                time = "14:00 - 15:00";
                break;
            case 6 : 
                time = "15:00 - 16:00";
                break;
            case 7 : 
                time = "16:00 - 17:00";
                break;
            default: 
                time = "Time";
                break;
        }

        /*-------j identifies Day of the Week-------------------*/
        for (let j = 0; j < columns; j++) { 
            if(j == 0) {
                text += "<td class=\"time\">" + time + "</td>";
            }
            else {
                /*Dynamically allocating the course schedule with teacher and classroom details*/
                if(j == 1 && time == "09:00 - 10:00") {
                    text += "<td title=\"Classroom 417\nTeacher: Dimitrij Aleshkov\"> Programming </td>";
                }
                else if (j == 4 && time == "13:00 - 14:00") {
                    text += "<td title=\"Classroom 561\nTeacher: Dimitrij Aleshkov\"> Programming </td>";
                } else {
                    text += "<td> </td>"; 
                }
            }

        }
        text += "</tr>";
        /*---------Inserting the texts inside the calendar---------------*/
        calendar.innerHTML += text;

    }

}

createTable();
