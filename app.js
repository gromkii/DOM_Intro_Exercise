var greeting = document.getElementById('greeting');

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
