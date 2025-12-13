
let paragraph1 = document.getElementById("getpara1");
let paragraph2 = document.getElementById("getpara2");
let count = 0; 
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;

function update_Group_1_Score_1() {
    
    count += 1;
    paragraph1.innerText = count;


  //console.log("Group 1 Score 1 clicked");
}


function update_Group_1_Score_2() {
    
    count2 += 2;
    paragraph1.innerText = count2;


  //console.log("Group 1 Score 1 clicked");
}

function update_Group_1_Score_3() {
    
    count4 += 3;
    paragraph1.innerText = count4;


  //console.log("Group 1 Score 1 clicked");
}

function update_Group_2_Score_1() {
  count1 += 1;
  paragraph2.innerText = count1;

  //console.log("Group 2 Score 1 clicked");
}

function update_Group_2_Score_2() {
  count3 += 2;
  paragraph2.innerText = count3;

  //console.log("Group 2 Score 1 clicked");
}

function update_Group_2_Score_3() {
  count5 += 3;
  paragraph2.innerText = count5;

  //console.log("Group 2 Score 1 clicked");
}

