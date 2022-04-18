var A = document.getElementById('flagulȚării');
var B1 = document.getElementById('leftDiv');
var B2 = document.getElementById('centerDiv');
var B3 = document.getElementById('rightDiv');
var C1 = document.getElementById('firstCol');
var C2 = document.getElementById('secondCol');
var C3 = document.getElementById('thirdCol');
var G = [128, 128, 0];
var firstCol = document.getElementById('firstCol');
var secondCol = document.getElementById('secondCol');
var thirdCol = document.getElementById('thirdCol');
var container = document.getElementById('container');

function getColor() {
    const colors = ['00', '0F', '5F', 'AF', 'FF'];
    const red = colors[getActiveIndex(firstCol)];
    const green = colors[getActiveIndex(secondCol)];
    const blue = colors[getActiveIndex(thirdCol)];
    return `#${red}${green}${blue}`;
}

function resetColors() {
    firstCol.style.borderColor = 'transparent';
    secondCol.style.borderColor = 'transparent';
    thirdCol.style.borderColor = 'transparent';
}

function getActiveIndex(element) {
    let i = 0;
    const inputs = element.getElementsByTagName('input');
    for (i =0; i< 5; i++) {
        if (inputs.item(i).checked) {
            return i;
        }
    }

    return i < 5 ? i : 0;
}

firstCol.addEventListener('click', () => {
    resetColors();
    firstCol.style.borderColor = getColor();
});
secondCol.addEventListener('click', () => {
    resetColors();
    secondCol.style.borderColor = getColor();
});
thirdCol.addEventListener('click', () => {
    resetColors();
    thirdCol.style.borderColor = getColor();
});

function F1(D){
    B1.style.borderWidth = "2px";
    B2.style.borderWidth = "0px";
    B3.style.borderWidth = "0px";
    switch(D){
    case '1':
        C1.src = "America/Argentina.png";
        C1.value = 1;
        G[0] = 0;
    break;
    case '2':
        C1.src = "America/Brazilia.png";
        C1.value = 2;
        G[0] = 2;
    break;
    case '3':
        C1.src = "America/Canada.png";
        C1.value = 3;
        G[0] = 0;
    break;
    case '4':
        C1.src = "America/Mexica.png";
        C1.value = 4;
        G[0] = 0;
    break;
    default:
        C1.src = "America/SUA.png";
        C1.value = 5;
        G[0] = 0;
    break;
    }
    
    
}

function F2(D){
    B1.style.borderWidth = "0px";
    B2.style.borderWidth = "2px";
    B3.style.borderWidth = "0px";
    switch(D){
    case '1':
        C2.src = "Europa/Franța.png";
        C2.value = 1;
        G[1] = 0;
    break;
    case '2':
        C2.src = "Europa/Italia.png";
        C2.value = 2;
        G[1] = 0;
    break;
    case '3':
        C2.src = "Europa/Moldova.png";
        C2.value = 3;
        G[1] = 3;
    break;
    case '4':
        C2.src = "Europa/Polonia.png";
        C2.value = 4;
        G[1] = 0;
    break;
    default:
        C2.src = "Europa/Ucraina.png";
        C2.value = 5;
        G[1] = 0;
    break;
    }
   
    
}

function F3(D){
    B1.style.borderWidth = "0px";
    B2.style.borderWidth = "0px";
    B3.style.borderWidth = "2px";
    switch(D){
    case '1':
        C3.src = "Asia/China.png";
        C3.value = 1;
        G[2] = 0;
    break;
    case '2':
        C3.src = "Asia/Iran.png";
        C3.value = 2;
        G[2] = 0;
    break;
    case '3':
        C3.src = "Asia/India.png";
        C3.value = 3;
        G[2] = 3;
    break;
    case '4':
        C3.src = "Asia/Japonia.png";
        C3.value = 4;
        G[2] = 0;
    break;
    default:
        C3.src = "Asia/Rusia.png";
        C3.value = 5;
        G[2] = 0;
    break;
    }
   
   
}

function F4(D){
    switch(D){
        case 1:
            A.innerHTML = "Flagul Argentinei";
        break;
        case 2:
            A.innerHTML = "Flagul Braziliei";
        break;
        case 3:
            A.innerHTML = "Flagul Canadei";
        break;
        case 4:
            A.innerHTML = "Flagul Mexican";
        break;
        case 5:
            A.innerHTML = "Flagul Statelor Unite ale Americii";
        break;
        default:
        break;
    }
}

function F5(D){
    switch(D){
        case 1:
            A.innerHTML = "Flagul Franței";
        break;
        case 2:
            A.innerHTML = "Flagul Italiei";
        break;
        case 3:
            A.innerHTML = "Flagul Moldovei";
        break;
        case 4:
            A.innerHTML = "Flagul Poloniei";
        break;
        case 5:
            A.innerHTML = "Flagul Ucrainei";
        break;
        default:
        break;
    }
}

function F6(D){
    switch(D){
        case 1:
            A.innerHTML = "Flagul Chinei";
        break;
        case 2:
            A.innerHTML = "Flagul Iranului";
        break;
        case 3:
            A.innerHTML = "Flagul Indiei";
        break;
        case 4:
            A.innerHTML = "Flagul Japoniei";
        break;
        case 5:
            A.innerHTML = "Flagul Rusiei";
        break;
        default:
        break;
    }
}

function F7(){
    document.getElementById('sel1').checked = true;
    document.getElementById('sel2').checked = true;
    document.getElementById('sel3').checked = true;
 
    B1.style.borderWidth = "0px";
    B2.style.borderWidth = "0px";
    B3.style.borderWidth = "0px";
    A.innerHTML = "Flag";
    G[0] = 0;
    G[1] = 0;
    G[2] = 0;
}
