import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/SocialLoginButton.vue");/* Injection by vite-plugin-vue-inspector Start */
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
    emits: ['loginWithGoogle', 'loginWithFacebook', 'loginWithApple']
  };
  
import {  createTextVNode as _createTextVNode, openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=950e3101"

const _hoisted_1 = {
  class: "social-buttons",
  "data-v-inspector": "components/SocialLoginButton.vue:2:5"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("button", {
      class: "google",
      onClick: _cache[0] || (_cache[0] = $event => (_ctx.$emit('loginWithGoogle'))),
      "data-v-inspector": "components/SocialLoginButton.vue:3:7"
    }, _cache[3] || (_cache[3] = [
      _createElementVNode("img", {
        src: "/_nuxt/assets/google.svg",
        alt: "Google icon",
        "data-v-inspector": "components/SocialLoginButton.vue:4:9"
      }, null, -1 /* HOISTED */),
      _createTextVNode(" Continue with Google ")
    ])),
    _createElementVNode("button", {
      class: "facebook",
      onClick: _cache[1] || (_cache[1] = $event => (_ctx.$emit('loginWithFacebook'))),
      "data-v-inspector": "components/SocialLoginButton.vue:7:7"
    }, _cache[4] || (_cache[4] = [
      _createElementVNode("img", {
        src: "/_nuxt/assets/facebook.svg",
        alt: "Facebook icon",
        "data-v-inspector": "components/SocialLoginButton.vue:8:9"
      }, null, -1 /* HOISTED */),
      _createTextVNode(" Continue with Facebook ")
    ])),
    _createElementVNode("button", {
      class: "apple",
      onClick: _cache[2] || (_cache[2] = $event => (_ctx.$emit('loginWithApple'))),
      "data-v-inspector": "components/SocialLoginButton.vue:11:7"
    }, _cache[5] || (_cache[5] = [
      _createElementVNode("img", {
        src: "/_nuxt/assets/apple.svg",
        alt: "Apple icon",
        "data-v-inspector": "components/SocialLoginButton.vue:12:9"
      }, null, -1 /* HOISTED */),
      _createTextVNode(" Continue with Apple ")
    ]))
  ]))
}

import "/_nuxt/components/SocialLoginButton.vue?vue&type=style&index=0&scoped=3e03b3c0&lang.css"

_sfc_main.__hmrId = "3e03b3c0"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-3e03b3c0"],['__file',"/home/fedasagete/aladia/frontend-qa-selection/nuxt-app/components/SocialLoginButton.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7RUFrQkUsS0FBSyxVQUFVO0lBQ2IsS0FBSyxFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUM7RUFDbEUsQ0FBQzs7Ozs7RUFuQk0sS0FBSyxFQUFDLGdCQUFnQjtFQUFDLGtCQUFnQixFQUFDLHNDQUFzQzs7Ozt3QkFBbkYsb0JBYU0sT0FiTixVQWFNO0lBWkosb0JBR1M7TUFIRCxLQUFLLEVBQUMsUUFBUTtNQUFFLE9BQUssdUNBQUUsVUFBSztNQUFxQixrQkFBZ0IsRUFBQyxzQ0FBc0M7O01BQzlHLG9CQUE0RztRQUF2RyxHQUFHLEVBQUMsMEJBQXNCO1FBQUMsR0FBRyxFQUFDLGFBQWE7UUFBQyxrQkFBZ0IsRUFBQyxzQ0FBc0M7O01BSGpILGlCQUdvSCx3QkFFOUc7O0lBQ0Esb0JBR1M7TUFIRCxLQUFLLEVBQUMsVUFBVTtNQUFFLE9BQUssdUNBQUUsVUFBSztNQUF1QixrQkFBZ0IsRUFBQyxzQ0FBc0M7O01BQ2xILG9CQUFnSDtRQUEzRyxHQUFHLEVBQUMsNEJBQXdCO1FBQUMsR0FBRyxFQUFDLGVBQWU7UUFBQyxrQkFBZ0IsRUFBQyxzQ0FBc0M7O01BUHJILGlCQU93SCwwQkFFbEg7O0lBQ0Esb0JBR1M7TUFIRCxLQUFLLEVBQUMsT0FBTztNQUFFLE9BQUssdUNBQUUsVUFBSztNQUFvQixrQkFBZ0IsRUFBQyx1Q0FBdUM7O01BQzdHLG9CQUEyRztRQUF0RyxHQUFHLEVBQUMseUJBQXFCO1FBQUMsR0FBRyxFQUFDLFlBQVk7UUFBQyxrQkFBZ0IsRUFBQyx1Q0FBdUM7O01BWGhILGlCQVdtSCx1QkFFN0ciLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIlNvY2lhbExvZ2luQnV0dG9uLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInNvY2lhbC1idXR0b25zXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvU29jaWFsTG9naW5CdXR0b24udnVlOjI6NVwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImdvb2dsZVwiIEBjbGljaz1cIiRlbWl0KCdsb2dpbldpdGhHb29nbGUnKVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1NvY2lhbExvZ2luQnV0dG9uLnZ1ZTozOjdcIj5cbiAgICAgICAgPGltZyBzcmM9XCIuLi9hc3NldHMvZ29vZ2xlLnN2Z1wiIGFsdD1cIkdvb2dsZSBpY29uXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvU29jaWFsTG9naW5CdXR0b24udnVlOjQ6OVwiIC8+XG4gICAgICAgIENvbnRpbnVlIHdpdGggR29vZ2xlXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJmYWNlYm9va1wiIEBjbGljaz1cIiRlbWl0KCdsb2dpbldpdGhGYWNlYm9vaycpXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvU29jaWFsTG9naW5CdXR0b24udnVlOjc6N1wiPlxuICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9mYWNlYm9vay5zdmdcIiBhbHQ9XCJGYWNlYm9vayBpY29uXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvU29jaWFsTG9naW5CdXR0b24udnVlOjg6OVwiIC8+XG4gICAgICAgIENvbnRpbnVlIHdpdGggRmFjZWJvb2tcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImFwcGxlXCIgQGNsaWNrPVwiJGVtaXQoJ2xvZ2luV2l0aEFwcGxlJylcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9Tb2NpYWxMb2dpbkJ1dHRvbi52dWU6MTE6N1wiPlxuICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9hcHBsZS5zdmdcIiBhbHQ9XCJBcHBsZSBpY29uXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvU29jaWFsTG9naW5CdXR0b24udnVlOjEyOjlcIiAvPlxuICAgICAgICBDb250aW51ZSB3aXRoIEFwcGxlXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cbiAgXG4gIDxzY3JpcHQ+XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBlbWl0czogWydsb2dpbldpdGhHb29nbGUnLCAnbG9naW5XaXRoRmFjZWJvb2snLCAnbG9naW5XaXRoQXBwbGUnXVxuICB9O1xuICA8L3NjcmlwdD5cbiAgXG4gIDxzdHlsZSBzY29wZWQ+XG4gIC5zb2NpYWwtYnV0dG9ucyBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBcbiAgLnNvY2lhbC1idXR0b25zIGJ1dHRvbiBpbWcge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgfVxuICBcbiAgLnNvY2lhbC1idXR0b25zIC5nb29nbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwQTBBMEE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU1NTU1NTtcbiAgfVxuICBcbiAgLnNvY2lhbC1idXR0b25zIC5mYWNlYm9vayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBBMEEwQTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTU1NTU1O1xuICB9XG4gIFxuICAuc29jaWFsLWJ1dHRvbnMgLmFwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEEwQTBBO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NTU1NTU7XG4gIH1cbiAgXG4gIC5zb2NpYWwtYnV0dG9ucyBidXR0b246aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczNzM3O1xuICB9XG4gIDwvc3R5bGU+XG4gICJdLCJmaWxlIjoiL2hvbWUvZmVkYXNhZ2V0ZS9hbGFkaWEvZnJvbnRlbmQtcWEtc2VsZWN0aW9uL251eHQtYXBwL2NvbXBvbmVudHMvU29jaWFsTG9naW5CdXR0b24udnVlIn0=