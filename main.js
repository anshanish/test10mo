console.log('Hello World!');

const number = document.getElementById('p-number');
const er = document.getElementById('h1');
let inu = 0;
setInterval(anas,100);
function anas(){
  number.innerText = inu;
  inu += 1 ;
  if(inu >= 40){
    inu = 40;
    er.innerText ='تم إيقاف تشغيل الألات';
  }
  
}
anas()