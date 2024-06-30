let Time= document.querySelector('.Time')
let date= document.querySelector('.Date')


setInterval(()=>
{
    let myDate= new Date()
    Time.innerHTML =myDate.toLocaleTimeString();
    date.innerHTML =myDate.toDateString();
    
},1000)