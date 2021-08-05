let textArea = document.getElementById("content");
let characterCounter  = document.getElementById("cCounter");
let wordCounter = document.getElementById("wCounter"); 


textArea.oninput = () => {
    const character = textArea.value.replace(/\s/g, '');
    characterCounter.textContent = character.length;

    const word = textArea.value.split(' ').filter((item)=> {
        return item!='';
    })
    wordCounter.textContent = word.length;
}