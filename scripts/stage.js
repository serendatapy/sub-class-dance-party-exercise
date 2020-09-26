class Dancer {
  constructor (top, left) {
    this.top = top;
    this.left = left;
    this.$node = $('<div class="dancer"></div>');
    this.setRandPosition();
    $('#stage').append(this.$node);
  }

  setRandPosition () {
    let rTop = Math.round(Math.random() * 100);
    let rLeft = Math.round(Math.random() * 100);
    this.$node.css({ top: `${rTop}%`, left: `${rLeft}%` });
  }

  setPosition (top, left) {
    this.$node.css({ top: `${top}%`, left: `${left}%` });
  }

  dance () {
    function randomIntFromInterval (min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let rTop = randomIntFromInterval(-20, 20);
    let rLeft = randomIntFromInterval(-20, 20);

    let regex = /px/;
    let currentTop = parseInt(this.$node.css('top').replace(regex, ''));
    let currentLeft = parseInt(this.$node.css('left').replace(regex, ''));

    this.$node.animate(
      {
        top: `${currentTop - rTop}px`,
        left: `${currentLeft - rLeft}px`,
      },
      {
        duration: 1100,
        specialEasing: {
          width: 'linear',
          height: 'easeOutBounce',
        },
      }
    );
  }
}

//DANCER BAG OF METHODS

class TapDancer extends Dancer {
  constructor (top, left) {
    super(top, left);
    setInterval(() => {
      $(this.$node).fadeTo(100, 0.1).fadeTo(200, 1.0);
    }, 1000);
  }
}

class RainbowDancer extends Dancer {
  constructor (top, left) {
    super(top, left);
    setInterval(() => {
      $(this.$node).css({ animation: 'example 4s infinite' });
    }, 1000);
  }
}

$(() => {
  //------LISTENERS------
  $('#regular').click(() => {
    let regular = new Dancer();
    setInterval(() => {
      //console.log('DANCE!')
      regular.dance();
    }, 1000);
  });

  $('#tapper').click(() => {
    let tapDancer = new TapDancer();
    setInterval(() => {
      tapDancer.dance();
    }, 1000);
  });

  $('#rainbow').click(() => {
    let rainbowDancer = new RainbowDancer();
    setInterval(() => {
      rainbowDancer.dance();
    }, 1000);
  });
});
