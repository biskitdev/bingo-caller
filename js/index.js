var rows = Array["A", "B", "C", "D", "E"];
var columns = Array["1", "2", "3", "4", "5"];

function generate()
{
    print(rows[Math.floor(Math.random()) * 6]);
}

generate();