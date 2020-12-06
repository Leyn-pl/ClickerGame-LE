//greeting

alert("Welcome to Clicker Game LEYN Edition! \n Original by FFirtes \n Remake by _LEYN \nIn new 1.2 version: \n New interface \n New dialogs");

//vars

var stoneInf = 0
var stoneOp = 1
var woodInf  = 0
var woodOp = 1
var foodInf = 0
var foodOp = 1
var moneyInf = 0
var populationInf = 0
var dominionInf = 0
var minerInf = 0
var woodcutterInf = 0
var farmerInf = 0

//info

function stone() {
	stoneInf = stoneInf + stoneOp
  document.getElementById("stone").innerHTML = ""+ stoneInf +"";
}

function wood() {
  woodInf = woodInf + woodOp
  document.getElementById("wood").innerHTML = ""+ woodInf + "";
}

function food() {
  foodInf = foodInf + foodOp
  document.getElementById("food").innerHTML = ""+ foodInf +"";
}

function info() {
  alert("About Game: \n | This is Clicker game | \n This is Game created only with JS, HTML and CSS languages! \n -- \nCreator: \n FFirtes \n -- \nProgrammers: \n FFirtes \n i_hz_cto_i \n The Slaylord \n firvut \n ---- \nGame discord: https://discord.gg/PfhAgmFAdp \nLEYN's discord: https://discord.gg/ftGX4rX \n ---- \n Remake by _LEYN");
}

//shop

function SellStone() {
  if (stoneInf >= 20) {
    stoneInf = stoneInf - 20
    moneyInf = moneyInf + 1
    alert("You sell 20 Stone for 1 Money!")
  } else {
    alert("You need 20 Stone for sell!")
  }
  document.getElementById("stone").innerHTML = "" + stoneInf + "";
  document.getElementById("money").innerHTML = "" + moneyInf + "";
}

function SellWood() {
  if (woodInf >= 30) {
    woodInf = woodInf - 30
    moneyInf = moneyInf + 3
    alert("You sell 30 Wood for 2 Money!")
  } else {
    alert("You need 30 Wood for sell!")
  }
  document.getElementById("wood").innerHTML = "" + woodInf + "";
  document.getElementById("money").innerHTML = "" + moneyInf + "";
}

function SellFood() {
  if (foodInf >= 50) {
    foodInf = foodInf - 50
    moneyInf = moneyInf + 5
    alert("You sell 50 Wood for 5 Money!")
  } else {
    alert("You need 50 Wood for sell!")
  }
  document.getElementById("food").innerHTML = "" + foodInf + "";
  document.getElementById("money").innerHTML = "" + moneyInf + "";
}

function Build(){
	if(stoneInf >= 30 && woodInf >= 20 && foodInf >= 70){
		stoneInf = stoneInf - 30
		woodInf =woodInf - 20
		foodInf = foodInf - 75
		populationInf = populationInf + 2
		alert("1 house gives you 2 willagers!")
  } else {
    alert("You need 30 Stone, 20 Wood, 70 Food!")
  }
  document.getElementById("stone").innerHTML = "" + stoneInf + "";
  document.getElementById("wood").innerHTML = "" + woodInf + "";
  document.getElementById("food").innerHTML = "" + foodInf + "";
  document.getElementById("pop").innerHTML = "" + populationInf + "";
}

function Improve() {
  if (foodInf >= 50 && moneyInf >= 5) {
    foodInf = foodInf- 50
    moneyInf = moneyInf - 5
    dominionInf = dominionInf + 5
    alert("Dominion - final game score")
  } else {
    alert("You need 50 Food, 20 Money!")
  }
  document.getElementById("food").innerHTML = "" + foodInf + "";
  document.getElementById("money").innerHTML = "" + moneyInf + "";
  document.getElementById("dom").innerHTML = "" + dominionInf + "";
}

function miner(){
	if(populationInf >= 1 &&  moneyInf >= 3){
		populationInf = populationInf - 1
		moneyInf = moneyInf - 3
		minerInf = minerInf + 1
		alert("Miner gives 1 Stone every 3 seconds!")
	}
	else{
		alert("You can't buy a Miner!")
	}
	  document.getElementById("money").innerHTML = "" + moneyInf + "";
         document.getElementById("pop").innerHTML = "" + populationInf + "";
}

setInterval(stoneTime,3000) 
function stoneTime() {
       if (minerInf > 0){
            stoneInf = stoneInf + minerInf
       }
          document.getElementById("stone").innerHTML = "" + stoneInf + "";
}

function woodcutter(){
	if(populationInf >= 1 &&  moneyInf >= 3){
		populationInf = populationInf - 1
		moneyInf = moneyInf - 4
		woodcutterInf = woodcutterInf + 1
		alert("Woodcutter gives 1 Wood every 3 seconds!")
	}
	else{
		alert("You can't buy a Woodcutter!")
	}
	  document.getElementById("money").innerHTML = "" + moneyInf + "";
         document.getElementById("pop").innerHTML = "" + populationInf + "";
}

setInterval(woodTime,3000) 
function woodTime() {
       if (woodcutterInf > 0){
            woodInf = woodInf + woodcutterInf
       }
          document.getElementById("wood").innerHTML = "" +woodInf + "";
}

function farmer(){
	if(populationInf >= 1 &&  moneyInf >= 3){
		populationInf = populationInf - 1
		moneyInf = moneyInf - 5
		farmerInf = farmerInf + 1
		alert("Farmer gives 1 Food every 3 seconds!")
	}
	else{
		alert("You can't buy a Farmer!")
	}
	  document.getElementById("money").innerHTML = "" + moneyInf + "";
         document.getElementById("pop").innerHTML = "" + populationInf + "";
}

setInterval(foodTime,3000) 
function foodTime() {
       if (farmerInf > 0){
            foodInf = foodInf + farmerInf
       }
          document.getElementById("food").innerHTML = "" +foodInf + "";
}
