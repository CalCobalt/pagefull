/* 中文注释：该文件用于实现站点前端相关逻辑，请在修改时保持功能与接口一致。 */
/**
 * Set up image popup
 *
 * Dependencies: https://github.com/biati-digital/glightbox
 */

const lightImages = '.popup:not(.dark)';
const darkImages = '.popup:not(.light)';
let selector = lightImages;

function updateImages(current, reverse) {
  if (selector === lightImages) {
    selector = darkImages;
  } else {
    selector = lightImages;
  }

  if (reverse === null) {
    reverse = GLightbox({ selector: `${selector}` });
  }

  [current, reverse] = [reverse, current];
}

export function imgPopup() {
  if (document.querySelector('.popup') === null) {
    return;
  }

  const hasDualImages = !(
    document.querySelector('.popup.light') === null &&
    document.querySelector('.popup.dark') === null
  );

  if (Theme.visualState === Theme.DARK) {
    selector = darkImages;
  }

  let current = GLightbox({ selector: `${selector}` });

  if (hasDualImages && Theme.switchable) {
    let reverse = null;

    window.addEventListener('message', (event) => {
      if (event.source === window && event.data && event.data.id === Theme.ID) {
        updateImages(current, reverse);
      }
    });
  }
}
