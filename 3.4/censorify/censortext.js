let censoredWords = ['sad', 'bad', 'mad'];
let customCensoredWords = [];

function censor(inStr) {
    for (const s of censoredWords) {
        inStr = inStr.replace(s, '*****');
    }
    for (const s of customCensoredWords) {
        inStr = inStr.replace(s, '*****');
    }
    return inStr;
}

function addCensoredWord(word) {
    customCensoredWords.push(word);
}

function getCensoredWords() {
    return censoredWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;
