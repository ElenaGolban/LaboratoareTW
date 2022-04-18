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



var images = document.querySelectorAll('[name="flaguriEuropa"]');
console.log(images.item(0).addEventListener('click', change));
for (var i = 0; i < images.length; i++) images.item(i).addEventListener('click', change);

var images = document.querySelectorAll('[name="flaguriAsia"]');
console.log(images.item(0).addEventListener('click', change));
for (var i = 0; i < images.length; i++) images.item(i).addEventListener('click', change);

var images = document.querySelectorAll('[name="flaguriAfrica"]');
console.log(images.item(0).addEventListener('click', change));
for (var i = 0; i < images.length; i++) images.item(i).addEventListener('click', change);

function change() {
    console.log(this.value);
  switch (this.value) {
    case "1":
      image = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_of_Uganda.svg/1920px-Flag_of_Uganda.svg.png"> </img>' ;
      break;
    case "2":
      image = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Somalia.svg/1920px-Flag_of_Somalia.svg.png"></img>';
      break;
    case "3":
      image = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_of_Burundi.svg/1920px-Flag_of_Burundi.svg.png"></img>';
      break;
      case "4":
        image = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_of_Burundi.svg/1920px-Flag_of_Burundi.svg.png"></img>';
        break;
    case "5":
        image = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Mozambique.svg/1920px-Flag_of_Mozambique.svg.png"></img>';
        break;
    case "6":
        image = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tanzania.svg/1920px-Flag_of_Tanzania.svg.png"></img>';
        break;
    case "7":
        image = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/1024px-Flag_of_Albania.svg.png"></img>';
        break;
    case "7":
        image = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Andorra.svg/1024px-Flag_of_Andorra.svg.png"></img>';
        break;
    case "8":
        image = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1920px-Flag_of_the_People%27s_Republic_of_China.svg.png"></img>';
        break;
    case "9":
        image = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1280px-Flag_of_Denmark.svg.png"></img>';
        break;
    case "10":
        image = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_the_Vatican_City.svg/1024px-Flag_of_the_Vatican_City.svg.png"></img>';
        break;
    case "11":
        image = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Slovenia.svg/1920px-Flag_of_Slovenia.svg.png"></img>';
        break;
    case "12":
        image = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/1920px-Flag_of_Bangladesh.svg.png"></img>';
        break;
    case "13":
        image = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1920px-Flag_of_South_Korea.svg.png"></img>';
        break;
    case "14":
        image = '<img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/1920px-Flag_of_Indonesia.svg.png"></img>';
        break;
    case "15":
        image = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/800px-Flag_of_Japan.svg.png"></img>';
        break;
        
    
              
    default:
      image = '<img src="#!"></img>';
  }

  document.getElementById("output-image1").innerHTML = image;
  document.getElementById("output-image2").innerHTML = image;
  document.getElementById("output-image3").innerHTML = image;
}
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

function setBroder(element) {
    B1.style.borderWidth = "0px";
    B2.style.borderWidth = "0px";
    B3.style.borderWidth = "0px";

    element.style.borderWidth = "2px";
}



function F4(D){
    switch(D){
        case 1:
            A.innerHTML = "Flagul Ugandei";
        break;
        case 2:
            A.innerHTML = "Flagul Somaliei";
        break;
        case 3:
            A.innerHTML = "Flagul Burundi";
        break;
        case 4:
            A.innerHTML = "Flagul Mozambicului ";
        break;
        case 5:
            A.innerHTML = "Flagul Tanzaniei";
        break;
        case 6:
            A.innerHTML = "Flagul Albaniei";
        break;
        case 7:
            A.innerHTML = "Flagul Andoriei";
        break;
        case 8:
            A.innerHTML = "Flagul Danemarcii";
        break;
        case 9:
            A.innerHTML = "Flagul Vaticanului";
        break;
        case 10:
            A.innerHTML = "Flagul Sloveniei";
        break;
        case 11:
            A.innerHTML = "Flagul Chinei";
        break;
        case 12:
            A.innerHTML = "Flagul Bangladeshului";
        break;
        case 13:
            A.innerHTML = "Flagul Republicii Corea de Sud";
        break;
        case 14:
            A.innerHTML = "Flagul Indoneziei";
        break;
        case 15:
            A.innerHTML = "Flagul Japoniei";
        break;
        default:
        break;
    }
}