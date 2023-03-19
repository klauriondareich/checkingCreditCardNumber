// CHECKING BANK CARDS PROGRAM
// Done by K. Laurion Dareich, Software Engineer
// Alumni Ecole241 Promo 1, SUPINFO 2022




function validCardNumber(){

    let cardNumber = document.getElementById("card-nb-input").value;

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