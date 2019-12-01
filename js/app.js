$(document).ready(function () {
	
	
	function evaluateExpression(digits,operators)
    {
        if(digits.length>1)
        {
			var t = digits[0];
			for (var k = 0; k < operators.length; k++)
			{
				if(operators[k]=='/')
				{
					var result = parseFloat(t) / parseFloat(digits[k+1]); 
					t = result;
				}
				if(operators[k]=='*')
				{
					var result = parseFloat(t) * parseFloat(digits[k+1]); 
					t = result;
				}
				if(operators[k]=='+')
				{
					var result = parseFloat(t) + parseFloat(digits[k+1]); 
					t = result;
				}
				if(operators[k]=='-')
				{
					var result = parseFloat(t) - parseFloat(digits[k+1]);
					t = result;
				}
						
            }
			console.log("totalresult:",t);
			
			if(!Number.isInteger(result))
			{
				if(precision(result)>4)
				result = result.toFixed(4);
			}
			if(isNaN(t))
			{
				result="Invalid Expr";
			}
			document.getElementById("res").value = result;
        }
    }
	function precision(num)
	{
		if(!isFinite(num))
			return 0;
		var e=1,p=0;
		while(Math.round(num*e)/e!==num)
		{
			e*=10;
			p++;
		}
		return p;
	}
	function getDigitsAndOperators(expr){
		
		var copy = expr;

		expr = expr.replace(/[0-9]+/g, "#").replace(/[\(|\|\.)]/g, "");
		var digits = copy.split(/[^0-9\.]+/);
		//console.log("expr:",expr);
		var operators = expr.split("#").filter(function(n){return n});

		console.log("digits:",digits);
		console.log("operators:",operators);
		
		evaluateExpression(digits,operators);
		
    }
	
	$("button").click(function(e) 
	{
		if($(this).val()=='C')
		{
			clearConsole(e);
		}
		else if($(this).val()=='=')
		{
			calculate(e);
		}
		else
		{
			showOnConsole($(this).val(),e);
		}
		e.preventDefault();
	
	});
	var regExp = /[a-z]/i;
	$('#res').on('keydown keyup', function(e) {
    var value = String.fromCharCode(e.which) || e.key;

    // No letters
    if (regExp.test(value)) {
      e.preventDefault();
      return false;
    }
  });
  
	function showOnConsole(val,event)
	{
		event.preventDefault();
		document.getElementById("res").value+=val;
	}
	function clearConsole(event)
	{
		event.preventDefault();
		document.getElementById("res").value="";
	}
	function calculate(event)
	{
		event.preventDefault();
		var expr = document.getElementById("res").value;
		getDigitsAndOperators(expr);
	}
});
