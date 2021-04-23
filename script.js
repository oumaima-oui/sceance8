let removeBtn = Array.from(document.getElementsByClassName("fa-trash-alt"));
console.log(removeBtn);

for (let rmv of removeBtn) {
  rmv.addEventListener("click", function () {
    rmv.parentNode.remove();
    sum()
  });
}

let hearts=document.getElementsByClassName('fa-heart')
for(let heart of hearts){
  heart.addEventListener('click', function(){

    heart.classList.toggle('myClass')
   if(heart.style.color==='red'){
      heart.style.color='gray'
    }
     else{
     heart.style.color='red'
    }
  })
}
function up(max) {
  document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) + 1;
  if (document.getElementById("myNumber").value >= parseInt(max)) {
      document.getElementById("myNumber").value = max;
  }
}
function down(min) {
  document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) - 1;
  if (document.getElementById("myNumber").value <= parseInt(min)) {
      document.getElementById("myNumber").value = min;
  }
}
