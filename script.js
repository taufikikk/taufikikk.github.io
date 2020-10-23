let code = "" + Math.floor(100000 + Math.random() * 900000)
let lock = "1111 1111 1111 1111 1111 1111"

function codetoArray(code) {
    let temp = ""
    let arr = []

    for (let i = 0; i < code.length; i++) {
        let eachCode = code[i]
        while (true) {
            let remainder = eachCode % 2
            temp += remainder
            eachCode = Math.floor(eachCode / 2)
            if (eachCode === 0) {
                break;
            }
        }
        for (let i = temp.length; i < 4; i++) {
            temp += "0"
        }
        arr.push(temp)
        temp = ""
    }
    return arr
}

function arrtoBinary(arr) {

    let binary = ""

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            let perBinary = arr[i][j]
            binary += perBinary
        }
        binary += " "
    }
    return binary
}

function reverseBinary(bin) {
    let hasilBinary = ""
    for (let i = bin.length - 1; i >= 0; i--) {
        hasilBinary += bin[i]
    }
    return hasilBinary
}

function getBinary(keys) {
    let array = codetoArray(keys)
    let preBinary = arrtoBinary(array)
    let binary = reverseBinary(preBinary)

    return binary
}

function gate() {
    let gt = document.getElementById("gate")
    let btnGt = document.getElementById("btn-gate")

    if (btnGt.value !== "GET THE PASSCODE"){
        location.reload(); 
    }
    else {
        gt.innerHTML = getBinary(code)
        btnGt.value = "BACK"
    }
    
}


function put(val) {
    let valueString = document.getElementById("pincode").value.toString()
    if (valueString.length < 6) {
        document.getElementById("pincode").value += val
    }
}

function enter() {
    let pin = document.getElementById("pincode").value

    if (pin == code) {
        document.getElementById("authority").value = "ACCESS GRANTED"
        document.getElementById("gate").innerHTML = "WELCOME HOME!"
    }
    else {
        document.getElementById("authority").value = "ACCESS DENIED!"
    }
    
    document.getElementById("pincode").value = ""
}

function del() {
    document.getElementById("pincode").value = ""
} 