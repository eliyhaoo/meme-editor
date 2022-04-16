"use strict";

let gElCanvas;
let gCtx;
let gStartPos
const gTouchEvs =['touchstart', 'touchmove', 'touchend']

function renderMeme(id) {
  const meme = getMeme(id);
  console.log('meme', meme);
  drawImgFromLocal(meme);
}

function initCanvas() {
  gElCanvas = document.querySelector("#canvas");
  gCtx = gElCanvas.getContext("2d");
  addEventListeners()
  

  // resizeCanvas()
}

function addEventListeners(){
  addMouseEvents()
  addTouchEvents()
  window.addEventListener("resize", resizeCanvas);
}

function addMouseEvents(){
gElCanvas.addEventListener('mousedown',onDown)
gElCanvas.addEventListener('mousemove',onMove)
gElCanvas.addEventListener('mouseup',onUp)
}
function addTouchEvents(){
gElCanvas.addEventListener('touchstart',onDown)
gElCanvas.addEventListener('touchmove',onMove)
gElCanvas.addEventListener('touchend',onUp)
}

//////////Mouse & Touch Events ///////////////

function onDown(ev){
  const pos = getEvPos(ev)
  if (!isLineClicked(pos)) return
  gStartPos = pos
  setLineDrag(true)
  
}
function onMove(ev){
  const pos = getEvPos(ev)
  if (isLineClicked(pos)) document.body.style.cursor  = 'all-scroll'
  else document.body.style.cursor = 'default'
  const meme = getMeme()
  if (!meme.lines[0].isDrag) return
  console.log('pos',pos);
  const dx = pos.x - gStartPos.x
  const dy = pos.y - gStartPos.y
  moveLine(dx,dy)
  renderMeme()
  

}

function onUp(){
setLineDrag(false)
}

function getEvPos(){
  let pos = {
    x: ev.offsetX,
    y: ev.offsetY
}
if (gTouchEvs.includes(ev.type)) {
    ev.preventDefault()
    ev = ev.changedTouches[0]
    pos = {
        x: ev.pageX - ev.target.offsetLeft,
        y: ev.pageY - ev.target.offsetTop
    }
}
return pos
}

function getCanvas(){
  return gElCanvas
}

///////////// OnClickEvents /////////////////
function onTextInput(txt) {
  console.log("changed");
  setLineTxt(txt);
  renderMeme();
}

function onDeleteLine(){
    deleteLine()
    renderMeme()
}

function onAddLine(){
    addLine(gElCanvas)
    renderMeme()

}

function onAlign(alignPos){
  updateLineAlign(alignPos)
  renderMeme()
}

function onFontChange(font){
  console.log('font',font);
updateFont(font)
renderMeme()
}

function onChangeColor(val) {
  console.log("val", val);
  setColor(val);
  renderMeme();
}

function onFontSizeChange(diff) {
  changeFontSize(diff);
  renderMeme();
}

function onSwitchLines() {
  setSelectedLine();
  renderMeme();
}

//////////////\\\\\\\DRAW FUNCTINOS ///////////\\\\\\\\\\\\\
function drawText(x, y, txt, size, align, color,font) {
  gCtx.beginPath();
  gCtx.textBaseline = "middle";
  gCtx.textAlign = align;
  gCtx.fillStyle = color;
  gCtx.font = `${size}px ${font}`;
  gCtx.fillText(txt, x, y);
  gCtx.lineWidth = 2;
  gCtx.strokeStyle = "black";
  gCtx.strokeText(txt, x, y);
}

function drawRect(x, y, size) {
  let gradient = gCtx.createLinearGradient(100, 60, 240, 40);
  gradient.addColorStop("0", "magenta");
  gradient.addColorStop("0.5", "blue");
  gradient.addColorStop("1.0", "orange");
  gCtx.beginPath();
  gCtx.rect(x, y, gElCanvas.width - 50, size);
  gCtx.lineWidth = 3;
  gCtx.strokeStyle = gradient;
  gCtx.stroke();
}

function drawImgFromLocal(meme) {
  console.log('meme', meme);
  const { lines, selectedImgId } = meme;
  let img = new Image();
  img.src = `/css/memeImgs/${selectedImgId}.jpg`;
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
    

    lines.map((line, idx) => {
      const { txt, size, align, color, isSelected,font ,pos} = line;
      // const height = idx === 0 ? size : idx === 1 ?gElCanvas.height - size : gElCanvas.height/2

      drawText(pos.x, pos.y, txt, size, align, color,font);
      // drawText(gElCanvas.width/2,size,txt,size,align,color)
      //    drawRect(size / 2, size / 2, size);// first row
      //    drawRect(size / 2, gElCanvas.height -size*1.5 , size);

     
      
      if (meme.selectedLineIdx === idx) { 
       drawRect(25, pos.y - 0.5*size, size);
        
        }
      }
      // if (isSelected) { //come back and change completely
      //     console.log('enter selected ');
      //   switch (meme.selectedLineIdx) {
      //     case 0:
      //       drawRect(25, size / 2, size);
      //       break;
      //     case 1:
      //       drawRect(25, gElCanvas.height - size * 1.5, size);
      //       break;
      //     case 2:
      //       console.log('enter caseselected ');

      //       drawRect(25, gElCanvas.height/2 -0.5*size, size);
      //       break;
        // }
      // }
    );

    // const {txt,size,align,color} = lines[idx]

    // drawText(gElCanvas.width/2,size,txt,size,align,color)
    // drawRect(size/2,size/2,size)
  };
}

function resizeCanvas() {
  //come back to fix responsivity to all pics.
  // const elContainer = document.querySelector('.canvas-container')
  // gElCanvas.width = elContainer.offsetWidth -10
  // gElCanvas.height = elContainer.offsetHeight -10
}




function getEvPos(ev) {
  let pos = {
    x: ev.offsetX,
    y: ev.offsetY
}
if (gTouchEvs.includes(ev.type)) {
    ev.preventDefault()
    ev = ev.changedTouches[0]
    pos = {
       x: ev.pageX - ev.target.offsetLeft,
        y: ev.pageY - ev.target.offsetTop
    }

}
return pos
}
function onDownloadCanvas(elLink){
    const data = gElCanvas.toDataURL()
    elLink.hrf = data
    elLink.download = 'myCanvas.png'
}
