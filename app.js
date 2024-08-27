let textToEncrypt = document.getElementById("encrypt_text");
let encryptButton = document.querySelector(".encrypt_button");
let decryptButton = document.querySelector(".decrypt_button");
let initialText = document.querySelector(".text_placeholder");
let initialText2 = document.querySelector(".text_placeholder2");
let imgWaiting = document.querySelector(".img_text")
let copyBtn = document.querySelector(".copy_button")

/*/La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" /*/

keys = []
let encrypt = false

function textEncryptor() {
     //when encrypt is true encrypt text
    let encrypt = true
    let capturedText = textToEncrypt.value;
    initialText2.innerHTML = "";
    imgWaiting.style = ("display: none")

    //fill the array with letters
    keys = capturedText.split("")
    
    iterateStrings(encrypt)

    let newPhrase = keys.join('')
    console.log(newPhrase)

    initialText.innerHTML = newPhrase
    textToEncrypt.value = ""
    disableBtn(encrypt);
}
//iterate array
function iterateStrings(encrypt) {
    keys.forEach((element,i) => findLetter(element,i,encrypt))
}

//condition to evaluate letters
function findLetter(element,i,encrypt) {

    if (encrypt === true ) 
        { 
        if (element == "e"){
            keys[i] = "enter"
        
        }  
        else if (element == "i"){
            keys[i] = "imes"
            
        }
        else if (element == "a"){
            keys[i] = "ai"
            
        }else if (element == "o"){
            keys[i] = "ober"
            
        }
        else if (element == "u"){
            keys[i] = "ufat"
        } 
    } else {    
        if (element == "enter"){
            keys[i] = "e"
        }  
        else if (element == "imes"){
            keys[i] = "i"  
        }
        else if (element == "ai"){
            keys[i] = "a"
        }
        else if (element == "ober"){
            keys[i] = "o"  
        }
        else if (element == "ufat"){
            keys[i] = "u"  
        } 
    }

}

function decrypt () {
    //when encrypt is false decrypt text
    let encrypt = false

    iterateStrings(encrypt)

    let newPhrase = keys.join('')
    initialText.innerHTML = newPhrase
    textToEncrypt.value = ''
    disableBtn(encrypt)
}

//disable button when field is empty
function disableBtn(encrypt) { 

    if(encrypt == false) {
        decryptButton.disabled = true
    }else {
        decryptButton.disabled = false
    }

    encrypt = false
}

function copyButton() {
    navigator.clipboard.writeText(initialText.innerHTML)
}

disableBtn(encrypt)