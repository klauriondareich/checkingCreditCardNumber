// CHECKING BANK CARDS NUMBERS
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

            document.getElementsByClassName("success-msg")[0].classList.remove("hidden");
            document.getElementsByClassName("success-msg")[0].classList.add("showed");

            document.getElementsByClassName("error-msg")[0].classList.remove("showed");
            document.getElementsByClassName("error-msg")[0].classList.add("hidden");

            return;
        };
            
    };

    document.getElementsByClassName("error-msg")[0].classList.remove("hidden");
    document.getElementsByClassName("error-msg")[0].classList.add("showed");

    document.getElementsByClassName("success-msg")[0].classList.remove("showed");
    document.getElementsByClassName("success-msg")[0].classList.add("hidden");
        
   
};


const displayValidNumber = (cardNb) => {

    let tagsArr = document.getElementsByClassName("card-no-item");

    let digits = "";
    let arrCardNumbers = [];

    for (let i = 0; i<= 16; i++){

        digits = digits + cardNb[i];
        if ((i+1)%4 == 0){
            arrCardNumbers.push(digits)
            digits = "";
        }
    };

    tagsArr[0].innerHTML = arrCardNumbers[0];
    tagsArr[1].innerHTML = arrCardNumbers[1];
    tagsArr[2].innerHTML = arrCardNumbers[2];
    tagsArr[3].innerHTML = arrCardNumbers[3];

    document.getElementsByClassName("error-msg")[0].classList.remove("showed");
    document.getElementsByClassName("error-msg")[0].classList.add("hidden");
 
}

const checkCardType = (cardNb) => { 
    
    if (cardNb.startsWith('4')){
        // Visa card
        let imagesTags = document.getElementsByClassName("cardTypeImage");
        imagesTags[0].src = "assets/img/visa.png";
        imagesTags[1].src = "assets/img/visa.png"
    }

    if (cardNb.startsWith('5')){
        // Mastercard
        let imagesTags = document.getElementsByClassName("cardTypeImage");
        imagesTags[0].src = "assets/img/mastercard.png";
        imagesTags[1].src = "assets/img/mastercard.png"
    }
};

document.getElementById("validCardBtn").addEventListener("click", validateCardNumber);