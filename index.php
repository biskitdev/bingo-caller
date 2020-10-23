<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="canonical" href="https://bingo-caller-app.herokuapp.com">
    <link type="text/css" rel="stylesheet" href="css/index.css">
    <title>bingo-caller</title>
</head>
<body>
    <div id="container">
        <div id="child">
            <h1>bingo-caller</h1>
            <h0 id="otpt">NaN</h0>
            <br />
            <button onclick="generate()">Generate</button>
            <audio src="" id="tts" hidden></audio>
            <div id="footer">
                <a href="https://github.com/biskitdev/bingo-caller" id="first">GitHub</a>
                <a href="https://github.com/biskitdev/">biskit</a>
            </div>
        </div>
    </div>
    <script src="js/index.js"></script>
</body>
</html>