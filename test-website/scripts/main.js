var myImage = document.querySelector('img');

myImage.onclick = function()
{
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/DarkSide.jpg')
  {
    myImage.setAttribute ('src','images/WishYouWereHere.jpg');
  }
  else
    {
      myImage.setAttribute ('src','images/DarkSide.jpg')
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName()
{
  var myName = prompt('Inserisci il tuo nome.');
  localStorage.setItem('name', myName);
  myHeading.textContent = myName + ' è scarso.';
}
if(!localStorage.getItem('name'))
{
  setUserName();
}
else
{
  var storedName = localStorage.getItem('name');
  myHeading.textContent = storedName + ' è scarso.';
}
myButton.onclick = function()
{
  setUserName();
}
