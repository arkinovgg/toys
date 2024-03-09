let current_bg_nagito = "#C0FFB6";
let current_bg = '#EFBAFF';
let buttonChangeTheme = document.querySelector('.nightThemeButton');

function changeTheme() {
    let mainBuyNagitoColor = document.querySelector('.mainBuyNagito')
    let mainBuyColor = document.querySelector('.mainBuy');
    if (current_bg == "#EFBAFF" && current_bg_nagito == "#C0FFB6") {
        current_bg = "#7F2F97";
        current_bg_nagito = "#3E7136";
    } else {
        current_bg = "#EFBAFF";
        current_bg_nagito = "#C0FFB6";
    }
    mainBuyColor.style.backgroundColor = current_bg;
    mainBuyNagitoColor.style.backgroundColor = current_bg_nagito;
}

buttonChangeTheme.addEventListener("click", changeTheme);