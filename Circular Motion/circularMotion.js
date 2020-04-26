const canvas=document.querySelector('canvas');
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;
var ctx=canvas.getContext('2d');

var mouse={
	x:undefined,
	y:undefined
}
addEventListener('mousemove',function(event){
mouse.x=event.clientX;
mouse.y=event.clientY;
});

function randin(min,max)
{
//	console.log(Math.floor(Math.random(max-min+1))+min);
	return(Math.floor(Math.random()*(max-min+1))+min);
}
var colorArray=['#c56cf0','#18dcff'];
var last={
	x:null,
	y:null
};
function Particle(x,y,radius)
{
	this.x=x;
	this.y=y;
	this.radius=radius;
	this.color=colorArray[randin(0,2)];
	this.radians=randin(0,2*Math.PI);
	this.distanceFromCentre=randin(50,120);
	this.draw=()=>{
		ctx.beginPath();
		ctx.moveTo(last.x,last.y);
		ctx.lineTo(this.x,this.y);
		ctx.strokeStyle=this.color;
		ctx.lineWidth=this.randius;
		ctx.stroke();
		ctx.closePath();
	};
	this.update=()=>{
		last.x=this.x;
		last.y=this.y;	
	 this.radians+=0.05;
	 	this.x=mouse.x+Math.cos(this.radians)*this.distanceFromCentre;
	 	this.y=mouse.y+Math.sin(this.radians)*this.distanceFromCentre;
		this.draw();
	};

}
particle=[]
for (var i = 0; i <400; i++) {
	particle.push(new Particle(100,100,5));
}

function animate() {
	//ctx.clearRect(0,0,canvas.width,canvas.height);
	 ctx.fillStyle="rgba(255,255,255,0.05)";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	requestAnimationFrame(animate);
	for(var i=0;i<particle.length;i++)
	particle[i].update();
	}
	animate();