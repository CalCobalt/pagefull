/* 中文注释：该文件用于实现站点前端相关逻辑，请在修改时保持功能与接口一致。 */
/**
 * Add listener for theme mode toggle
 */

const $toggle = document.getElementById('mode-toggle');

export function modeWatcher() {
  if (!$toggle) {
    return;
  }

  $toggle.addEventListener('click', () => {
    Theme.flip();
  });
}
