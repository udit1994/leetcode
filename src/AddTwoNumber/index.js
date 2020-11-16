/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export default function (l1, l2) {
  let l1Current = l1;
  let l2Current = l2;
  let carry = 0;

  let resPrev;
  let res;

  while (l1Current && l2Current) {
    const sum = l1Current.val + l2Current.val + carry;

    const newNode = new ListNode(sum % 10, null);

    if (!res) {
      res = newNode;
    } else {
      resPrev.next = newNode;
    }

    resPrev = newNode;

    carry = Math.floor(sum / 10);

    l1Current = l1Current.next;
    l2Current = l2Current.next;
  }

  let rem = l1Current || l2Current;

  while (rem) {
    const sum = rem.val + carry;

    const newNode = new ListNode(sum % 10, null);

    if (!res) {
      res = newNode;
    } else {
      resPrev.next = newNode;
    }

    resPrev = newNode;

    carry = Math.floor(sum / 10);

    rem = rem.next;
  }

  if (carry === 1) {
    const newNode = new ListNode(1, null);
    resPrev.next = newNode;
  }

  return res;
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * Test
 *
 * const l1 = new ListNode(2, new ListNode(4, new ListNode(3, null)));
 * const l2 = new ListNode(5, new ListNode(6, new ListNode(4, null)));
 *
 * console.log(functionName(l1, l2));
 */
