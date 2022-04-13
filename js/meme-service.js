'use strict'

let gMeme 




function getMeme(id){
    if(!gMeme){
        gMeme= _createMeme(id)
    }
  return gMeme
}


function setLineTxt(txt){ ///// REMEMBER TO MAKE THE LINE CHANGABLE
    gMeme.lines[0].txt =txt
   
}

function setColor(color) { ///// REMEMBER TO MAKE THE LINE CHANGABLE
    console.log('are you crazy?');
    gMeme.lines[0].color = color
}

function changeFontSize(diff){
    gMeme.lines[0].size += +diff
}



function _createMeme(id){
    return  {
        selectedImgId: id,
        selectedLineIdx:0,
        lines: [{
            txt: 'text goes here',
            size: 50,
            align: 'center',
            color: 'white'
        }]
    }
}