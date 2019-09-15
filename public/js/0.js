webpackJsonp([0,1,2],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"dynamic-import-webpack\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Dialog.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Modal',

  methods: {
    modal: function modal() {
      var modal = $(this.$el);

      modal.modal.apply(modal, arguments);
    },
    show: function show() {
      this.modal('show');
    },
    hide: function hide() {
      this.modal('hide');
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"dynamic-import-webpack\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/view/backend/Home.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__categories_Categories__ = __webpack_require__("./resources/js/view/backend/categories/Categories.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__categories_Categories___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__categories_Categories__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__products_Products__ = __webpack_require__("./resources/js/view/backend/products/Products.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__products_Products___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__products_Products__);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Home',
  components: {
    Categories: __WEBPACK_IMPORTED_MODULE_0__categories_Categories___default.a,
    Products: __WEBPACK_IMPORTED_MODULE_1__products_Products___default.a
  },

  props: {
    statuses: {
      type: Object
    },
    statuses_product: {
      type: Object
    }
  },

  data: function data() {
    return {
      category: {
        type: Object
      }
    };
  },


  methods: {
    setCategory: function setCategory(item) {
      this.category = item;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"dynamic-import-webpack\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/view/backend/categories/Categories.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CategoryList__ = __webpack_require__("./resources/js/view/backend/categories/CategoryList.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CategoryList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__CategoryList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CategoryForm__ = __webpack_require__("./resources/js/view/backend/categories/CategoryForm.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CategoryForm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__CategoryForm__);




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CategoryForm: __WEBPACK_IMPORTED_MODULE_1__CategoryForm___default.a,
    CategoryList: __WEBPACK_IMPORTED_MODULE_0__CategoryList___default.a
  },
  name: 'Categories',

  props: {
    statuses: {
      type: Object
    },
    url: {
      type: String,
      default: '/backend/categories/'
    }
  },

  data: function data() {
    return {
      itemEdit: {
        type: Object,
        default: null
      },
      itemActive: 0,
      paginate: {
        total: 0,
        last_page: 0,
        current_page: 0,
        count_page: 10,
        items: Array
      },
      offset: 0
    };
  },

  methods: {
    list: function list() {
      var _this = this;

      axios.get(this.url + "?page=" + this.paginate.current_page + "&count_page=" + this.paginate.count_page).then(function (resp) {
        _this.paginate = resp.data;
        _this.active(resp.data.items[0]);
      });
    },
    active: function active(item) {
      this.itemActive = item.id;
      this.$emit('active', item);
    },
    createNode: function createNode() {
      this.editNode(null);
    },
    editNode: function editNode(item) {
      this.itemEdit = item;
      this.$refs.form.show();
    },
    formSubmit: function formSubmit(resp) {
      this.$refs.form.hide();
      this.list();
    },
    edit: function edit(item) {
      this.editNode(item);
    },
    remove: function remove(item) {
      var _this2 = this;

      axios.delete("" + this.url + item.id).then(function (resp) {
        _this2.list();
      });
    }
  },

  mounted: function mounted() {
    this.list();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"dynamic-import-webpack\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/view/backend/categories/CategoryForm.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Dialog__ = __webpack_require__("./resources/js/components/Dialog.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Dialog__);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CategoryForm',
  extends: __WEBPACK_IMPORTED_MODULE_0__components_Dialog___default.a,

  components: { Dialog: __WEBPACK_IMPORTED_MODULE_0__components_Dialog___default.a },

  props: ['id', 'name', 'image', 'status', 'parent_id'],

  data: function data() {
    return {
      model: {
        id: null,
        name: null,
        image: null,
        status: null,
        parent_id: null
      },
      url: "/backend/categories"
    };
  },


  watch: {
    id: function id(newVal, oldVal) {
      this.model.id = newVal;
    },
    name: function name(newVal, oldVal) {
      this.model.name = newVal;
    },
    image: function image(newVal, oldVal) {
      this.model.image = newVal;
    },
    status: function status(newVal, oldVal) {
      this.model.status = newVal;
    },
    parent_id: function parent_id(newVal, oldVal) {
      this.model.parent_id = newVal;
    }
  },

  methods: {
    submitted: function submitted(e) {
      var _this = this;

      console.log(e);
      var method = this.id ? 'patch' : 'post';
      var url = this.id ? this.url + '/' + this.id : '' + this.url;

      axios({
        method: method,
        url: url,
        data: this.model
      }).then(function (resp) {
        _this.$emit('submitted', resp.data);
      }).catch(function (resp) {
        console.log(resp);
      });

      return false;
    },
    uploadFile: function uploadFile(event) {
      console.log(event.url);
      this.$emit('update:model.image', event.url);
      this.model.image = event.target.files[0];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"dynamic-import-webpack\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/view/backend/categories/CategoryList.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CategoryList',

  props: {
    items: Array | Object,
    statuses: Object,
    itemActive: Number
  },

  methods: {
    editUrl: function editUrl(item) {}
  },

  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"dynamic-import-webpack\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/view/backend/products/ProductForm.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Dialog__ = __webpack_require__("./resources/js/components/Dialog.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Dialog__);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ProductForm',
  extends: __WEBPACK_IMPORTED_MODULE_0__components_Dialog___default.a,

  components: { Dialog: __WEBPACK_IMPORTED_MODULE_0__components_Dialog___default.a },

  props: ['id', 'name', 'image', 'status', 'categories', 'price'],

  data: function data() {
    return {
      model: {
        id: null,
        name: null,
        image: null,
        status: null,
        categories: null,
        price: null
      },
      loading: false,
      options: [],
      url: "/backend/products"
    };
  },


  watch: {
    id: function id(newVal, oldVal) {
      this.model.id = newVal;
    },
    name: function name(newVal, oldVal) {
      this.model.name = newVal;
    },
    image: function image(newVal, oldVal) {
      this.model.image = newVal;
    },
    status: function status(newVal, oldVal) {
      this.model.status = newVal;
    },
    categories: function categories(newVal, oldVal) {
      this.model.categories = newVal.map(function (item) {
        return item.id;
      });
      this.options = newVal;
    },
    price: function price(newVal, oldVal) {
      this.model.price = newVal;
    }
  },

  methods: {
    submitted: function submitted() {
      var _this = this;

      var method = this.id ? 'patch' : 'post';
      var url = this.id ? this.url + '/' + this.id : '' + this.url;

      axios({
        method: method,
        url: url,
        data: this.$data.model
      }).then(function (resp) {
        _this.$emit('submitted', resp.data);
      });
    },
    getCategories: function getCategories(query) {
      var _this2 = this;

      if (query !== '') {
        axios.post(this.url + '/categories/' + query).then(function (resp) {
          _this2.options = resp.data;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"dynamic-import-webpack\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/view/backend/products/ProductList.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ProductList',

  props: {
    items: Array | Object,
    statuses: Object
  },

  methods: {
    editUrl: function editUrl(item) {}
  },

  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"dynamic-import-webpack\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/view/backend/products/Products.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProductList__ = __webpack_require__("./resources/js/view/backend/products/ProductList.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProductList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ProductList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProductForm__ = __webpack_require__("./resources/js/view/backend/products/ProductForm.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProductForm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ProductForm__);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Products',
  components: {
    ProductForm: __WEBPACK_IMPORTED_MODULE_1__ProductForm___default.a,
    ProductList: __WEBPACK_IMPORTED_MODULE_0__ProductList___default.a
  },

  props: {
    statuses: {
      type: Object
    },
    category: {
      type: Object
    },
    url: {
      type: String,
      default: '/backend/products/'
    }
  },

  data: function data() {
    return {
      itemEdit: {
        type: Object,
        default: null
      },
      paginate: {
        total: 0,
        last_page: 0,
        current_page: 0,
        count_page: 10,
        items: Array
      },
      offset: 0
    };
  },

  watch: {
    category: function category(newVal, oldVal) {
      if (oldVal.id && oldVal.id !== this.category.id) {
        this.list();
      }
    }
  },

  methods: {
    list: function list() {
      var _this = this;

      axios.get(this.url + "?category_id=" + (this.category.id ? this.category.id : 0) + "&page=" + this.paginate.current_page + "&count_page=" + this.paginate.count_page).then(function (resp) {
        _this.paginate = resp.data;
      });
    },
    createNode: function createNode() {
      this.editNode(null);
    },
    editNode: function editNode(item) {
      this.itemEdit = item;
      this.$refs.form.show();
    },
    formSubmit: function formSubmit(resp) {
      this.$refs.form.hide();
      this.list();
    },
    edit: function edit(item) {
      this.editNode(item);
    },
    remove: function remove(item) {
      var _this2 = this;

      axios.delete("" + this.url + item.id).then(function (resp) {
        _this2.list();
      });
    }
  },

  mounted: function mounted() {
    this.list();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-00ba0636\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/view/backend/Home.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row justify-content-center" }, [
    _c(
      "div",
      { staticClass: "col-md-4" },
      [
        _c("Categories", {
          attrs: { category: _vm.category, statuses: _vm.statuses },
          on: { active: _vm.setCategory }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-md-8" },
      [
        _c("Products", {
          attrs: { category: _vm.category, statuses: _vm.statuses_product }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-00ba0636", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-17d036e8\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/view/backend/categories/Categories.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card" }, [
    _c(
      "div",
      { staticClass: "card-header" },
      [
        _vm._v("\n        Категории\n        "),
        _c(
          "button",
          {
            staticClass: "btn btn-dark float-right",
            on: {
              click: function($event) {
                return _vm.createNode()
              }
            }
          },
          [_vm._v("+")]
        ),
        _vm._v(" "),
        _c(
          "CategoryForm",
          _vm._b(
            {
              ref: "form",
              attrs: { url: _vm.url, statuses: _vm.statuses },
              on: {
                submitted: function($event) {
                  return _vm.formSubmit()
                }
              }
            },
            "CategoryForm",
            _vm.itemEdit,
            false
          )
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "card-body" },
      [
        _c("CategoryList", {
          attrs: {
            itemActive: _vm.itemActive,
            statuses: _vm.statuses,
            items: _vm.paginate.items
          },
          on: { edit: _vm.edit, active: _vm.active, remove: _vm.remove }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "card-footer" },
      [
        _c("BasePaginate", {
          attrs: { pagination: _vm.paginate, offset: 0 },
          on: {
            paginate: function($event) {
              return _vm.list()
            }
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-17d036e8", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-27f1c773\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Dialog.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "modal", attrs: { tabindex: "-1", role: "dialog" } },
    [
      _c("div", { staticClass: "modal-dialog", attrs: { role: "document" } }, [
        _c("div", { staticClass: "modal-content" }, [
          _c(
            "div",
            { staticClass: "modal-header" },
            [_vm._t("header"), _vm._v(" "), _vm._m(0)],
            2
          ),
          _vm._v(" "),
          _c("div", { staticClass: "modal-body" }, [_vm._t("body")], 2),
          _vm._v(" "),
          _c("div", { staticClass: "modal-footer" }, [_vm._t("footer")], 2)
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-27f1c773", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2f28d2f0\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/view/backend/categories/CategoryList.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("table", { staticClass: "table table-hover table-sm" }, [
      _c(
        "tbody",
        _vm._l(_vm.items, function(item) {
          return _c(
            "tr",
            {
              class: _vm.itemActive == item.id ? "table-info" : "",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.$emit("active", item)
                }
              }
            },
            [
              _c("td", [
                _c(
                  "a",
                  {
                    attrs: { href: "" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.$emit("edit", item)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(item.name) +
                        "\n                "
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("td", { staticClass: "body" }, [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.statuses[item.status]) +
                    "\n            "
                )
              ]),
              _vm._v(" "),
              _c("td", { staticClass: "text-right" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-danger btn-sm",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.$emit("remove", item)
                      }
                    }
                  },
                  [_c("i", { staticClass: "mdi mdi-delete" })]
                )
              ])
            ]
          )
        }),
        0
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2f28d2f0", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7d42f0bf\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/view/backend/products/ProductForm.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("Dialog", [
    _c("h3", { attrs: { slot: "header" }, slot: "header" }, [
      _vm._v("Редактирование Товара")
    ]),
    _vm._v(" "),
    _c("form", { attrs: { slot: "body" }, slot: "body" }, [
      _c("div", { staticClass: "form-group" }, [
        _vm._v("\n            Категории:\n            "),
        _c(
          "div",
          [
            _c(
              "el-select",
              {
                staticClass: "w-100",
                attrs: {
                  multiple: "",
                  filterable: "",
                  remote: "",
                  "reserve-keyword": "",
                  placeholder: "Введите название категории",
                  "remote-method": _vm.getCategories,
                  loading: _vm.loading
                },
                model: {
                  value: _vm.model.categories,
                  callback: function($$v) {
                    _vm.$set(_vm.model, "categories", $$v)
                  },
                  expression: "model.categories"
                }
              },
              _vm._l(_vm.options, function(item) {
                return _c("el-option", {
                  key: item.id,
                  attrs: { label: item.name, value: item.id }
                })
              }),
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _vm._v("\n            Название:\n            "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.model.name,
              expression: "model.name"
            }
          ],
          staticClass: "form-control",
          attrs: { type: "text", name: "name", required: "required" },
          domProps: { value: _vm.model.name },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.model, "name", $event.target.value)
            }
          }
        })
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group" },
        [
          _vm._v("\n            Статус:\n            "),
          _c(
            "BaseSimpleSelect",
            {
              attrs: { required: "required" },
              model: {
                value: _vm.model.status,
                callback: function($$v) {
                  _vm.$set(_vm.model, "status", $$v)
                },
                expression: "model.status"
              }
            },
            _vm._l(this.$attrs.statuses, function(value, key) {
              return _c("option", { domProps: { value: key } }, [
                _vm._v(_vm._s(value) + "\n                ")
              ])
            }),
            0
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _vm._v("\n            Цена:\n            "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.model.price,
              expression: "model.price"
            }
          ],
          staticClass: "form-control",
          attrs: { name: "price", type: "number", required: "required" },
          domProps: { value: _vm.model.price },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.model, "price", $event.target.value)
            }
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("div", { attrs: { slot: "footer" }, slot: "footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary",
          attrs: { type: "submit" },
          on: { click: _vm.submitted }
        },
        [_vm._v("\n            Сохранить\n        ")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-secondary",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("\n            Отмена\n        ")]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7d42f0bf", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-971b20a4\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/view/backend/categories/CategoryForm.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("Dialog", [
    _c("h3", { attrs: { slot: "header" }, slot: "header" }, [
      _vm._v("Редактирование категории")
    ]),
    _vm._v(" "),
    _c(
      "form",
      {
        attrs: { slot: "body", enctype: "multipart/form-data" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.submitted($event)
          }
        },
        slot: "body"
      },
      [
        _c("div", { staticClass: "form-group" }, [
          _vm._v("\n            Название:\n            "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.model.name,
                expression: "model.name"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text", name: "name", required: "required" },
            domProps: { value: _vm.model.name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.model, "name", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "form-group" },
          [
            _vm._v("\n            Статус:\n            "),
            _c(
              "BaseSimpleSelect",
              {
                attrs: { required: "required", name: "status" },
                model: {
                  value: _vm.model.status,
                  callback: function($$v) {
                    _vm.$set(_vm.model, "status", $$v)
                  },
                  expression: "model.status"
                }
              },
              _vm._l(this.$attrs.statuses, function(value, key) {
                return _c("option", { domProps: { value: key } }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(value) +
                      "\n                "
                  )
                ])
              }),
              0
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c(
            "button",
            { staticClass: "btn btn-primary", attrs: { type: "submit" } },
            [_vm._v("\n                Сохранить\n            ")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-secondary",
              attrs: { type: "button", "data-dismiss": "modal" }
            },
            [_vm._v("\n                Отмена\n            ")]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-971b20a4", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-9d87d0ce\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/view/backend/products/ProductList.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "table",
      { staticClass: "table table-sm" },
      _vm._l(_vm.items, function(item) {
        return _c("tr", [
          _c("td", [
            _c(
              "a",
              {
                attrs: { href: "javascript:void(0)" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.$emit("edit", item)
                  }
                }
              },
              [
                _vm._v(
                  "\n                    " +
                    _vm._s(item.name) +
                    "\n                "
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("td", { staticClass: "text-right" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-danger btn-sm",
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.$emit("remove", item)
                  }
                }
              },
              [_c("i", { staticClass: "mdi mdi-delete" })]
            )
          ])
        ])
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9d87d0ce", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e51b1db0\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/view/backend/products/Products.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card" }, [
    _c(
      "div",
      { staticClass: "card-header" },
      [
        _vm._v(
          "\n        Товары  " +
            _vm._s(
              _vm.category.name
                ? "( Категория : " + _vm.category.name + " )"
                : ""
            ) +
            "\n        "
        ),
        _c(
          "button",
          {
            staticClass: "btn btn-dark float-right",
            on: {
              click: function($event) {
                return _vm.createNode()
              }
            }
          },
          [_vm._v("+")]
        ),
        _vm._v(" "),
        _c(
          "ProductForm",
          _vm._b(
            {
              ref: "form",
              attrs: {
                category_id: _vm.category.id,
                url: _vm.url,
                statuses: _vm.statuses
              },
              on: {
                submitted: function($event) {
                  return _vm.formSubmit()
                }
              }
            },
            "ProductForm",
            _vm.itemEdit,
            false
          )
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "card-body" },
      [
        _c("ProductList", {
          attrs: { items: _vm.paginate.items, statuses: _vm.statuses },
          on: { edit: _vm.edit, remove: _vm.remove }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "card-footer" },
      [
        _c("BasePaginate", {
          attrs: { pagination: _vm.paginate, offset: 0 },
          on: {
            paginate: function($event) {
              return _vm.list()
            }
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e51b1db0", module.exports)
  }
}

/***/ }),

/***/ "./resources/js/components/Dialog.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"dynamic-import-webpack\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/Dialog.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-27f1c773\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/Dialog.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Dialog.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-27f1c773", Component.options)
  } else {
    hotAPI.reload("data-v-27f1c773", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/view/backend/Home.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"dynamic-import-webpack\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/view/backend/Home.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-00ba0636\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/view/backend/Home.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/view/backend/Home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-00ba0636", Component.options)
  } else {
    hotAPI.reload("data-v-00ba0636", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/view/backend/categories/Categories.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"dynamic-import-webpack\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/view/backend/categories/Categories.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-17d036e8\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/view/backend/categories/Categories.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/view/backend/categories/Categories.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-17d036e8", Component.options)
  } else {
    hotAPI.reload("data-v-17d036e8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/view/backend/categories/CategoryForm.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"dynamic-import-webpack\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/view/backend/categories/CategoryForm.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-971b20a4\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/view/backend/categories/CategoryForm.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/view/backend/categories/CategoryForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-971b20a4", Component.options)
  } else {
    hotAPI.reload("data-v-971b20a4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/view/backend/categories/CategoryList.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"dynamic-import-webpack\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/view/backend/categories/CategoryList.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2f28d2f0\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/view/backend/categories/CategoryList.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/view/backend/categories/CategoryList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f28d2f0", Component.options)
  } else {
    hotAPI.reload("data-v-2f28d2f0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/view/backend/products/ProductForm.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"dynamic-import-webpack\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/view/backend/products/ProductForm.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7d42f0bf\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/view/backend/products/ProductForm.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/view/backend/products/ProductForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7d42f0bf", Component.options)
  } else {
    hotAPI.reload("data-v-7d42f0bf", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/view/backend/products/ProductList.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"dynamic-import-webpack\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/view/backend/products/ProductList.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-9d87d0ce\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/view/backend/products/ProductList.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/view/backend/products/ProductList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9d87d0ce", Component.options)
  } else {
    hotAPI.reload("data-v-9d87d0ce", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/view/backend/products/Products.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"dynamic-import-webpack\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/view/backend/products/Products.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e51b1db0\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/view/backend/products/Products.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/view/backend/products/Products.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e51b1db0", Component.options)
  } else {
    hotAPI.reload("data-v-e51b1db0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});