const answers = ["a", "b", "c", "c", "a"];
const result = calculateResults(answers);

function calculateResults(answerArray) {
  let aCount = 0;
  let bCount = 0;
  let cCount = 0;
  let dCount = 0;
  
  answerArray.forEach((answer) => {
    switch (answer) {
      case 'a':
        aCount += 1;
        break;
      case 'b':
        bCount += 1;
        break;
      case 'c':
        cCount += 1;
        break;
      case 'd':
        dCount += 1;
        break;
    }
  });
  
  if (aCount > bCount && aCount > cCount && aCount > dCount) {
    return 'You should learn Ruby!';
  } else if (bCount > aCount && bCount > cCount && bCount > dCount) {
    return 'You should learn JavaScript!';
  } else if (cCount > aCount && cCount > bCount && cCount > dCount) {
    return 'You should learn C#!';
  } else if (dCount > aCount && dCount > bCount && dCount > cCount) {
    return 'You should learn Python!';
  } else return 'Your answers suggest you want to learn two languages! Since you\'re indecisive, I suggest you learn a strongly typed lanugage like C#.'
}
