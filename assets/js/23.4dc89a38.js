(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{381:function(t,e,r){"use strict";var o=r(1),c=r(42).every,n=r(43),s=r(20),a=n("every"),l=s("every");o({target:"Array",proto:!0,forced:!a||!l},{every:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},386:function(t,e,r){"use strict";r.r(e);r(381),r(28);var o=r(356),c=r.n(o),n={props:["category"],computed:{properties:function(){var t=this;return c.a.filter((function(e){return e.category===t.category}))},colors:function(){return this.properties.every((function(t){return"color"===t.type}))}}},s=r(41),a=Object(s.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",{staticClass:"properties-table"},[r("thead",[r("tr",[t.colors?r("th"):t._e(),t._v(" "),r("th",[t._v("Property Name (global/local)")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",t._l(t.properties,(function(e){return r("tr",[t.colors?r("td",[r("span",{staticClass:"color-swatch",style:{backgroundColor:e.default}})]):t._e(),t._v(" "),r("td",{staticClass:"name"},[r("code",[t._v(t._s(e.name))]),r("br"),t._v(" "),e.local?r("code",{staticStyle:{"--code-background-color":"var(--hiq-selection-color)"}},[t._v(t._s(e.local))]):t._e()]),t._v(" "),r("td",{staticClass:"description"},[t._v(t._s(e.description))])])})),0)])}),[],!1,null,null,null);e.default=a.exports}}]);