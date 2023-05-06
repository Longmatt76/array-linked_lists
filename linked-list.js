/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let pushedVal = new Node(val);
    if (!this.head) {
      this.head = pushedVal;
      this.tail = this.head;
    } else {
      this.tail.next = pushedVal;
      this.tail = pushedVal;
    }

    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let unshiftedVal = new Node(val);
    if (!this.head) {
      this.head = unshiftedVal;
      this.tail = this.head;
    } else {
      unshiftedVal.next = this.head;
      this.head = unshiftedVal;
    }
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) {
      return null;
    }
    let popVal;
    if (this.head === this.tail) {
      popVal = this.head.val;
      this.head = null;
      this.tail = null;
    } else {
      let curVal = this.head;
      while (curVal.next !== this.tail) {
        curVal = curVal.next;
      }
      popVal = this.tail.val;
      curVal.next = null;
      this.tail = curVal;
    }
    this.length -= 1;
    return popVal;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) {
      return null;
    }
    let shiftVal = this.head.val;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.length -= 1;
    return shiftVal;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx > this.length - 1) {
      return null;
    } else if (idx === 0) {
      return this.head.val;
    }
    let count = 0;
    let curVal = this.head;
    while (curVal) {
      curVal = curVal.next;
      count++;
      if (idx === count) {
        return curVal.val;
      }
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx > this.length - 1) {
      return null;
    } else if (idx === 0) {
      this.head.val = val;
    }
    let count = 0;
    let curVal = this.head;
    while (curVal) {
      curVal = curVal.next;
      count++;
      if (idx === count) {
        curVal.val = val;
      }
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */
  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      return null;
    }

    let count = 0;
    let curVal = this.head;
    let prevVal = null;
    while (count < idx) {
      prevVal = curVal;
      curVal = curVal.next;
      count += 1;
    }
    let newVal = new Node(val);
    if (idx === 0) {
      newVal.next = this.head;
      this.head = newVal;
      if (!this.tail) {
        this.tail = newVal;
      }
    } else if (idx === this.length) {
      this.tail.next = newVal;
      this.tail = newVal;
    } else {
      newVal.next = curVal;
      prevVal.next = newVal;
    }
    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      return null;
    }
    let count = 0;
    let curVal = this.head;
    let prevVal = null;
    while (curVal !== null) {
      if (count === idx) {
        if (prevVal === null) { 
          this.head = curVal.next;
          if (this.head === null) { 
            this.tail = null;
          }
        } else {
          prevVal.next = curVal.next;
          if (curVal.next === null) {
            this.tail = prevVal;
          }
        }
        curVal.next = null;
        this.length--;
        return curVal.val;
      }
      prevVal = curVal;
      curVal = curVal.next;
      count++;
    }
  }
  
  /** average(): return an average of all values in the list */

  average() {
    if (!this.head) {
      return 0;
    }
    let count = 0;
    let curVal = this.head;
    while (curVal) {
      count += curVal.val;
      curVal = curVal.next;
    }
    return count / this.length;
  }
}

module.exports = LinkedList;
