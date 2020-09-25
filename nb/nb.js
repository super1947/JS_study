function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 랜덤하게 추출 (array Ver)
function getRandomArray(min, max, count) {
  // 종료
  if (max - min + 1 < count) return;

  // 배열 생성
  let rst = [];

  while (true) {
    let index = getRandom(min, max);

    // 중복 여부를 체크
    if (rst.indexOf(index) > -1) {
      continue;
    }

    rst.push(index);

    // 원하는 배열 갯수가 되면 종료
    if (rst.length == count) {
      break;
    }
  }

  return rst;
}

const answer = document.querySelector('#answer');
const input = document.querySelector('#input');
const submit = document.querySelector('#submit');
const logs = document.querySelector('#logs');
answer.textContent = getRandomArray(1, 9, 4).join('');
console.log(typeof getRandomArray(1, 9, 4).join(''));

let count = 1;
submit.addEventListener('click', () => {
  if (input.value === answer.textContent) {
    logs.append('HOME RUN!');
  } else {
    let strike = 0;
    let ball = 0;
    for (const [answerindex, anumber] of answer.textContent
      .split('')
      .entries()) {
      // console.log(answerindex, anumber);
      for (const [inputindex, inumber] of input.value.split('').entries()) {
        // console.log(inputindex, inumber);
        if (anumber === inumber) {
          if (answerindex === inputindex) {
            strike++;
          } else {
            ball++;
          }
        }
      }
    }
    logs.append(`${input.value} : ${strike}Strike ${ball}Ball`);
    logs.append(document.createElement('br'));
    if (count > 9) {
      logs.append(`Game over! answer is ${answer.textContent}`);
    } else {
      count++;
    }
    input.value = null;
  }
});
