//starting alert
alert("Clicker Game L.E. 1.2:\n -Economy rework\n -Dominion feature returned")
//resourses
var stoneInt2 = 0
var stoneInt = 0
var woodInt = 0
var woodInt2 = 0
var foodInt = 0
var foodInt2 = 0
var monInt = 0
var monInt2 = 0
var popInt = 0
var popInt2 = 0
var domInt = 5
var domInt2 = 5
var resInt = 0
var resInt2 = 0
var minerInt = 0
var minerInt2 = 0
var woodcutterInt = 0
var woodcutterInt2 = 0
var farmerInt = 0
var farmerInt2 = 0
//adding resourses
function stone() {
  stoneInt2 = stoneInt + Math.floor(Math.random()*4+1)
  stoneInt = stoneInt2;
  document.getElementById("stone").innerHTML = ""+ stoneInt2 +"";
}
function wood() {
  woodInt2 = woodInt + Math.floor(Math.random()*4+1)
  woodInt = woodInt2;
  document.getElementById("wood").innerHTML = ""+ woodInt2 +"";
}
function food() {
  foodInt2 = foodInt + Math.floor(Math.random()*4+1)
  foodInt = foodInt2;
  document.getElementById("food").innerHTML = ""+ foodInt2 +"";
}
//info
function info() {
  alert("About Game: \n This is Clicker Game L.E. \n This is Game created only with JS, HTML and CSS languages! \n -- \nDeveloper: FFirtes  \nProgrammers: TheSlaylord, i_xz_cto_i \nEdited by LEYN \n -- \nGame Discord: https://discord.gg/DcetVsa \nMy Discord: https://discord.gg/kqRsRCN \n -- \n (Game paused)");
}
//shop
function SellStone() {
  if (stoneInt2 >= 50) {
    stoneInt2 = stoneInt - 50
    stoneInt = stoneInt2
    monInt2 = monInt + 1
    monInt = monInt2
    alert("You sell 50 Stone for 1 Money!")
  } else {
    alert("You need 50 Stone for sell!")
  }
  document.getElementById("stone").innerHTML = "" + stoneInt2 + "";
  document.getElementById("money").innerHTML = "" + monInt2 + "";
}
function SellWood() {
  if (woodInt2 >= 75) {
    woodInt2 = woodInt - 75
    woodInt = woodInt2
    monInt2 = monInt + 2
    monInt = monInt2
    alert("You sell 75 Wood for 2 Money!")
  } else {
    alert("You need 75 Wood for sell!")
  }
  document.getElementById("wood").innerHTML = "" + woodInt2 + "";
  document.getElementById("money").innerHTML = "" + monInt2 + "";
}
function SellFood() {
  if (foodInt2 >= 100) {
    foodInt2 = foodInt - 100
    foodInt = foodInt2
    monInt2 = monInt + 3
    monInt = monInt2
    alert("You sell 100 Food for 5 Money!")
  } else {
    alert("You need 100 Food for sell!")
  }
  document.getElementById("food").innerHTML = "" + foodInt2 + "";
  document.getElementById("money").innerHTML = "" + monInt2 + "";
}
function build() {
  if (stoneInt2 >= 50 && woodInt2 >= 30 && foodInt2 >= 100) {
    stoneInt2 = stoneInt - 50
    stoneInt = stoneInt2
    woodInt2 = woodInt - 30
    woodInt = woodInt2
    foodInt2 = foodInt - 100
    foodInt = foodInt2
    popInt2 = popInt + 1
    popInt = popInt2
    alert("You built a house!")
  } else {
    alert("You need 55 Stone, 30 Wood, 125 Food!")
  }
  document.getElementById("stone").innerHTML = "" + stoneInt2 + "";
  document.getElementById("wood").innerHTML = "" + woodInt2 + "";
  document.getElementById("food").innerHTML = "" + foodInt2 + "";
  document.getElementById("pop").innerHTML = "" + popInt2 + "";
}
function Give() {
  if (foodInt2 >= 80 && monInt2 >= 5) {
    foodInt2 = foodInt - 150
    foodInt = foodInt2
    monInt2 = monInt - 5
    monInt = monInt2
    domInt2 = domInt + 5
    domInt = domInt2
    alert("You improve the Dominion!")
  } else {
    alert("You need 150 Food, 5 Money!")
  }
  document.getElementById("food").innerHTML = "" + foodInt2 + "";
  document.getElementById("money").innerHTML = "" + monInt2 + "";
  document.getElementById("dom").innerHTML = "" + domInt2 + "";
}
function Points() {
	if(foodInt2 >= 125 && woodInt2 >= 70 && stoneInt2 >= 25 && popInt2 >= 1 && domInt2 >= 3){
		foodInt2 = foodInt - 200
		foodInt = foodInt2
		woodInt2 = woodInt - 70
		woodInt = woodInt2
		stoneInt2 = stoneInt - 25
		stoneInt = stoneInt2
		popInt2 = popInt - 1
		popInt = popInt2
		resInt2 = resInt + 1
		resInt = resInt2
       alert("You Research the world!");
	}
     else{
		 alert("You need 25 Stone, 70 Wood, 200 Food, 1 People and at least 3 Dominion for Research the world!")
	 }
  document.getElementById("stone").innerHTML = "" + stoneInt2 + "";
  document.getElementById("wood").innerHTML = "" + woodInt2 + "";
  document.getElementById("food").innerHTML = "" + foodInt2 + "";
  document.getElementById("point").innerHTML = "" + resInt2 + "";
}
//dominion
setInterval(domTime,300000)
function domTime(){
            domInt2 = domInt - 1
            domInt = domInt2
		if(domInt2 <= 0){
		alert("You lost! Your Dominion is 0!\nScore: "+Math.floor(stoneInt2+woodInt2+foodInt2+monInt2*2+popInt2*2+resInt2*5)+"\nThanks for the game!")
 stoneInt2 = 0
 stoneInt = 0
 woodInt = 0
 woodInt2 = 0
 foodInt = 0
 foodInt2 = 0
 monInt = 0
 monInt2 = 0
 popInt = 0
 popInt2 = 0
 domInt = 3
 domInt2 = 3
 resInt = 0
 resInt2 = 0
 minerInt = 0
 minerInt2 = 0
 woodcutterInt = 0
 woodcutterInt2 = 0
 farmerInt = 0
 farmerInt2 = 0
	  }
	  document.getElementById("dom").innerHTML = "" + domInt2 + "";
	  document.getElementById("stone").innerHTML = "" + stoneInt2 + "";
         document.getElementById("wood").innerHTML = "" + woodInt2 + "";
         document.getElementById("food").innerHTML = "" + foodInt2 + "";
         document.getElementById("point").innerHTML = "" + resInt2 + "";
         document.getElementById("money").innerHTML = "" + monInt2 + "";
         document.getElementById("pop").innerHTML = "" + popInt2 + "";
}
//auto mining
function miner(){
	if(popInt2 >= 1 &&  monInt2 >= 3){
		popInt2 = popInt - 1
		popInt = popInt2
		monInt2 = monInt - 3
		monInt = monInt2
		minerInt2 = minerInt + 1
		minerInt = minerInt2
		alert("You buy Miner!")
	}
	else{
		alert("You can't buy a Miner!")
	}
	  document.getElementById("money").innerHTML = "" + monInt2 + "";
         document.getElementById("pop").innerHTML = "" + popInt2 + "";
}
setInterval(stoneTime,Math.floor(Math.random()*3000)) 
function stoneTime() {
       if (minerInt2 > 0){
              stoneInt2 = stoneInt + Math.floor(Math.random()*3)*minerInt2
		stoneInt = stoneInt2
       }
          document.getElementById("stone").innerHTML = "" + stoneInt2 + "" ;
}
function woodcutter(){
	if(popInt2 >= 1 &&  monInt2 >= 3){
		popInt2 = popInt - 1
		popInt = popInt2
		monInt2 = monInt - 3
		monInt = monInt2
		woodcutterInt2 = woodcutterInt + 1
		woodcutterInt = woodcutterInt2
		alert("You buy Woodcutter!")
	}
	else{
		alert("You can't buy a Woodcutter!")
	}
	  document.getElementById("money").innerHTML = "" + monInt2 + "";
         document.getElementById("pop").innerHTML = "" + popInt2 + "";
}
setInterval(woodTime,Math.floor(Math.random()*3000)) 
function woodTime() {
       if (woodcutterInt2 > 0){
              woodInt2 = woodInt + Math.floor(Math.random()*3)*woodcutterInt2
	       woodInt = woodInt2
       }
          document.getElementById("wood").innerHTML = "" + woodInt2 + "" ;
}
function farmer(){
	if(popInt2 >= 1 &&  monInt2 >= 3){
		popInt2 = popInt - 1
		popInt = popInt2
		monInt2 = monInt - 3
		monInt = monInt2
		farmerInt2 = farmerInt + 1
		farmerInt = farmerInt2
		alert("You buy Farmer!")
	}
	else{
		alert("You can't buy a Farmer!")
	}
	  document.getElementById("money").innerHTML = "" + monInt2 + "";
         document.getElementById("pop").innerHTML = "" + popInt2 + "";
}
setInterval(foodTime,Math.floor(Math.random()*3000)) 
function foodTime() {
       if (farmerInt2 > 0){
              foodInt2 = foodInt + Math.floor(Math.random()*3)*farmerInt2
	       foodInt = foodInt2
       }
          document.getElementById("food").innerHTML = "" + foodInt2 + "" ;
}
