import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/SubmitButton.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createElementVNode as __createElementVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=950e3101"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createElementVNode(...args) { return _interopVNode(__createElementVNode(...args)) }
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
/* Injection by vite-plugin-vue-inspector End */

  const _sfc_main = {
    emits: ['login']
  };
  
import {  openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=950e3101"

const _hoisted_1 = {
  class: "submit",
  "data-v-inspector": "components/SubmitButton.vue:2:5"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("button", {
      onClick: _cache[0] || (_cache[0] = $event => (_ctx.$emit('login'))),
      "data-v-inspector": "components/SubmitButton.vue:3:7"
    }, "Enter")
  ]))
}

import "/_nuxt/components/SubmitButton.vue?vue&type=style&index=0&scoped=453a6e6b&lang.css"

_sfc_main.__hmrId = "453a6e6b"
typeof __VUE_HMR_RUNTIME__ !== 'undefined' && __VUE_HMR_RUNTIME__.createRecord(_sfc_main.__hmrId, _sfc_main)
import.meta.hot.accept(mod => {
  if (!mod) return
  const { default: updated, _rerender_only } = mod
  if (_rerender_only) {
    __VUE_HMR_RUNTIME__.rerender(updated.__hmrId, updated.render)
  } else {
    __VUE_HMR_RUNTIME__.reload(updated.__hmrId, updated)
  }
})
import _export_sfc from "/_nuxt/@id/__x00__plugin-vue:export-helper"
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-453a6e6b"],['__file',"/home/fedasagete/aladia/frontend-qa-selection/nuxt-app/components/SubmitButton.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7RUFPRSxLQUFLLFVBQVU7SUFDYixLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQztFQUNqQixDQUFDOzs7OztFQVJNLEtBQUssRUFBQyxRQUFRO0VBQUMsa0JBQWdCLEVBQUMsaUNBQWlDOzs7O3dCQUF0RSxvQkFFTSxPQUZOLFVBRU07SUFESixvQkFBaUc7TUFBeEYsT0FBSyx1Q0FBRSxVQUFLO01BQVcsa0JBQWdCLEVBQUMsaUNBQWlDO09BQUMsT0FBSyIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiU3VibWl0QnV0dG9uLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInN1Ym1pdFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1N1Ym1pdEJ1dHRvbi52dWU6Mjo1XCI+XG4gICAgICA8YnV0dG9uIEBjbGljaz1cIiRlbWl0KCdsb2dpbicpXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvU3VibWl0QnV0dG9uLnZ1ZTozOjdcIj5FbnRlcjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L3RlbXBsYXRlPlxuICBcbiAgPHNjcmlwdD5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGVtaXRzOiBbJ2xvZ2luJ11cbiAgfTtcbiAgPC9zY3JpcHQ+XG4gIFxuICA8c3R5bGUgc2NvcGVkPlxuICAuc3VibWl0IGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XG4gIH1cbiAgXG4gIC5zdWJtaXQgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgfVxuICA8L3N0eWxlPlxuICAiXSwiZmlsZSI6Ii9ob21lL2ZlZGFzYWdldGUvYWxhZGlhL2Zyb250ZW5kLXFhLXNlbGVjdGlvbi9udXh0LWFwcC9jb21wb25lbnRzL1N1Ym1pdEJ1dHRvbi52dWUifQ==