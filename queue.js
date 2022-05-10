//Implementing Queue using array.

class Queue{
    constructor() {
        this.array = []
        this.front = 0;
        this.rear = 0;
    }

    //adds element at end of queue;
    enqueue(data) {
        this.array.push(data);
        this.rear = this.rear + 1;
    }

  

    //removes element from front
    dequeue() {
        if (this.isEmpty()===true) {
            console.log("Queue is empty");
            return;
        }
        else {
            this.array.shift();
            this.front = this.front + 1;
        }
        
    }
      //checks if queue is empty or not
    isEmpty() {
        if (this.array.length === 0) 
            return true;
        else
            return false;
    }

    //displays all the elements present in queue
    display() {
        for (let index = 0; index < this.array.length; index++) {
            console.log(this.array[index]);
        }
    }

}

let q = new Queue();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.display();
q.dequeue();
q.display();