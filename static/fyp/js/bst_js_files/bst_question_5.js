var postorder_traversal = []

var vals = []
var sec = 120;
var time = setInterval(myTimer, 1000);
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

var Node_txt = function(data) { //200,20,15,methods and operations for canvas, value
  // left child of a node
  this.leftNode = null;
  // right child of a node
  this.rightNode = null;

  this.data = data;

  // draw function. Responsible for drawing the node


  // Simple getters
  this.getData = function() {
    return this.data;
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
  this.postorder = function(Root) {

    if (Root) {

      this.postorder(Root.left);
      this.postorder(Root.right);
      postorder_traversal.push(Root.getData());

    }
  };


  this.add = function(data) {
    var newNode = new Node_txt(data);
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

  // Adds the node to the tree and calls the draw function

};




function question_5() {
  var parsed = []
  var t = document.createElement('span');
  t.setAttribute("id", "timer");
  t.style.color = "yellow";
  t.style.fontSize = "30px";
  t.style.fontWeight = "bold";
  var divv = document.getElementById('testtime');
  divv.appendChild(t);

  var ins = document.createElement('h4');
  var txt2 = document.createTextNode("What is the postorder traversal of this bst?(Enter comma separated values)");
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

  var but1 = document.createElement('button');
  but1.style.width = '200px';
  but1.style.height = '40px';
  but1.id = "viewans";
  but1.style.color = "white";
  but1.style.background = "green";
  but1.style.fontSize = "25px";
  but1.style.fontWeight = "bold";
  but1.appendChild(document.createTextNode("View Answer"));

  var root = b2.getRoot();
  b2.postorder(root);

  var element55 = document.getElementById("subm");
  element55.appendChild(but1);
  document.getElementById("viewans").addEventListener("click", function(e) {
    var get = localStorage.getItem("bst_performance");
    get = get - 5;
    localStorage.setItem("bst_performance", get);
    var txta = document.createElement('textarea');
    txta.maxLength = 5000;
    txta.id = "answerr";
    var element5555 = document.getElementById("ans5");
    element5555.appendChild(txta);
    var nums = ""
    var i = 0;
    for (i = 0; i < postorder_traversal.length; i++) {


      nums += postorder_traversal[i];
      nums += ','

    }

    document.getElementById("answerr").value = nums;

    clearInterval(time);

    swal({
      title: "Data Strucutres Learning Enviornment Algo says:",
      text: "Please try again as you have availed the hint!",
      buttons: {
        confirm: "OK!"
      }
    }).then(val => {
      if (val) {
        window.location.href = "http://127.0.0.1:8000/bst_module/bst_question_5/";
      }
    });



  });
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
    //  alert(postorder_traversal.length);


    var j = 0;
    var flag = true;


    if (postorder_traversal.length != parsed.length) {
      var get = localStorage.getItem("bst_performance");
      get = get - 5;
      localStorage.setItem("bst_performance", get);
      //alert(get);
      swal({
        title: "Data Strucutres Learning Enviornment Algo says:",
        text: "Please try again traversal is wrong",
        buttons: {
          confirm: "OK!"
        }
      }).then(val => {
        if (val) {
          window.location.href = "http://127.0.0.1:8000/bst_module/bst_question_5/";
        }
      }); //window.location.href = "http://127.0.0.1:8000/bst_module/bst_question_5/";




    } else {

      for (j = 0; j < inputt.length; j++) {
        if (postorder_traversal[j] != parsed[j]) {
          //alert(postorder_traversal[j]);
          //alert(parsed[j]);
          flag = false;
        }
      }
      if (flag) {

        clearInterval(time);

        swal({
          title: "Data Strucutres Learning Enviornment Algo says:",
          text: "Congrats you have completed the BST quiz successfully!",
          buttons: {
            confirm: "OK!"
          }
        }).then(val => {
          if (val) {
            window.location.href = "http://127.0.0.1:8000/queue_stack/queue_stack_tut";
          }

        }); //window.location.href = "http://127.0.0.1:8000/bst_module/bst_question_4/";


      } else {
        var get = localStorage.getItem("bst_performance");
        get = get - 5;
        localStorage.setItem("bst_performance", get);
        //alert(get);
        swal({
          title: "Data Strucutres Learning Enviornment Algo says:",
          text: "Please try again traversal is wrong",
          buttons: {
            confirm: "OK!"
          }
        }).then(val => {
          if (val) {
            window.location.href = "http://127.0.0.1:8000/bst_module/bst_question_5/";
          }
        });


      }

    }




    //var root= b2.getRoot();
    //b2.inorder(root);
    //alert(global_array2[1]);

    /*  if (document.getElementById("uii").value==ans)
      {
        r1.inccorrect();
        alert("You have Got a right answer");

        //question_2();
      }
      else {
        r1.incwrong();
        alert("Wrong answer please try agian");


      }*/


  });
};



function creation() {

  /*  var a = document.getElementById("ran");
    a.style.display='none';
    var xx = document.getElementById("kin");
    xx.style.display='none';*/


  /*var head_33 = document.createElement('h3');
  var txt = document.createTextNode("Binary Search Tree");
  head_33.appendChild(txt);
  head_33.style.color = "yellow";

  var element33 = document.getElementById("c-n");
  element33.appendChild(head_33);*/



};

var Node = function(x, y, r, ctx, data) { //200,20,15,methods and operations for canvas, value
  // left child of a node
  this.leftNode = null;
  // right child of a node
  this.rightNode = null;

  // draw function. Responsible for drawing the node
  this.draw = function() {

    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
    ctx.font = "15px Comic Sans MS10";

    ctx.strokeText(data, x, y);
  };

  // Simple getters
  this.getData = function() {
    return data;
  };
  this.getX = function() {
    return x;
  };
  this.getY = function() {
    return y;
  };
  this.getRadius = function() {
    return r;
  };

  // Returns coordinate for the left child
  // Go back 3 times radius in x axis and
  // go down 3 times radius in y axis
  this.leftCoordinate = function() {
    return {
      cx: (x - (3 * r)),
      cy: (y + (3 * r))
    }
  };
  // Same concept as above but for right child
  this.rightCoordinate = function() {
    return {
      cx: (x + (3 * r)),
      cy: (y + (3 * r))
    }
  };
};

var Line = function() {
  // Takes
  // x,y      - starting x,y coordinate
  // toX, toY - ending x,y coordinate
  this.draw = function(x, y, toX, toY, r, ctx) {
    var moveToX = x;
    var moveToY = y + r;
    var lineToX = toX;
    var lineToY = toY - r;
    ctx.beginPath();
    ctx.moveTo(moveToX, moveToY);
    ctx.lineTo(lineToX, lineToY);
    ctx.strokeStyle = "red";

    ctx.stroke();
  };
};

var Bst = function() {
  var c = document.getElementById('my-canvas1');
  var ctx = c.getContext('2d');
  var line = new Line();
  this.root = null;

  var self = this;

  // Getter for root
  this.getRoot = function() {
    return this.root;
  };


  // Adds element to the tree
  this.add = function(data) {
    // If root exists, then recursively find the place to add the new node
    if (this.root) {
      this.recursiveAddNode(this.root, null, null, data);
    } else {
      // If not, the add the element as a root
      this.root = this.addAndDisplayNode(200, 20, 20, ctx, data);
      return;
    }
  };

  // Recurively traverse the tree and find the place to add the node
  this.recursiveAddNode = function(node, prevNode, coordinateCallback, data) {
    if (!node) {
      // This is either node.leftCoordinate or node.rightCoordinate

      var xy = coordinateCallback();
      var newNode = this.addAndDisplayNode(xy.cx, xy.cy, 20, ctx, data);
      line.draw(prevNode.getX(), prevNode.getY(), xy.cx, xy.cy, prevNode.getRadius(), ctx)
      return newNode;
    } else {
      if (data <= node.getData()) {
        node.left = this.recursiveAddNode(node.left, node, node.leftCoordinate, data);
      } else {
        node.right = this.recursiveAddNode(node.right, node, node.rightCoordinate, data);
      }
      return node;
    }
  };

  // Adds the node to the tree and calls the draw function
  this.addAndDisplayNode = function(x, y, r, ctx, data) {
    var node = new Node(x, y, r, ctx, data);
    node.draw();
    return node;
  };
};
var init = function() {

  creation();
  var num_nodes = Math.floor((Math.random() * 4) + 3);
  var i;
  var node_val;
  for (i = 0; i < num_nodes; i++) {
    node_val = Math.floor((Math.random() * 98) + 1);

    vals.push(node_val);
    //random_nodes.push(node_val)
    bst1.add(node_val);

  }
  var j = 0;
  for (j = 0; j < num_nodes; j++) {
    b2.add(vals[j]);
  }
  /*  var root= b2.getRoot();
    var n  = b2.findmin(root);
    var ans = n.getData();
    alert(ans);*/
  question_5();



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
        window.location.href = "http://127.0.0.1:8000/bst_module/bst_question_5/";
      }
    });
  }
}



var bst1 = new Bst();

var b2 = new BTree1();
var r1 = new Result();
window.onload = init;