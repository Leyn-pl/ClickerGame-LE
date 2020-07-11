//starting alert
alert("Clicker Game L.E. 1.1: \n -Fixed bug with automining")
//resourses
var stoneInt2 = 0
var stoneInt = 0
var stoneop = 1
var woodInt = 0
var woodInt2 = 0
var woodop = 1
var foodInt = 0
var foodInt2 = 0
var foodop = 1
var monInt = 0
var monInt2 = 0
var monop = 1
var popInt = 0
var popInt2 = 0
var popop = 1
var domInt = 5
var domInt2 = 5
var domop = 1
var resInt = 0
var resInt2 = 0
var resop = 1
var minerInt = 0
var minerInt2 = 0
var woodcutterInt = 0
var woodcutterInt2 = 0
var farmerInt = 0
var farmerInt2 = 0
//adding resourses
function stone() {
  stoneInt2 = stoneInt + stoneop
  stoneInt = stoneInt2;
  document.getElementById("stone").innerHTML = ""+ stoneInt2 +"";
}
function wood() {
  woodInt2 = woodInt + woodop
  woodInt = woodInt2;
  document.getElementById("wood").innerHTML = ""+ woodInt2 +"";
}
function food() {
  foodInt2 = foodInt + foodop
  foodInt = foodInt2;
  document.getElementById("food").innerHTML = ""+ foodInt2 +"";
}
//info
function info() {
  alert("About Game: \n This is Clicker Game L.E. \n This is Game created only with JS, HTML and CSS languages! \n -- \nCreator: \n FFirtes \n -- \nEditor: \n LEYN \n -- \nGame Discord: https://discord.gg/DcetVsa \nMy Discord: https://discord.gg/ftGX4rX \n -- \n (Game paused)");
}
//shop
function SellStone() {
  if (stoneInt2 >= 20) {
    stoneInt2 = stoneInt - 20
    stoneInt = stoneInt2
    monInt2 = monInt + 1
    monInt = monInt2
    alert("You sell 20 Stone for 1 Money!")
  } else {
    alert("You need 20 Stone for sell!")
  }
  document.getElementById("stone").innerHTML = "" + stoneInt2 + "";
  document.getElementById("money").innerHTML = "" + monInt2 + "";
}
function SellWood() {
  if (woodInt2 >= 30) {
    woodInt2 = woodInt - 30
    woodInt = woodInt2
    monInt2 = monInt + 2
    monInt = monInt2
    alert("You sell 30 Wood for 2 Money!")
  } else {
    alert("You need 30 Wood for sell!")
  }
  document.getElementById("wood").innerHTML = "" + woodInt2 + "";
  document.getElementById("money").innerHTML = "" + monInt2 + "";
}
function SellFood() {
  if (foodInt2 >= 50) {
    foodInt2 = foodInt - 50
    foodInt = foodInt2
    monInt2 = monInt + 5
    monInt = monInt2
    alert("You sell 50 Food for 5 Money!")
  } else {
    alert("You need 50 Food for sell!")
  }
  document.getElementById("food").innerHTML = "" + foodInt2 + "";
  document.getElementById("money").innerHTML = "" + monInt2 + "";
}
function build() {
  if (stoneInt2 >= 30 && woodInt2 >= 20 && foodInt2 >= 75) {
    stoneInt2 = stoneInt - 30
    stoneInt = stoneInt2
    woodInt2 = woodInt - 20
    woodInt = woodInt2
    foodInt2 = foodInt - 75
    foodInt = foodInt2
    popInt2 = popInt + 1
    popInt = popInt2
    alert("You built a house!")
  } else {
    alert("You need 30 Stone, 20 Wood, 75 Food!")
  }
  document.getElementById("stone").innerHTML = "" + stoneInt2 + "";
  document.getElementById("wood").innerHTML = "" + woodInt2 + "";
  document.getElementById("food").innerHTML = "" + foodInt2 + "";
  document.getElementById("pop").innerHTML = "" + popInt2 + "";
}
function Give() {
  if (foodInt2 >= 50 && monInt2 >= 20) {
    foodInt2 = foodInt - 50
    foodInt = foodInt2
    monInt2 = monInt - 5
    monInt = monInt2
    domInt2 = domInt + 5
    domInt = domInt2
    alert("You improve the Dominion!")
  } else {
    alert("You need 50 Food, 20 Money!")
  }
  document.getElementById("food").innerHTML = "" + foodInt2 + "";
  document.getElementById("money").innerHTML = "" + monInt2 + "";
  document.getElementById("dom").innerHTML = "" + domInt2 + "";
}
function Points() {
	if(foodInt2 >= 100 && woodInt2 >= 40 && stoneInt2 >= 10 && domInt2 >= 1){
		foodInt2 = foodInt - 100
		foodInt = foodInt2
		woodInt2 = woodInt - 40
		woodInt = woodInt2
		stoneInt2 = stoneInt - 10
		stoneInt = stoneInt2
		domInt2 = domInt - 1
		domInt = domInt2
		resInt2 = resInt + 3
		resInt = resInt2
       alert("You Research the world!");
	}
     else{
		 alert("You need 10 Stone, 40 Wood, 100 Food, 1 Dominion for Research the world!")
	 }
  document.getElementById("stone").innerHTML = "" + stoneInt2 + "";
  document.getElementById("wood").innerHTML = "" + woodInt2 + "";
  document.getElementById("food").innerHTML = "" + foodInt2 + "";
  document.getElementById("point").innerHTML = "" + resInt2 + "";
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
setInterval(stoneTime,1000) 
function stoneTime() {
       if (minerInt2 > 0){
              stoneInt2 = stoneInt + minerInt2
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
setInterval(woodTime,1000) 
function woodTime() {
       if (woodcutterInt2 > 0){
              woodInt2 = woodInt + woodcutterInt2
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
setInterval(foodTime,1000) 
function foodTime() {
       if (farmerInt2 > 0){
              foodInt2 = foodInt + farmerInt2
	       foodInt = foodInt2
       }
          document.getElementById("food").innerHTML = "" + foodInt2 + "" ;
}
