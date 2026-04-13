/* 中文注释：该文件用于实现站点前端相关逻辑，请在修改时保持功能与接口一致。 */
import Tooltip from 'bootstrap/js/src/tooltip';

export function loadTooptip() {
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );

  [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
  );
}
