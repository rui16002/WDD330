export default // ShapeMatching View handler

class ShapeMatchingView {
  constructor (container)
  {
  	this.container = container;
  }

  drawSVG(){
  	this.container.innerHTML = 
  	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 20" preserveAspectRatio="xMidYMid meet">'+
  	'<rect x="02" y="2" width="6" height="3" fill="grey" class="static" id="rect_dp"/>'+
    '<rect x="13" y="10" width="6" height="3" fill="green" class="draggable" id="rect_dg"/>'+
    '<circle fill="grey" cx="5" cy="5" r="3" transform="translate(0, 10)" class="static" id="circle_dp" />'+
    '<circle fill="red"  cx="5" cy="5" r="3" transform="translate(8, 9)" class="draggable" id="circle_dg"/>'+
    '<polygon fill="grey" points="16.9 15.6 17.4 18.2 15 17 12.6 18.2 13.1 15.6 11.2 13.8 13.8 13.4 15 11 16.2 13.4 18.8 13.8" class="static" transform="translate(11, 0)" id="star_dp"/>'+
    '<polygon fill="#ffa500" points="6.9 5.6 7.4 8.2 5 7 2.6 8.2 3.1 5.6 1.2 3.8 3.8 3.4 5 1 6.2 3.4 8.8 3.8" class="draggable" transform="translate(6, 5)" id="star_dg"/>'+
    '<polygon fill="grey" points="6,1 9,6 3,6" class="static" transform="translate(20, 0)" id="triangle_dp"/>'+
    '<polygon fill="lime" points="6,1 9,6 3,6" class="draggable" transform="translate(9, 10)" id="triangle_dg"/>'+ 
'</svg>';
  }
}

