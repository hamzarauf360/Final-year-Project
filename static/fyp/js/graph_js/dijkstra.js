var sec = 120;
var time = setInterval(myTimer, 1000);
var path1_4_q2 = [0, 7, 6, 5, 4];
var path0_0_q2 = [0];
var path0_1_q2 = [0, 1];
var path0_7_q2 = [0, 7];
var path0_2_q2 = [0, 1, 2];
var path0_3_q2 = [0, 1, 2, 3];
var path0_8_q2 = [0, 1, 2, 8];
var path0_6_q2 = [0, 7, 6];
var path0_5_q2 = [0, 7, 6, 5];

var path0_1_q1 = [0, 1];
var path0_2_q1 = [0, 1, 2];
var path0_3_q1 = [0, 1, 2, 3];
var path0_4_q1 = [0, 1, 4];
var path0_0_q1 = [0];


var flag = true;

function msg1() {
  var get = localStorage.getItem("graph_performance");
  get = get - 5;
  localStorage.setItem("graph_performance", get);
  swal({
    title: "Data Strucutres Learning Enviornment Algo says:",
    text: "Please try again traversal is wrong",
    buttons: {
      confirm: "OK!"
    }
  }).then(val => {
    if (val) {
      window.location.href = "http://127.0.0.1:8000/graphs/dijkstraa";
    }
  });
}

function msg2() {
  clearInterval(time);


  swal({
    title: "Data Strucutres Learning Enviornment Algo says:",
    text: "Congrats: Right traversal",
    buttons: {
      confirm: "OK!"
    }
  }).then(val => {
    if (val) {
      window.location.href = "http://127.0.0.1:8000/graphs/performance";
    }
  });

}

function question2() {
  var parsed = []

  var t = document.createElement('span');
  t.setAttribute("id", "timer");
  t.style.color = "yellow";
  t.style.fontSize = "30px";
  t.style.fontWeight = "bold";
  var divv = document.getElementById('testtime');
  divv.appendChild(t);

  var ins = document.createElement('h4');
  var chk = Math.floor(Math.random() * 9);

  var txt2 = document.createTextNode('What is the shortest path from vertex 0 to vertex ' + chk + ' by Dijkstra algorithm on this graph');
  ins.appendChild(txt2);
  ins.style.color = "yellow";
  ins.style.fontSize = "30px";
  ins.style.fontWeight = "bold";

  var element33 = document.getElementById("ins");
  element33.appendChild(ins);
  var xx = document.createElement("INPUT");

  xx.setAttribute("type", "text");
  //  xx.setAttribute("value",num);

  xx.setAttribute("id", "inui");
  xx.style.width = "300px";
  xx.style.height = "45px";
  var ele = document.getElementById("ans");
  ele.appendChild(xx);

  var but = document.createElement('button');
  but.style.width = '200px';
  but.style.height = '40px';
  but.id = "subin";
  but.style.color = "white";
  but.style.background = "green";
  but.style.fontSize = "25px";
  but.style.fontWeight = "bold";
  but.appendChild(document.createTextNode("Submit Answer"));

  var element5 = document.getElementById("subm");
  element5.appendChild(but);


  document.getElementById("subin").addEventListener("click", function(e) {

    var inputt = document.getElementById("inui").value;

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


    if (chk == 4) {

      if (path1_4_q2.length != parsed.length) {
        msg1();
      } else {
        var j = 0;

        for (j = 0; j < parsed.length; j++) {
          if (path1_4_q2[j] != parsed[j]) {
            //alert(inorder_traversal[j]);
            //alert(parsed[j]);
            //count++;
            flag = false;
          }
        }



        if (flag) {
          msg2();

        } else {
          msg1();
        }
      }
    } else if (chk == 0) {
      flag = true;
      if (path0_0_q2.length != parsed.length) {
        msg1();
      } else {
        var j = 0;

        for (j = 0; j < parsed.length; j++) {
          if (path0_0_q2[j] != parsed[j]) {
            //alert(inorder_traversal[j]);
            //alert(parsed[j]);
            //count++;
            flag = false;
          }
        }



        if (flag) {
          msg2();

        } else {
          msg1();
        }
      }
    } else if (chk == 1) {
      flag = true;
      if (path0_1_q2.length != parsed.length) {
        msg1();
      } else {
        var j = 0;

        for (j = 0; j < parsed.length; j++) {
          if (path0_1_q2[j] != parsed[j]) {
            //alert(inorder_traversal[j]);
            //alert(parsed[j]);
            //count++;
            flag = false;
          }
        }



        if (flag) {
          msg2();

        } else {
          msg1();
        }
      }
    } else if (chk == 2) {
      flag = true;
      if (path0_2_q2.length != parsed.length) {
        msg1();
      } else {
        var j = 0;

        for (j = 0; j < parsed.length; j++) {
          if (path0_2_q2[j] != parsed[j]) {
            //alert(inorder_traversal[j]);
            //alert(parsed[j]);
            //count++;
            flag = false;
          }
        }



        if (flag) {
          msg2();

        } else {
          msg1();
        }
      }
    } else if (chk == 3) {
      flag = true;
      if (path0_3_q2.length != parsed.length) {
        msg1();
      } else {
        var j = 0;

        for (j = 0; j < parsed.length; j++) {
          if (path0_3_q2[j] != parsed[j]) {
            //alert(inorder_traversal[j]);
            //alert(parsed[j]);
            //count++;
            flag = false;
          }
        }



        if (flag) {
          msg2();

        } else {
          msg1();
        }
      }
    } else if (chk == 5) {
      flag = true;
      if (path0_5_q2.length != parsed.length) {
        msg1();
      } else {
        var j = 0;

        for (j = 0; j < parsed.length; j++) {
          if (path0_5_q2[j] != parsed[j]) {
            //alert(inorder_traversal[j]);
            //alert(parsed[j]);
            //count++;
            flag = false;
          }
        }



        if (flag) {
          msg2();

        } else {
          msg1();
        }
      }
    } else if (chk == 6) {
      flag = true;
      if (path0_6_q2.length != parsed.length) {
        msg1();
      } else {
        var j = 0;

        for (j = 0; j < parsed.length; j++) {
          if (path0_6_q2[j] != parsed[j]) {
            //alert(inorder_traversal[j]);
            //alert(parsed[j]);
            //count++;
            flag = false;
          }
        }



        if (flag) {
          msg2();

        } else {
          msg1();
        }
      }
    } else if (chk == 7) {
      flag = true;
      if (path0_7_q2.length != parsed.length) {
        msg1();
      } else {
        var j = 0;

        for (j = 0; j < parsed.length; j++) {
          if (path0_7_q2[j] != parsed[j]) {
            //alert(inorder_traversal[j]);
            //alert(parsed[j]);
            //count++;
            flag = false;
          }
        }



        if (flag) {
          msg2();

        } else {
          msg1();
        }
      }
    } else if (chk == 8) {
      flag = true;
      if (path0_8_q2.length != parsed.length) {
        msg1();
      } else {
        var j = 0;

        for (j = 0; j < parsed.length; j++) {
          if (path0_8_q2[j] != parsed[j]) {
            //alert(inorder_traversal[j]);
            //alert(parsed[j]);
            //count++;
            flag = false;
          }
        }



        if (flag) {
          msg2();

        } else {
          msg1();
        }
      }
    }



  });



};

function question1() {
  var parsed = []

  var t = document.createElement('span');
  t.setAttribute("id", "timer");
  t.style.color = "yellow";
  t.style.fontSize = "30px";
  t.style.fontWeight = "bold";
  var divv = document.getElementById('testtime');
  divv.appendChild(t);

  var ins = document.createElement('h4');
  var chk = Math.floor(Math.random() * 5);

  var txt2 = document.createTextNode('What is the shortest path from vertex 0 to vertex ' + chk + ' by Dijkstra algorithm on this graph');
  ins.appendChild(txt2);
  ins.style.color = "yellow";
  ins.style.fontSize = "30px";
  ins.style.fontWeight = "bold";

  var element33 = document.getElementById("ins");
  element33.appendChild(ins);
  var xx = document.createElement("INPUT");

  xx.setAttribute("type", "text");
  //  xx.setAttribute("value",num);

  xx.setAttribute("id", "inui");
  xx.style.width = "300px";
  xx.style.height = "45px";
  var ele = document.getElementById("ans");
  ele.appendChild(xx);

  var but = document.createElement('button');
  but.style.width = '200px';
  but.style.height = '40px';
  but.id = "subin";
  but.style.color = "white";
  but.style.background = "green";
  but.style.fontSize = "25px";
  but.style.fontWeight = "bold";
  but.appendChild(document.createTextNode("Submit Answer"));

  var element5 = document.getElementById("subm");
  element5.appendChild(but);


  document.getElementById("subin").addEventListener("click", function(e) {

    var inputt = document.getElementById("inui").value;

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


    if (chk == 4) {

      if (path0_4_q1.length != parsed.length) {
        msg1();
      } else {
        var j = 0;

        for (j = 0; j < parsed.length; j++) {
          if (path0_4_q1[j] != parsed[j]) {
            //alert(inorder_traversal[j]);
            //alert(parsed[j]);
            //count++;
            flag = false;
          }
        }



        if (flag) {
          msg2();

        } else {
          msg1();
        }
      }
    } else if (chk == 0) {
      flag = true;
      if (path0_0_q1.length != parsed.length) {
        msg1();
      } else {
        var j = 0;

        for (j = 0; j < parsed.length; j++) {
          if (path0_0_q1[j] != parsed[j]) {
            //alert(inorder_traversal[j]);
            //alert(parsed[j]);
            //count++;
            flag = false;
          }
        }



        if (flag) {
          msg2();

        } else {
          msg1();
        }
      }
    } else if (chk == 1) {
      flag = true;
      if (path0_1_q1.length != parsed.length) {
        msg1();
      } else {
        var j = 0;

        for (j = 0; j < parsed.length; j++) {
          if (path0_1_q1[j] != parsed[j]) {
            //alert(inorder_traversal[j]);
            //alert(parsed[j]);
            //count++;
            flag = false;
          }
        }



        if (flag) {
          msg2();

        } else {
          msg1();
        }
      }
    } else if (chk == 2) {
      flag = true;
      if (path0_2_q1.length != parsed.length) {
        msg1();
      } else {
        var j = 0;

        for (j = 0; j < parsed.length; j++) {
          if (path0_2_q1[j] != parsed[j]) {
            //alert(inorder_traversal[j]);
            //alert(parsed[j]);
            //count++;
            flag = false;
          }
        }



        if (flag) {
          msg2();

        } else {
          msg1();
        }
      }
    } else if (chk == 3) {
      flag = true;
      if (path0_3_q1.length != parsed.length) {
        msg1();
      } else {
        var j = 0;

        for (j = 0; j < parsed.length; j++) {
          if (path0_3_q1[j] != parsed[j]) {
            //alert(inorder_traversal[j]);
            //alert(parsed[j]);
            //count++;
            flag = false;
          }
        }



        if (flag) {
          msg2();

        } else {
          msg1();
        }
      }
    }



  });



};

function nodes2() {
  var nodes = new vis.DataSet([{
      id: 0,
      label: "0",
      color: {
        border: 'black',
        background: 'yellow'
      }
    },
    {
      id: 1,
      label: "1",
      color: {
        border: 'black',
        background: 'yellow'
      }
    },
    {
      id: 2,
      label: "2",
      color: {
        border: 'black',
        background: 'yellow'
      }
    },
    {
      id: 3,
      label: "3",
      color: {
        border: 'black',
        background: 'yellow'
      }
    },
    {
      id: 4,
      label: "4",
      color: {
        border: 'black',
        background: 'yellow'
      }
    },
    {
      id: 5,
      label: "5",
      color: {
        border: 'black',
        background: 'yellow'
      }
    },
    {
      id: 6,
      label: "6",
      color: {
        border: 'black',
        background: 'yellow'
      }
    },
    {
      id: 7,
      label: "7",
      color: {
        border: 'black',
        background: 'yellow'
      }
    },
    {
      id: 8,
      label: "8",
      color: {
        border: 'black',
        background: 'yellow'
      }
    }
  ]);

  // create an array with edges


  var edges = new vis.DataSet([{
      from: 0,
      to: 1,
      label: "4"
    },
    {
      from: 1,
      to: 2,
      label: "8"

    },
    {
      from: 1,
      to: 7,
      label: "11"

    },
    {
      from: 2,
      to: 3,
      label: "7"

    },
    {
      from: 3,
      to: 4,
      label: "9"

    },
    {
      from: 4,
      to: 5,
      label: "10"

    },
    {
      from: 5,
      to: 6,
      label: "2"

    },
    {
      from: 6,
      to: 7,
      label: "1"

    },
    {
      from: 7,
      to: 0,
      label: "8"

    },
    {
      from: 7,
      to: 8,
      label: "7"

    },
    {
      from: 2,
      to: 8,
      label: "2"

    },
    {
      from: 6,
      to: 8,
      label: "6"

    },
    {
      from: 2,
      to: 5,
      label: "4"

    },
    {
      from: 3,
      to: 5,
      label: "14"

    }

  ]);

  // create a network
  var container = document.getElementById("question_here");
  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = {
    nodes: {}
  };
  var network = new vis.Network(container, data, options);
}

function nodes1() {
  var nodes = new vis.DataSet([{
      id: 1,
      label: "0",
      color: {
        border: 'black',
        background: 'yellow'
      }
    },
    {
      id: 2,
      label: "1",
      color: {
        border: 'black',
        background: 'yellow'
      }
    },
    {
      id: 3,
      label: "2",
      color: {
        border: 'black',
        background: 'yellow'
      }
    },
    {
      id: 4,
      label: "3",
      color: {
        border: 'black',
        background: 'yellow'
      }
    },
    {
      id: 5,
      label: "4",
      color: {
        border: 'black',
        background: 'yellow'
      }
    }
  ]);

  // create an array with edges


  var edges = new vis.DataSet([{
      from: 1,
      to: 2,
      label: "2"
    },
    {
      from: 2,
      to: 3,
      label: "4"

    },
    {
      from: 3,
      to: 4,
      label: "2"

    },
    {
      from: 1,
      to: 5,
      label: "5"

    },
    {
      from: 2,
      to: 5,
      label: "2"

    },
    {
      from: 3,
      to: 5,
      label: "5"

    },
    {
      from: 4,
      to: 5,
      label: "5"

    },

  ]);

  // create a network
  var container = document.getElementById("question_here");
  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = {
    nodes: {}
  };
  var network = new vis.Network(container, data, options);
}


function init() {

  // create an array with nodes


  var chk = Math.floor(Math.random() * 1001);

  if (chk % 2 == 0) {
    nodes2();
    question2();

  } else {
    nodes1();
    question1();

  }


};

function myTimer() {
  document.getElementById('timer').innerHTML = sec + "sec left";
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
        window.location.href = "http://127.0.0.1:8000/graphs/dijkstraa";
      }
    });
  }
}

window.onload = init;