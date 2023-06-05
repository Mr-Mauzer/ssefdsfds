const desktop = document.querySelector('.friend');

const btnsColor = document.querySelectorAll('.btns-color .btN');
btnsColor.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    const currentBtn = event.target;
    const currentBtnText = currentBtn.textContent.toLowerCase();
    desktop.style.backgroundColor = currentBtnText;
  });
});

const btnsWidth = document.querySelectorAll('.btns-width .btN');
btnsWidth.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    const currentBtn = event.target;
    const currentBtnText = currentBtn.textContent;
    desktop.style.width = currentBtnText + 'px';
  });
});

const btnsHeight = document.querySelectorAll('.btns-height .btN');
btnsHeight.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    const currentBtn = event.target;
    const currentBtnText = currentBtn.textContent;
    desktop.style.height = currentBtnText + 'px';
  });
});
