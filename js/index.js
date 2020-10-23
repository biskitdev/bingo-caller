var rows = ["A", "B", "C", "D", "E"];
var columns = ["1", "2", "3", "4", "5"];

var otpt = document.getElementById("otpt");

function generate()
{
    let row = rows[Math.floor(Math.random()) * 5];
    otpt.innerHTML = row;
}