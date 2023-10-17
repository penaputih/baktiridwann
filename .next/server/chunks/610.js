"use strict";
exports.id = 610;
exports.ids = [610];
exports.modules = {

/***/ 9610:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5973);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_hero_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3192);
/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7595);
/* harmony import */ var _layout_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5532);
/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1690);
/* harmony import */ var _components_portfolio_Portfolio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3679);
/* harmony import */ var _components_Address__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8212);
/* harmony import */ var _components_Social__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9830);
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6047);
/* harmony import */ var _components_blog_Blog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4);
/* harmony import */ var _components_switch_SwitchDark__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5820);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout_wrapper__WEBPACK_IMPORTED_MODULE_5__, _components_Contact__WEBPACK_IMPORTED_MODULE_10__]);
([_layout_wrapper__WEBPACK_IMPORTED_MODULE_5__, _components_Contact__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const menuItem = [
    {
        icon: "fa-home",
        menuName: "Home"
    },
    {
        icon: "fa-user",
        menuName: "About"
    },
    {
        icon: "fa-briefcase",
        menuName: "Portfolio"
    },
    /*{ icon: "fa-envelope-open", menuName: "Contact" },*/ {
        icon: "fa-comments",
        menuName: "Blog"
    }
];
const HomeDark = ()=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.querySelector("body").classList.remove("rtl");
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_wrapper__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Seo__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                pageTitle: "Bakti Ridwan"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "yellow",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_switch_SwitchDark__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "header",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabList, {
                                    className: " icon-menu revealator-slideup revealator-once revealator-delay1",
                                    children: menuItem.map((item, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
                                            className: "icon-box",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: `fa ${item.icon}`
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    children: item.menuName
                                                })
                                            ]
                                        }, i))
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "tab-panel_list",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
                                        className: "home ",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "container-fluid main-container container-home p-0 g-0",
                                            "data-aos": "fade-up",
                                            "data-aos-duration": "1200",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "color-block d-none d-lg-block"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_hero_Hero__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
                                        className: "about",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            "data-aos": "fade-up",
                                            "data-aos-duration": "1200",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "title-section text-start text-sm-center",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                            children: [
                                                                "ABOUT ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: "ME"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "title-bg",
                                                            children: "Resume"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_about__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
                                        className: "portfolio professional",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "title-section text-start text-sm-center",
                                                "data-aos": "fade-up",
                                                "data-aos-duration": "1200",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                        children: [
                                                            "my ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "portfolio"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "title-bg",
                                                        children: "works"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_portfolio_Portfolio__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
                                        className: "blog",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "title-section text-start text-sm-center ",
                                                "data-aos": "fade-up",
                                                "data-aos-duration": "1200",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                        children: [
                                                            "my ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "blog"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "title-bg",
                                                        children: "posts"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "container",
                                                "data-aos": "fade-up",
                                                "data-aos-duration": "1200",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "row pb-50",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_blog_Blog__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeDark);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;