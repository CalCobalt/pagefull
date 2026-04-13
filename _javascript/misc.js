/* 中文注释：该文件用于实现站点前端相关逻辑，请在修改时保持功能与接口一致。 */
import { basic, initSidebar, initTopbar } from './modules/layouts';
import { initLocaleDatetime } from './modules/components';

initSidebar();
initTopbar();
initLocaleDatetime();
basic();
