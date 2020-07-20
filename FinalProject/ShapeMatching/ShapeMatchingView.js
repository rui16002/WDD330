export default // ShapeMatching View handler

class ShapeMatchingView {
  constructor (container)
  {
  	this.container = container;
  }

  drawSVG(){
    console.log(window);
  	this.container.innerHTML = 
 '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" preserveAspectRatio="xMidYMid meet">'+
  
'<rect x="9.6875" y="121.6875" width="150.875" height="67.75" fill="grey" class="static" id="rect_dg"/>'+
'<circle fill="grey" cx="72.09375" cy="336.28125" r="62.09375" class="static" id="circle_dg"/>'+
'<polygon fill="grey" points="595.2341918945312,345.96307373046875 604.93359375,397.36541748046875 558.376220703125,373.6412353515625 511.81890869140625,397.36541748046875 521.5183715820312,345.96307373046875 484.6604919433594,310.37689208984375 535.0975952148438,302.4687805175781 558.376220703125,255.0205078125 581.6549072265625,302.4687805175781 632.092041015625,310.37689208984375 " class="static" id="star_dg"/>'+
'<polygon fill="grey" points="559.0072631835938,71.25 629.3895263671875,189.07447814941406 488.625,189.07447814941406 " class="static" id="triangle_dg"/>'+
'<path class="static" fill="grey" d="m236.0742,79.84533l72,-72l72,72l-72,72l-72,-72z" id="rombo_dg"/>'+
'<path id="pentagon_dg" d="m233.785,388.06527l68.77484,-50.03742l68.775,50.03742l-26.26959,80.96259l-85.01057,0l-26.26967,-80.96259l-0.00001,0z" fill="grey" class="static"/>'+

'<rect x="230" y="220" width="150.875" height="67.75" fill="#7f007f" class="draggable" id="rect_dg"/>'+
'<circle fill="#0000ff" cx="300" cy="240" r="62.09375" class="draggable" id="circle_dg"/>'+
'<polygon fill="#ffff00" transform="translate(-240 -80)" points="595.2341918945312,345.96307373046875 604.93359375,397.36541748046875 558.376220703125,373.6412353515625 511.81890869140625,397.36541748046875 521.5183715820312,345.96307373046875 484.6604919433594,310.37689208984375 535.0975952148438,302.4687805175781 558.376220703125,255.0205078125 581.6549072265625,302.4687805175781 632.092041015625,310.37689208984375 " class="draggable" id="star_dg"/>'+
'<polygon fill="lime" transform="translate(-240 100)" points="559.0072631835938,71.25 629.3895263671875,189.07447814941406 488.625,189.07447814941406 " class="draggable" id="triangle_dg"/>'+
'<path class="draggable" transform="translate(0 150)" fill="#ff7f00" d="m236.0742,79.84533l72,-72l72,72l-72,72l-72,-72z" id="rombo_dg"/>'+
'<path id="pentagon_dg" transform="translate(0 -150)" d="m233.785,388.06527l68.77484,-50.03742l68.775,50.03742l-26.26959,80.96259l-85.01057,0l-26.26967,-80.96259l-0.00001,0z" fill="#ff0000" class="draggable"/>'+
'</svg>';
  }
}

