"use strict";

let gImgs;
let gSearchedWord = null

const gKeyWords = [
  "famous",
  "angry",
  "human",
  "animal",
  "cute",
  "dog",
  "baby",
  "sleep",
  "funny",
  "happy",
  "surprised",
  "cheers",
];

function onInit() {
  _createImgs();
  renderGallery();
  initCanvas();
  renderKeywords()
}

function renderGallery() {
  const elContainer = document.querySelector(".gallery-container");
  const imgs = getImgsForDisplay()
  const imgsSTR = imgs.map(
    (img) => `
    <img onclick="onImgSelect('${img.id}')" src="/css/meme-imgs/${img.id}.jpg" alt="img-${img.id}">`
  );
  elContainer.innerHTML = imgsSTR.join("");
}

function onSearch(ev) {
  ev.preventDefault();
    updateSearchWord()
    renderGallery()
    gSearchedWord = null
}

function updateSearchWord(){
    gSearchedWord = document.querySelector('[name=search]').value
}


function getImgsForDisplay(){
    if (!gSearchedWord) return gImgs
    return  gImgs.filter(img => img.keywords.toString().includes(gSearchedWord))
   
}

function renderKeywords(){
    const KeywordsDataSTR = gKeyWords.map( word =>`<option>${word}</option>`) 
    document.querySelector('.keywords-container').innerHTML = KeywordsDataSTR.join('')
    let KeyWordsBarSTR =''
    for (let i=0; i<5; i++){
       KeyWordsBarSTR += `<span>${gKeyWords[i]}</span>`  
    }
   KeyWordsBarSTR+= '<button class="more-btn">more...</button></div>'
   document.querySelector('.words-container').innerHTML= KeyWordsBarSTR
   
  

}


function onOpenGallery() {
  closeEditor();
  openGallery();
}
function onOpenMemes() {
  closeGallery();
  openEditor();
}

function onImgSelect(id) {
  closeGallery();
  openEditor();
  renderMeme(id);
}

function openGallery() {
  document.querySelector(".main-gallery").hidden = false;
}
function closeGallery() {
  document.querySelector(".main-gallery").hidden = true;
}
function openEditor() {
  document.querySelector(".meme-editor").style.display = "flex";
}
function closeEditor() {
  document.querySelector(".meme-editor").hidden = true;
}

function getImgById(id) {
  return gImgs.find((img) => +id === img.id);
}

function _createImgs() {
  gImgs = [
    _createImg(1, ["famous", "angry", "human"]),
    _createImg(2, ["animal", "cute", "dog"]),
    _createImg(3, ["baby", "dog", "sleep", "animal"]),
    _createImg(4, ["animal", "cute", "sleep"]),
    _createImg(5, ["baby", "angry", "cute"]),
    _createImg(6, ["famous", "funny", "happy"]),
    _createImg(7, ["baby", "suprised", "funny"]),
    _createImg(8, ["famous", "happy", "funny"]),
    _createImg(9, ["baby", "happy", "cute", "funny"]),
    _createImg(10, ["famous", "happy", "funny"]),
    _createImg(11, ["famous", "suprised", "funny"]),
    _createImg(12, ["famous", "suprised", "funny"]),
    _createImg(13, ["famous", "happy", "cheers"]),
    _createImg(14, ["famous", "suprised", "funny"]),
    _createImg(15, ["famous", "angry", "funny"]),
    _createImg(16, ["famous", "happy", "funny"]),
    _createImg(17, ["famous", "angry", "funny"]),
    _createImg(18, ["famous", "happy", "funny"]),
  ];
}

function _createImg(id, keywords) {
  return { id, keywords };
}
