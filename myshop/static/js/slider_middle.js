const slider_middle = document.querySelector('.slider_middle');

function activate_middle(e) {
  const items_middle = document.querySelectorAll('.item_slider_middle');
  e.target.matches('.next') && slider_middle.append(items_middle[0])
  e.target.matches('.prev') && slider_middle.prepend(items_middle[items_middle.length-1]);
  clearInterval(inter_middle)
}

document.addEventListener('click',activate_middle,false);
let element_middle = document.getElementById("qwerty");
//setInterval("element.click()", 8000);
const inter_middle = setInterval(function(){
  const items_middle = document.querySelectorAll('.item_slider_middle');
  slider_middle.append(items_middle[0]) 
}, 8000);
