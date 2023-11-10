function palindrome(str) {
  // 1. lowercase all string
  let alphanumericOnly = str.toLowerCase()
  // 2. remove all non-alphanumeric
  .match(/[a-z0-9]/g);
  // console.log(alphanumericOnly.join())
  // 3. str (===) reverse str
  return alphanumericOnly.join('') === alphanumericOnly.reverse().join('')

}

console.log(palindrome("Race car"));