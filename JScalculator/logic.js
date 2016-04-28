/**
 * Created by Danny on 12/02/2016.
 */

var numberDisplay = document.getElementById('numberDisplay');

/*Takes what ever is in the numberDisplay screen
* and adds a blank string to it when 'c' is pressed*/
function addIt(x)
{
    numberDisplay.value +=x;
    if( x == 'c')
    {
        numberDisplay.value = '';
    }
}

/*evaluates the equation within the x variable then passes
* the answer back to numberDisplay.value when '=' button is pressed*/
function answer()
{
    var x = numberDisplay.value;
    x = eval(x);
    numberDisplay.value = x;
}

/*erases the last string entry each time the
* '<--' button is pressed*/
function backSpace()
{
    var num = numberDisplay.value;
    var len = num.length-1;
    var newNumber = num.substring(0,len);
    numberDisplay.value = newNumber;
}

/*Takes in the value from number display to x and its power is stored in y
 * which is 2 in the index.html file. Performed when the 'X^2' button is pressed */
function squared(y)
{
    var x = numberDisplay.value;
    x = Math.pow(x,y);
    numberDisplay.value = x;
}
/*
function percent(x)
{
    x = numberDisplay.value;
    alert(x.search("+"));
    var n =  x.search('+');
    if(n != -1)
    {
        alert("+ is there");
        if(x == '+' || x == '-' || x == '*' || x == '/')
        {
            alert("You have entered an operand");
        }
    }
}
*/