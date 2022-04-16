'use strict'

let gMeme 
let gIsSwitchGoingUp = false

function getMeme(id){
    const elCanvas = getCanvas()
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

function isLineClicked(clickedPos){
    const elCanvas = getCanvas()
    const {x,y}= clickedPos

    const clickedLineIdx = gMeme.lines.map((line,idx) => {
        const height = line.pos.y
        const size = line.size
        if (x >= 25 && x <=elCanvas.width-25&&y>=height&& y<= height+ size ){
            return idx

            }
        

      })
}
    // const height = gMeme.lines[0].pos.y
    // const size = gMeme.lines[0].size
    // if (x >= 25 && x <=elCanvas.width-25&&y>=height&& y<= height+ size ){
    //     return true 
    // } else return false

function setLineDrag(isDrag) {
  gMeme.lines[0].isDrag = isDrag
}

function moveLine(dx,dy){
    gMeme.lines[0].pos.x = dx
    gMeme.lines[0].pos.y = dy
}


function setSelectedLine(){ // come back here to make it better itp
    if (gMeme.selectedLineIdx === gMeme.lines.length-1) gMeme.selectedLineIdx = 0
    else gMeme.selectedLineIdx++

  
    // console.log('befpre',gMeme.selectedLineIdx);
    // gMeme.lines[gMeme.selectedLineIdx].isSelected= false
    // if ( gMeme.selectedLineIdx  === gMeme.lines.length-1) gIsSwitchGoingUp = true   
    // else if (gMeme.selectedLineIdx  === 0) gIsSwitchGoingUp = false
    
    // if (gIsSwitchGoingUp)gMeme.selectedLineIdx--
    // else gMeme.selectedLineIdx++
    
    // gMeme.lines[gMeme.selectedLineIdx].isSelected= true   
    // console.log('after',gMeme.selectedLineIdx);
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


function addLine(elCanvas){
    const height = gMeme.lines.length === 0 ? 50 : gMeme.lines.length === 1 ?elCanvas.height - 50 : elCanvas.height/2

    // if (gMeme.lines.length === 0){

    // }else if (line.length === 1){

    // }else 

    
    gMeme.lines.push({
            txt: 'text goes here',
            size: 50,
            align: 'center',
            color: 'white',
            font: 'impact',
            isDrag: false,
            pos: {x:  elCanvas.width / 2 ,y:height},
    })
    gMeme.selectedLineIdx =gMeme.lines.length -1
    // gMeme.lines[gMeme.selectedLineIdx].isSelected = false
    // gMeme.lines.push({
    //         txt: 'text goes here',
    //         size: 50,
    //         align: 'center',
    //         color: 'white',
    //         font: 'impact',
    //         pos: {x = gElCanvas.width / 2 ,y=height},
    //         isSelected: true
    // })
    // gMeme.selectedLineIdx =gMeme.lines.length -1
}



function _createMeme(id){
    const elCanvas = getCanvas()
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
            isDrag: false,
            pos: {x : elCanvas.width / 2 ,y:50},
        },
        //     {
        //     txt: 'text goes here',
        //     size: 50,
        //     align: 'center',
        //     color: 'white',
        //     font: 'impact',
        //     isDrag: false,
        //     pos: {x : elCanvas.width / 2 ,y:50},
        // },
    
    ]
    }
}