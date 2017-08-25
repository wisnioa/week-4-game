
//Linking HTML to JS stuff
$("#guessNumber").text(targetNumber);
$("#currentNumber").text(counts);
$("#winBox").text(winsCount);
$("#lossBox").text(lossesCount);


//Variables Used
var targetNumber = Math.floor(Math.random() * 120) + 19;

var counts = 0;

var winsCount = 0;

var lossCount = 0;

var numberOptions = (Math.floor(Math.random() * 12) + 1)

//For Loop to give each image number options
for (var i = 0; i < numberOptions.length; i++) {
imageShelll.addClass("shell-image");
$('#shell-imgs').attr('src','assets/images/shells.jpg')
var imageShell = $("<img>");
imageShell.attr("src", "assets/images/shells.jpg")
$("#shell-imgs").append(imageShell);
};

//Reset Function
$("#shell-imgs").on("click", function() {
      ++;
      $('#shells-imgs').text(counts);
      if (doReset()) {
        resetGame();
      }
    });
    
    $("#reset").on("click", resetGame);
    
    function doReset() {
      return (counts > 10)
    }

    function resetGame () {
      counts = 0;
      $('#shells-imgs').text(counts);
    }






 	
 	
};










 