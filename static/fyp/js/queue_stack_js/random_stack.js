var sec = 160;
var ran_num;
var stack_nums = [];
var time = setInterval(myTimer, 1000);



function question_2() {
  var parsed = [];

  var tt = document.createElement('span');
  tt.setAttribute("id", "timer2");
  tt.style.color = "yellow";
  tt.style.fontSize = "25px";
  tt.style.fontWeight = "bold";
  var divv22 = document.getElementById('testtime22');
  divv22.appendChild(tt);

  ran_num = Math.floor((Math.random() * 98) + 1);;
  var ins = document.createElement('textarea');
  var str = `Function push(value) {
  for (i = 0; i < stack.length; i++) {
    if (i == lastpoint) {
      stack[i + 1] = value;
    }
  }
}
push(`.concat(ran_num, ')');

  stack_nums.unshift(ran_num);
  var txt2 = document.createTextNode(str);
  ins.appendChild(txt2);
  ins.rows = "8";
  ins.cols = "40";
  ins.style.background = "blue";
  ins.style.color = "yellow";
  ins.style.fontSize = "xx-large";

  var ins2 = document.createElement('h2');
  var txt22 = document.createTextNode("How would the stack look now? (Enter the numbers in order with comma separation)");
  ins2.appendChild(txt22);
  ins2.style.color = "yellow";
  ins.style.fontSize = "40px";
  ins.style.fontWeight = "bold";
  var element33 = document.getElementById("ins22");
  element33.appendChild(ins);
  element33.appendChild(ins2);

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

    if (stack_nums.length != parsed.length) {
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
          window.location.href = "http://127.0.0.1:8000/queue_stack/stack_ques/";
        }
      });



    } else {

      for (j = 0; j < inputt.length; j++) {
        if (stack_nums[j] != parsed[j]) {
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
            window.location.href = "http://127.0.0.1:8000/queue_stack/ques_2/";
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
            window.location.href = "http://127.0.0.1:8000/queue_stack/stack_ques/";
          }
        });



      }

    }

  });
};


function draw_square_queue(val, x, y) {
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



};


function init() {


  var x = 0;
  var y = 20;
  var num_nodes = Math.floor((Math.random() * 5) + 3);

  //random_nodes.push(node_val)
  for (i = 0; i < num_nodes; i++) {
    y = y + 40;

    node_val = Math.floor((Math.random() * 98) + 1);
    stack_nums.push(node_val);
    draw_square_queue(node_val, x, y);
  }
  question_2();

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
        window.location.href = "http://127.0.0.1:8000/queue_stack/stack_ques/";
      }
    });
  }
}

window.onload = init;