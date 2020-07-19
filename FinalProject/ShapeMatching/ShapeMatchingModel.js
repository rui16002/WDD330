// ShapeMatching Model
export default class ShapeMatchingModel {
  constructor() {
  }

controlDraggables(){
  var draggableList = document.getElementsByClassName("draggable");
  var staticList = document.getElementsByClassName("static");

  var container = document.querySelector('svg');

//the update() function is what creates the Draggable according to the options selected (snapping).
  Draggable.create(".draggable", {
    bounds: container,
    edgeResistance: 0.65,
    inertia: true,
    autoScroll: true,
  });


/*  Draggable.create(".draggable", {
    bounds:"svg",
    inertia: true,
    onDrag: function() {
	  var i = staticList.length;
	  while (--i > -1) {
		  	  //If it overlaps by 50% at least, trigger
	      var currDrop = staticList[i];
	      var staticShapeType = currDrop.id.split("_")[0];
	      var selectedShapeType = this.target.id.split("_")[0];
          if (this.hitTest(currDrop, "90%")) {
  
    	  if (staticShapeType.match(selectedShapeType)==staticShapeType)
			  currDrop.classList.add("svgHover");
	  }
	  else
        	  currDrop.classList.remove("svgHover");
    }
  },
    onDragEnd:function(e) {
	  var i = staticList.length;
	  while (--i > -1) {
		  //If it overlaps by 50% at least, trigger
	      var currDrop = staticList[i];
	      var staticShapeType = currDrop.id.split("_")[0];
	      var selectedShapeType = this.target.id.split("_")[0];
          if (this.hitTest(currDrop, "90%")) {
    	  if (staticShapeType.match(selectedShapeType)==staticShapeType)
    	  {
			  this.target.classList.add("hide");
			  currDrop.classList.remove("svgHover");
			  currDrop.classList.add("highlight");
		  }
	  }
    }
  }
  });*/
  }
}