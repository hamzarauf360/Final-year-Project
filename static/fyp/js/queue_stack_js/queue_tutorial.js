var queue = [];
var queue2 = [];

var diff = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var index = 0;
var index2 = 0;
var headdd = 1;

var node_val;
var diff2 = ['aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg', 'hh', 'ii', 'jj', 'kk', 'll', 'mm', 'nn', 'oo', 'pp', 'qq', 'rr', 'ss', 'tt', 'uu', 'vv', 'ww', 'xx', 'yy', 'zz'];

var Queue = function() {

  this.deq = function() {
    if (queue.length != 0) {
      var ment = document.getElementById("headd");
      ment.innerHTML = '';
      ment.appendChild(document.createTextNode(headdd));


      var numtodq = queue[0];
      var numtodq2 = queue2[0];
      var x = document.getElementById(numtodq);
      x.style.display = 'none';
      var xx = document.getElementById(numtodq2);
      xx.style.background = "red";
      queue.shift();
      queue2.shift();
      headdd++;
    }
    if (queue.length == 0) {
      swal({
        title: "Data Strucutres Learning Enviornment Algo says:",
        text: "Queue is empty!",
        buttons: {
          confirm: "OK!"
        }
      }).then(val => {
        if (val) {
          window.location.href = "http://127.0.0.1:8000/queue_stack/queue_stack_tut/"; // chnage it to new page
        }
      });
    }
    //  alert(queue.length);

  };
};

function ques() {
  var ele = document.getElementById('orig');
  var ele2 = document.getElementById('orig2');

  var ele3 = document.getElementById('orig3');

  var text_node;
  var head;
  var head2;

  var text_node2;
  var text_node3;

  var node_val = document.getElementById("num_to_enq").value;
  var node_val2 = document.getElementById("num_to_enq").value;

  if (node_val == '') {
    swal({
      title: "Data Strucutres Learning Enviornment Algo says:",
      text: "Please Enter a number!",
      buttons: {
        confirm: "OK!"
      }
    }).then(val => {
      if (val) {
        window.location.href = "http://127.0.0.1:8000/queue_stack/queue_stack_tut/"; // chnage it to new page
      }
    });
  }
  var mixed_id = node_val.concat(diff[index]);
  var mixed_id2 = node_val.concat(diff2[index2]);

  queue.push(mixed_id);
  queue2.push(mixed_id2);

  div = document.createElement('DIV');
  div.style.content = "d";
  div.style.width = '80px';
  div.style.height = "80px";
  div.id = mixed_id2;
  div.style.background = "yellow";
  div.style.margin = "0px auto";
  div.style.float = "left";



  div.style.borderStyle = "solid";
  div.style.borderColor = "black";
  text_node = document.createElement('p');
  text_node.id = mixed_id;
  text_node.appendChild(document.createTextNode(node_val));
  text_node.style.fontSize = "30px";
  text_node.style.fontWeight = "900";
  div.appendChild(text_node);
  ele.appendChild(div);

  if (index == 0) {
    head = document.createElement('DIV');
    head.style.content = "d";
    head.style.width = '80px';
    head.style.height = "80px";
    head.style.background = "yellow";
    head.style.margin = "0px auto";

    head.style.borderStyle = "solid";
    head.style.borderColor = "black";

    text_node2 = document.createElement('p');
    text_node2.id = "headd";
    text_node2.appendChild(document.createTextNode(index));
    text_node2.style.fontSize = "30px";
    text_node2.style.fontWeight = "900";
    head.appendChild(text_node2);
    ele2.appendChild(head);

    head2 = document.createElement('DIV');
    head2.style.content = "d";
    head2.style.width = '80px';
    head2.style.height = "80px";
    head2.style.background = "yellow";
    head2.style.margin = "0px auto";

    head2.style.borderStyle = "solid";
    head2.style.borderColor = "black";

    text_node3 = document.createElement('p');
    text_node3.id = "tail";
    text_node3.appendChild(document.createTextNode(index + 1));
    text_node3.style.fontSize = "30px";
    text_node3.style.fontWeight = "900";
    head2.appendChild(text_node3);
    ele3.appendChild(head2);
  } else {
    var ment2 = document.getElementById("tail");

    ment2.innerHTML = '';
    ment2.appendChild(document.createTextNode(index + 1));



  }




  index++;
  index2++;

};

function init() {


  document.getElementById("guessButton").addEventListener("click", function(event) {
    event.preventDefault();
    ques();
  });

  document.getElementById("deqButton").addEventListener("click", function(event) {
    event.preventDefault();
    var q = new Queue();
    q.deq();

  });

  document.getElementById("ontoques").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "http://127.0.0.1:8000/queue_stack/stack_simm/";
  });



};


window.onload = init;