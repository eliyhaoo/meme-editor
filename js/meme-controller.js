"use strict";

let gElCanvas;
let gCtx;

function renderMeme(id, idx) {
  const meme = getMeme(id);
  drawImgFromLocal(meme, idx);
}

function initCanvas() {
  gElCanvas = document.querySelector("#canvas");
  gCtx = gElCanvas.getContext("2d");
  window.addEventListener("resize", resizeCanvas);
  // resizeCanvas()
}

///////////// OnClickEvents /////////////////
function onTextInput(txt) {
  console.log("changed");
  setLineTxt(txt);
  renderMeme();
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
function drawText(x, y, txt, size, align, color) {
  gCtx.beginPath();
  gCtx.textBaseline = "middle";
  gCtx.textAlign = align;
  gCtx.fillStyle = color;
  gCtx.font = `${size}px impact`;
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
  gCtx.rect(x, y, gElCanvas.width - size, size);
  gCtx.lineWidth = 3;
  gCtx.strokeStyle = gradient;
  gCtx.stroke();
}

function drawImgFromLocal(meme, idx = 0) {
  const { lines, selectedImgId } = meme;
  let img = new Image();
  img.src = `meme-imgs/${selectedImgId}.jpg`;
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
    console.log("lines", lines);
    let count = 0;
    lines.map((line, idx) => {
      const { txt, size, align, color, isSelected } = line;
      const height = idx === 0 ? size : gElCanvas.height - size;

      drawText(gElCanvas.width / 2, height, txt, size, align, color);
      // drawText(gElCanvas.width/2,size,txt,size,align,color)
      //    drawRect(size / 2, size / 2, size);// first row
      //    drawRect(size / 2, gElCanvas.height -size*1.5 , size);

      if (isSelected) {
        switch (meme.selectedLineIdx) {
          case 0:
            drawRect(size / 2, size / 2, size);
            break;
          case 1:
            drawRect(size / 2, gElCanvas.height - size * 1.5, size);
            break;
        }
      }
    });

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
