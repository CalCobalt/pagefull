/* 中文注释：该文件用于实现站点前端相关逻辑，请在修改时保持功能与接口一致。 */
import { back2top, loadTooptip, modeWatcher } from '../components';

export function basic() {
  modeWatcher();
  back2top();
  loadTooptip();
}
