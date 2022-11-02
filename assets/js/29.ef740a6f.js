(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{65:function(e,v,_){"use strict";_.r(v);var l=_(0),t=Object(l.a)({},(function(){this._self._c;return this._m(0)}),[function(){var e=this,v=e._self._c;return v("div",{staticClass:"content"},[v("h1",{attrs:{id:"写在前面"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#写在前面","aria-hidden":"true"}},[e._v("#")]),e._v(" 写在前面")]),v("h1",{attrs:{id:"说明-请必看"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#说明-请必看","aria-hidden":"true"}},[e._v("#")]),e._v(" 说明 - 请必看")]),v("p",[v("strong",[e._v("这套文章不再维护")])]),v("p",[e._v("相信大家会有些许疑问，诸如：为什么不维护了？为什么不从一而终？")]),v("p",[e._v("我来解释一下，先说一下是否存在"),v("strong",[e._v("不从一而终")]),e._v("：不存在。那为什么不继续写完呢？并不是不想完成，而是有了更好的选择，我在写一套新的文章："),v("code",[e._v("《Vue3框架设计精髓》")]),e._v("，这个决定有以下几点原因。")]),v("ul",[v("li",[e._v("1、围绕 "),v("code",[e._v("Vue3")])])]),v("p",[e._v("你没看错，新的文章将围绕 "),v("code",[e._v("Vue3")]),e._v(" 讲解，这套文章的目的只有一个："),v("strong",[e._v("站在框架设计者的角度，从零实现一个五脏俱全的 "),v("code",[e._v("Vue3")])]),e._v("。众所周知，今年 "),v("code",[e._v("Vue3")]),e._v(" 会对外公布，但具体什么时间不确定，所以新的文章会随着 "),v("code",[e._v("Vue3")]),e._v(" 的公布而公开。")]),v("ul",[v("li",[e._v("2、授人以渔")])]),v("p",[e._v("现有的这套文章，以”逐行级别“为卖点，但实则过于冗余，而且不突出核心思想。新的文章将站在对”框架设计“这个更加高层次的理解之上所编写的，准确的说，新的文章将不再是源码分析、不再是源码分析、不再是源码分析(重要的事儿我想说三百遍)，而是让读者站在框架设计者的角度思考问题。在文章中，我会抛出问题所在，思考差点什么，提出解决方案，最终编码实现。这么做的好处是：突出核心思想，授人以渔。我不会在文章中贴出 "),v("code",[e._v("Vue3")]),e._v(" 的代码，但如果你认为这套文章的编码实现与真正 "),v("code",[e._v("Vue3")]),e._v(" 的实现之间存在“差距”从而误导你，那你就多虑了，这是因为这套文章所讲的一切内容都不是我凭空创造的，而是基于 "),v("code",[e._v("Vue3")]),e._v(" 的实现来讲解的，只不过你感觉不到这些，还是那句话："),v("strong",[e._v("这套文章的视角是“第一人称”，读者的角度是框架的设计者")]),e._v("，所以你完全可以给这套文章起一个很俗气的名字，例如：《一起撸一个 Vue3》之类的，这带来了另外一个好处："),v("strong",[e._v("即使你没用过 "),v("code",[e._v("Vue3")]),e._v("，依然能够看得懂文章")]),e._v("。")]),v("ul",[v("li",[e._v("3、真正的不会过时")])]),v("p",[e._v("实际上，现有文章的讲解方式本质上是”贴源码的讲解方式“，所以一旦文章不更新，源码又总是再变，那么文章就总是会过时。而新的文章本质上不依赖 "),v("code",[e._v("Vue3")]),e._v(" 的源码，而是借鉴 "),v("code",[e._v("Vue3")]),e._v(" 的思想编写的一套文章，如果你掌握了 "),v("code",[e._v("Vue3")]),e._v(" 的核心设计原则，那么代码变动是影响甚微的。再说一次："),v("strong",[e._v("你只需要掌握核心设计原则")]),e._v("。")]),v("ul",[v("li",[e._v("4、提供完整的可执行代码&在线体验地址")])]),v("p",[e._v("众所周知 "),v("code",[e._v("Vue3")]),e._v(" 采用 "),v("code",[e._v("TS")]),e._v(" 编写，但新的文章中所有的代码都使用 "),v("code",[e._v("JavaScript")]),e._v("，所以你即使看不懂 "),v("code",[e._v("TS")]),e._v(" 也能看得懂这套文章。当然带来的弊端就是文章中体现不出 "),v("code",[e._v("Vue3")]),e._v(" 在 "),v("code",[e._v("TS")]),e._v(" 类型系统上的设计，但好处是这让我编写可执行代码和在线体验案例时方便了许多，在这套文章中的每一个小结，几乎都提供了与之相符的可执行代码和在线体验地址，让你在学习的过程中感觉很实在。")]),v("p",[e._v("来看一下整体的目录大纲吧：")]),v("ul",[v("li",[e._v("一、组件的本质\n"),v("ol",[v("li",[e._v("组件的产出是什么")]),v("li",[e._v("组件的 VNode 如何表示")]),v("li",[e._v("组件的种类")])])]),v("li",[e._v("二、先设计 VNode 吧\n"),v("ol",[v("li",[e._v("用 VNode 描述真实 DOM")]),v("li",[e._v("用 VNode 描述抽象内容")]),v("li",[e._v("VNode 的种类")]),v("li",[e._v("使用 flags 作为 VNode 的标识")]),v("li",[e._v("枚举值 VNodeFlags")]),v("li",[e._v("chidlren 和 ChildrenFlags")]),v("li",[e._v("VNodeData")])])]),v("li",[e._v("三、辅助创建 VNode 的 h 函数\n"),v("ol",[v("li",[e._v("在 VNode 创建时确定其类型 - flags")]),v("li",[e._v("在 VNode 创建时确定其chidlren的类型")]),v("li",[e._v("使用 h 函数创建 VNode")])])]),v("li",[e._v("四、渲染器之挂载\n"),v("ol",[v("li",[e._v("责任重大的渲染器")]),v("li",[e._v("挂载普通标签元素\n"),v("ul",[v("li",[e._v("2.1、基本原理")]),v("li",[e._v("2.2、class的处理")]),v("li",[e._v("2.3、Attributes 和 DOM Properties")]),v("li",[e._v("2.4、事件的处理")])])]),v("li",[e._v("挂载纯文本、Fragment 和 Portal\n"),v("ul",[v("li",[e._v("3.1、挂载文本节点")]),v("li",[e._v("3.2、挂载 Fragment")]),v("li",[e._v("3.3、挂载 Portal")])])]),v("li",[e._v("有状态组件的挂载和原理")]),v("li",[e._v("函数式组件的挂载和原理")])])]),v("li",[e._v("五、渲染器之patch\n"),v("ol",[v("li",[e._v("基本原则")]),v("li",[e._v("替换 VNode")]),v("li",[e._v("更新标签元素\n"),v("ul",[v("li",[e._v("3.1、更新标签元素的基本原则")]),v("li",[e._v("3.2、更新 VNodeData")]),v("li",[e._v("3.3、更新子节点")])])]),v("li",[e._v("更新文本节点")]),v("li",[e._v("更新 Fragment")]),v("li",[e._v("更新 Portal")]),v("li",[e._v("有状态组件的更新\n"),v("ul",[v("li",[e._v("7.1、主动更新")]),v("li",[e._v("7.2、初步了解组件的外部状态 props")]),v("li",[e._v("7.3、被动更新")]),v("li",[e._v("7.4、我们需要 shouldUpdateComponent")])])]),v("li",[e._v("函数式组件的更新")])])]),v("li",[e._v("六、渲染器的核心 Diff 算法\n"),v("ol",[v("li",[e._v("核心 Diff 算法的发展史")]),v("li",[e._v("React 的核心 Diff 算法原理")]),v("li",[e._v("Vue2 的核心 Diff 算法原理")]),v("li",[e._v("Vue3 所采用的核心 Diff 算法及原理\n"),v("ul",[v("li",[e._v("4.1、相同的前置和后置元素")]),v("li",[e._v("4.2、移动次数总是最少的")]),v("li",[e._v("4.3、最长递增子序列")])])])])]),v("li",[e._v("七、自定义渲染器和异步渲染\n"),v("ol",[v("li",[e._v("自定义渲染器的原理")]),v("li",[e._v("异步渲染的意义")]),v("li",[e._v("异步渲染的关键点")]),v("li",[e._v("调度器的实现")]),v("li",[e._v("基于调度器的异步渲染")])])]),v("li",[e._v("八、有状态组件的设计\n"),v("ol",[v("li",[e._v("组件自身状态")]),v("li",[e._v("组件的外部状态")]),v("li",[e._v("插槽的本质")]),v("li",[e._v("组件的生命周期")]),v("li",[e._v("ref 的实现")]),v("li",[e._v("一个组件涉及多个VNode对象")]),v("li",[e._v("如何建立组件的父子关系")]),v("li",[e._v("事件系统")]),v("li",[e._v("兼容Vue2的对象式组件")])])]),v("li",[e._v("九、基于 Proxy 的响应系统\n"),v("ol",[v("li",[e._v("基本原理")]),v("li",[e._v("对象和数组的代理")]),v("li",[e._v("集合的代理")]),v("li",[e._v("计算属性")]),v("li",[e._v("Watch 的实现")]),v("li",[e._v("组件实例的访问代理")])])]),v("li",[e._v("十、组件的拓展\n"),v("ol",[v("li",[e._v("异步组件")]),v("li",[e._v("指令的实现")]),v("li",[e._v("实现 keepAlive")]),v("li",[e._v("memoize 的意义和实现")]),v("li",[e._v("Vue 中复用逻辑未必需要 hooks")]),v("li",[e._v("错误处理")])])])]),v("p",[e._v("以上。")]),v("h1",{attrs:{id:"下面为原文"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#下面为原文","aria-hidden":"true"}},[e._v("#")]),e._v(" 下面为原文")]),v("h2",{attrs:{id:"文章特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#文章特点","aria-hidden":"true"}},[e._v("#")]),e._v(" 文章特点")]),v("ul",[v("li",[e._v("超级详细 - 逐行级别的分析")])]),v("p",[e._v("所谓逐行并非一行接着一行，逐行指的是讲解的详细程度，这套文章将致力于覆盖所有核心代码，毕竟每一句代码都有他存在的意思，假如我们不讲明白任何一句代码的意义，那又怎么敢说是源码分析呢？")]),v("ul",[v("li",[e._v("实时更新 - 与 "),v("code",[e._v("Vue")]),e._v(" 源码 "),v("code",[e._v("dev")]),e._v(" 分支保持同步")])]),v("p",[e._v("这套文章的特点之一就是"),v("strong",[e._v("永远不会过时")]),e._v("，因为我们会跟随 "),v("code",[e._v("Vue")]),e._v(" 源码 "),v("code",[e._v("dev")]),e._v(" 分支的脚步更新文章的内容，这对于读者的好处是学习的总是最新的。（注：有的时候 "),v("code",[e._v("dev")]),e._v(" 分支的更新到文章的更新会有稍许延迟）。")]),v("p",[e._v("这里要解释一下，有的时候我们在讲解一个文件的代码时，你会发现，有些内容我们并没有进行讲解，那是因为这部分内容可能与本节的主题无关，但这些内容绝对不会被遗漏，它们会被放到合适的地方进行讲解")]),v("ul",[v("li",[e._v("深度分析 - 讲解issue")])]),v("p",[e._v("我们知道 "),v("code",[e._v("Vue")]),e._v(" 这个项目自诞生以来一直都在不断的更新完善，比如添加新的特性，修复已知bug等等。而在这个过程中源码也将越来越完善，这也意味着代码曾经并不完善，本套文章在分析源码时除了告诉你这段代码为什么这么写之外，还会根据相关 "),v("code",[e._v("issue")]),e._v(" 分析这段代码之前是怎么写的以及存在的问题。")]),v("h2",{attrs:{id:"为什么要阅读源码？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么要阅读源码？","aria-hidden":"true"}},[e._v("#")]),e._v(" 为什么要阅读源码？")]),v("p",[e._v("如果你要问我这个问题，我会反问你：为什么要读书(技术书)？不知道你对这句话怎么看："),v("strong",[e._v("源码难道不是更精华的书吗？")])]),v("h2",{attrs:{id:"你应该了解的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#你应该了解的","aria-hidden":"true"}},[e._v("#")]),e._v(" 你应该了解的")]),v("p",[e._v("文章将会尽可能详细，且尽可能对基础的知识点进行讲解，但需要太多口舌的东西即使再基础也不会去讲，这里列出我希望你在阅读该系列文章前最好了解的东西：")]),v("ul",[v("li",[e._v("ES6+")]),v("li",[e._v("node & npm & package.json")]),v("li",[e._v("Rollup（这东西要比webpack容易上手的多）\n"),v("ul",[v("li",[v("a",{attrs:{href:"https://rollupjs.org/guide/en",target:"_blank",rel:"noopener noreferrer"}},[e._v("英文文档")])]),v("li",[v("a",{attrs:{href:"https://rollupjs.org/guide/zh",target:"_blank",rel:"noopener noreferrer"}},[e._v("中文文档")])])])]),v("li",[e._v("flow（类型检查）\n"),v("ul",[v("li",[v("a",{attrs:{href:"https://flow.org/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("flow")])])])])]),v("p",[e._v("由于 Vue 的源码采用 ES6，所以你至少应该掌握 ES6 才能看得懂，其次你最好对 "),v("code",[e._v("package.json")]),e._v(" 中的字段的作用有所了解。由于 Vue 使用 "),v("code",[e._v("Rollup")]),e._v(" 构建，所以你不了解 "),v("code",[e._v("Rollup")]),e._v(" 的话，你就看不懂 Vue 的构建配置，最后 Vue 采用 "),v("code",[e._v("flow")]),e._v(" 做类型系统，最起码就应该知道 "),v("code",[e._v("flow")]),e._v(" 的简单语法，否则会影响你看源码。")]),v("h2",{attrs:{id:"推荐阅读这套文章的方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#推荐阅读这套文章的方式","aria-hidden":"true"}},[e._v("#")]),e._v(" 推荐阅读这套文章的方式")]),v("p",[e._v("既然是阅读源码，没有源码怎么读？所以你要使用你喜欢的方式拿到源码才行，最简单的方式是，clone 一份源码到你的本地。如果你不想这么做，你可以安装一个 "),v("code",[e._v("chrome")]),e._v(" 的扩展程序，使得你能够以在线资源管理器的方式阅读GitHub仓库的代码，我常用的 "),v("code",[e._v("chrome")]),e._v(" 扩展是："),v("a",{attrs:{href:"https://github.com/buunguyen/octotree",target:"_blank",rel:"noopener noreferrer"}},[e._v("octotree")]),e._v("，类似的扩展还有很多，你喜欢就好。")]),v("h2",{attrs:{id:"一点补充"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一点补充","aria-hidden":"true"}},[e._v("#")]),e._v(" 一点补充")]),v("p",[e._v("有的同学可能会有疑问，比如："),v("em",[e._v("你又不是作者本人，你怎么知道人家的代码为什么那么写")]),e._v("、"),v("em",[e._v("Vue.js又不是你写的，谁知道你分析的对不对")]),e._v(" 等等。")]),v("p",[e._v("对于第一个问题我想说的是，你们的怀疑是对的，毕竟最有权威分析 "),v("code",[e._v("Vue")]),e._v(" 源码的人必然是作者本身，但同学们要知道"),v("strong",[e._v("作者(小右)才没有时间来给大家写一套源码分析的文章")]),e._v("。对于第二个问题，"),v("code",[e._v("Vue")]),e._v(" 确实不是我写的，但为了证明这套文章还是稍微有点质量的，在这里我把看源码过程中提过的一些 "),v("code",[e._v("PR")]),e._v(" 贴在下面，也证明我确实对 "),v("code",[e._v("Vue")]),e._v(" 有些粗浅的理解。")]),v("ul",[v("li",[v("a",{attrs:{href:"https://github.com/vuejs/vue/pull/7981",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/vuejs/vue/pull/7981")])]),v("li",[v("a",{attrs:{href:"https://github.com/vuejs/vue/pull/6795",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/vuejs/vue/pull/6795")])]),v("li",[v("a",{attrs:{href:"https://github.com/vuejs/vue/pull/7875",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/vuejs/vue/pull/7875")])]),v("li",[v("a",{attrs:{href:"https://github.com/vuejs/vue/pull/6833",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/vuejs/vue/pull/6833")])]),v("li",[v("a",{attrs:{href:"https://github.com/vuejs/vue/pull/7308",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/vuejs/vue/pull/7308")])]),v("li",[v("a",{attrs:{href:"https://github.com/vuejs/vue/pull/7762",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/vuejs/vue/pull/7762")])]),v("li",[v("a",{attrs:{href:"https://github.com/vuejs/vue/pull/7510",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/vuejs/vue/pull/7510")])]),v("li",[v("a",{attrs:{href:"https://github.com/vuejs/vue/pull/8734",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/vuejs/vue/pull/8734")])])]),v("p",[e._v("说实话，上面的 "),v("code",[e._v("PR")]),e._v(" 都是些微不足道的，因为写文章需要大量的时间，随着这些文章的完成，我很希望抽出时间做一些实质性的贡献。")])])}],!1,null,null,null);v.default=t.exports}}]);