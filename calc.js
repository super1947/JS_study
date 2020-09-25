document.querySelector('#button').addEventListener('click', () => {
  const a = document.querySelector('#input-first').value;
  const b = document.querySelector('#input-second').value;
  if (a) {
    if (b) {
      a * b;
      document.querySelector('#result').textContent = a * b;
    } else {
      document.querySelector('#result').textContent =
        '두 번째 값을 입력하세요.';
    }
  } else {
    document.querySelector('#result').textContent = '첫 번째 값을 입력하세요.';
  }
});
