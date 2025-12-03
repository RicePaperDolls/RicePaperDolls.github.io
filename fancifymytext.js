function makeBig() {
    const textArea = document.getElementById("userInput");
    textArea.style.fontSize = "24pt";
}

function fancyChange() {
    //alert("Fancy levels changed!!");
    const textArea = document.getElementById("userInput");
    const fancy = document.getElementById("fancy");
    const boring = document.getElementById("boring");

    if (fancy.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (boring.checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function moo() {
    const textArea = document.getElementById("userInput");
    let text = textArea.value = textArea.value.toUpperCase();
    let sentences = text.split(".");

    for (let i=0; i < sentences.length; i++) {
        let sentence = sentences[i].trim();

        if (sentence.length > 0) {
            let words = sentence.split(" ");
            let lastIndex = words.length - 1;
            words[lastIndex] = words[lastIndex] + "-Moo";
            sentences[i] = words.join(" ");
        }
    }
    textArea.value = sentences.join(". ");
}