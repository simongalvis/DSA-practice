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
})