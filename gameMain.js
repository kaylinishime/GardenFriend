
console.log("jqeury connected");
$(document).ready(function(){


var level;

//randomizes veggetables on farmland
var apple = "http://i.imgur.com/xuboL0V.jpg";
var avocado = "http://i.imgur.com/q6fYImz.jpg";
var strawberry = "http://i.imgur.com/u7GvQkK.jpg";
var snail = "http://i.imgur.com/XI5oAX7.jpg";
var watermelon = "http://i.imgur.com/d3BVON7.jpg";
var objs = [apple,avocado,strawberry,watermelon,snail];
var test = [];

//randomize veggies and place them in an empty array which makes the new land

function farm() {
  for (var i = 0; i<= 100; i++) {
    test.push(objs[Math.ceil(Math.random()*10) % 5]);
  };
  $('.image').each(function (i) {
    $(this).append('<img src=' + test[i] + ' class="veggies" />');
  });
};

//empties the array to create a new shuffle after every level or lose
function resetLand(){
  $('.image').each(function (i) {
    $(this).text("");
  });
};


//score points assigned to each vegetable
var score = 0;
$('#land').on("click", "span", function(evt){
  if (evt.target.src === apple) {
    score = score + 1;
  } else if (evt.target.src === snail) {
    score = score - 2;
  } else if (evt.target.src === strawberry) {
    score = score + 4;
  } else if (evt.target.src === avocado) {
    score = score + 7;
  } else if (evt.target.src === watermelon) {
   score = score + 6;
 } else {
   console.log('no match');
 };

$( evt.target ).hide( 500, function() {
  $( evt.target ).remove();
  console.log(score);
  console.log($('#scorePoints').text(score)); //displays the current score
 });
});

var targetScore = {
  levelOne: 104,
  levelTwo: 168,
  levelThree: 201,
  levelFour: 142,
  levelFive: 179,
  levelSix:195,
  levelSeven:209,
};

//Clock countdown
var timer;
var minutes;
var seconds;
var interval;

function startTimer(duration, display) {
   timer = duration, minutes, seconds;

   var interval = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.text(minutes + ":" + seconds);
        if (score === 104 && level === "one"){
           winLevelOne();
        } else if (score > 104 && level === "one"){
           youLose();
        } if (score === 168 && level === "two"){
           winLevelTwo();
        } else if (score > 168 && level === "two"){
           youLose();
        } if (score === 201 && level === "three"){
           winLevelThree();
        } else if (score > 201 && level === "three"){
           youLose();
        } if (score === 142 && level === "four"){
           winLevelFour();
        } else if (score > 142 && level === "four"){
           youLose();
        } if (score === 179 && level === "five"){
           winLevelFive();
        } else if (score > 179 && level === "five"){
           youLose();
        } if (score === 195 && level === "six"){
           winLevelSix();
        } else if (score > 195 && level === "six"){
          youLose();
        } if (score === 209 && level === "seven"){
           winLevelSeven();
        } else if (score > 209 && level === "seven"){
           youLose();
        }

      if (--timer < 0) {
        timer = 0;
        if (score === targetScore.levelOne && level === "one"){
            clearInterval(interval);
            winLevelOne();
        } else if (score !== targetScore.levelOne && level === "one"){
            clearInterval(interval);
            youLose();
        } if (score === targetScore.levelTwo && level === "two"){
            clearInterval(interval);
            winLevelTwo();
        } else if (score !== targetScore.levelTwo && level === "two"){
            clearInterval(interval);
            youLose();
        } if (score === targetScore.levelThree && level === "three"){
            clearInterval(interval);
            winLevelThree();
        } else if (score !== targetScore.levelThree && level === "three"){
            clearInterval(interval);
            youLose();
        } if (score === targetScore.levelFour && level === "four"){
            clearInterval(interval);
            winLevelFour();
        } else if (score !== targetScore.levelFour && level === "four"){
            clearInterval(interval);
            youLose();
        } if (score === targetScore.levelFive && level === "five"){
            clearInterval(interval);
            winLevelFive();
        } else if (score !== targetScore.levelFive && level === "five"){
            clearInterval(interval);
            youLose();
        } if (score === targetScore.levelSix && level === "six"){
            clearInterval(interval);
            winLevelSix();
        } else if (score !== targetScore.levelSix && level === "six"){
            clearInterval(interval);
            youLose();
        } if (score === targetScore.levelSeven && level === "seven"){
            clearInterval(interval);
            winLevelSeven();
        } else if (score !== targetScore.levelSeven && level === "seven"){
            clearInterval(interval);
            youLose();
          };
          clearInterval(interval);
        };
      }, 1000);
};

var oneMinute = 60,
display = $('.timer');




  $('#instructions').show();
  $('#zero').click(function() {
  $('#instructions').hide();
  levelOne();
});

//popup level 1

function levelOne(){
  $('#popupOne').show();
  $('#first').click(function() {
  $('#popupOne').hide();
  startTimer(60, display);
  test = [];
  resetLand();
  level = "one";
  score = 0;
  farm();
});
};



//When player loses, must restart to Level 1!
function youLose(){
  timer = 0;
  score = 0;
$('.restartOne').show();
$('#restart').click(function(){
  $('.restartOne').hide();
  test =[];
  resetLand();
  farm();
  levelOne();
  console.log(startTimer);
})
}

//popup window - level 2
function winLevelOne() {
  timer = 0;
$('#popupTwo').show();
$('#second').click(function() {
  $('#popupTwo').hide();
  startTimer(60, display);
  test = [];
  resetLand();
  level = "two";
  score = 0;
  farm();
});
}

function winLevelTwo() {
  timer = 0;
$('#popupThree').show();
$('#third').click(function() {
  $('#popupThree').hide();
  startTimer(50, display);
  test = [];
  resetLand();
  level = "three";
  score = 0;
  farm();
});
}

function winLevelThree() {
  timer = 0;
$('#popupThree').show();
$('#third').click(function() {
  $('#popupThree').hide();
  startTimer(40, display);
});
}

function winLevelFour() {
  timer = 0;
$('#popupFour').show();
$('#four').click(function() {
  $('#popupFour').hide();
  startTimer(30, display);
});
}

function winLevelFive() {
  timer = 0;
$('#popupFive').show();
$('#five').click(function() {
  $('#popupFive').hide();
  startTimer(25, display);
});
}

function winLevelSix() {
  timer = 0;
$('#popupSix').show();
$('#six').click(function() {
  $('#popupSix').hide();
  startTimer(20, display);
});
}

function winLevelSeven() {
  timer = 0;
$('#popupWin').show();
$('#win').click(function() {
  $('#popupWin').hide();
  levelOne();
});
}





});
