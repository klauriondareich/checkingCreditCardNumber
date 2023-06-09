// BANK CARDS NUMBERS CHECKER
// Done by KOUHOUINIKINA Laurion Dareich, Software Engineer
// Alumni Ecole241 Promo 1, SUPINFO 2022


const validateCardNumber = () => {

    let cardNumber = document.getElementById("card-nb-input").value;

    if (cardNumber.length != 0 && cardNumber.length == 16){

        // Luhn algorithm written in Javascript by GeeksForGeeks
        // https://www.geeksforgeeks.org/luhn-algorithm/

        let nDigits = cardNumber.length;
    
        let nSum = 0;
        let isSecond = false;

        for (let i = nDigits - 1; i >= 0; i--){

            let d = cardNumber[i].charCodeAt() - '0'.charCodeAt();

            if (isSecond == true)
                d = d * 2;

            nSum += parseInt(d / 10, 10);
            nSum += d % 10;

            isSecond = !isSecond;
        }

        if (nSum % 10 == 0) {
            
            displayValidNumber(cardNumber);
            checkCardType(cardNumber);

            // displaying success message on screen
            document.getElementsByClassName("success-msg")[0].classList.remove("hidden");
            document.getElementsByClassName("success-msg")[0].classList.add("showed");

            // hiding error message on screen
            document.getElementsByClassName("error-msg")[0].classList.remove("showed");
            document.getElementsByClassName("error-msg")[0].classList.add("hidden");

            return;
        };
            
    };

    // displaying error message on screen
    document.getElementsByClassName("error-msg")[0].classList.remove("hidden");
    document.getElementsByClassName("error-msg")[0].classList.add("showed");

    // hiding success message on screen
    document.getElementsByClassName("success-msg")[0].classList.remove("showed");
    document.getElementsByClassName("success-msg")[0].classList.add("hidden");
        
   
};


const displayValidNumber = (cardNb) => {

    let tagsArr = document.getElementsByClassName("card-no-item");

    let digits = "";
    let arrCardNumbers = [];

    // getting digits four by four
    for (let i = 0; i<= 16; i++){

        digits = digits + cardNb[i];
        if ((i+1)%4 == 0){
            arrCardNumbers.push(digits)
            digits = "";
        }
    };

    // Theses lines are displaying card digits on the card
    tagsArr[0].innerHTML = arrCardNumbers[0];
    tagsArr[1].innerHTML = arrCardNumbers[1];
    tagsArr[2].innerHTML = arrCardNumbers[2];
    tagsArr[3].innerHTML = arrCardNumbers[3];

    // hiding error message on screen
    document.getElementsByClassName("error-msg")[0].classList.remove("showed");
    document.getElementsByClassName("error-msg")[0].classList.add("hidden");
 
}

const checkCardType = (cardNb) => { 

    let imagesTags = document.getElementsByClassName("cardTypeImage");

    if (cardNb.startsWith('4')){
        // Visa card
        imagesTags[0].src = "assets/img/visa.png";
        imagesTags[1].src = "assets/img/visa.png"
    }
    else if (cardNb.startsWith('5')){
        // Mastercard
        imagesTags[0].src = "assets/img/mastercard.png";
        imagesTags[1].src = "assets/img/mastercard.png"
    }
    else { 
        imagesTags[0].src = "assets/img/none.png";
        imagesTags[1].src = "assets/img/none.png"
    }
};

document.getElementById("validCardBtn").addEventListener("click", validateCardNumber);