/*
Function Constructors
1.move functions to constructors
2.move functions again to bagMethods (shared functions)

Pseudo Constructors
1.refactor to use the new keyword

ES6
1.refactor to use ES6 Classes and subClasses

*Make dancers move

EXTRA CREDIT
....
*/




function Dancer () {   //make a condition where if position is passed, then use it otherwise it's random.
  const dancer = {};
  dancer.$node = $('<div class="dancer"></div>');

  dancer.setRandPosition = function () {
    let rTop = Math.round(Math.random() * 100);
    let rLeft = Math.round(Math.random() * 100);
    dancer.$node.css({ 'top': `${rTop}%`, 'left': `${rLeft}%` });
    //dancer.setPosition(rTop, rLeft);
  }();

  dancer.setPosition = function (top, left) {
    dancer.$node.css({ 'top': `${top}%`, 'left': `${left}%` });
  };

  dancer.dance = function () {
    let rTop = Math.round(Math.random() * 100);
    let rLeft = Math.round(Math.random() * 100);
    dancer.$node.animate({
      top: `${rTop}%`,
      left: `${rLeft}%`
    }, {
      duration: 5000,
      specialEasing: {
        width: "linear",
        height: "easeOutBounce"
      }
    });
  };

  //add dancer to the stage
  $('#stage').append(dancer.$node);

  return dancer;
}

// insert the TapDancer constructor here below
function TapDancer (top, left) {
  const tDancer = Dancer(top, left);

  setInterval(() => {
    $(tDancer.$node).fadeTo(100, 0.1).fadeTo(200, 1.0);
  }, 1000)();

  return tDancer;
}

function RainbowDancer (top, left) {
  const rDancer = Dancer(top, left);

  setInterval(() => {
    $(rDancer.$node).css({ 'animation': 'example 4s infinite' });
  }, 1000)();

  return rDancer;
}

//------LISTENERS------
$('#regular').click(() => {
  //create instance of dancer(regular)
  let regular = Dancer();
  //regular.dance();
  setInterval(regular.dance(), 1000);//();
});

$('#tapper').click(() => {
  //create instance of dancer(tapper)
  let tapDancer = TapDancer();
  setInterval(tapDancer.dance(), 1000);
});

$('#rainbow').click(() => {
  //create instance of dancer(rainbow)
  let rainbowDancer = RainbowDancer();
  setInterval(rainbowDancer.dance(), 1000);
});



//$(() => {});
