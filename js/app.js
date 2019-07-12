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
	document.getElementById("res").value=eval(document.getElementById("res").value);
}