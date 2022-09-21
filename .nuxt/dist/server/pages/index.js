exports.ids = [3,2];
exports.modules = {

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("ae62379c", content, true, context)
};

/***/ }),

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

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sponge-bob-mocking.99cd2c2.webp";

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3502e0c2_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3502e0c2_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3502e0c2_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3502e0c2_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3502e0c2_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".row.main{min-height:calc(95vh - 125px)}header{min-height:100px}footer{min-height:25px}.bob-img{width:350px;max-width:100%}form{margin:0 15px}.form-control{max-width:100%;width:350px;display:flex}.cop-section{min-height:150px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=3502e0c2&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "row main justify-content-center align-content-center"
  }, [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"col-12\"><img" + _vm._ssrAttr("src", __webpack_require__(32)) + " class=\"bob-img\"></div> "), _vm._ssrNode("<div class=\"row my-4\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_c('b-form', {
    staticClass: "d-flex justify-content-center",
    on: {
      "submit": function ($event) {
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.copySomething(_vm.newText);
      }
    }
  }, [_c('b-form-input', {
    staticClass: "flex-grow-0",
    attrs: {
      "autocomplete": "off",
      "placeholder": "Enter your text"
    },
    on: {
      "submit": function ($event) {
        $event.stopPropagation();
        $event.preventDefault();
      }
    },
    model: {
      value: _vm.text,
      callback: function ($$v) {
        _vm.text = $$v;
      },
      expression: "text"
    }
  })], 1)], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"cop-section my-4\">", "</div>", [_vm.newText ? _vm._ssrNode("<div class=\"row flex-column\">", "</div>", [_vm._ssrNode("<div class=\"col\">" + _vm._ssrEscape("\n          " + _vm._s(_vm.newText) + "\n        ") + "</div> <div class=\"col mt-4\"><button" + _vm._ssrClass("btn font-weight-bold", _vm.copied ? 'btn-success' : 'btn-warning') + ">" + (_vm.copied ? "<span>Copied ✔️</span>" : "<span>Copy ✂️</span>") + "</button></div> "), _vm._ssrNode("<div class=\"col mt-4\">", "</div>", [_vm.canShare ? _c('navigator-share', {
    attrs: {
      "on-error": _vm.onError,
      "text": _vm.newText
    }
  }) : _vm._e()], 1)], 2) : _vm._e()])], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=3502e0c2&

// EXTERNAL MODULE: ./components/share.vue + 4 modules
var share = __webpack_require__(31);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    NavigatorShare: share["default"]
  },

  data() {
    return {
      text: '',
      copied: ''
    };
  },

  computed: {
    canShare() {
      if (navigator.share) {
        return true;
      }

      return false;
    },

    newText() {
      let i = 0;
      const x = this.text.split('').map((currElement, index) => {
        if (!currElement.match(/[a-z]/i)) {
          return currElement;
        } else {
          i++;
        }

        if (i % 2 === 0) {
          return currElement.toUpperCase();
        } else {
          return currElement.toLowerCase();
        }
      });
      return x.join('');
    }

  },
  watch: {
    text() {
      this.copied = false;
    }

  },
  methods: {
    onError(err) {
      alert(err);
      console.log(err);
    },

    async copySomething(text) {
      try {
        this.copied = true;
        await this.$copyText(text);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(33)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3dad910a"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map