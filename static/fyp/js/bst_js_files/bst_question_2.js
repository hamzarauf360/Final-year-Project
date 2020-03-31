var global_array2 = []
var vals2 = []
var sec;
var num_nodes;
var time = setInterval(myTimer, 1000);


//alert(points.point);


var Result = function() {
  this.correct = 0;
  this.wrong = 0;

  this.getcorrect = function() {
    return this.correct;
  };
  this.getwrong = function() {
    return this.wrong;
  };
  this.incwrong = function() {
    this.wrong++;
  };
  this.inccorrect = function() {
    this.correct++;
  };
};

var Node = function(data) { //200,20,15,methods and operations for canvas, value
  // left child of a node
  this.leftNode = null;
  // right child of a node
  this.rightNode = null;

  this.data = data;

  // draw function. Responsible for drawing the node


  // Simple getters
  this.getData = function() {
    return data;
  };


};
var BTree1 = function() {

  this.root = null;

  var self = this;

  // Getter for root
  this.getRoot = function() {
    return this.root;
  };


  // Adds element to the tree
  this.add = function(data) {
    var newNode = new Node(data);
    // If root exists, then recursively find the place to add the new node
    if (this.root) {
      this.insertNode(this.root, newNode);
    } else {
      // If not, the add the element as a root
      this.root = newNode;
      return;
    }
  };
  this.findmin = function(node) {
    if (node.left) {
      return this.findmin(node.left);
    } else {
      return node;

    }
  }
  // Recurively traverse the tree and find the place to add the node
  this.findmax = function(node) {
    if (node.right) {
      return this.findmax(node.right);
    } else {
      return node;

    }
  }
  this.insertNode = function(node, newNode) {
    // if the data is less than the node
    // data move left of the tree
    if (newNode.data < node.data) {
      // if left is null insert node here
      if (node.left) {
        this.insertNode(node.left, newNode);
      } else {
        node.left = newNode;
        return;
      }

      // if left is not null recurr until
      // null is found
    }

    // if the data is more than the node
    // data move right of the tree
    else {
      // if right is null insert node here
      if (node.right) {
        this.insertNode(node.right, newNode);
      } else {
        node.right = newNode;

        return;
      }

      // if right is not null recurr until
      // null is found
    }
  };

  this.inorder = function(Root) {
    if (Root) {
      this.inorder(Root.left);
      global_array2.push(Root.getData());
      this.inorder(Root.right);
    }
  }
  // Adds the node to the tree and calls the draw function

};


function draw_node(val, x, y, r) {

  var c = document.getElementById('my-canvas1');
  var ctx = c.getContext('2d');
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.closePath();
  ctx.font = "15px Comic Sans MS10";

  ctx.strokeText(val, x, y);




};

function question_2() {
  var t = document.createElement('span');
  t.setAttribute("id", "timer");
  t.style.color = "yellow";
  t.style.fontSize = "30px";
  t.style.fontWeight = "bold";
  var divv = document.getElementById('testtime');
  divv.appendChild(t);

  myTimer();
  var ins = document.createElement('h4');
  var txt2 = document.createTextNode("What is the Minimum Value in the Nodes");
  ins.appendChild(txt2);
  ins.style.color = "yellow";
  ins.style.fontSize = "30px";
  ins.style.fontWeight = "bold";

  var element33 = document.getElementById("ins");
  element33.appendChild(ins);
  var xx = document.createElement("INPUT");

  xx.setAttribute("type", "text");
  //  xx.setAttribute("value",num);

  xx.setAttribute("id", "uii");
  xx.style.width = "300px";
  xx.style.height = "45px";
  var ele = document.getElementById("ans");
  ele.appendChild(xx);
  var root = b1.getRoot();
  var n = b1.findmin(root);
  var ans = n.getData();
  var but = document.createElement('button');
  but.style.width = '200px';
  but.style.height = '40px';
  but.id = "sub";
  but.style.color = "white";
  but.style.background = "green";
  but.style.fontSize = "25px";
  but.style.fontWeight = "bold";
  but.appendChild(document.createTextNode("Submit Answer"));

  var element5 = document.getElementById("subm");
  element5.appendChild(but);




  var but111 = document.createElement('button');
  but111.style.width = '200px';
  but111.style.height = '40px';
  but111.id = "viewans2";
  but111.style.color = "white";
  but111.style.background = "green";
  but111.style.fontSize = "25px";
  but111.style.fontWeight = "bold";
  but111.appendChild(document.createTextNode("View Answer"));
  var element556 = document.getElementById("subm");
  element556.appendChild(but111);
  document.getElementById("viewans2").addEventListener("click", function(e) {
    var get = localStorage.getItem("bst_performance");
    get = get - 5;
    localStorage.setItem("bst_performance", get);

    var txta22 = document.createElement('textarea');
    txta22.maxLength = 5000;
    txta22.id = "answerr2";
    var tm = document.getElementById("ans2");
    tm.appendChild(txta22);

    document.getElementById("answerr2").value = ans;
    clearInterval(time);

    swal({
      title: "Data Strucutres Learning Enviornment Algo says:",
      text: "Please try again as you have availed the hint!",
      buttons: {
        confirm: "OK!"
      }
    }).then(val => {
      if (val) {
        window.location.href = "http://127.0.0.1:8000/bst_module/bst_question_2/";
      }
    });


  });


  document.getElementById("sub").addEventListener("click", function(e) {

    if (document.getElementById("uii").value == ans) {
      r1.inccorrect();
      clearInterval(time);

      swal({
        title: "Data Strucutres Learning Enviornment Algo says:",
        text: "You have Got a right answer",
        buttons: {
          confirm: "OK!"
        }
      }).then(val => {
        if (val) {
          window.location.href = "http://127.0.0.1:8000/bst_module/bst_question_3/";
        }
      });




      //question_2();
    } else {
      //r1.incwrong();

      var get = localStorage.getItem("bst_performance");
      get = get - 5;
      localStorage.setItem("bst_performance", get);
      swal({
        title: "Data Strucutres Learning Enviornment Algo says:",
        text: "Wrong answer please try agian",
        buttons: {
          confirm: "OK!"
        }
      }).then(val => {
        if (val) {
          window.location.href = "http://127.0.0.1:8000/bst_module/bst_question_2/";
        }
      });



    }


  });
};



function creation() {

  /*  var a = document.getElementById("ran");
    a.style.display='none';
    var xx = document.getElementById("kin");
    xx.style.display='none';*/


  var head_33 = document.createElement('h3');
  var txt = document.createTextNode("Nodes");
  head_33.appendChild(txt);

  var element33 = document.getElementById("c-n");
  element33.appendChild(head_33);



};

var init = function() {

  creation();

  num_nodes = Math.floor((Math.random() * 16) + 3);
  var x = 0;
  var y = 20;
  var r = 20;

  //random_nodes.push(node_val)
  for (i = 0; i < num_nodes; i++) {
    x = x + 50;
    node_val = Math.floor((Math.random() * 98) + 1);
    vals2.push(node_val);

    draw_node(node_val, x, y, r);
  }
  var j = 0;
  for (j = 0; j < num_nodes; j++) {

    b1.add(vals2[j]);
  }

  question_2();
  if (num_nodes <= 10) {
    sec = 10;
  } else if (num_nodes >= 15) {
    sec = 15;
  } else {
    sec = 12;
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
        window.location.href = "http://127.0.0.1:8000/bst_module/bst_question_2/";
      }
    });
  }
}



var b1 = new BTree1();
var r1 = new Result();
window.onload = init;

/*var j=0;
for (j=0;j<num_nodes;j++)
{

  b1.add(vals[j]);
}
var root= b1.getRoot();
b1.inorder(root);

  //alert(global_array[2]);

//alert(document.getElementById(1).value);
*/