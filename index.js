function scuberGreetingForFeet(length) {
  // Write your code here!
  if (length <= 400) {
    return 'This one is on me!'
  }
  else if (length > 2500) {
    return 'No can do.'
  }
  else if (length > 2000) {
    return 'I will gladly take your thirty bucks.'
  }
  else if (length > 400 && length < 2000) {
    return 'That will be twenty bucks.'
  };
};

function ternaryCheckCity(city) {
  // Write your code here!
  if (city === 'NYC') {
    return 'Ok, sounds good.'
  }
  else {
    return 'No go.'
  };
}

function switchOnCharmFromTip(amount) {
  // Write your code here!
  switch (amount) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
  }
}