const button = document.getElementById("countButton");


let letterCounts = {};
let wordsCounts = {};

button.addEventListener("click", function() {  
    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase(); 
    // Isto muda todas as letras para minúsculas
    typedText = typedText.replace(/[^a-z'\s]+/g, ""); 
    // Isso se livra de todos os caracteres exceto letras comuns, espaços e apóstrofos.
    
    const letters = document.getElementById("lettersDiv");
    const wordsDiv = document.getElementById("wordsDiv");
    const titleLetter = document.createElement("h2");
    titleLetter.innerText = "Frequência de repetição de letras";
    const titleWords = document.createElement("h2");
    titleWords.innerText = "Frequência de repetição de palavras";
    lettersDiv.appendChild(titleLetter);
    wordsDiv.appendChild(titleWords);

    //contando letras
    for (let i = 0; i < typedText.length; i++) {
        let currentLetter = typedText[i];
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1; 
         } else { 
            letterCounts[currentLetter]++; 
         }
    } 

    for (let letter in letterCounts) { 
        const span = document.createElement("span"); 
        const textContent = `"${letter}": ${letterCounts[letter]}, `;
        span.innerText = textContent; 
        letters.appendChild(span); 
     }

     //contando palavras
     let words = typedText.split(/\s/);
     for (let i = 0; i < words.length; i++) {
         let currentWords = words[i];
         if (wordsCounts[currentWords] === undefined) {
            wordsCounts[currentWords] = 1;
         } else {
            wordsCounts[currentWords]++;
         }
     }

     for (let word in wordsCounts) {
        const span = document.createElement("span");
        const textContent = `"${word}": ${wordsCounts[word]}, `;
        span.innerText = textContent;
        wordsDiv.appendChild(span); 
     }
});
