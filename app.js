console.log("Javascript is alive!");

document.getElementById('greeting').innerText = "Hello World";

var listClicked = null;
var selected = null;

var listItems = [];
listItems = document.getElementsByTagName('li');

for (var i = 0; i < listItems.length; i++) {
  var list = listItems[i]
  list.style.backgroundColor = 'yellow';
}


document.getElementById('greeting').innerHTML = '<img src="http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif">';

var unorderedList = document.getElementById('essentials');

unorderedList.addEventListener('click',function(event){
  this.classList.add('selected');
})
