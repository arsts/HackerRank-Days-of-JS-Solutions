  const btn = document.querySelector('#btn');
  
  
function increment (e){
  let content = Number(btn.innerHTML);
  return btn.innerHTML = content + 1;  
}

btn.addEventListener('click', increment);