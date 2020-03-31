var stack = [];
var diff = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var index = 0;
var pop_index = 1;
var length;
var tick;


var Stack = function() {
  this.pop = function() {
    length = stack.length - pop_index;


    if (length != 0) {
      tick--
      var ment2 = document.getElementById("top");

      ment2.innerHTML = '';
      ment2.appendChild(document.createTextNode(tick));

      var numtodq = stack[stack.length - pop_index];

      var x = document.getElementById(numtodq);
      x.style.display = 'none';
      pop_index++;
    }
    if (length == 0) {
      swal({
        title: "Data Strucutres Learning Enviornment Algo says:",
        text: "stack is empty!",
        buttons: {
          confirm: "OK!"
        }
      }).then(val => {
        if (val) {
          window.location.href = "http://127.0.0.1:8000/queue_stack/stack_simm/"; // chnage it to new page
        }
      });
    }
    //  alert(queue.length);

  };
};

function ques() {
  var ele3 = document.getElementById('orig2');
  var head2;
  var text_node3;


  var ele = document.getElementById('orig');
  var text_node;
  var node_val = document.getElementById("num_to_push").value;
  if (node_val == '') {
    swal({
      title: "Data Strucutres Learning Enviornment Algo says:",
      text: "Please Enter a number!",
      buttons: {
        confirm: "OK!"
      }
    }).then(val => {
      if (val) {
        window.location.href = "http://127.0.0.1:8000/queue_stack/stack_simm/"; // chnage it to new page
      }
    });
  }
  var mixed_id = node_val.concat(diff[index]);
  stack.push(mixed_id);
  div = document.createElement('DIV');
  div.style.content = "d";
  div.style.width = '80px';
  div.style.height = '80px';
  div.id = mixed_id;
  div.style.background = "yellow";
  div.style.margin = "0px auto";

  div.style.float = "left";
  div.style.borderStyle = "solid";
  div.style.borderColor = "black";
  text_node = document.createElement('p');
  //text_node.id = mixed_id;
  text_node.appendChild(document.createTextNode(node_val));
  text_node.style.fontSize = "30px";
  text_node.style.fontWeight = "900";
  div.appendChild(text_node);
  ele.appendChild(div);

  if (index == 0) {


    head2 = document.createElement('DIV');
    head2.style.content = "d";
    head2.style.width = '80px';
    head2.style.height = "80px";
    head2.style.background = "yellow";
    head2.style.margin = "0px auto";

    head2.style.borderStyle = "solid";
    head2.style.borderColor = "black";

    text_node3 = document.createElement('p');
    text_node3.id = "top";
    text_node3.appendChild(document.createTextNode(index + 1));
    text_node3.style.fontSize = "30px";
    text_node3.style.fontWeight = "900";
    head2.appendChild(text_node3);
    ele3.appendChild(head2);
  } else {
    var ment2 = document.getElementById("top");

    ment2.innerHTML = '';
    ment2.appendChild(document.createTextNode(index + 1));



  }


  index++;
  tick = index;

};

function init() {

  document.getElementById("pushButton").addEventListener("click", function(event) {
    event.preventDefault();
    ques();
  });

  document.getElementById("popButton").addEventListener("click", function(event) {
    event.preventDefault();
    var s = new Stack();
    s.pop();
  });

  document.getElementById("ontoques2").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "http://127.0.0.1:8000/queue_stack/queue_stack_testing/";
  });



};


window.onload = init;