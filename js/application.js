// window.onload = function () {
// 	document.getElementById('lets_go').innerHTML = "Lemme GO!";
// }

$(document).ready(function() {
	var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        } 
    };

    var number = "";
    var newnumber = "";
    var operator = "";
    var totaldiv = $("#total").text("0");

    $("#numbers a").not("#clear, #clearall").click(function() {
    	number += $(this).text();
    	// number += $(this).html();
    	totaldiv.text(number);
    	testNumLength(number);
    });

    $("#operators a").not("#equals").click(function() {
    	operator = $(this).text();
    	newnumber = number;
    	number = "";
    	totaldiv.text("0");
    });

    $("#clear").click(function() {
    	number="";
    	totaldiv.text("0");
    });
    $("#clearall").click(function() {
    	number = "";
    	newnumber = "";
    	totaldiv.text("0");
    });

    $("#equals").click(function() {
        if(operator === "+") {
            number = (parseInt(number, 10) + parseInt(newnumber,10)).toString();
        } else if (operator === "-") {
            number = (parseInt(number, 10) - parseInt(newnumber,10)).toString();
        } else if (operator === "/") {
            number = (parseInt(number, 10) / parseInt(newnumber,10)).toString();
        } else if (operator === "*") {
            number = (parseInt(number, 10) * parseInt(newnumber,10)).toString();
        }
        totaldiv.text(number);
        testNumLength(number);
        number = "";
        newnumber = "";
    });
});