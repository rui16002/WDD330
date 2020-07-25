// ShapeMatching Model
export default class ShapeMatchingModel {
  constructor() {
  }

controlDraggables(){

function onDrop(dropped) {
    gsap.fromTo(dropped, {opacity:1}, {duration: 0.1, opacity:0, repeat:3, yoyo:true});
  }

  var staticList = document.getElementsByClassName("static");

  Draggable.create(".draggable", {
    type: "x, y",
    edgeResistance: 0.65,
    bounds:"svg",
    inertia: true,
    onDrag: function() {
	  var i = staticList.length;
	  while (--i > -1) {
	    var currDrop = staticList[i];
	    var staticShapeType = currDrop.id.split("_")[0];
	    var selectedShapeType = this.target.id.split("_")[0];
      //If it overlaps by 75% at least, trigger
      if (this.hitTest(currDrop, "75%")) {
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
	    var currDrop = staticList[i];
	    var staticShapeType = currDrop.id.split("_")[0];
	    var selectedShapeType = this.target.id.split("_")[0];
      //If it overlaps by 75% at least, trigger
      if (this.hitTest(currDrop, "75%")) {
    	  if (staticShapeType.match(selectedShapeType)==staticShapeType){
			    this.target.classList.add("hide");
			    currDrop.classList.remove("svgHover");
			    currDrop.classList.add("highlight");
          //Say what shape it is
          var msg = new SpeechSynthesisUtterance();
          msg.text = selectedShapeType;
          window.speechSynthesis.speak(msg);
		    }
	    }
    }
  }
  });
  }
}