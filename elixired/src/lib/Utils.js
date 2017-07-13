const moment = require('moment');

const parseShortDate = (date) => {
    return moment(date, 'YYYY-MM-DD');
};

const formatShortDate = (momentDate) => {
    return momentDate.format('YYYY-MM-DD');
};

const titlelize = (string) =>
  (
    string
      .toLowerCase()
      .split(' ')
      .map((word) =>
        (word.charAt(0).toUpperCase() + word.slice(1)))
      .join(' ')
  );

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
const escapeRegexCharacters = (str) =>
  str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const randomDelay = () =>
  300 + Math.random() * 1000;

const parseText = (str) => {
  const pattern = /(https?:\/\/[^\s]+)/ig;

  return str.replace(pattern,"<a href='$1'>$1</a>");
};

export {
  parseShortDate,
  formatShortDate,
  titlelize,
  escapeRegexCharacters,
  randomDelay,
  parseText
};
