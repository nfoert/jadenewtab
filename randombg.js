var totalCount = 3;
function ChangeIt() {
  var num = Math.ceil( Math.random() * totalCount );
  console.log(num)
  document.body.background = './backgrounds/background'+num+'.png';
  document.body.style.backgroundSize = "cover";// Background repeat
}

ChangeIt()