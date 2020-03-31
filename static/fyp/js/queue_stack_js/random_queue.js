var nodess = 0;
var priority_queue;
var unordered = [];
var sec = 160;
var time = setInterval(myTimer, 1000);



function draw_square_queue(val, x, y, ii) {
  var c = document.getElementById('my-canvas');
  var ctx = c.getContext('2d');
  ctx.beginPath();
  ctx.rect(x, y, 50, 50);
  ctx.stroke();
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.closePath();
  ctx.font = "20px Comic Sans MS10";

  ctx.strokeText(val, x + 20, y + 20);

  if (ii !== nodess) {

    ctx.beginPath();
    ctx.moveTo(400, 40);
    ctx.lineTo(x + 20, y + 20);
    ctx.strokeStyle = "red";
    ctx.stroke();
  }

};

function question_1() {

  var parsed = [];

  var tt = document.createElement('span');
  tt.setAttribute("id", "timer2");
  tt.style.color = "yellow";
  tt.style.fontSize = "25px";
  tt.style.fontWeight = "bold";

  var divv22 = document.getElementById('testtime22');
  divv22.appendChild(tt);

  var ins = document.createElement('h4');
  var txt2 = document.createTextNode("What is the priority queue version of this queue? (Enter comma separated values)");
  ins.appendChild(txt2);
  ins.style.color = "yellow";
  ins.style.fontSize = "40px";
  ins.style.fontWeight = "bold";

  var element33 = document.getElementById("ins22");
  element33.appendChild(ins);
  var xx = document.createElement("INPUT");

  xx.setAttribute("type", "text");
  //  xx.setAttribute("value",num);

  xx.setAttribute("id", "inui22");
  xx.style.width = "300px";
  xx.style.height = "45px";
  var ele = document.getElementById("ans22");
  ele.appendChild(xx);


  var but = document.createElement('button');
  but.style.width = '200px';
  but.style.height = '40px';
  but.id = "subin";
  but.style.color = "white";
  but.style.background = "green";
  but.appendChild(document.createTextNode("Submit Answer"));
  but.style.fontSize = "20px";

  var element5 = document.getElementById("subm22");
  element5.appendChild(but);

  document.getElementById("subin").addEventListener("click", function(e) {

    var inputt = document.getElementById("inui22").value;

    var i = 0;
    var num = "";
    var newnum;
    //parsed.push(newnum);
    for (i = 0; i < inputt.length; i++) {
      if (inputt[i] == ',') {
        newnum = parseInt(num, 10);
        parsed.push(newnum);
        num = "";

        continue;
      } else {
        num += inputt[i];
        if (i == inputt.length - 1) {
          newnum = parseInt(num, 10);
          parsed.push(newnum);
        }


      }
    }



    var j = 0;
    var flag = true;

    if (priority_queue.length != parsed.length) {
      var get = localStorage.getItem("queue_stack_performance");
      get = get - 5;
      localStorage.setItem("queue_stack_performance", get);
      swal({
        title: "Data Strucutres Learning Enviornment Algo says:",
        text: "Please try again answer is wrong",
        buttons: {
          confirm: "OK!"
        }
      }).then(val => {
        if (val) {
          window.location.href = "http://127.0.0.1:8000/queue_stack/queue_stack_testing/";
        }
      });



    } else {

      for (j = 0; j < inputt.length; j++) {
        if (priority_queue[j] != parsed[j]) {
          //alert(inorder_traversal[j]);
          //alert(parsed[j]);
          count++;
          flag = false;
        }
      }

      if (flag) {
        clearInterval(time);

        swal({
          title: "Data Strucutres Learning Enviornment Algo says:",
          text: "Congrats: Right answer",
          buttons: {
            confirm: "OK!"
          }
        }).then(val => {
          if (val) {
            window.location.href = "http://127.0.0.1:8000/queue_stack/stack_ques/";
          }
        });


      } else {
        var get = localStorage.getItem("queue_stack_performance");
        get = get - 5;
        localStorage.setItem("queue_stack_performance", get);
        swal({
          title: "Data Strucutres Learning Enviornment Algo says:",
          text: "Please try again answer is wrong",
          buttons: {
            confirm: "OK!"
          }
        }).then(val => {
          if (val) {
            window.location.href = "http://127.0.0.1:8000/queue_stack/queue_stack_testing/";
          }
        });



      }

    }

  });
};

function init() {

  var num_nodes = Math.floor((Math.random() * 4) + 3);
  var x = 0;
  var y = 20;
  var ii = 0;
  nodess = num_nodes;

  //random_nodes.push(node_val)
  for (i = 0; i < num_nodes; i++) {
    x = x + 100;
    node_val = Math.floor((Math.random() * 98) + 1);
    unordered.push(node_val);
    draw_square_queue(node_val, x, y, ii);
    ii++;
  }

  var swapp;
  var n = unordered.length - 1;
  priority_queue = unordered;
  do {
    swapp = false;
    for (var i = 0; i < n; i++) {
      if (priority_queue[i] > priority_queue[i + 1]) {
        var temp = priority_queue[i];
        priority_queue[i] = priority_queue[i + 1];
        priority_queue[i + 1] = temp;
        swapp = true;
      }
    }
    n--;
  } while (swapp);
  question_1();

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
        window.location.href = "http://127.0.0.1:8000/queue_stack/queue_stack_testing/";
      }
    });
  }
}
window.onload = init;