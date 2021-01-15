(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{542:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"jvm-常量池"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jvm-常量池"}},[s._v("#")]),s._v(" JVM 常量池")]),s._v(" "),a("h2",{attrs:{id:"方法区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法区"}},[s._v("#")]),s._v(" 方法区")]),s._v(" "),a("ol",[a("li",[s._v("用于存储 jvm 加载的类的信息、常量、静态变量、编译后的代码")]),s._v(" "),a("li",[s._v("jdk7 及以往版本，方法区基于永久代实现，理论上是堆的一部分")]),s._v(" "),a("li",[s._v("jdk8 取消了永久代，在本地内存中划分区域-元空间，不属于 JVM 内存，方法区位于元空间中")])]),s._v(" "),a("ul",[a("li",[s._v("jdk8")])]),s._v(" "),a("div",{staticClass:"language-mermaid extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("graph LR\n  s(字符串常量池)--位于--\x3eh(堆)\n  c(class文件常量池)--位于--\x3em(元空间)\n  r(运行时常量池)--位于--\x3em\n")])])]),a("ul",[a("li",[s._v("jdk7")])]),s._v(" "),a("div",{staticClass:"language-mermaid extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("graph LR\n  s(字符串常量池)--位于--\x3eh(堆)\n  c(class文件常量池)--位于--\x3em(永久代)\n  r(运行时常量池)--位于--\x3em\n")])])]),a("ul",[a("li",[s._v("jdk6:")])]),s._v(" "),a("div",{staticClass:"language-mermaid extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("graph LR       \n  s(字符串常量池)--位于--\x3ep(永久代)\n  c(class文件常量池)--位于--\x3ep\n  r(运行时常量池)--位于--\x3ep   \n")])])]),a("h2",{attrs:{id:"运行时常量池"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行时常量池"}},[s._v("#")]),s._v(" 运行时常量池")]),s._v(" "),a("ol",[a("li",[s._v("jdk7 仅仅把字符串常量池移动到了堆，jdk 8 废弃了永久代变更为元空间，运行时常量池跟随元空间被移出JVM 内存，是方法区的一部分。")]),s._v(" "),a("li",[s._v("当类加载到内存中后，jvm 就会将class常量池中的内容存放到运行时常量池中，由此可知，"),a("strong",[s._v("运行时常量池也是每个类都有一个")]),s._v("。并且在类加载的解析阶段会把运行时常量池的符号引用替换成直接引用，这个过程需要查找字符串常量池。")])]),s._v(" "),a("h2",{attrs:{id:"字符串常量池"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串常量池"}},[s._v("#")]),s._v(" 字符串常量池")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("本质上是一个哈希表，jdk6 中是固定大小的，jdk7 可以通过参数指定。")])]),s._v(" "),a("li",[a("p",[s._v("jdk6 及以往版本，是方法区的一部分，用于存放字符串对象。")])]),s._v(" "),a("li",[a("p",[s._v("jdk7 将字符串池放到了堆中，可以存放字符串对象，也可以存放字符串引用。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v('new String("abc")')]),s._v("，如果字符串常量池中已经存在 “abc”，则创建一个对象，如果没有，则先在字符串常量池创建“abc”，再在堆中创建一个拷贝对象")]),s._v(" "),a("blockquote",[a("p",[s._v("因为其构造方法是 "),a("code",[s._v("String(String str)")]),s._v("，括号内相当于双引号赋值方式创建字符串")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("字符串的 intern() 方法")]),s._v("：")]),s._v(" "),a("ul",[a("li",[s._v("jdk6\n"),a("ul",[a("li",[s._v("在池中查找，如果存在该串，返回该串引用。")]),s._v(" "),a("li",[s._v("如果不存在，将该串写入常量池，并返回引用。")])])]),s._v(" "),a("li",[s._v("jdk7\n"),a("ul",[a("li",[s._v("在池中查找，如果存在该串，返回该串引用。")]),s._v(" "),a("li",[s._v("如果不存在，将该串的在堆中的引用存入常量池。")])])])])])]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("intern")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" s2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" s2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//堆中和常量池中，地址不同")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" s3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    s3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("intern")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" s4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"11"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" s4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//jdk7 常量池中的引用和堆中相同")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n    打印结果是\n    jdk6 下false false\n    jdk7 下false true\n**/")]),s._v("\n")])])]),a("h2",{attrs:{id:"class-文件常量池"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-文件常量池"}},[s._v("#")]),s._v(" class 文件常量池")]),s._v(" "),a("ol",[a("li",[s._v("class文件中除了包含类的版本、字段、方法、接口等描述信息外，还有一项信息就是常量池，用于存放编译器生成的各种字面量（Literal）和符号引用（Symbolic References）")]),s._v(" "),a("li",[s._v("是方法区的一部分，"),a("strong",[s._v("每个类都有一个 class 文件常量池")]),s._v("。")]),s._v(" "),a("li",[a("strong",[s._v("字面量")]),s._v("就是我们所说的常量概念，如文本字符串、被声明为final的常量值等。")]),s._v(" "),a("li",[a("strong",[s._v("符号引用")]),s._v("是一组符号来描述所引用的目标，符号可以是任何形式的字面量，只要使用时能无歧义地定位到目标即可，通常包含：类的全限定名、字段的名称和描述符、方法的名称和描述符。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);