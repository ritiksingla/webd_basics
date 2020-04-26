var canvas=document.querySelector('.myCanvas');
canvas.width = window.innerWidth;
var width = canvas.width;
canvas.height = window.innerHeight;
var height = canvas.height;
var ctx = canvas.getContext('2d');

/*
ctx.fillStyle = '#38ada9';
ctx.fillRect(50, 50, 100, 150);

ctx.fillStyle = '#b71540';
ctx.fillRect(75, 75, 100, 100);

ctx.fillStyle = '#0c2461';
ctx.fillRect(25, 100, 175, 50);


ctx.strokeStyle = '#ffcccc';
ctx.lineWidth = 5;
ctx.strokeRect(25, 25, 175, 200);*/


/*line begin path; move starting point to 300 ,300
//draw linw to 100,100 and line width=10 and continue line to 200,0 and stroke style to
//change color of the line
ctx.beginPath();
ctx.moveTo(300,300);
ctx.lineTo(100,100);
ctx.lineWidth=10;
ctx.lineTo(200,0);
ctx.lineTo(300,300);
ctx.strokeStyle="#cd84f1";
ctx.stroke();
*/
//arc(centre x,y radius,starting angle in rad,ending angle in radians,counterclockwise set to true);

var x=Math.random()*width;
var y=Math.random()*height;
var dx=3;
var dy=3;
var radius=30;
var mouse={
	x:undefined,
	y:undefined
}
window.addEventListener('mousemove',function(event){
	mouse.x=event.x;
 	mouse.y=event.y;
 });
function Circle(x,y,radius,dx,dy,color){
	this.x=x;
	this.y=y;
	this.radius=radius;
	this.dx=dx;
	this.dy=dy;
	this.color=color;
	this.draw=function(){
		ctx.beginPath();
		ctx.strokeStyle="white";
		ctx.lineWidth=10;
		ctx.fillStyle=this.color;
		ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
		ctx.stroke();
		ctx.closePath();
		ctx.fill();
	}
	this.update=function(){
		 if(this.x+this.radius>width || this.x-radius<0)
		 	this.dx=-this.dx;
		if(this.y+this.radius>height || this.y-radius<0)
			this.dy=-this.dy;
		this.x+=this.dx;
		this.y+=this.dy;
		 if(Math.abs(this.x-mouse.x)<=50 && Math.abs(this.y-mouse.y)<=50)
		 {if(this.radius<40)
		 	this.radius+=3;
		 }

		 else if(this.radius>5){
		 	this.radius-=3;
		 }
		this.draw();
	}

}
var circleArray=[];
var colorArray=['#c56cf0','#18dcff','#7158e2','#3ae374','#ff5252','#ffb142'];
for(var i=0;i<1000;i++)
{
	var radius=30;

	var x=Math.random()*(width-2*radius)+radius;
	var y=Math.random()*(height-2*radius)+radius;
	var dx=Math.random()-0.5;
	var dy=Math.random()-0.5;
	circleArray.push(new Circle(x,y,radius,dx,dy,colorArray[Math.floor(Math.random()*5)]));
}
function animate() {
	requestAnimationFrame(animate);
	// 	ctx.fillStyle = '#38ada9';
	//	ctx.fillRect(0, 0, width, height);
	ctx.clearRect(0,0,window.innerWidth,window.innerHeight);//clear screen every time so that multiple circle form and prev
	//pos gets cleared
for(var i=0;i<circleArray.length;i++)
	circleArray[i].update();
}
animate();