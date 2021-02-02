/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  /**
   * 1. Initialize Result String
   * 2. Initalize  Carry => 0
   * 3. Stripping the last character from both the strings and addding the carry(if it exists)
   * 4. IF SUM > 1 then set the CARRY TO 1
   * 5. ELSE , then set carry to 0
   * 6. ONCE the operation is done ,  update the strings so that the size is reduced
   */

  let result = "";
  let carry = 0;
  while (a || b || carry) {
    let sum = +a.slice(-1) + +b.slice(-1) + carry;

    /**
     *
     * 11 + 1
     * 1. 1 + 1 = 2 ( carry of 1)
     * 2. result = 2%2 =0
     * 3.  a=> 1 b=> ""
     * 4.  sum = 1 + 0 + 1 = 2 (carry of 1)
     * 5. result = 00
     * 6  a =>6 "" , b => ""
     * 7  sum = 0 + 0 + 1;
     * 8. result = 1 + "00" => 100
     */
    if (sum > 1) {
      carry = 1;
      result = (sum % 2) + result;
    } else {
      carry = 0;
      result = sum + result;
    }
    a = a.slice(0, -1);
    b = b.slice(0, -1);
  }

  return result;
};

const result = addBinary("11", "1");
console.log("result", result);
