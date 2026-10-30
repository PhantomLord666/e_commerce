const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item_slider');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
  clearInterval(inter)
}

document.addEventListener('click',activate,false);
let element = document.getElementById("asdf");
//setInterval("element.click()", 8000);
const inter = setInterval(function(){
  const items = document.querySelectorAll('.item_slider');
  slider.append(items[0]) 
}, 8000);
