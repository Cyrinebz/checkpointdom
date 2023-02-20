var hearts=document.querySelectorAll('.fa-heart')
hearts.forEach(heart =>{
heart.addEventListener('click', function() {
    if (heart.style.color =="red") {
        heart.style.color = "black"
    }
    else{
        heart.style.color = "red"
    }
});
});
let count=0
var pls=document.querySelectorAll(".fa-plus-circle")
var qutes=document.querySelector('.qute')
 pls.forEach(pl=>{
    pl.addEventListener('click', function (){
    count+=1;
    qutes.innerHTML=count;
        
 })});

 var mns=document.querySelectorAll(".fa-minus-circle")
  mns.forEach(mn=>{
     mn.addEventListener('click', function (){
     count-=1;
     qutes.innerHTML=count;
         
  })});
