var pass = document.querySelector(".text");
 var btn = document.querySelector(".btn");
 var output = document.querySelector(".strength");
 pass.addEventListener('input', ()=>{
   if(pass.value.length>0){
      output.style.display = "block"
   }
   if(pass.value.length<4){
      output.innerHTML = "weak";
      output.style.color = "red"
   }
   
    else if(pass.value.length<8){
      output.innerHTML = "medium";
      output.style.color = "orange"
   }
   else{
      output.innerHTML = "strong ";
      output.style.color = "green"
   }
 })
 
