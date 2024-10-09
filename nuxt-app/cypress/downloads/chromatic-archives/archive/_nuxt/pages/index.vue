import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/pages/index.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createVNode as __createVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=950e3101"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createVNode(...args) { return _interopVNode(__createVNode(...args)) }
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
/* Injection by vite-plugin-vue-inspector End */
import { defineComponent as _defineComponent } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=950e3101";
import Login from "/_nuxt/components/Login.vue";
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "index",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { Login };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
import {  openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=950e3101";
const _hoisted_1 = {
  class: "wrapper",
  "data-v-inspector": "pages/index.vue:8:5"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode($setup["Login"])
  ]);
}
_sfc_main.__hmrId = "02281a80";
typeof __VUE_HMR_RUNTIME__ !== "undefined" && __VUE_HMR_RUNTIME__.createRecord(_sfc_main.__hmrId, _sfc_main);
import.meta.hot.accept((mod) => {
  if (!mod) return;
  const { default: updated, _rerender_only } = mod;
  if (_rerender_only) {
    __VUE_HMR_RUNTIME__.rerender(updated.__hmrId, updated.render);
  } else {
    __VUE_HMR_RUNTIME__.reload(updated.__hmrId, updated);
  }
});
import _export_sfc from "/_nuxt/@id/__x00__plugin-vue:export-helper";
export default /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/fedasagete/aladia/frontend-qa-selection/nuxt-app/pages/index.vue"]]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLFdBQVc7Ozs7Ozs7Ozs7OztFQU1ULE9BQU07QUFBQSxFQUFVLG9CQUFpQjs7O3VCQUF0QyxvQkFFTSxPQUZOLFlBRU07QUFBQSxJQURILGFBQVM7QUFBQSIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiaW5kZXgudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgTG9naW4gZnJvbSAnfi9jb21wb25lbnRzL0xvZ2luLnZ1ZSdcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gIFxuXG4gICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIiBkYXRhLXYtaW5zcGVjdG9yPVwicGFnZXMvaW5kZXgudnVlOjg6NVwiPlxuICAgICAgIDxMb2dpbiAvPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuIl0sImZpbGUiOiIvaG9tZS9mZWRhc2FnZXRlL2FsYWRpYS9mcm9udGVuZC1xYS1zZWxlY3Rpb24vbnV4dC1hcHAvcGFnZXMvaW5kZXgudnVlIn0=