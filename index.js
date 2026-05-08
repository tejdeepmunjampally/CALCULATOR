var a = 0, b = 0, op = 0;

function display(val) {
    document.getElementById("display").value += val;
}

function operation(o) {
    a = Number(document.getElementById("display").value);
    op = o;
    document.getElementById("display").value = "";
}

function calculate() {
    b = Number(document.getElementById("display").value);
    switch(op) {
        case '+': document.getElementById("display").value = a + b;break 
        case '-': document.getElementById("display").value = a - b;break; 
        case '*': document.getElementById("display").value = a * b; break; 
        case '/': document.getElementById("display").value = b !== 0 ? a / b : "Error"; break;
        case '%': document.getElementById("display").value = a % b;break; 
    }
    a = 0; b = 0; op = 0;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function clearAll() {
    a = 0; b = 0; op = 0;
    document.getElementById("display").value = "";
}


    


