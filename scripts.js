// ----------------------- QS1 -----------------------
// כתבו פונקציה שמחזירה אמת או שקר
//  הפונקציה מקבלת ערך מאינפוט ובודקת אם הוא יכול להיות ת.ז תקינה.
//  תקינה = בעלת 9 ספרות כאשר כל תו הוא ספרה

function checkID() {
    qs1NumInput
    let numID = document.getElementById("qs1NumInput").value;

    // check length
    let isLegalLength = numID.length == 9;

    // legal characters flag
    let isLegalChars = true;

    // check all characters in for loop
    for (i = 0; i < numID.length; i++) {
        if (!(numID.charAt(i) >= 0 && numID.charAt(i) <= 9 && numID.charAt(i)!=' ')) isLegalChars = false;
    }

    // print result
    if (isLegalLength && isLegalChars) document.getElementById("qs1Result").innerHTML = numID + " - legal ID";
    else document.getElementById("qs1Result").innerHTML = numID + " - not legal ID";
}

// ----------------------- QS2 -----------------------
// כתבו פונקציה שמקבלת מספר 
// מדפיסה האם המספר הינו ראשוני
// מספר שמתחלק רק ב1 ובעצמו

function isPrime() {

    let num = document.getElementById("qs2NumInput").value;

    // is prime flag
    let isPrimeNum = true;

    // checking with for loop
    for (i = 2; i <= num / 2; i++) {
        if (num % i == 0) isPrimeNum = false;
    }

    // print result
    if (isPrimeNum) document.getElementById("qs2Result").innerHTML = num + " - is prime";
    else document.getElementById("qs2Result").innerHTML = num + " - not prime";
}

// ----------------------- QS3 -----------------------
// כתבו פונקציה שקולטת מחרוזת 
// שמה לפני כל אות גדולה רווח
// מחזירה את התוצאה

function addSpace() {

    let str = document.getElementById("qs3StrInput").value;

    for (i = 0; i < str.length; i++) {
        if (str.charAt(i) >= 'A' && str.charAt(i) <= 'Z') {
            str = str.substring(0, i) + " " + str.substring(i, str.length + 1);
            i++;
        }
    }

    // print string after change
    document.getElementById("qs3Result").innerHTML = "Changed str: " + str;
}

// ----------------------- QS4 -----------------------
// כתבו תוכנית שקולטת מהמשתמש ערכים מספריים 
// ולא מפסיקה לבקש עד אשר הוכנס מספר שלילי
// ברגע שהוכנס לאינפוט ערך שלילי התוכנית תדפיס מהו המספר הגדול ביותר שהוקש עד כה
var biggestNum = 0;

function printBiggerNum() {

    // get current input
    let curInput = parseInt(document.getElementById("qs4NumInput").value);

    // no input entered
    if (curInput == '') alert("No positive number entered!");

    // negative number entered - print result
    else if (curInput < 0) {
        document.getElementById("qs4Result").innerHTML = "Biggest number entered: " + biggestNum;
        biggestNum = 0;
    }

    // if entered bigger number then current
    else if (curInput > biggestNum) biggestNum = curInput;

    // reset input field
    document.getElementById("qs4NumInput").value = '';
}

// ----------------------- QS5 -----------------------
// כתבו פונקציה שמקבלת 2 מחרוזות
//  וסופרת כמה פעמים המחרוזת הקטנה מופיעה בתוך המחרוזת הארוכה
//  הפונקציה תחזיר את התוצאה
function countInnerString() {

    // get values
    let str1 = document.getElementById("qs5Str1Input").value;
    let str2 = document.getElementById("qs5Str2Input").value;

    // reset counter
    let counter = 0;

    // check whick one is bigger
    if (str1.length > str2.length) {

        while (str1.includes(str2)) {

            // add to counter
            counter++;

            if (str1.indexOf(str2) - 1 != 0) {

                // remove string from bigger string
                str1 = str1.substring(0, str1.indexOf(str2)) + str1.substring(str1.indexOf(str2) + str2.length, str1.length);

            }
            else {
                str1 = str1.charAt(0) + str1.substring(str1.indexOf(str2) + str2.length, str1.length - 1);
            }
        }
    }
    else {

        while (str2.includes(str1)) {

            // add to counter
            counter++;

            if (str2.indexOf(str1) - 1 != 0) {

                // remove string from bigger string
                str2 = str2.substring(0, str2.indexOf(str1)) + str2.substring(str2.indexOf(str1) + str1.length, str2.length);

            }
            else {
                str2 = str2.charAt(0) + str2.substring(str2.indexOf(str1) + str1.length, str2.length - 1);
            }
        }
    }

    // print result
    document.getElementById("qs5Result").innerHTML = "Counted string in string: " + counter + "times";

}

// ----------------------- QS6 -----------------------
// כתבו פונקציה אשר מקבלת מחרוזת
// הפונקציה תמיין את התווים של המחרוזת מהקטן לגדול

function sortStr() {

    // get value
    let str = document.getElementById("qs6StrInput").value;
    let tempChar;

    // sort
    for (i = 0; i < str.length - 1; i++) {
        for (j = 0; j < str.length - i - 1; j++) {
            if (str[j] > str[j+1]) {
                str= str.substring(0,j) + str.charAt(j+1) + str.charAt(j) + str.substring(j+2);
            }
        }
    }

    // print result
    document.getElementById("qs6Result").innerHTML = "Sorted string: " + str;
}

// ----------------------- QS7 -----------------------
// מחשבון פשוט :)
function addToCalc(val){
    
    // result element
    let result = document.getElementById("calcRes");
    
    // calculate
    if( val == '=') calcResult();

    // reset
    else if( val == 'c') result.innerHTML = "---";

    // if empty
    else if( result.innerHTML == "---") {
        result.innerHTML = "";
        result.innerHTML = result.innerHTML + val;
    }

    // add to screen
    else result.innerHTML = result.innerHTML + val;


}

function calcResult(){

    // result element
    let result = document.getElementById("calcRes");

    // result current value
    let calculation = result.innerHTML;

    // calculation values
    let operator;
    let num1 = 0;
    let num2 = 0;

    // if empty
    if( calculation == '---') alert("No calcutation entered!");

    // calculation
    else {
        
        // +
        if( calculation.indexOf('+') != -1 ) {

            // get values
            num1 = calculation.substring(0,calculation.indexOf('+'));
            num2 = calculation.substring(calculation.indexOf('+') + 1 , calculation.length);

            // print result
            result.innerHTML += '=' + ( parseInt(num1) + parseInt(num2));
        }
        // -
        else if ( calculation.indexOf('-') != -1 ){

            // get values
            num1 = calculation.substring(0,calculation.indexOf('-'));
            num2 = calculation.substring(calculation.indexOf('-') + 1 , calculation.length);

            // print result
            result.innerHTML += '=' + ( parseInt(num1) - parseInt(num2));
        }
        // *
        else if ( calculation.indexOf('*') != -1 ) {

            // get values
            num1 = calculation.substring(0,calculation.indexOf('*'));
            num2 = calculation.substring(calculation.indexOf('*') + 1 , calculation.length);

            // print result
            result.innerHTML += '=' + ( parseInt(num1) * parseInt(num2));
        }
        // /
        else if ( calculation.indexOf('/') != -1 ) {

            // get values
            num1 = calculation.substring(0,calculation.indexOf('/'));
            num2 = calculation.substring(calculation.indexOf('/') + 1 , calculation.length);

            // if trying to divide by 0
            if( num2 == 0 ) result.innerHTML += '= undefined'

            // print result
            else result.innerHTML += '=' + ( parseInt(num1) / parseInt(num2));
        }
    }

}