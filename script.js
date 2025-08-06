$(document).on('keypress',function(e){
    $('button[data-event_key="'+e.key+'"]').addClass('active')
    if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <=105)){
        appendNumber(e.key)
    }else{
        if(e.key == '+' || e.key == '-' || e.key == '/' || e.key == '*'){
            generateExpresion(e.key)
        }else if(key == 'Delete'){
                clearCalc()
            }
    }
    console.log(e.key);
})

$(document).on('keyup',function(e){
    $('button[data-event_key="'+e.key+'"]').removeClass('active')
    console.log(e.key);
})

$('.calc-btn').on('click',function(e){
    var key = $(this).data('event_key')
    if(key != '+' && key != '-' && key != '/' && key != '*' && key != '.' && key != '=' && key != 'Delete' && key != 'NumLock')
    {
        appendNumber(key)
    }else{
        if(key == '+' || key == '-' || key == '/' || key == '*'){
            generateExpresion(key)
        }else if(key == '='){
                evaluateExpression()
            }else if(key == 'Delete'){
                clearCalc()
            }
        
    }
    console.log(key)
})

function appendNumber(number){
    var existingNumber = $("#number_div").html();
    var currentString = number;
    var outputString = '';
    if(existingNumber != '' && existingNumber != undefined && existingNumber != null){
        if(existingNumber=='0'){
            outputString = number
        }else{
            outputString = existingNumber+=currentString
        }
    }else{
        outputString = currentString;
    }
    $("#number_div").html(outputString);
}

function generateExpresion(operator){
    var existingNumber = $("#number_div").html();
    var currentOperator = operator;
    var expression = '';
    var savedExpression = $("#savedExpression").val();
    if(savedExpression != '' && savedExpression != undefined && savedExpression != null)
    {
        expression = parseInt(existingNumber) + operator
    }else{
        expression = savedExpression + existingNumber + operator;
    }
    $("#number_div").html("")
    $("#savedExpression").val(expression)
    $("#expression").html(expression)
}

function evaluateExpression(){
    var result = "";
    var expression = $("#savedExpression").val();
    var existingNumber = $("#number_div").html();
    if(existingNumber != '' && existingNumber != undefined && existingNumber != null){
        expression = expression + parseInt(existingNumber);
        $("#expression").html(expression)
    }
    result = eval(expression);
    $("#savedExpression").val("")
    $("#number_div").html(result)
    $("#value_div").html(result)

}

function clearCalc(){
    $("#number_div").html("")
    $("#savedExpression").val("")
    $("#expression").html("")
    $("#value_div").html("")
}