(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{403:function(a,t,s){"use strict";s.r(t);var e=s(46),l=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"skywalking-编译指南"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#skywalking-编译指南"}},[a._v("#")]),a._v(" SkyWalking 编译指南")]),a._v(" "),s("h2",{attrs:{id:"源码下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#源码下载"}},[a._v("#")]),a._v(" 源码下载")]),a._v(" "),s("p",[a._v("clone git 上的SkyWalking源码")]),a._v(" "),s("p",[a._v("https://github.com/apache/skywalking")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone git@github.com:apache/skywalking.git\n")])])]),s("h2",{attrs:{id:"grpc协议项目源码下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grpc协议项目源码下载"}},[a._v("#")]),a._v(" GRPC协议项目源码下载")]),a._v(" "),s("p",[a._v("进入目录，clone grpc 协议源码")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone git@github.com:apache/skywalking-data-collect-protocol.git\n")])])]),s("blockquote",[s("p",[a._v("关于该问题的相关issues：https://github.com/apache/skywalking/issues/4864")])]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("这个问题是因为SkyWalking项目中的 network模块中的proto里面的文件都单独存放到另一个项目中了，单独clone 或者下载SkyWalking的源码是不可以的，需要把对应 apache/skywalking-data-collect-protocol 项目clone或者下载到 skywalking/apm-protocol/apm-network/src/main/proto 目录中，就可以了\n")])])]),s("p",[a._v("前端源码下载")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" skywalking/skywalking-ui\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone git@github.com:apache/skywalking-rocketbot-ui.git\n")])])]),s("blockquote",[s("p",[a._v("下载到对应目录下面， 如果不下载会出现 编译过程中会出现无法正常执行npm 等编译并发布前端的问题")])]),a._v(" "),s("h2",{attrs:{id:"编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[a._v("#")]),a._v(" 编译")]),a._v(" "),s("p",[a._v("编译命令")]),a._v(" "),s("div",{staticClass:"language-she extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mvn clean compile -Dmaven.test.skip=true\n")])])]),s("p",[a._v("编译时一个  long long time 的事情，一直等待..")]),a._v(" "),s("blockquote",[s("p",[a._v("如果可以更换下网络可以快一些")])]),a._v(" "),s("p",[a._v("编译成功会显示")]),a._v(" "),s("div",{staticClass:"language-she extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code")])]),s("p",[a._v("编译成功后这个GRPC文件显示这样的icon")]),a._v(" "),s("p",[s("img",{attrs:{src:"/Users/lucas/Documents/skywalking-docs/img/image-20220521224645836.png",alt:"image-20220521224645836"}})]),a._v(" "),s("p",[a._v("执行Maven命令打包")]),a._v(" "),s("div",{staticClass:"language-shel extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mvn clean package -Pagent //只处理 javaAgent部分，这在调试Agent的时候就减少许多时间\nmvn package -Pbackend,dist//只处理OapServer并打包压缩\nmvn package -Pui,dist//只处理UI并打包压缩\nmvn package -Pagent,dist//只处理 javaAgent 并打包压缩\n")])])])])}),[],!1,null,null,null);t.default=l.exports}}]);