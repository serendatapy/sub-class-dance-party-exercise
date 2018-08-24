
function Dancer (top, left) {
  const dancer = {};
  // Use jQuery to create an HTML <div> tag.
  dancer.$node = $('<div class="dancer"></div>');
  dancer.setPosition = function (top, left) {
    // Use css top and left properties to position our <div> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    dancer.$node.css({top: top, left: left});
  };
  // Now that we have defined the dancer object, we can start setting up
  // important parts of it by calling the methods we wrote. This one
  // sets the position to some random default point within the body.
  dancer.setPosition(top, left);
  return dancer;
}

// insert the TapDancer constructor here below

$(() => {

});
