import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/Login.vue");import { default as __nuxt_component_0 } from "/_nuxt/components/EmailInput.vue";
import { default as __nuxt_component_1 } from "/_nuxt/components/SubmitButton.vue";
import { default as __nuxt_component_2 } from "/_nuxt/components/SocialLoginButton.vue";
/* Injection by vite-plugin-vue-inspector Start */
import { createElementVNode as __createElementVNode,createVNode as __createVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=950e3101"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createElementVNode(...args) { return _interopVNode(__createElementVNode(...args)) }
function _createVNode(...args) { return _interopVNode(__createVNode(...args)) }
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
/* Injection by vite-plugin-vue-inspector End */

import EmailInput from "/_nuxt/components/EmailInput.vue";
import SubmitButton from "/_nuxt/components/SubmitButton.vue";
import SocialLoginButton from "/_nuxt/components/SocialLoginButton.vue";

const _sfc_main = {
  components: {
    EmailInput,
    SubmitButton,
    SocialLoginButton
  },
  data() {
    return {
      email: ''
    };
  },
  methods: {
    async login() {
      console.log("Logging in with email:", this.email);
      
      const emailExists = await this.checkEmailExists(this.email);

      if (emailExists) {
        this.$router.push('/dashboard');
      } else {
        this.$router.push('/signup'); 
      }
    },
    checkEmailExists(email) {
      const existingEmails = ['test@example.com', 'user@example.com']; 
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(existingEmails.includes(email));
        }, 1000); 
      });
    },
    loginWithGoogle() {
      console.log("Logging in with Google");
    },
    loginWithFacebook() {
      console.log("Logging in with Facebook");
    },
    loginWithApple() {
      console.log("Logging in with Apple");
    }
  }
};

import {  resolveComponent as _resolveComponent,  createStaticVNode as _createStaticVNode, openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=950e3101"

const _hoisted_1 = {
  class: "login-container",
  "data-v-inspector": "components/Login.vue:2:3"
}
const _hoisted_2 = {
  class: "login-box",
  "data-v-inspector": "components/Login.vue:3:5"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_EmailInput = __nuxt_component_0
  const _component_SubmitButton = __nuxt_component_1
  const _component_SocialLoginButton = __nuxt_component_2

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _cache[1] || (_cache[1] = _createStaticVNode("<div class=\"header\" data-v-inspector=\"components/Login.vue:4:7\" data-v-2498b669><img class=\"logo\" src=\"/_nuxt/assets/aladia-logo.png\" alt=\"Logo\" data-v-inspector=\"components/Login.vue:5:9\" data-v-2498b669><div class=\"header-text-container\" data-v-inspector=\"components/Login.vue:6:9\" data-v-2498b669><h2 data-v-inspector=\"components/Login.vue:7:11\" data-v-2498b669>Welcome to Aladia,</h2><p data-v-inspector=\"components/Login.vue:8:11\" data-v-2498b669>Create or access your account from here</p></div></div>", 1)),
      _createVNode(_component_EmailInput, {
        email: $data.email,
        "onUpdate:email": _cache[0] || (_cache[0] = $event => (($data.email) = $event))
      }, null, 8 /* PROPS */, ["email"]),
      _createVNode(_component_SubmitButton, { onLogin: $options.login }, null, 8 /* PROPS */, ["onLogin"]),
      _cache[2] || (_cache[2] = _createElementVNode("div", {
        class: "or-divider",
        "data-v-inspector": "components/Login.vue:15:7"
      }, [
        _createElementVNode("span", { "data-v-inspector": "components/Login.vue:16:9" }, "Or")
      ], -1 /* HOISTED */)),
      _createVNode(_component_SocialLoginButton, {
        onLoginWithGoogle: $options.loginWithGoogle,
        onLoginWithFacebook: $options.loginWithFacebook,
        onLoginWithApple: $options.loginWithApple
      }, null, 8 /* PROPS */, ["onLoginWithGoogle", "onLoginWithFacebook", "onLoginWithApple"]),
      _cache[3] || (_cache[3] = _createElementVNode("div", {
        class: "terms",
        "data-v-inspector": "components/Login.vue:25:7"
      }, [
        _createElementVNode("a", {
          href: "#",
          "data-v-inspector": "components/Login.vue:26:9"
        }, "Terms & Conditions")
      ], -1 /* HOISTED */))
    ])
  ]))
}

import "/_nuxt/components/Login.vue?vue&type=style&index=0&scoped=2498b669&lang.css"

_sfc_main.__hmrId = "2498b669"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-2498b669"],['__file',"/home/fedasagete/aladia/frontend-qa-selection/nuxt-app/components/Login.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBLE1BQUssQ0FBRSxVQUFTLENBQUUsSUFBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7QUFDckQsTUFBSyxDQUFFLFlBQVcsQ0FBRSxJQUFHLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQztBQUN6RCxNQUFLLENBQUUsaUJBQWdCLENBQUUsSUFBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQzs7QUFFbkUsS0FBSyxVQUFVO0VBQ2IsVUFBVSxFQUFFO0lBQ1YsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBZ0I7RUFDbEIsQ0FBQztFQUNELElBQUksQ0FBQyxFQUFFO0lBQ0wsTUFBSyxDQUFFO01BQ0wsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0VBQ0gsQ0FBQztFQUNELE9BQU8sRUFBRTtJQUNQLEtBQUksQ0FBRSxLQUFLLENBQUMsRUFBRTtNQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFNLENBQUUsRUFBQyxDQUFFLElBQUcsQ0FBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7O01BRWpELEtBQUksQ0FBRSxXQUFVLENBQUUsRUFBRSxLQUFJLENBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7O01BRTNELEVBQUMsQ0FBRSxDQUFDLFdBQVcsRUFBRTtRQUNmLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO01BQ2pDLEVBQUUsSUFBRyxDQUFFO1FBQ0wsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7TUFDOUI7SUFDRixDQUFDO0lBQ0QsZ0JBQWdCLENBQUMsS0FBSyxFQUFFO01BQ3RCLEtBQUksQ0FBRSxjQUFhLENBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7TUFDL0QsTUFBSyxDQUFFLEdBQUUsQ0FBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFO1FBQzlCLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1VBQ2YsT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsQ0FBQyxFQUFFLElBQUksQ0FBQztNQUNWLENBQUMsQ0FBQztJQUNKLENBQUM7SUFDRCxlQUFlLENBQUMsRUFBRTtNQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTSxDQUFFLEVBQUMsQ0FBRSxJQUFHLENBQUUsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNELGlCQUFpQixDQUFDLEVBQUU7TUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU0sQ0FBRSxFQUFDLENBQUUsSUFBRyxDQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDRCxjQUFjLENBQUMsRUFBRTtNQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFNLENBQUUsRUFBQyxDQUFFLElBQUcsQ0FBRSxLQUFLLENBQUMsQ0FBQztJQUN0QztFQUNGO0FBQ0YsQ0FBQzs7Ozs7RUE1RU0sS0FBSyxFQUFDLGlCQUFpQjtFQUFDLGtCQUFnQixFQUFDLDBCQUEwQjs7O0VBQ2pFLEtBQUssRUFBQyxXQUFXO0VBQUMsa0JBQWdCLEVBQUMsMEJBQTBCOzs7Ozs7Ozt3QkFEcEUsb0JBMkJNLE9BM0JOLFVBMkJNO0lBMUJKLG9CQXlCTSxPQXpCTixVQXlCTTtnQ0EzQlY7TUFXTSxhQUFvQztRQUFoQixLQUFLLEVBQUUsV0FBSztRQVh0Qyx3REFXaUMsV0FBSzs7TUFDaEMsYUFBK0IsMkJBQWhCLE9BQUssRUFBRSxjQUFLO2dDQUUzQixvQkFFTTtRQUZELEtBQUssRUFBQyxZQUFZO1FBQUMsa0JBQWdCLEVBQUMsMkJBQTJCOztRQUNsRSxvQkFBNEQsVUFBdEQsa0JBQWdCLEVBQUMsMkJBQTJCLElBQUMsSUFBRTs7TUFHdkQsYUFJRTtRQUhDLGlCQUFlLEVBQUUsd0JBQWU7UUFDaEMsbUJBQWlCLEVBQUUsMEJBQWlCO1FBQ3BDLGdCQUFjLEVBQUUsdUJBQWM7O2dDQUdqQyxvQkFFTTtRQUZELEtBQUssRUFBQyxPQUFPO1FBQUMsa0JBQWdCLEVBQUMsMkJBQTJCOztRQUM3RCxvQkFBK0U7VUFBNUUsSUFBSSxFQUFDLEdBQUc7VUFBQyxrQkFBZ0IsRUFBQywyQkFBMkI7V0FBQyxvQkFBa0IiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkxvZ2luLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJsb2dpbi1jb250YWluZXJcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9Mb2dpbi52dWU6MjozXCI+XG4gICAgPGRpdiBjbGFzcz1cImxvZ2luLWJveFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL0xvZ2luLnZ1ZTozOjVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9Mb2dpbi52dWU6NDo3XCI+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJsb2dvXCIgc3JjPVwiLi4vYXNzZXRzL2FsYWRpYS1sb2dvLnBuZ1wiIGFsdD1cIkxvZ29cIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9Mb2dpbi52dWU6NTo5XCIgLz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci10ZXh0LWNvbnRhaW5lclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL0xvZ2luLnZ1ZTo2OjlcIj5cbiAgICAgICAgICA8aDIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvTG9naW4udnVlOjc6MTFcIj5XZWxjb21lIHRvIEFsYWRpYSw8L2gyPlxuICAgICAgICAgIDxwIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL0xvZ2luLnZ1ZTo4OjExXCI+Q3JlYXRlIG9yIGFjY2VzcyB5b3VyIGFjY291bnQgZnJvbSBoZXJlPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8RW1haWxJbnB1dCB2LW1vZGVsOmVtYWlsPVwiZW1haWxcIiAvPlxuICAgICAgPFN1Ym1pdEJ1dHRvbiBAbG9naW49XCJsb2dpblwiIC8+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJvci1kaXZpZGVyXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvTG9naW4udnVlOjE1OjdcIj5cbiAgICAgICAgPHNwYW4gZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvTG9naW4udnVlOjE2OjlcIj5Pcjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8U29jaWFsTG9naW5CdXR0b24gXG4gICAgICAgIEBsb2dpbldpdGhHb29nbGU9XCJsb2dpbldpdGhHb29nbGVcIlxuICAgICAgICBAbG9naW5XaXRoRmFjZWJvb2s9XCJsb2dpbldpdGhGYWNlYm9va1wiXG4gICAgICAgIEBsb2dpbldpdGhBcHBsZT1cImxvZ2luV2l0aEFwcGxlXCJcbiAgICAgIC8+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXJtc1wiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL0xvZ2luLnZ1ZToyNTo3XCI+XG4gICAgICAgIDxhIGhyZWY9XCIjXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvTG9naW4udnVlOjI2OjlcIj5UZXJtcyAmIENvbmRpdGlvbnM8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEVtYWlsSW5wdXQgZnJvbSAnLi4vY29tcG9uZW50cy9FbWFpbElucHV0LnZ1ZSc7XG5pbXBvcnQgU3VibWl0QnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvU3VibWl0QnV0dG9uLnZ1ZSc7XG5pbXBvcnQgU29jaWFsTG9naW5CdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9Tb2NpYWxMb2dpbkJ1dHRvbi52dWUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBFbWFpbElucHV0LFxuICAgIFN1Ym1pdEJ1dHRvbixcbiAgICBTb2NpYWxMb2dpbkJ1dHRvblxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBlbWFpbDogJydcbiAgICB9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgbG9naW4oKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkxvZ2dpbmcgaW4gd2l0aCBlbWFpbDpcIiwgdGhpcy5lbWFpbCk7XG4gICAgICBcbiAgICAgIGNvbnN0IGVtYWlsRXhpc3RzID0gYXdhaXQgdGhpcy5jaGVja0VtYWlsRXhpc3RzKHRoaXMuZW1haWwpO1xuXG4gICAgICBpZiAoZW1haWxFeGlzdHMpIHtcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvc2lnbnVwJyk7IFxuICAgICAgfVxuICAgIH0sXG4gICAgY2hlY2tFbWFpbEV4aXN0cyhlbWFpbCkge1xuICAgICAgY29uc3QgZXhpc3RpbmdFbWFpbHMgPSBbJ3Rlc3RAZXhhbXBsZS5jb20nLCAndXNlckBleGFtcGxlLmNvbSddOyBcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGV4aXN0aW5nRW1haWxzLmluY2x1ZGVzKGVtYWlsKSk7XG4gICAgICAgIH0sIDEwMDApOyBcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgbG9naW5XaXRoR29vZ2xlKCkge1xuICAgICAgY29uc29sZS5sb2coXCJMb2dnaW5nIGluIHdpdGggR29vZ2xlXCIpO1xuICAgIH0sXG4gICAgbG9naW5XaXRoRmFjZWJvb2soKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkxvZ2dpbmcgaW4gd2l0aCBGYWNlYm9va1wiKTtcbiAgICB9LFxuICAgIGxvZ2luV2l0aEFwcGxlKCkge1xuICAgICAgY29uc29sZS5sb2coXCJMb2dnaW5nIGluIHdpdGggQXBwbGVcIik7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbiAgXG4gIDxzdHlsZSBzY29wZWQ+XG4gIC8qIENvbnRhaW5lciAqL1xuICAubG9naW4tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xuICAgIFxuICB9XG4gIFxuICAvKiBMb2dpbiBCb3ggKi9cbiAgLmxvZ2luLWJveCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1MDUwNTtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAzNjBweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICB9XG4gIFxuICAvKiBIZWFkZXIgKi9cbiAgLmhlYWRlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgXG4gIC5oZWFkZXItdGV4dC1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4gIFxuICAubG9nbyB7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgXG4gIGgyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICBwIHtcbiAgICBjb2xvcjogI2FhYTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICAvKiBFbWFpbCBJbnB1dCAqL1xuICAuZW1haWwtaW5wdXQge1xuICAgIG1hcmdpbjogMjBweCAwO1xuICB9XG4gIFxuICAuZW1haWwtaWNvbi1pbWd7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgfVxuICBcbiAgLmlucHV0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAuaW5wdXQtY29udGFpbmVyIC5pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgY29sb3I6ICNhYWE7XG4gIH1cbiAgI2VtYWlsIHtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICB9XG4gIFxuICAuaW5wdXQtY29udGFpbmVyIGlucHV0IHtcbiAgICBmbGV4OiAxO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICBcbiAgLmlucHV0LWNvbnRhaW5lciBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjNzc3O1xuICB9XG4gIFxuICAvKiBTdWJtaXQgQnV0dG9uICovXG4gIC5zdWJtaXQgYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcbiAgfVxuICBcbiAgLnN1Ym1pdCBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICB9XG4gIFxuICAvKiBEaXZpZGVyICovXG4gIC5vci1kaXZpZGVyIHtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBjb2xvcjogI2FhYTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgXG4gIC8qIFNvY2lhbCBCdXR0b25zICovXG4gIC5zb2NpYWwtYnV0dG9ucyBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBcbiAgLnNvY2lhbC1idXR0b25zIGJ1dHRvbiBpbWcge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgfVxuICBcbiAgLnNvY2lhbC1idXR0b25zIC5nb29nbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwQTBBMEE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU1NTU1NTtcbiAgfVxuICBcbiAgLnNvY2lhbC1idXR0b25zIC5mYWNlYm9vayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBBMEEwQTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTU1NTU1O1xuICB9XG4gIFxuICAuc29jaWFsLWJ1dHRvbnMgLmFwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEEwQTBBO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NTU1NTU7XG4gIH1cbiAgXG4gIC5zb2NpYWwtYnV0dG9ucyBidXR0b246aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczNzM3O1xuICB9XG4gIFxuICAvKiBUZXJtcyAqL1xuICAudGVybXMge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICAudGVybXMgYSB7XG4gICAgY29sb3I6ICM3Nzc7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBcbiAgLnRlcm1zIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAvKiBTdHlsZXMgZm9yIE1vYmlsZSAqL1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAubG9naW4tYm94IHtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cbiAgXG4gICAgLmVtYWlsLWlucHV0IGlucHV0LFxuICAgIC5zdWJtaXQgYnV0dG9uLFxuICAgIC5zb2NpYWwtYnV0dG9ucyBidXR0b24ge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgfVxuICA8L3N0eWxlPiJdLCJmaWxlIjoiL2hvbWUvZmVkYXNhZ2V0ZS9hbGFkaWEvZnJvbnRlbmQtcWEtc2VsZWN0aW9uL251eHQtYXBwL2NvbXBvbmVudHMvTG9naW4udnVlIn0=