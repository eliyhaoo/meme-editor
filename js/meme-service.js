'use strict'

let gMeme 
let gIsSwitchGoingUp = false

function getMeme(id){
    if(!gMeme){
        gMeme= _createMeme(id)
        console.log('sourcer',gMeme);
    }
  return gMeme
}


function setLineTxt(txt){ ///// REMEMBER TO MAKE THE LINE CHANGABLE
    gMeme.lines[gMeme.selectedLineIdx].txt =txt  
}
function setColor(color) { ///// REMEMBER TO MAKE THE LINE CHANGABLE
    gMeme.lines[gMeme.selectedLineIdx].color = color
}
function changeFontSize(diff){
    gMeme.lines[gMeme.selectedLineIdx].size += +diff
}
function updateFont(font) {
    gMeme.lines[gMeme.selectedLineIdx].font=font
}


function setSelectedLine(){ // come back here to make it better itp
    console.log('befpre',gMeme.selectedLineIdx);
    gMeme.lines[gMeme.selectedLineIdx].isSelected= false
    if ( gMeme.selectedLineIdx  === gMeme.lines.length-1) gIsSwitchGoingUp = true   
    else if (gMeme.selectedLineIdx  === 0) gIsSwitchGoingUp = false
    
    if (gIsSwitchGoingUp)gMeme.selectedLineIdx--
    else gMeme.selectedLineIdx++
    
    gMeme.lines[gMeme.selectedLineIdx].isSelected= true   
    console.log('after',gMeme.selectedLineIdx);
}

function deleteLine(){
    if (gMeme.selectedLineIdx > 0){
        gMeme.selectedLineIdx--
        gMeme.lines.splice(gMeme.selectedLineIdx+1,1)
        gMeme.lines[gMeme.selectedLineIdx].isSelected= true     
    }else {
        gMeme.selectedLineIdx = 0
        gMeme.lines.splice(gMeme.selectedLineIdx,1)
        if (!gMeme.lines.length) return 
        gMeme.lines[gMeme.selectedLineIdx].isSelected= true     
        }
}

function updateLineAlign(alignPos) {
    gMeme.lines[gMeme.selectedLineIdx].align= alignPos
}


function addLine(){
    gMeme.lines[gMeme.selectedLineIdx].isSelected = false
    gMeme.lines.push({
        txt: 'text goes here',
            size: 50,
            align: 'center',
            color: 'white',
            font: 'impact',
            isSelected: true
    })
    gMeme.selectedLineIdx =gMeme.lines.length -1
}



function _createMeme(id){
    return  {
        selectedImgId: id,
        selectedLineIdx:0,
        lines: [
            {
            txt: 'text goes here',
            size: 50,
            align: 'center',
            color: 'white',
            font: 'impact',
            isSelected: true
        },
    
    ]
    }
}