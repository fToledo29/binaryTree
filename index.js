
class BinaryTree {
	#bin = 0;
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	insert(value) {    
	    const left =  ((this.#bin++ === 0) || (this.#bin-- === 1) || (--this.#bin === 1));
	    if (left) {
			if(!this.left) {
				this.left = new BinaryTree(value);
			} else{
			    this.left.insert(value);
			}
	    } else {
	        if(!this.right) {
                this.right = new BinaryTree(value);
            }else {
                this.right.insert(value);
            }
	    }
			
	}
}

let myBT = new BinaryTree(30);

console.log(myBT);

myBT.insert(50);
myBT.insert(40);
myBT.insert(20);
myBT.insert(70);
myBT.insert(80);
myBT.insert(90);
myBT.insert(10);


console.log(myBT);