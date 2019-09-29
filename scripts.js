/*
This problem was asked by Google.

Given k sorted singly linked lists, write a function to merge all the lists into one sorted singly linked list.
*/

class singleNode{
  constructor(value=null,next=null){
    this.value = value;
    this.next = next;
  }

  addChild(newNode) {
    this.next = newNode
    return newNode
  }
}

let root1 = new singleNode('1')
let node2 = new singleNode('2')
let node3 = new singleNode('3')
root1.addChild(node2)
node2.addChild(node3)
console.log(root1)

let root4 = new singleNode('4')
let node5 = new singleNode('5')
let node6 = new singleNode('6')
root4.addChild(node5)
node5.addChild(node6)
console.log(root4)

let root7 = new singleNode('7')
let node8 = new singleNode('8')
let node9 = new singleNode('9')
root7.addChild(node8)
node8.addChild(node9)
console.log(root7)

$(document).ready(function() {
  $('#form-1').submit(function(){
    event.preventDefault()
    let input1 = $('#input-1').val()
    input1 = input1.replace(/\'/g,'"')  //JSON.parse does not like single quotes for arrays
    input1 = JSON.parse(input1)
    event.preventDefault()
    $('#output-1').text(JSON.stringify(input1))

  })
});
