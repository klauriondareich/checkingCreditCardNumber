// CHECKING BANK CARDS PROGRAM
// Done by K. Laurion Dareich, Software Engineer
// Alumni Ecole241 Promo 1, SUPINFO 2022




function validCardNumber(){

    let cardNumber = document.getElementById("card-nb-input").value;
    displayValidNumber(cardNumber);

    if (cardNumber.length != 0){

         // Following lines come from GeeksForGeeks platform
        // https://www.geeksforgeeks.org/

        let nDigits = cardNumber.length;
    
            let nSum = 0;
            let isSecond = false;

            for (let i = nDigits - 1; i >= 0; i--)
            {
    
                let d = cardNumber[i].charCodeAt() - '0'.charCodeAt();
    
                if (isSecond == true)
                    d = d * 2;

                nSum += parseInt(d / 10, 10);
                nSum += d % 10;
    
                isSecond = !isSecond;
            }
            return (nSum % 10 == 0);
        }

   
};

document.getElementById("validCardBtn").addEventListener("click", validCardNumber);

function displayValidNumber(cardNb){

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

   
}