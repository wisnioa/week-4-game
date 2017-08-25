
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
var imageShell = $("<img>");
imageShell.addClass("shell-image");
imageShell.attr('src',"images/shells.jpg");
imageShell.attr("data-shellvalue", numberOptions[i]);
$("#shell-imgs").append(imageShell);
};

$("#shell-imgs").on("click", function() {
  var shellValue = ($(this).attr("data-shellvalue"));
    shellValue = parseInt(shellValue);
  counts += shellValue;
};


//If-Else to tally losses and wins
if (counts === targetNumber) {
          winsCount++;
        $("#winsBox").html(winsCount);
        resetGame();
      }

      else if (counts > targetNumber) {
        lossesCount++;
        $("#lossBox").html(lossesCount);
        resetGame();
      }

    });


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
    };

    function resetGame () {
      counts = 0;
      $('#shells-imgs').text(counts);
    };






 	
 	










 