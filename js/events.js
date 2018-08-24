//define functions here
function getIt() {
  $('p').on('click', function () {
    alert('Hey!')
  });
}

function frameIt() {
  $('img').on('load', function() {
    $("img").addClass("tasty")
  });
}

function pressIt() {
  $('form').on('keydown', function(key) {
    if (key.which == 73 ) {
      alert('you pressed G');
    }
  });
}

// document.addEventListener('keydown', (event) => {
//   const keyName = event.key;
//   alert('keydown event\n\n' + 'key: ' + keyName);
// });


$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
});
