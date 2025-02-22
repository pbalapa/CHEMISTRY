function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6LcJjg6vcSK":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementByld('bgSongku');
audio.src="chemistry.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

