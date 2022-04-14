'use strict'

let gImgs = [
    {id:1, keywords:['funny','person','hahaha']},
    {id:2, keywords:['funny','person','hahaha']},
    {id:3, keywords:['funny','person','hahaha']},
    {id:4, keywords:['funny','person','hahaha']},
    {id:5, keywords:['funny','person','hahaha']},
    {id:6, keywords:['funny','person','hahaha']},
    {id:7, keywords:['funny','person','hahaha']},
    {id:8, keywords:['funny','person','hahaha']},
    {id:9, keywords:['funny','person','hahaha']},
    {id:10, keywords:['funny','person','hahaha']},
    {id:11, keywords:['funny','person','hahaha']},
    {id:12, keywords:['funny','person','hahaha']},
    {id:13, keywords:['funny','person','hahaha']},
    {id:14, keywords:['funny','person','hahaha']},
    {id:15, keywords:['funny','person','hahaha']},
    {id:16, keywords:['funny','person','hahaha']},
    {id:17, keywords:['funny','person','hahaha']},
    {id:18, keywords:['funny','person','hahaha']}
]

function onInit() {
    renderGallery()
    initCanvas()

}



function renderGallery(){
    const elContainer = document.querySelector(".gallery-container")
    const imgsSTR = gImgs.map(img => `
    <img onclick="onImgSelect('${img.id}')" src="/css/meme-imgs/${img.id}.jpg" alt="img-${img.id}">`)
   elContainer.innerHTML = imgsSTR.join('')


}

function onOpenGallery(){
closeEditor()
openGallery()
}
function onOpenMemes(){
closeGallery()
openEditor()
}

function onImgSelect(id){
    closeGallery()
    openEditor()
    renderMeme(id,0)
}

function openGallery(){
    document.querySelector('.main-gallery').hidden = false
}
function closeGallery(){
    document.querySelector('.main-gallery').hidden = true
}
function openEditor(){
    document.querySelector('.meme-editor').style.display = 'flex'
}
function closeEditor(){
    document.querySelector('.meme-editor').hidden= true
}



function getImgById(id){
   return gImgs.find(img => +id=== img.id)
   
}