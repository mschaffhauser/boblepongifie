exports.ids = [2];
exports.modules = {

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/share.vue?vue&type=template&id=515911d9&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('button', {
    staticClass: "btn font-weight-bold btn-info",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function ($event) {
        return _vm.share();
      }
    }
  }, [_vm.hasSlot() ? _vm._t("clickable") : _c('p', {
    staticClass: "m-0"
  }, [_vm._v("Partager 🗨")])], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/share.vue?vue&type=template&id=515911d9&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/share.vue?vue&type=script&lang=js&
/* harmony default export */ var sharevue_type_script_lang_js_ = ({
  props: {
    text: String,
    onError: Function,
    onSuccess: Function
  },
  methods: {
    hasSlot() {
      return !!this.$slots.clickable;
    },

    share() {
      const data = {
        text: this.text
      };

      if (navigator.share) {
        navigator.share(data).then(succ => {
          if (succ) {
            this.onSuccess(succ);
          }
        }).catch(err => {
          this.onError(err);
        });
      } else if (this.onError) {
        this.onError('method not supported');
      }
    }

  }
});
// CONCATENATED MODULE: ./components/share.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_sharevue_type_script_lang_js_ = (sharevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/share.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_sharevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "18c889bc"
  
)

/* harmony default export */ var share = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=share.js.map