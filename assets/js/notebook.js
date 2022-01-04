/*彈出視窗動畫*/
function popDiv(){
  // 獲取div元素
  var popBox = document.getElementById("popDiv");
  // 控制兩個div的顯示與隱藏
  popBox.style.display = "block";
}
function closePop(){
  // 獲取彈出視窗元素
  let popDiv = document.getElementById("popDiv");
  popDiv.style.display = "none";
}

function popDiv2(){
  var popBox2=document.getElementById("popDiv2");
  popBox2.style.display="block";
}
function closePop2(){
  let popDiv2=document.getElementById("popDiv2");
  popDiv2.style.display="none";
}

function popDiv3(){
  var popBox3=document.getElementById("popDiv3");
  popBox3.style.display="block";
}
function closePop3(){
  let popDiv3=document.getElementById("popDiv3");
  popDiv3.style.display="none";
}

function popDiv4(){
  var popBox4=document.getElementById("popDiv4");
  popBox4.style.display="block";
}
function closePop4(){
  let popDiv4=document.getElementById("popDiv4");
  popDiv4.style.display="none";
}

function popDiv5(){
  var popBox5=document.getElementById("popDiv5");
  popBox5.style.display="block";
}
function closePop5(){
  let popDiv5=document.getElementById("popDiv5");
  popDiv5.style.display="none";
}


  $(".my-rating").starRating({
  initialRating: 4,
  strokeColor: '#894A00',
  strokeWidth: 10,
  starSize: 25
});

