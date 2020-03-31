var performance = function() {
  this.get1 = localStorage.getItem("bst_performance");
  this.get2 = localStorage.getItem("queue_stack_performance");
  this.get3 = localStorage.getItem("graph_performance");
};


window.onload = function() {
  /*var get1 = localStorage.getItem("bst_performance");
  var get2 = localStorage.getItem("queue_stack_performance");
  var get3 = localStorage.getItem("graph_performance");*/
  var per = new performance();
  var vals = {
    bst: per.get1,
    queue_stack: per.get2,
    graph: per.get3
  };
  var chart = new CanvasJS.Chart("chartContainer", {

    //theme: "light4",
    data: [{
      // Change type to "doughnut", "line", "splineArea", etc.
      type: "column",
      dataPoints: [{
          label: "Binary Search Tree",
          y: parseInt(vals.bst),
        },
        {
          label: "Queue & Stack",
          y: parseInt(vals.queue_stack),
        },
        {
          label: "Graphs",
          y: parseInt(vals.graph)
        }
      ]
    }]
  });
  chart.render();
}