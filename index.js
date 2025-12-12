
let paragraph1 = document.getElementById("getpara1");
let paragraph2 = document.getElementById("getpara2");


let count1 = 0;
let count2 = 0;
let count3 = 0;
function updateGroup1Score1(){
 
 count1 += 1;
 paragraph1.textContent = count1;
}

function updateGroup1Score2(){
  console.log("Updated Score 2");
}

function updateGroup1Score3(){
  console.log("Updated Score 3");
}


function updateGroup2Score1(){
 
 count1 += 1;
 paragraph1.textContent = count1;
}

function updateGroup2Score2(){
  console.log("Updated Score 2");
}

function updateScore3(){
  console.log("Updated Score 3");