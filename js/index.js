var rows = ["A", "B", "C", "D", "E"];
var columns = ["1", "2", "3", "4", "5"];

var otpt = document.getElementById("otpt");
var tts = document.getElementById("tts");

document.addEventListener('keypress', function(e)
{
    if(e.key == "space")
    {
        generate();
    }
});

function generate()
{
    var row = rows[Math.floor(Math.random() * 5)];
    var column = columns[Math.floor(Math.random() * 5)];

    otpt.innerHTML = row + column;

    if(row == "A")
    {
        row = "ae"
    }

    var voice = window.speechSynthesis.getVoices()[1];

    var msg = new SpeechSynthesisUtterance();
    msg.voice = voice;
    msg.text = `${row}${column}`;
    window.speechSynthesis.speak(msg);
}