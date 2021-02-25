const LinkedList = require('./SinglyLinkedList')

describe('#insertAtHead', () => {
    test('it adds the element to the beginning of the list', () =>{
        const ll = new LinkedList()
        ll.insertAtHead(10)
        const oldHead = ll.head
        ll.insertAtHead(20)

        expect(ll.head.value).toBe(20)
        expect(ll.head.next).toBe(oldHead)
        expect(ll.length).toBe(2)
    })
})

describe('#getByIndex', () =>{
    describe('with index less than 0', () =>{
        test('it returns null', () =>{
            const ll = LinkedList.fromValues(1, 2, 3)
            expect(ll.getByIndex(-1)).toBeNull()
        })

    })
    describe('with index greater than List length', () =>{
        test('it returns null', () =>{
            const ll = LinkedList.fromValues(1,2,3)
            expect(ll.getByIndex(8)).toBeNull()
        })

    })

    describe('With index 0', () =>{
        test('it returns first element', () => {
            const ll = LinkedList.fromValues(1, 2, 3)
            expect(ll.getByIndex(0).value).toBe(1)
        })
    })

    describe('With index in the middle', () =>{
        test('it returns middle element value', () => {
            const ll = LinkedList.fromValues(1, 2, 3)
            expect(ll.getByIndex(1).value).toBe(2)
        })
    })


    describe('#insertAtIndex', ()=>{

        describe('with valid index', () =>{
            test('it inserts element at appropriate index', ()=>{
                const ll = LinkedList.fromValues(1, 2, 3)
                ll.insertAtIndex(1, 77)
                ll.insertAtIndex(2, 70)
                expect(ll.getByIndex(1).value).toBe(77)
                expect(ll.getByIndex(2).value).toBe(70)
            })
        })

        describe('with index 0', ()=>{
            test('it inserts node at head', ()=>{
                const ll = LinkedList.fromValues(1, 2, 3)
                ll.insertAtIndex(0, 90);
                expect(ll.head.value).toBe(90)
                expect(ll.head.next.value).toBe(1)
                expect(ll.length).toBe(4)
            })    
        })

        describe('with index less than 0', ()=>{
            test('it does not insert anything', ()=>{
                const ll = LinkedList.fromValues(1, 2, 3)
                ll.insertAtIndex(-3, 90);
                expect(ll.length).toBe(3)
            })    
        })

        describe('with index greater than list length', ()=>{
            test('it does not insert anything', ()=>{
                const ll = LinkedList.fromValues(1, 2, 3)
                ll.insertAtIndex(100, 90);
                expect(ll.length).toBe(3)
            })
          })
    })
    describe('#deleteAtIndex', ()=>{
        describe('with index less than 0', ()=>{
            test('it does not delete anything', ()=>{
                const ll = LinkedList.fromValues(1, 2, 3)
                ll.deleteAtIndex(-3);
                expect(ll.length).toBe(3)
            })    
        })
        describe('with index greater than list length', ()=>{
            test('it does not delete anything', ()=>{
                const ll = LinkedList.fromValues(1, 2, 3)
                ll.deleteAtIndex(100);
                expect(ll.length).toBe(3)
            })    
        })
        describe('with index in the middle', ()=>{
            test('it deletes the node of the given index', ()=>{
                const ll = LinkedList.fromValues(1, 2, 3)
                ll.deleteAtIndex(1);
                expect(ll.length).toBe(2)
            })    
        })
        describe('with index of 0', ()=>{
            test('it deletes the head', ()=>{
                const ll = LinkedList.fromValues(1, 2, 3)
                ll.deleteAtIndex(0);
                expect(ll.head.value).toBe(2)
                expect(ll.length).toBe(2)
            })    
        })
    })
})