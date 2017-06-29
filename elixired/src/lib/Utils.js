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

export {
  titlelize,
  escapeRegexCharacters,
  randomDelay
};
