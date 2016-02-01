"use strict"

const ignoreList = [
  /#+[ \f\t\v]*([^\n]*\n)/g, // header
  />[ \f\t\v]*([^\n]*\n)/g, // blockquote
  /!*\[[^\]]*\]\([^\)]*\)()\n/g, // link
  /(?:(?:\*[ \f\t\v]*){3,}|(?:-[ \f\t\v]*){3,})()\n/g, // horizon
  /[ \f\t\v]*\*[ \f\t\v]*([^\n]*\n)/g, // ul
  /[ \f\t\v]*[0-9]+\.[ \f\t\v]*([^\n]*\n)/g // ol
];

// TODO
// code, strong

export default function(text) {
  return ignoreList.reduce((result, exp) => result.replace(exp, '$1'), text);
}
