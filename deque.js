//deque using doubly linked list.

class Node{
  constructor(data){
    this.data=data;
    this.next=null;
    this.prev=null;
  }
    
}

class DoublyLinkedList{
  constructor(){
    this.root=null;
    this.tail=null;
  }
  
  addFront(data){
    let newnode= new Node(data);
    if(this.root===null){
      this.root=newnode;
      this.tail=newnode;
      return;
    }
    else{
      newnode.next=this.root;
      this.root.prev=newnode;
      this.root=newnode;
    }
  }
  
  addEnd(data){
    let newnode= new Node(data);
     if(this.tail===null){
      this.root=newnode;
      this.tail=newnode;
      return;
    }
    else{
      this.tail.next=newnode;
      newnode.prev=this.tail;
      this.tail=newnode;
      
    }
  }
  
  removeFront(){
    
    if(this.root===null){
      console.log("list empty");
      return;
    }
    let data=this.root.data;
    this.root=this.root.next;
    
     if(this.root.next==null){
          this.tail.next=null;
        }
        return data; 
    }

    removeEnd() {
        if (this.tail === null) {
            console.log('List is empty');
            return;
        }

        let data = this.tail.data;
        this.tail = this.tail.prev;
        this.tail.next = null;

        if (this.tail.prev === null) {
            this.root.next = null;
        }
        return data;
    }
    

    display(){
      let temp=this.root;
      if(this.root===null){
        console.log("list empty");
      }
      else{
        while(temp!==null){
          console.log(temp.data);
          temp=temp.next;
        }
      }
    }
    
}


let list=new DoublyLinkedList();
list.addFront(10);
list.addFront(20);
console.log('after adding items at front');
list.display();

list.addEnd(30);
list.addEnd(40);
console.log('after adding items at back');
list.display();
console.log('removing from front');
console.log(list.removeFront());
console.log('after removing from front');
list.display();
console.log('removing from end');
console.log(list.removeEnd());
console.log('after removing from end');
list.display();

console.log(list.removeEnd());
console.log('after removing from end');
list.display();