let current_bg_nagito = "#C0FFB6";
let current_bg_kokichi = '#EFBAFF';

let current_bg_Kokichi1 = "white";
let current_bg_Kokichi2 = "white";
let current_bg_Kokichi3 = "white";

let current_bg_Nagito1 = "white";
let current_bg_Nagito2 = "white";
let current_bg_Nagito3 = "white";

let colorText = "black";

let bctColor = "white"

let buttonChangeTheme = document.querySelector('.nightThemeButton');

function changeTheme() {
    let KokichiIMG1 = document.querySelector('.KokichiIMG1')
    let KokichiIMG2 = document.querySelector('.KokichiIMG2')
    let KokichiIMG3 = document.querySelector('.KokichiIMG3')

    let NagitoIMG1 = document.querySelector('.NagitoIMG1')
    let NagitoIMG2 = document.querySelector('.NagitoIMG2')
    let NagitoIMG3 = document.querySelector('.NagitoIMG3')

    let bct = document.querySelector('.nightThemeButton');

    let mainBuyNagitoColor = document.querySelector('.mainBuyNagito')
    let mainBuyColor = document.querySelector('.mainBuy');
    if (current_bg_kokichi == "#EFBAFF" && current_bg_nagito == "#C0FFB6" && current_bg_Kokichi1 == 'white' && current_bg_Kokichi2 == 'white' && current_bg_Kokichi3 == 'white' && current_bg_Nagito1 == 'white' && current_bg_Nagito2 == 'white' && current_bg_Nagito3 == 'white' && colorText == "black" && bctColor == "white") {
        current_bg_Kokichi1 = "#2D2D2D";
        current_bg_Kokichi2 = "#2D2D2D";
        current_bg_Kokichi3 = "#2D2D2D";

        colorText = "white";

        bctColor = "black";

        current_bg_Nagito1 = "#2D2D2D";
        current_bg_Nagito2 = "#2D2D2D";
        current_bg_Nagito3 = "#2D2D2D";

        current_bg_kokichi = "#7F2F97";
        current_bg_nagito = "#3E7136";
    } else {
        current_bg_Kokichi1 = "white";
        current_bg_Kokichi2 = "white";
        current_bg_Kokichi3 = "white";

        bctColor = "white";

        colorText = "black";

        current_bg_Nagito1 = "white";
        current_bg_Nagito2 = "white";
        current_bg_Nagito3 = "white";

        current_bg_kokichi = "#EFBAFF";
        current_bg_nagito = "#C0FFB6";
    }
    KokichiIMG1.style.backgroundColor = current_bg_Kokichi1;
    KokichiIMG2.style.backgroundColor = current_bg_Kokichi2;
    KokichiIMG3.style.backgroundColor = current_bg_Kokichi3;

    KokichiIMG1.style.color = colorText;
    KokichiIMG2.style.color = colorText;
    KokichiIMG3.style.color = colorText;

    NagitoIMG1.style.backgroundColor = current_bg_Nagito1;
    NagitoIMG2.style.backgroundColor = current_bg_Nagito2;
    NagitoIMG3.style.backgroundColor = current_bg_Nagito3;

    NagitoIMG1.style.color = colorText;
    NagitoIMG2.style.color = colorText;
    NagitoIMG3.style.color = colorText;

    mainBuyColor.style.backgroundColor = current_bg_kokichi;
    mainBuyNagitoColor.style.backgroundColor = current_bg_nagito;

    bct.style.color = bctColor;
}

buttonChangeTheme.addEventListener("click", changeTheme);
