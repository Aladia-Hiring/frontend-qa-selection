import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/EmailInput.vue");/* Injection by vite-plugin-vue-inspector Start */
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
    props: ['email']
  };
  
import {  openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=950e3101"

const _hoisted_1 = {
  class: "email-input",
  "data-v-inspector": "components/EmailInput.vue:2:5"
}
const _hoisted_2 = {
  class: "input-container",
  "data-v-inspector": "components/EmailInput.vue:4:7"
}
const _hoisted_3 = ["value"]

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _cache[2] || (_cache[2] = _createElementVNode("label", {
      for: "email",
      "data-v-inspector": "components/EmailInput.vue:3:7"
    }, "Enter your email", -1 /* HOISTED */)),
    _createElementVNode("div", _hoisted_2, [
      _cache[1] || (_cache[1] = _createElementVNode("img", {
        class: "email-icon-img",
        src: "/_nuxt/assets/message.png",
        alt: "Email icon",
        "data-v-inspector": "components/EmailInput.vue:5:9"
      }, null, -1 /* HOISTED */)),
      _createElementVNode("input", {
        type: "email",
        id: "email",
        required: "",
        placeholder: "Email Address",
        value: $props.email,
        onInput: _cache[0] || (_cache[0] = $event => (_ctx.$emit('update:email', $event.target.value))),
        "data-v-inspector": "components/EmailInput.vue:6:9"
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_3)
    ])
  ]))
}

import "/_nuxt/components/EmailInput.vue?vue&type=style&index=0&scoped=075f4762&lang.css"

_sfc_main.__hmrId = "075f4762"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-075f4762"],['__file',"/home/fedasagete/aladia/frontend-qa-selection/nuxt-app/components/EmailInput.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7RUFrQkUsS0FBSyxVQUFVO0lBQ2IsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUM7RUFDakIsQ0FBQzs7Ozs7RUFuQk0sS0FBSyxFQUFDLGFBQWE7RUFBQyxrQkFBZ0IsRUFBQywrQkFBK0I7OztFQUVsRSxLQUFLLEVBQUMsaUJBQWlCO0VBQUMsa0JBQWdCLEVBQUMsK0JBQStCOzttQkFIbkY7Ozt3QkFDSSxvQkFhTSxPQWJOLFVBYU07OEJBWkosb0JBQTRGO01BQXJGLEdBQUcsRUFBQyxPQUFPO01BQUMsa0JBQWdCLEVBQUMsK0JBQStCO09BQUMsa0JBQWdCO0lBQ3BGLG9CQVVNLE9BVk4sVUFVTTtnQ0FUSixvQkFBNEg7UUFBdkgsS0FBSyxFQUFDLGdCQUFnQjtRQUFDLEdBQUcsRUFBQywyQkFBdUI7UUFBQyxHQUFHLEVBQUMsWUFBWTtRQUFDLGtCQUFnQixFQUFDLCtCQUErQjs7TUFDekgsb0JBT0U7UUFOQSxJQUFJLEVBQUMsT0FBTztRQUNaLEVBQUUsRUFBQyxPQUFPO1FBQ1YsUUFBUSxFQUFSLEVBQVE7UUFDUixXQUFXLEVBQUMsZUFBZTtRQUMxQixLQUFLLEVBQUUsWUFBSztRQUNaLE9BQUssdUNBQUUsVUFBSyxpQkFBaUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1FBQUcsa0JBQWdCLEVBQUMsK0JBQStCOytDQVg5RyIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiRW1haWxJbnB1dC52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJlbWFpbC1pbnB1dFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL0VtYWlsSW5wdXQudnVlOjI6NVwiPlxuICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvRW1haWxJbnB1dC52dWU6Mzo3XCI+RW50ZXIgeW91ciBlbWFpbDwvbGFiZWw+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtY29udGFpbmVyXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvRW1haWxJbnB1dC52dWU6NDo3XCI+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJlbWFpbC1pY29uLWltZ1wiIHNyYz1cIi4uL2Fzc2V0cy9tZXNzYWdlLnBuZ1wiIGFsdD1cIkVtYWlsIGljb25cIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9FbWFpbElucHV0LnZ1ZTo1OjlcIiAvPlxuICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCIgXG4gICAgICAgICAgaWQ9XCJlbWFpbFwiIFxuICAgICAgICAgIHJlcXVpcmVkIFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiIFxuICAgICAgICAgIDp2YWx1ZT1cImVtYWlsXCIgXG4gICAgICAgICAgQGlucHV0PVwiJGVtaXQoJ3VwZGF0ZTplbWFpbCcsICRldmVudC50YXJnZXQudmFsdWUpXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvRW1haWxJbnB1dC52dWU6Njo5XCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3RlbXBsYXRlPlxuICBcbiAgPHNjcmlwdD5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiBbJ2VtYWlsJ11cbiAgfTtcbiAgPC9zY3JpcHQ+XG4gIFxuICA8c3R5bGUgc2NvcGVkPlxuICAvKiBFbWFpbCBJbnB1dCByZWxhdGVkIHN0eWxlcyAqL1xuICAuZW1haWwtaW5wdXQge1xuICAgIG1hcmdpbjogMjBweCAwO1xuICB9XG4gIFxuICAuZW1haWwtaWNvbi1pbWd7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgfVxuICBcbiAgLmlucHV0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAjZW1haWwge1xuICAgICAgY29sb3I6ICMwMDA7XG4gIH1cbiAgXG4gIC5pbnB1dC1jb250YWluZXIgaW5wdXQge1xuICAgIGZsZXg6IDE7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gIFxuICAuaW5wdXQtY29udGFpbmVyIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM3Nzc7XG4gIH1cbiAgPC9zdHlsZT5cbiAgIl0sImZpbGUiOiIvaG9tZS9mZWRhc2FnZXRlL2FsYWRpYS9mcm9udGVuZC1xYS1zZWxlY3Rpb24vbnV4dC1hcHAvY29tcG9uZW50cy9FbWFpbElucHV0LnZ1ZSJ9