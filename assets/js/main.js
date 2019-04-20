// Hiding bonfire splash
window.onload = function() {
  $( "#bonfire" ).click(function() {
    $( "#bonfire" ).fadeOut( "slow", function() {
      // Animation complete.
    });
  });
};
