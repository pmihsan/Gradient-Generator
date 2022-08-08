let generateBtn = document.getElementById("generate-btn"); 
let copyBtn = document.getElementById("copy-btn");
let outputColor = document.getElementById("output-gradient");
let outputCode = document.getElementById("output-color-code"); 

let hexString = "0123456789abcdef";

let randomColor = () => {
    let hexCode = "#";
    for(let i=0;i<6;i++){
        hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    // console.log(hexCode);
    return hexCode;
}

let generateGradient = () => {
    let color1 = randomColor();
    let color2 = randomColor();
    let angle = Math.floor(Math.random() * 360);

    outputColor.style.background = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
    outputCode.value = `background: linear-gradient(${angle}deg, ${color1}, ${color2});`;
}

copyBtn.addEventListener('click', () => {
    outputCode.select();
    document.execCommand("copy");
});

generateBtn.addEventListener('click', generateGradient);
window.onload = generateGradient;