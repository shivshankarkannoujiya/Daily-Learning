// TODO: Implementation of LRU Cache
/*
    LRU: Least Recently Used
    It means, 
        if my cache(box) if full and i need space
        I will remove the things that i haven't touched for the longest time
 */

/*
4. Real-life analogy
    - Imagine you have a small backpack (cache) that only holds 3 books.
    - You keep switching between math, science, and history.
    - One day, you suddenly need your geography book. But your bag is full.
    - Which book do you take out? → The one you haven’t read in the longest time.

T   hat’s LRU!
*/

/*
    Cache = a data structure (usually HashMap + LinkedList)
    Operations:
        - get(key) → return value if present, else -1
        - put(key, value) → insert/update value, remove least recently used if full
*/

/*
Node{
    next: Node | null
    prev: Node | Null
    value: value <Actual value>
}
*/

class LRUCache{

    constructor(capacity) { 
        this.capacity = Number(capacity)
        this.map = new Map() // <key> : <Node Address>
        this.length = 0
        this.head = null
        this.tail = null // Point LRU Node
    }
    
    #removeNode(node) {
        if (!node) return
        
        if (node.prev) {
            node.prev.next = node.next
        }
        if (node.next) {
            node.next.prev = node.prev
        }

        if (node === this.head) {
            this.head = node.next
        }

        if (node === this.tail) {
            this.tail = node.prev
        }
    }

    get(key) {
        if (!this.map.has(key)) return null
        const node = this.map.get(key)

        this.#removeNode(node)
        node.prev = null
        node.next = this.head

        if (this.head !== null) {
            this.head.prev = node
        }

        this.head = node
        return node.value
    }
    
    put(key, value) {

                
        /*
            if key is already there
                Remove the existing node
                Create a new node
                Add to the Head
        */
        
        // TODO: Check if we have capacity
        if (this.length === this.capacity) {
            if (!this.map.has(key)) {
                this.#removeNode(this.tail)
                this.length--
            }
        }

        if (this.map.has(key)) {
            this.#removeNode(this.map.get(key))
        }

        const node = {
            next: this.head,
            prev: null,
            key,
            value
        }

        this.map.set(key, node)
        if (this.head !== null) {
            this.head.prev = node
        }
        this.head = node

        if (this.tail === null) {
            this.tail = node
        } 

        this.length++
    }

    dubug() {
        let currentNode = this.head
        let arr = []
        while (currentNode !== null) {
            arr.push(currentNode)
            currentNode = currentNode.next
        }

        return arr.reduce((acc , current) => acc.concat(`--> [ [${current.key}] : [${current.value}] ] -->`), '' )
    }
}


const cache = new LRUCache(3)
cache.put(1, 10)
cache.put(2, 20)
console.log(cache.get(1)) // Access 1 before adding 3 => 2 remove ho jayega
cache.put(3, 30)
console.log(cache.get(1))
console.log(cache.get(1))
console.log(cache.get(1))
console.log(cache.get(2))

console.log(cache.dubug());