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
var bxsb =[];
var i=0;
var indx = [-1,-1,-1,-1];
var snd = new Audio();
snd.src= "Die.mp3";

for( ;i<6;++i){
	bxs[i]=boxs[i];
	bxsb[i+10]=boxs[i];
}

for (var j=19 ; i <10 ; i++,j--) {
	bxs[j]=boxs[i];
	bxsb[j-10]=bxs[j];
}

for (var j=6 ; i < 14; i++,j++){
	bxs[j]=boxs[i];
	bxsb[j+10]=bxs[j];
}

for (var j = 15; i < 20; i++,j--){
	bxs[j]=boxs[i]
	bxsb[j-10]=bxs[j];
}
var i=0;
var j=0;

roll.onclick = function(){
	snd.play();
	var ulk=-1;

	rdm[0].innerHTML = 1+ (Math.floor(6 * (Math.random())));

	if(rdm[0].innerHTML == 6){
		ulk = unlock();
	}

	if (ulk == 1 && indx[0] >= 0){
		indx[1] = 0;
	}
	else if(ulk==1)
		indx[0] = 0;

	if (ulk == 2 && indx[2] >= 0){
		indx[3] = 0;
	}
	else if(ulk ==2)
		indx[2] = 0;

	if((ulk == 0 || ulk==-1) && indx[0]>=0 && indx[0]<19 && (indx[0]+parseInt(rdm[0].innerHTML))<=19 && chance[0].innerHTML == "TURN A"){
		var aa=document.getElementById("a1");
		document.getElementById("a1").remove();
		indx[0] = indx[0] + parseInt(rdm[0].innerHTML);
		bxs[indx[0]].appendChild(aa);
	}
	else if ((ulk == 0 || ulk==-1) && indx[1]>=0 && indx[1]<19 && (indx[1]+parseInt(rdm[0].innerHTML))<=19 && chance[0].innerHTML == "TURN A") {
		var ab=document.getElementById("a2");
		document.getElementById("a2").remove();
		indx[1] = indx[1] + parseInt(rdm[0].innerHTML);
		bxs[indx[1]].appendChild(ab);
	}
	else if((ulk == 0 || ulk==-1)&& indx[2]>=0 && indx[2]<19 && (indx[2]+parseInt(rdm[0].innerHTML))<=19 && chance[0].innerHTML == "TURN B"){
		var ba=document.getElementById("b1");
		document.getElementById("b1").remove();
		indx[2] = indx[2] + parseInt(rdm[0].innerHTML);
		bxsb[indx[2]].appendChild(ba);
	}
	else if ((ulk == 0 || ulk==-1) && indx[3]>=0 && indx[3]<19 && (indx[3]+parseInt(rdm[0].innerHTML))<=19 && chance[0].innerHTML == "TURN B") {
		var bb=document.getElementById("b2");
		document.getElementById("b2").remove();
		indx[3] = indx[3] + parseInt(rdm[0].innerHTML);
		bxsb[indx[3]].appendChild(bb);
	}

	if ((bxs[indx[0]]==bxsb[indx[2]] || bxs[indx[0]]==bxsb[indx[3]]) && indx[0]!==indx[1] && indx[0]!== -1){
		if (chance[0].innerHTML == "TURN B") {
			var aa=document.getElementById("a1");
			alert("B killed A");
			document.getElementById("a1").remove();
			locker[0].appendChild(aa);
			indx[0]=-1;
		}
	}

	if ((bxs[indx[1]]==bxsb[indx[2]] || bxs[indx[1]]==bxsb[indx[3]]) && indx[0]!==indx[1] && indx[1]!== -1){
		if (chance[0].innerHTML == "TURN B") {
			var ab=document.getElementById("a2");
			alert("B killed A");
			document.getElementById("a2").remove();
			locker[0].appendChild(ab);
			indx[1]=-1;
		}
	}

	if ((bxsb[indx[2]]==bxs[indx[0]] || bxsb[indx[2]]==bxs[indx[1]]) && indx[3]!==indx[2] && indx[2]!== -1){
		if (chance[0].innerHTML == "TURN A") {
			var ba=document.getElementById("b1");
			alert("A killed B");
			document.getElementById("b1").remove();
			locker[1].appendChild(ba);
			indx[2]=-1;
		}
	}

	if ((bxsb[indx[3]]==bxs[indx[0]] || bxsb[indx[3]]==bxs[indx[1]]) && indx[3]!==indx[2] && indx[3]!== -1){
		if (chance[0].innerHTML == "TURN A") {
			var bb=document.getElementById("b2");
			alert("A killed B");
			document.getElementById("b2").remove();
			locker[1].appendChild(bb);
			indx[3]=-1;
		}
	}

	if(chance[0].innerHTML == "TURN A" && rdm[0].innerHTML != "6"){
		chance[0].innerHTML = "TURN B";
	}
	else if(chance[0].innerHTML == "TURN B" && rdm[0].innerHTML != "6")
		chance[0].innerHTML = "TURN A";

	if(indx[0]==19 && indx[1]==19){
		alert("A wins");
		document.getElementsByClassName("master")[0].innerHTML="A wins";
	}

	if(indx[3]==19 && indx[2]==19){
		alert("B wins");
		document.getElementsByClassName("master")[0].innerHTML="B wins";
	}
};

function unlock(){
	if(chance[0].innerHTML == "TURN A" && k<2 && (indx[0]<0 || indx[1]<0)){
		var t=a[k];
		a[k].remove();
		document.getElementsByClassName("box")[0].appendChild(t);
		return 1;
	}
	else if(chance[0].innerHTML == "TURN B" && l<2){
		var t=b[l];
		b[l].remove();
		l++;
		document.getElementsByClassName("box")[19].appendChild(t);
		return 2;
	}	
	return 0;	
}