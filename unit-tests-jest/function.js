function div(a, b) { // inputs are integers
  return a / b;
}

function containsNumbers(text) { // inputs are strings
  for (let i = 0; i < text.length; i++) {

    // the bug is that it doesn't handle the case where the character is a space
    if (!isNaN(text.charAt(i))) {
      return true;
    }

    // to fix the bug: handle spaces
    //if (text.charAt(i) === " ") {
    //  continue;
    //}
  }

  return false;
}

exports.div = div;
exports.containsNumbers = containsNumbers;