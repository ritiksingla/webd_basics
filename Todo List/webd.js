var btn=document.querySelector('button');
var input=document.querySelector('input');
var div=document.querySelector('div');
var li=document.querySelector('ol');
btn.onclick=function()
{
	var value=input.value;
	input.value="";
	var newli=document.createElement('li');
	var newbtn=document.createElement('button');
	newbtn.textContent="delete X";
	newli.textContent=value;
	newli.appendChild(newbtn);
	li.appendChild(newli);
	newbtn.onclick=function()
	{
		li.removeChild(newli);
		
	}
	input.focus();
}