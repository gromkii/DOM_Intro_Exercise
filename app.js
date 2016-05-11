var greeting = document.getElementById('greeting'),
    ghosting = document.getElementById('ghosting'),
    resize   = document.getElementById('resize'),
    reset    = document.getElementById('reset');

greeting.innerText = "Hello World";
greeting.innerHTML = '<img src="http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif">';

var essentialsList = document.getElementById('essentials');

essentialsList.addEventListener('click', function(event) {
    var currentTarget = document.querySelector('.selected');
    currentTarget.classList.remove('selected');

    if (!(event.target.classList.contains('selected'))) {
      event.target.classList.add('selected');
      greeting.innerHTML = '<img src="images/' + event.target.innerText + '.jpeg">';
    }
});


ghosting.addEventListener('mouseover', function(){
  ghosting.style.display = 'none';
  console.log("Do the thing.");
});

resize.addEventListener('mouseover',function(){
  this.style.width = '400px';
});

reset.addEventListener('click',function(event){
  event.preventDefault();
  var getSelected = document.querySelector('.selected');
  getSelected.classList.remove('selected');
  greeting.innerHTML = '<img src="images/panic.jpeg">';
});

document.querySelector('body').addEventListener('keyup', function(event){
  if (event.keyCode >= 48 && event.keyCode <= 57) {
    alert("I HATE NUMBERZZZ!");
  }
});
