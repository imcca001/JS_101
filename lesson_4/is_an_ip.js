function isDotSeparatedIpAddress(inputString) {
  let isIp = false;
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return isIp
  }
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return isIp;
    }
  }

  return isIp = true;
}


(H) LVL 4 SuperHuman +  The Big 5
(W) Capstone + 300k / Month
(re) Cobra Tate + Sex Hacking
(Pe) No-Gi + Shootboxing
(S) HRV/EEG + WH/Sauna