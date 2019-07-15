var tabs = document.getElementById("tabs").getElementsByTagName("li");
var lists=document.getElementById("lists").getElementsByTagName("ul");
console.log(tabs);
console.log(lists);


for(var i=0;i<tabs.length;i++){
	tabs[i].onclick=showlist;
	
}
var scrollTop=document.documentElement.scrollTop;
console.log(scrollTop);

function showlist(){
	for(var i=0;i<tabs.length;i++){
		if(tabs[i]===this){
			tabs[i].className="active";
			lists[i].className="clearfix active";
		}
		else{
			tabs[i].className="";
			lists[i].className="clearfix";
		}
		
	}
}

var seckillNav =document.getElementById("seckillNav");
window.onscroll=function(){
	var scrollTop=document.documentElement.scrollTop;
	if(scrollTop>=260){
        seckillNav.className=("seckill-nav seckill-navtop");
	}
	else{
		seckillNav.className=("seckill-nav");
	}
    console.log(scrollTop);
}



