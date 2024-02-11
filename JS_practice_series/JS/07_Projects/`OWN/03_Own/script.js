let btn = document.querySelector("#btn");
let input = document.querySelector("#input");
let result = document.querySelector("#result");
let checkbox = document.getElementById('numberCheckbox');

const alphabetToEmoji = {
    "a": "🍎", "b": "🐝", "c": "🐈", "d": "🐶", "e": "🐘", "f": "🦊",
    "g": "🦒", "h": "🐹", "i": "🐢", "j": "🦌", "k": "🐨", "l": "🦁",
    "m": "🐒", "n": "🦉", "o": "🐙", "p": "🐧", "q": "🦑", "r": "🦏",
    "s": "🐍", "t": "🐯", "u": "🦄", "v": "🐻", "w": "🐋", "x": "🦈",
    "y": "🦎", "z": "🦓"
};

const emojiToAlphabet = {
    "🍎": "a", "🐝": "b", "🐈": "c", "🐶": "d", "🐘": "e", "🦊": "f",
    "🦒": "g", "🐹": "h", "🐢": "i", "🦌": "j", "🐨": "k", "🦁": "l",
    "🐒": "m", "🦉": "n", "🐙": "o", "🐧": "p", "🦑": "q", "🦏": "r",
    "🐍": "s", "🐯": "t", "🦄": "u", "🐻": "v", "🐋": "w", "🦈": "x",
    "🦎": "y", "🦓": "z"
};

btn.addEventListener('click', () => {
    let inputValue = input.value.toLowerCase();
    let resultValue = '';

    if (checkbox.checked) { // If checkbox is checked, translate from emoji to alphabet
        for (let i = 0; i < inputValue.length; i++) {
            let char = inputValue.charAt(i);
            let emoji = inputValue.substring(i, i + 2); // Get the emoji as a substring

            if (emojiToAlphabet.hasOwnProperty(emoji)) {
                resultValue += emojiToAlphabet[emoji];
                i++; // Skip the next character as it's part of the emoji
            } else {
                resultValue += char; // Keep non-emoji characters as they are
            }
        }
    } else { // If checkbox is not checked, translate from alphabet to emoji
        for (let i = 0; i < inputValue.length; i++) {
            let char = inputValue.charAt(i);
            if (alphabetToEmoji.hasOwnProperty(char)) {
                resultValue += alphabetToEmoji[char];
            } else {
                resultValue += "  "; // For characters not in the dictionary
            }
        }
    }

    result.value = resultValue;
});

let copyBtn = document.querySelector("#copy");
    copyBtn.addEventListener('click', () => { 
        result.select();
        document.execCommand("copy");
        if(result.value == ''){
            result.placeholder = "Nothing here to copy! Generate first"
        }else{
        copyBtn.innerHTML= "Copied"
    }
    setInterval(()=>{
        copyBtn.innerHTML= "Copy"
    },2000);
});
