'use strict'

let gImgs = [
    {id:1, keywords:['funny','person','hahaha']},
    {id:2, keywords:['funny','person','hahaha']}
]

function onInit() {
    renderGallery()

}



function renderGallery(){
    const elContainer = document.querySelector(".gallery-container")

    const imgsSTR = gImgs.map(img => `
    <img onclick="onImgSelect('${img.id}')" src="meme-imgs/${img.id}.jpg" alt="img-${img.id}">`)
    console.log(imgsSTR);

   elContainer.innerHTML = imgsSTR.join('')


}


function onImgSelect(id){
   renderMeme()
}






function getImgById(id){
   return gImgs.find(img => +id=== img.id)
   
}