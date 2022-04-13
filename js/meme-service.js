'use strict'

let gMeme 

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
    console.log('are you crazy?');
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function changeFontSize(diff){
    gMeme.lines[gMeme.selectedLineIdx].size += +diff
}

function setSelectedLine(){ 
    console.log('befpre',gMeme.selectedLineIdx);
    gMeme.lines[gMeme.selectedLineIdx].isSelected= false
    if ( gMeme.selectedLineIdx  === gMeme.lines.length-1) gMeme.selectedLineIdx--
    else gMeme.selectedLineIdx++
    console.log('after',gMeme.selectedLineIdx);
    gMeme.lines[gMeme.selectedLineIdx].isSelected= true
    
}


// function addLine(){
//     gMeme.lines.push({
//         txt: 'text goes here',
//             size: 50,
//             align: 'center',
//             color: 'white'
//     })
// }



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
            isSelected: true
        },
            {
            txt: 'text goes here',
            size: 50,
            align: 'center',
            color: 'white',
            isSelected: false
        },
    ]
    }
}