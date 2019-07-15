var oUl=document.getElementsByClassName('num-box')[0];
var oSec=document.getElementsByClassName('sec')[0];
var oMin=document.getElementsByClassName('min')[0];
var oHou=document.getElementsByClassName('hou')[0];

function init(){
   var str='';
   for(var i= 1;i <=12;i++){
       str +=  '<li style="transform: rotate('+i*30+'deg)" class=num><span style="transform:rotate('+i*-30+'deg)">' + i +'</span></li>';
   }
   oUl.innerHTML = str;
  
}
init();

function time(){
    var newDate = new Date();
    var hour=newDate.getHours();
    var minute=newDate.getMinutes();
    var second=newDate.getSeconds();
    var mses=newDate.getMilliseconds();

    var fillSecond =second + mses /1000;
    var ds =fillSecond*6;
    oSec.style.transform ='rotate('+ds+'deg)';

    var fillMinute=minute+fillSecond/60;
    var dm=fillMinute*6;
    oMin.style.transform ='rotate('+dm+'deg)';

    var fillHour=hour+fillMinute/60;
    var dh=fillHour*30;
    oHou.style.transform ='rotate('+dh+'deg)';

    //setTimeout(time,16.7);
    requestAnimationFrame(time);
}
time();

