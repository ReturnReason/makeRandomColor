'use strict';

const get = (elem) => {
  return document.querySelector(elem);
};

const $clickBtn = get('.change-color-btn');
const $bg = get('.bg');
const $colorCode = get('.color-code');

$clickBtn.addEventListener('click', () => {
  const pickColor = makeBgColor();
  $bg.style.background = `#${pickColor}`;
  $clickBtn.style.color = `#${pickColor}`;
  $colorCode.innerText = `#${pickColor}`;
  $colorCode.style.color = `#${pickColor}`;
});

function makeBgColor() {
  const candidate = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  const palette = Array(6)
    .fill()
    .map((v) => candidate[Math.floor(Math.random() * candidate.length)]);

  return palette.join('');
}
