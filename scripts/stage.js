class Dancer {
  constructor (top, left) {
    this.top = top;
    this.left = left;
    this.$node = $('<div class="dancer"></div>');
    this.setRandPosition();
    $('#stage').append(this.$node);
    setInterval(() => {
      this.dance();
    }, 1000);
  }

  randomIntRange (min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  setPercentPosition (top = 0, left = 0) {
    this.$node.css({ top: `${top}%`, left: `${left}%` });
  }

  setRandPosition () {
    let [rTop, rLeft] = this.getRandomPosition();
    this.setPercentPosition(rTop, rLeft);
  }

  getCurrentPxPosition () {
    let regex = /px/;
    let currentTop = parseInt(this.$node.css('top').replace(regex, ''));
    let currentLeft = parseInt(this.$node.css('left').replace(regex, ''));
    return [currentTop, currentLeft];
  }
  getRandomPosition (min = 0, max = 100) {
    let rTop = this.randomIntRange(min, max);
    let rLeft = this.randomIntRange(min, max);
    return [rTop, rLeft];
  }

  dance () {
    let [rTop, rLeft] = this.getRandomPosition(-20, 20);
    let [currentTop, currentLeft] = this.getCurrentPxPosition();

    this.$node.animate(
      { top: `${currentTop - rTop}px`, left: `${currentLeft - rLeft}px` },
      {
        duration: 1100,
        specialEasing: {
          width: 'linear',
          height: 'easeOutBounce',
        },
      }
    ); //end animate
  } //end dance
} //end Dancer

class TapDancer extends Dancer {
  constructor (top, left) {
    super(top, left);
    this.blink();
  }
  blink () {
    setInterval(() => {
      $(this.$node).fadeTo(100, 0.1).fadeTo(200, 1.0);
    }, 1000);
  }
}

class RainbowDancer extends Dancer {
  constructor (top, left) {
    super(top, left);
    this.changeColour();
  }
  changeColour () {
    setInterval(() => {
      $(this.$node).css({ animation: 'colour-change 4s infinite' });
    }, 1000);
  }
}

$(() => {
  //short for document.ready()
  $('#regular').click(() => {
    const regular = new Dancer();
  });

  $('#tapper').click(() => {
    const tapDancer = new TapDancer();
  });

  $('#rainbow').click(() => {
    const rainbowDancer = new RainbowDancer();
  });
});
