var sec = 15;
var time = setInterval(myTimer, 1000);
var pushed_items = [];




function question() {
  var num;

  var i = 0;

  for (i = 0; i < pushed_items.length; i++) {
    var r = Math.floor((Math.random() * 14) + 3);
    if (r % 2 == 0) {
      num = pushed_items[i];

      break;
    }
    num = pushed_items[i];

  }

  var ques = "What will happen to the given stack if we call the function pop() (DRAG THE ELEMENT TO THE BOX)";
  var ins2 = document.createElement('h2');
  var txt22 = document.createTextNode(ques);
  ins2.appendChild(txt22);
  ins2.style.color = "yellow";
  ins2.style.fontSize = "30px";
  ins2.style.fontWeight = "bold";

  var element33 = document.getElementById("ins22");
  element33.appendChild(ins2);



}


function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  event.preventDefault();

  const id = event.dataTransfer.getData('text');

  const draggableElement = document.getElementById(id);
  const dropzone = event.target;

  dropzone.appendChild(draggableElement);

  clearInterval(time);

  if (draggableElement.id == pushed_items[0]) {

    swal({
      title: "Data Strucutres Learning Enviornment Algo says:",
      text: "Congrats you have successfully completed the Queue and Stack quiz!",
      buttons: {
        confirm: "OK!"
      }
    }).then(val => {
      if (val) {
        window.location.href = "http://127.0.0.1:8000/graphs/graph_home/"; // chnage it to new page
      }
    });
  } else {

    var get = localStorage.getItem("queue_stack_performance");
    get = get - 5;
    localStorage.setItem("queue_stack_performance", get);
    swal({
      title: "Data Strucutres Learning Enviornment Algo says:",
      text: "Wrong answer!",
      buttons: {
        confirm: "OK!"
      }
    }).then(val => {
      if (val) {
        window.location.href = "http://127.0.0.1:8000/queue_stack/ques_2/"; // chnage it to new page
      }
    });
  }


  //event.dataTransfer.clearData();
}

function init() {
  var tt = document.createElement('span');
  tt.setAttribute("id", "timer2");
  tt.style.color = "yellow";
  tt.style.fontSize = "25px";
  tt.style.fontWeight = "bold";
  var divv22 = document.getElementById('testtime22');
  divv22.appendChild(tt);


  var head = document.createElement('h3');
  head.appendChild(document.createTextNode("POPPED ELEMENT"));
  head.style.color = "yellow";
  head.style.fontSize = "30px";
  head.style.fontWeight = "bold";

  head.style.textIndent = "1500px";
  var elee = document.getElementById("rhead");
  elee.appendChild(head);



  var i = 0;
  var div;
  var ele = document.getElementById('orig');
  var num_nodes = Math.floor((Math.random() * 14) + 3);
  var space;
  var text_node;
  var node_val;

  for (i = 0; i < num_nodes; i++) {
    node_val = Math.floor((Math.random() * 98) + 1);
    pushed_items.push(node_val);
    div = document.createElement('DIV');
    div.style.content = "d";
    div.style.width = '50px';
    div.style.height = '50px';
    div.id = node_val;
    div.style.background = "yellow";
    div.style.margin = "0px auto";
    div.style.borderStyle = "solid";
    div.draggable = "true";
    div.ondragstart = function(event) {
      event.dataTransfer.setData("Text", event.target.id);

    };
    div.style.borderColor = "black";
    text_node = document.createElement('p');
    text_node.appendChild(document.createTextNode(node_val));
    text_node.style.fontSize = "20px";
    div.appendChild(text_node);
    ele.appendChild(div);

  }


  question();

};

function myTimer() {
  document.getElementById('timer2').innerHTML = sec + "sec left";
  sec--;
  if (sec == -1) {
    clearInterval(time);
    swal({
      title: "Data Strucutres Learning Enviornment Algo says:",
      text: "Time Expired, please try again!",
      buttons: {
        confirm: "OK!"
      }
    }).then(val => {
      if (val) {
        window.location.href = "http://127.0.0.1:8000/queue_stack/ques_2/";
      }
    });
  }
}

window.onload = init;