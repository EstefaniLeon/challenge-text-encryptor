const textArea = document.querySelector(".text-area");
const message = document.querySelector(".message");
const copy = document.querySelector(".copied");
copy.style.display = "none"


//Laves de encriptacion
// `Character "e" == "enter"`
// `Character "i" == "imes"`
// `Character "a" == "ai"`
// `Character "o" == "ober"`
// `Character "u" == "ufat"`


function validateText(){
    let writtenText = document.querySelector(".text-area").value;
    let validator = writtenText.match(/^[a-z]*$/);

    if(!validator || validator === 0) {
        alert("Only lowercase letters and no accents.")
        location.reload();
        return true;
    }
}


function btnEncrypt(){
    if(!validateText()) {
        const textEncrypted = encrypt(textArea.value)
        message.value = textEncrypted
        message.style.backgroundImage = "none"
        textArea.value = "";
        copy.style.display = "block"
    
    }
}

function encrypt(stringEncrypted){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncrypted = stringEncrypted.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncrypted.includes(matrizCodigo[i][0])){
            stringEncrypted = stringEncrypted.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncrypted
}



function btnDecrypt(){
    const textEncrypted = decrypt(textArea.value)
    message.value = textEncrypted
    textArea.value = "";
    
}


function decrypt(stringDecrypted){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDecrypted = stringDecrypted.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDecrypted.includes(matrizCodigo[i][1])){
            stringDecrypted = stringDecrypted.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])

        }

    }
    return stringDecrypted
}


function copied(){
    message.select();
    navigator.clipboard.writeText(message.value)
    message.value = "";
    alert("Copied Text")
}


