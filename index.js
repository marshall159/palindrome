
module.exports = Phrase;

// Reverses a string.
function reverse(string) {
    return Array.from(string).reverse().join("");
}
  
function Phrase(content) {
    this.content = content;

    this.processor = function(string) {
    // FILL IN
        return this.letters(string).toLowerCase();
    }

    // this.letters = function() {
    //     var letters = [];

    //     for (let i = 0; i < this.content.length; i++) {
    //         let letter = this.content[i];

    //         if(letter.match(/[a-zA-Z]/)) {
    //             letters.push(letter);
    //         }
    //     }
    //     return letters.join('');
    // }

    this.letters = function() {
        // return Array.from(this.content).filter(char => char.match(/[a-zA-Z]/)).join('');
        return (this.content.match(/[A-Za-z]/g) || []).join('');
    }

    this.processedContent = function processedContent() {
        return this.processor(this.content);
    }

    // Returns true if the phrase is a palindrome, false otherwise.
    this.palindrome = function palindrome() {
        return this.processedContent() === reverse(this.processedContent());
    }
}

function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;

    // Returns translation processed for palindrome testing.
    this.processedContent = function processedContent() {
        return this.processor(this.translation);
    }
}

TranslatedPhrase.prototype = new Phrase();