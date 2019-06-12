var roll = document.getElementById("roll");
var turn = document.getElementsByClassName("turn");
var rdm = turn[1].getElementsByTagName("p");
var chance = turn[0].getElementsByTagName("p");
var a = document.getElementsByClassName("coina");
var b = document.getElementsByClassName("coinb");
var locker = document.getElementsByClassName("locker");
var k = 0;
var l = 0;
var boxs = document.getElementsByClassName("box");
var bxs =[];
var i=0;

for( ;i<6;++i){
	bxs[i]=boxs[i];
}

for (var j=19 ; i <10 ; i++,j--) {
	bxs[j]=boxs[i];
}

for (var j=6 ; i < 14; i++,j++) {
	bxs[j]=boxs[i];
}

for (var j = 15; i < 20; i++,j--) {
	bxs[j]=boxs[i]
}
roll.onclick = function(){
	if(chance[0].innerHTML == "TURN A"){
		chance[0].innerHTML = "TURN B";
	}
	else
		chance[0].innerHTML = "TURN A";
	rdm[0].innerHTML = 1+ (Math.floor(6 * (Math.random())));
	if(rdm[0].innerHTML == 6){
		var ulk = unlock();
	}
};

function unlock(){
	var i = 0;
	var j=0;
	if(chance[0].innerHTML == "TURN A" && k<2){
		a[i++].remove();
		k++;
		document.getElementsByClassName("box")[0].appendChild(a[i-1]);
		return 1;
	}

	if(chance[0].innerHTML == "TURN B" && l<2){
		b[j++].remove();
		l++;
		document.getElementsByClassName("box")[1].appendChild(b[i-1]);
		return 2;
	}	
	return 0;	
}