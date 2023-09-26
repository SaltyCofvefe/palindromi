const syote = require("readline");

const rl = syote.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function OnkoPalindrome(str) {
  const palindromiSana = str.toLowerCase().replace(/[^A-Za-z0-9]/g, "");

  const len = palindromiSana.length;
  for (let i = 0; i < len / 2; i++) {
    if (palindromiSana[i] !== palindromiSana[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

rl.question("Syötä sana: ", (sana) => {
  if (OnkoPalindrome(sana)) {
    console.log(sana + " on palindromi.");
  } else {
    console.log(sana + " ei ole palindromi.");
  }
  rl.close();
});
