let currentCardIndex = 0;

function navigateToHome() {
    window.location.href = "/";
}

function openMobileMenu() {
    var menu = document.getElementById('mobile-menu');
    menu.classList.add('visible');
    var menuIcon = document.getElementById('mobile-menu-icon');
    var close = document.getElementById('mobile-menu-close-icon');
    menuIcon.style.display = 'none';
    close.style.display = 'block';
}

function closeMobileMenu() {
    var menu = document.getElementById('mobile-menu');
    menu.classList.remove('visible');
    var menuIcon = document.getElementById('mobile-menu-icon');
    var close = document.getElementById('mobile-menu-close-icon');
    menuIcon.style.display = 'block';
    close.style.display = 'none';
}

function handleBookButton() {
    // window.location.href = "/booking.html?action=book";
    window.location.href = "/booking.html";
}

function handleBuyVoucherButton() {
    // window.location.href = "/booking.html?action=voucher";
    window.location.href = "/voucher.html";
}

function handleRedeemVoucherButton() {
    // window.location.href = "/booking.html?action=redeem";
    window.location.href = "/redeem.html";
}

function handleGiftVoucherListButton() {
    var giftVoucherList = document.getElementById('expandedButtons');
    var gitVoucherExpandLessIcon = document.getElementById('gitVoucherExpandLessIcon');
    var gitVoucherExpandMoreIcon = document.getElementById('gitVoucherExpandMoreIcon');
    if (giftVoucherList.style.display === 'block') {
        giftVoucherList.style.display = 'none';
        gitVoucherExpandLessIcon.style.display = 'none';
        gitVoucherExpandMoreIcon.style.display = 'block';
    } else {
        giftVoucherList.style.display = 'block';
        gitVoucherExpandLessIcon.style.display = 'block';
        gitVoucherExpandMoreIcon.style.display = 'none';
    }
}

function handleGroupsButton() {
    window.location.href = "/groups.html";
}

function setSelected(index, cardTextIndex) {
    // get last character in index and convert to number
    currentCardIndex = index.slice(-1) - '0';
    // console.log(currentCardIndex);
    var selected = document.getElementsByClassName('carousel-card');
    // console.log(selected);
    if (selected.length > 0) {
        selected[0].classList.remove('carouselCardSelected');
        selected[1].classList.remove('carouselCardSelected');
        selected[2].classList.remove('carouselCardSelected');
        selected[3].classList.remove('carouselCardSelected');
        selected[4].classList.remove('carouselCardSelected');
        selected[5].classList.remove('carouselCardSelected');
        selected[6].classList.remove('carouselCardSelected');
    }
    // document.getElementsByClassName('carousel-card-text-0')[0].style.display = 'none';
    document.getElementsByClassName('carousel-card-text-1')[0].style.display = 'none';
    document.getElementsByClassName('carousel-card-text-2')[0].style.display = 'none';
    document.getElementsByClassName('carousel-card-text-3')[0].style.display = 'none';
    document.getElementsByClassName('carousel-card-text-4')[0].style.display = 'none';
    document.getElementsByClassName('carousel-card-text-5')[0].style.display = 'none';
    document.getElementsByClassName('carousel-card-text-6')[0].style.display = 'none';
    if (cardTextIndex !== 'carousel-card-text-0') {
        document.getElementsByClassName('carousel-card-text-0')[0].style.display = 'none';
    }
    var element = document.getElementById(index);
    element.classList.add('carouselCardSelected');
    var cardText = document.getElementsByClassName(cardTextIndex);
    // console.log(cardText);
    cardText[0].style.display = 'block';
    // console.log(element);
}

function handleRoomSuggestionClick(number) {
    var numbers = document.getElementsByClassName("number-row");
    for (var i = 0; i < numbers[0].children.length; i++) {
        numbers[0].children[i].classList.remove("active");
    }
    var element = document.getElementById('number-row-'+number);
    element.classList.add("active");
    
    const roomCardIds = ['silentCard', 'xcaseCard', 'vanishingCard', 'legacyCard', 'eyesOfArgosCard', 'redemptionCard', 'darknessRebornCard', 'teamBuildingCard'];
    for (var i = 0; i < roomCardIds.length; i++) {
        var elementHide =  document.getElementById(roomCardIds[i]);
        elementHide.style.display = 'none';
    }
    if (number === 2) {
        document.getElementById('silentCard').style.display = 'flex';
    } else if (number === 3) {
        document.getElementById('silentCard').style.display = 'flex';
        document.getElementById('xcaseCard').style.display = 'flex';
        document.getElementById('legacyCard').style.display = 'flex';
        document.getElementById('eyesOfArgosCard').style.display = 'flex';
    } else if (number === 4 || number === 5) {
        document.getElementById('silentCard').style.display = 'flex';
        document.getElementById('xcaseCard').style.display = 'flex';
        document.getElementById('vanishingCard').style.display = 'flex';
        document.getElementById('legacyCard').style.display = 'flex';
        document.getElementById('eyesOfArgosCard').style.display = 'flex';
        document.getElementById('redemptionCard').style.display = 'flex';
    } else if (number === 6) {
        document.getElementById('xcaseCard').style.display = 'flex';
        document.getElementById('vanishingCard').style.display = 'flex';
        document.getElementById('legacyCard').style.display = 'flex';
        document.getElementById('eyesOfArgosCard').style.display = 'flex';
        document.getElementById('redemptionCard').style.display = 'flex';
        document.getElementById('darknessRebornCard').style.display = 'flex';
    } else if (number === 7 || number === 8) {
        document.getElementById('vanishingCard').style.display = 'flex';
        document.getElementById('redemptionCard').style.display = 'flex';
        document.getElementById('darknessRebornCard').style.display = 'flex';
    } else if (number === 9 || number === 10) {
        document.getElementById('vanishingCard').style.display = 'flex';
    } else if (number === 11) {
        document.getElementById('teamBuildingCard').style.display = 'flex';
    }
};

function handleOpenInstruction() {
    var element = document.getElementById('booking-instruction');
    if (element.style.display === 'flex') {
        element.style.display = 'none';
    } else {
        element.style.display = 'flex';
    }
}

function handleOpenTermsAndConditions() {
    var element = document.getElementById('terms-and-conditions');
    if (element.style.display === 'flex') {
        element.style.display = 'none';
    } else {
        element.style.display = 'flex';
    }
}

function showAnswer(number)  {
    var element = document.getElementById('answer'+number);
    // console.log('answer'+number);
    // console.log(element);
    if (element.style.display === 'flex') {
        element.style.display = 'none';
        var expandMoreIcon = document.getElementById('expandMoreIcon'+number);
        expandMoreIcon.style.display = 'flex';
        var arrow = document.getElementById('expandLessIcon'+number);
        arrow.style.display = 'none';
        var question = document.getElementById('question-content-'+number);
        question.style.color = 'white';
    } else {
        element.style.display = 'flex';
        element.style.color = 'grey';
        element.style.marginTop = '1rem';
        element.style.maxWidth = '500px';
        element.style.textAlign = 'left';
        element.style.flexDirection = 'column';
        element.style.fontSize = '0.95rem';
        element.style.gap = '1rem';
        var question = document.getElementById('question-content-'+number);
        question.style.color = '#9f1f24';
        var expandMoreIcon = document.getElementById('expandMoreIcon'+number);
        expandMoreIcon.style.display = 'none';
        var arrow = document.getElementById('expandLessIcon'+number);
        arrow.style.display = 'flex';
    }
}

function handleLargeGroupRooms(room) {
    var expandMoreElement = document.getElementById("expandMoreIcon"+room);
    var expandLessElement = document.getElementById("expandLessIcon"+room);
    var roomAnswerElement = document.getElementById("expandMore"+room+"Answer");
    if (expandMoreElement.style.display === 'inline-block') {
        expandMoreElement.style.display = 'none';
        expandLessElement.style.display = 'inline-block';
        roomAnswerElement.style.display = 'block';
    } else {
        expandMoreElement.style.display = 'inline-block';
        expandLessElement.style.display = 'none';
        roomAnswerElement.style.display = 'none';
    }

}

function setSelectedAuto(index, cardTextIndex) {
    var selected = document.getElementsByClassName('carousel-card');
    // console.log(selected);
    if (selected.length > 0) {
        selected[0].classList.remove('carouselCardSelected');
        selected[1].classList.remove('carouselCardSelected');
        selected[2].classList.remove('carouselCardSelected');
        selected[3].classList.remove('carouselCardSelected');
        selected[4].classList.remove('carouselCardSelected');
        selected[5].classList.remove('carouselCardSelected');
        selected[6].classList.remove('carouselCardSelected');
    }
    // document.getElementsByClassName('carousel-card-text-0')[0].style.display = 'none';
    document.getElementsByClassName('carousel-card-text-1')[0].style.display = 'none';
    document.getElementsByClassName('carousel-card-text-2')[0].style.display = 'none';
    document.getElementsByClassName('carousel-card-text-3')[0].style.display = 'none';
    document.getElementsByClassName('carousel-card-text-4')[0].style.display = 'none';
    document.getElementsByClassName('carousel-card-text-5')[0].style.display = 'none';
    document.getElementsByClassName('carousel-card-text-6')[0].style.display = 'none';
    if (cardTextIndex !== 'carousel-card-text-0') {
        document.getElementsByClassName('carousel-card-text-0')[0].style.display = 'none';
    }
    var element = document.getElementById(index);
    element.classList.add('carouselCardSelected');
    var cardText = document.getElementsByClassName(cardTextIndex);
    // console.log(cardText);
    cardText[0].style.display = 'block';
    // console.log(element);
}

// Function to include HTML components
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /* search for elements with a certain attribute */
        file = elmnt.getAttribute("include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("include-html");
                    includeHTML();
                }
            } 
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}