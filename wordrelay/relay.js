const btn = document.querySelector('#button');
btn.addEventListener('click', () => {
  const word = document.querySelector('#set-word').textContent;
  const input = document.querySelector('#input-word').value;
  const lastIndex = word.length - 1;
  const w = word[lastIndex];
  const i = input[0];
  if (w === i) {
    document.querySelector('#set-word').textContent = input;
    document.querySelector('#input-word').value = null;
    document.querySelector('#input-word').focus();
    document.querySelector('#error').textContent = null;
  } else {
    document.querySelector('#error').textContent = '땡!';
    document.querySelector('#input-word').value = null;
    document.querySelector('#input-word').focus();
  }
});
