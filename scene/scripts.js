//cube
function update( event ) {
	this.rotation.x += 0.01;
	this.rotation.y += 0.02;
	this.rotation.z += 0.03;
}

//red light
t = 0;
function update( event ) {
	//console.log(this);
	t += 0.03;
	this.position.x = this.position.x + Math.sin(t)*0.01;
	this.position.y = this.position.y + Math.sin(t * 0.9)*0.01;
	this.position.z = this.position.z + Math.sin(t * 1.3)*0.01;
}

//green light
t = 0;
function update( event ) {
	//console.log(this);
	t += 0.06;
	this.position.x = this.position.x + Math.sin(t)*0.06;
	this.position.y = this.position.y + Math.sin(t * 0.9)*0.06;
	this.position.z = this.position.z + Math.sin(t * 1.3)*0.06;
}