'use strict'

let gMeme 




function getMeme(id){
    if(!gMeme){
        gMeme= _createMeme(id)
    }
  return gMeme
}


function setLineTxt(txt){
    gMeme.lines[0].txt =txt
    console.log('mem',gMeme);
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