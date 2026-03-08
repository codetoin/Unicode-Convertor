// Declarations
const charContainer = document.createElement('div');
const charInput = document.createElement('input');
const charParagraph = document.createElement('p');
const numberContainer = document.createElement('div');
const numberInput = document.createElement('input');
const numberParagraph = document.createElement('p');

// Setters
charInput.setAttribute('placeholder', 'Enter the char : ');
charInput.maxLength = 1;
charInput.addEventListener('keypress', (event) => {
  event.preventDefault();
  const char = event.key;
  const unicode = char.codePointAt(0);
  charInput.value = char;
  charParagraph.textContent = unicode;
  charContainer.appendChild(charParagraph);
});
numberInput.setAttribute('placeholder', 'Enter the number : ');
numberInput.addEventListener('input', () => {
  const unicode = Number(numberInput.value);
  const char = String.fromCodePoint(unicode);

  numberInput.value = unicode;
  numberParagraph.textContent = char;
  numberContainer.appendChild(numberParagraph);
});

// Appends
document.body.appendChild(charContainer);
charContainer.appendChild(charInput);
document.body.appendChild(numberContainer);
numberContainer.appendChild(numberInput);

// Styles
charContainer.style.marginBottom = '50px';
