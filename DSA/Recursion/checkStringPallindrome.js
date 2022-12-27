const isPalindrome = (str, i = 0) => {
  if (i >= parseInt(str.length / 2)) return true;
  if (str[i] !== str[str.length - i - 1]) return false;

  return isPalindrome(str, i + 1);
};

console.log(isPalindrome("NAYAN"));

