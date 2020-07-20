// ShapeMatching Model
export default class ShapeMatchingModel {
  constructor() {
  }

controlDraggables(){

function onDrop(dropped) {
    gsap.fromTo(dropped, {opacity:1}, {duration: 0.1, opacity:0, repeat:3, yoyo:true});
  }

  var draggableList = document.getElementsByClassName("draggable");
  var staticList = document.getElementsByClassName("static");

  Draggable.create(".draggable", {
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
  });
  }
}