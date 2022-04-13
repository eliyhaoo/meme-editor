'use strict'

let gElCanvas
let gCtx

function renderMeme(id,idx) {
    const meme = getMeme(id)
    drawImgFromLocal(meme,idx)
      
}

function initCanvas(){
    gElCanvas = document.querySelector('#canvas')
    gCtx = gElCanvas.getContext("2d")
    window.addEventListener('resize',resizeCanvas)
    // resizeCanvas()  
}

function onTextInput(txt){
    console.log('changed');
    setLineTxt(txt)
    renderMeme()
}



//////////////\\\\\\\DRAW FUNCTINOS ///////////\\\\\\\\\\\\\
function drawText(x,y,txt,size,align,color) {
    console.log(txt);
    gCtx.beginPath()
    gCtx.textBaseline = 'middle' //read more about index for row
    gCtx.textAlign= align
    gCtx.fillStyle = color
    gCtx.font = `${size}px impact`
    gCtx.fillText(txt, x, y);
}

function drawRect(x,y,size,color){
    console.log(size,color);
    gCtx.beginPath()
    gCtx.rect(x,y,gElCanvas.width-size,size)
    gCtx.lineWidth= 3
    gCtx.strokeStyle = color
    gCtx.stroke()
}


function drawImgFromLocal(meme,idx =0){
    const {lines,selectedImgId} = meme
    let img = new Image()
    img.src = `meme-imgs/${selectedImgId}.jpg`
    img.onload= ()=>{
        gCtx.drawImage(img,0,0,gElCanvas.width,gElCanvas.height)
        const {txt,size,align,color} = lines[idx]
   
        drawText(gElCanvas.width/2,size,txt,size,align,color)
        drawRect(size/2,size/2,size,color)
        
    } 
}

function resizeCanvas(){
    //come back to fix responsivity to all pics. 

    // const elContainer = document.querySelector('.canvas-container')
    // gElCanvas.width = elContainer.offsetWidth -10
    // gElCanvas.height = elContainer.offsetHeight -10 
}





