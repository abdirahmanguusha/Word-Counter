
    let wordCounterEl = document.getElementById("word_counter");
    let characterCounterEl = document.getElementById("character_counter");
    let textareaEl = document.getElementById("textarea_box");

    function inputHandler(event) {
        let userWords = event.target.value;
        event.target.style.borderColor = "green";

        let wordsArray = userWords.split(" ");
        let words = wordsArray.filter((word) => {
            return word.trim() !== '';
        }).length;
        
        let characters = userWords.length;
        wordCounterEl.innerText = words;
        characterCounterEl.innerText = characters;
    }

    textareaEl.addEventListener("input", inputHandler);

