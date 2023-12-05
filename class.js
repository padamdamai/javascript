class students {
	constructor(name,roll,address){
			this.name = name;
			this.roll = roll;
			this.address = address;
	}
}

let obj = new students("Padam",13,"Nakhudol");
console.log("Hello i am ",obj.name);
console.log("My roll no is",obj.roll);
console.log("I live in ",obj.address);