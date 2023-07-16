function insertHTML() {
  var htmlCode = `
 <html>
<head>
  <title>Audio Player with Delayed Link</title>
  <style>
    #audio-link {
      display: none;
    }
    /* Styling the audio element */
audio {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}


audio::-webkit-media-controls-timeline {

  background-color: #96f300;
  border-radius: 5px;
 display: none;
}

  </style>
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      var audio = document.getElementById('my-audio');
      var audioLink = document.getElementById('audio-link');

      audio.addEventListener('timeupdate', function() {
        if ((audio.currentTime / audio.duration) >= 0.8) {
          audioLink.style.display = 'block';
        }
      });
    });
  </script>
</head>
<body>
  <audio id="my-audio" controls>
    <source src="https://link.happybirthdaysong.co.in/birthdaysong.in/happy-birthday-to-you-traditional-song.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>

  <a id="audio-link" href="your-link-url">Click here to continue</a>
</body>
</html>

  `;

  document.write(htmlCode);
}

insertHTML();
