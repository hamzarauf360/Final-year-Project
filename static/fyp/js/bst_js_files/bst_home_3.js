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


function init() { //button hide after click and tutorial

  var num_nodes = Math.floor((Math.random() * 14) + 3);
  var i;
  var node_val;
  for (i = 0; i < num_nodes; i++) {
    node_val = Math.floor((Math.random() * 98) + 1);

    //random_nodes.push(node_val)
    bst1.add(node_val);

  }


  var para = document.createElement("p");
  var question = document.createTextNode("Is this a Binary Search Tree?");
  //  question.style.fontweight='bold';
  para.appendChild(question);
  var element2 = document.getElementById("q");
  element2.appendChild(para);
  para.style.color = "yellow";
  para.style.fontSize = "40px";
  para.style.fontWeight = "bold";

  var label = document.createElement("label");
  var radio = document.createElement("input");
  radio.type = "radio";
  radio.name = "rad";
  radio.value = "true";
  radio.id = "rad1";

  label.appendChild(radio);
  label.appendChild(document.createTextNode("Yes"));
  label.style.fontSize = "30px";

  var element3 = document.getElementById("options1");
  element3.appendChild(label);
  label.style.color = "yellow";

  var label2 = document.createElement("label");
  var radio2 = document.createElement("input");
  radio2.type = "radio";
  radio2.name = "rad";
  radio2.value = "false";
  label2.appendChild(radio2);
  label2.appendChild(document.createTextNode("No"));
  label2.style.fontSize = "30px";

  var element4 = document.getElementById("options2");
  element4.appendChild(label2);
  element4.style.color = "yellow";


  var but = document.createElement('button');
  but.style.width = '200px';
  but.style.height = '40px';
  but.id = "sub";
  but.style.fontSize = "25px";

  but.style.color = "white";
  but.style.background = "green";
  but.appendChild(document.createTextNode("Submit"));

  var element5 = document.getElementById("submit");
  element5.appendChild(but);

  document.getElementById("sub").addEventListener("click", function(e) {
    if (document.getElementById("rad1").checked) {

      window.location.href = "http://127.0.0.1:8000/bst_module/bst_ques/";
    } else {
      swal({
        title: "Data Strucutres Learning Enviornment Algo says:",
        text: "Wrong answer because: In bst, every left child is smaller than its parent and every right child is greater than its parent!",
        buttons: {
          confirm: "OK!"
        }
      }).then(val => {
        if (val) {
          window.location.href = "http://127.0.0.1:8000/bst_module/bst_sim4/";
        }
      });

    }
  });




};
var bst1 = new Bst();
window.onload = init;