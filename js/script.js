//DIFERENÇA ENTRE LET/VAR/CONST
// var nome = "Kayque";
// if(nome == "Kayque"){
//     let nome = "Denise";
// }
// console.log(nome);

 //Recuperando um elemento button que está no index.html
 const btn  = document.getElementById("meu-btn");
 
 //Atrelando um evento de click ao button que foi recuperado.
 btn.addEventListener("click" , function(){
    console.log(btn.innerHTML);
 } );