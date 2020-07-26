(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{496:function(_,v,t){"use strict";t.r(v);var a=t(3),r=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"数据结构-跳表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据结构-跳表"}},[_._v("#")]),_._v(" 数据结构-跳表")]),_._v(" "),t("h2",{attrs:{id:"跳表概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#跳表概念"}},[_._v("#")]),_._v(" 跳表概念")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("二分查找法依赖于数组的随机访问特性，只能用数组实现")]),_._v(" "),t("p",[_._v("跳表是基于链表实现类似于二分查找的算法")])]),_._v(" "),t("li",[t("p",[_._v("查找、插入、删除各方面性能都不错的动态数据结构，甚至可以替代红黑树")])]),_._v(" "),t("li",[t("p",[_._v("Redis 中的有序集合（Sorted Set）就是用跳表来实现的")])])]),_._v(" "),t("h2",{attrs:{id:"跳表结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#跳表结构"}},[_._v("#")]),_._v(" 跳表结构")]),_._v(" "),t("ol",[t("li",[_._v("对于一个有序的单链表，想在其中查找某个数据，只能从头到尾遍历链表。效率很低")]),_._v(" "),t("li",[_._v("对链表建立一级索引，每两个结点提取一个结点到上一级，抽出来的一级称为索引层")]),_._v(" "),t("li",[_._v("索引层结点有指针指向下一级结点")]),_._v(" "),t("li",[_._v("在查找结点时，先在索引层遍历，再下降到原始链表，就能减少遍历次数")]),_._v(" "),t("li",[_._v("当链表很长，使用多级索引结构可以大大提高查找效率")])]),_._v(" "),t("h2",{attrs:{id:"跳表性能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#跳表性能"}},[_._v("#")]),_._v(" 跳表性能")]),_._v(" "),t("h3",{attrs:{id:"跳表的高度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#跳表的高度"}},[_._v("#")]),_._v(" 跳表的高度")]),_._v(" "),t("ol",[t("li",[_._v("第 k 级索引的结点个数是第 k-1 级索引的结点个数的 $\\frac{1}{2}$，那么第 k 级索引 结点的个数就是 $\\frac{n}{2^k}$")]),_._v(" "),t("li",[_._v("假设索引有 h 级，最高级的索引有 2 个结点。通过上面的公式，可以得到求得 $h=log_2n-1$")]),_._v(" "),t("li",[_._v("如果包含原始链表这一层，整个跳表的高度就是 $log_2n$")])]),_._v(" "),t("h3",{attrs:{id:"查找时间复杂度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查找时间复杂度"}},[_._v("#")]),_._v(" 查找时间复杂度")]),_._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[_._v("上级索引通过指针下降到下级索引")])]),_._v(" "),t("li",[t("p",[_._v("当每级索引都是两个结点抽出一个结点作为上一级索引的结点时，每一层最多遍历3个结点")]),_._v(" "),t("p",[_._v("时间复杂度为  $O(2*logn)$，即 $O(logn)$")])]),_._v(" "),t("li",[t("p",[_._v("如果每一层最多要遍历 m 个结点，那么时间复杂度为 $O(m*logn)$")])])]),_._v(" "),t("h3",{attrs:{id:"插入时间复杂度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插入时间复杂度"}},[_._v("#")]),_._v(" 插入时间复杂度")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("在单链表中，如果知道要插入的位置，插入结点的时间复杂度是 $O(1)$")]),_._v(" "),t("p",[_._v("为了保证原始链表中数据的有序性，需要先找到要插入的位置，这个查找操作比较耗时")])]),_._v(" "),t("li",[t("p",[_._v("查找某个结点的的时间复杂度是 $O(logn)$，查找某个数据应该插入的位置，时间复杂度也是 $O(logn)$")])])]),_._v(" "),t("h3",{attrs:{id:"删除时间复杂度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除时间复杂度"}},[_._v("#")]),_._v(" 删除时间复杂度")]),_._v(" "),t("ol",[t("li",[_._v("如果这个结点在索引中也有出现，我们除了要删除原始链表中的结点，还要删除索引中的结点")]),_._v(" "),t("li",[_._v("删除一个结点要找到其前驱结点，如果是双向链表则可以通过指针获得")]),_._v(" "),t("li",[_._v("时间复杂度为 $O(logn)$")])]),_._v(" "),t("h2",{attrs:{id:"内存消耗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存消耗"}},[_._v("#")]),_._v(" 内存消耗")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("比起单链表，跳表需要存储多级索引，要消耗更多的存储空间")])]),_._v(" "),t("li",[t("p",[_._v("如果将包含 n 个结点的单链表构造成跳表，需要额外再用接近 n 个结点的存储空间")])]),_._v(" "),t("li",[t("p",[_._v("每隔三个结点抽出一个结点比每隔两个会节省索引存储空间，但性能会下降")])]),_._v(" "),t("li",[t("p",[_._v("在实际的软件开发中，原始链表中存储的可能是很大的对象")]),_._v(" "),t("p",[_._v("而索引结点只需要存储关键值和几个指针，并不需要存储对象")]),_._v(" "),t("p",[_._v("所以当对象比索引结点大很多时，索引占用的额外空间可以忽略")])])]),_._v(" "),t("h2",{attrs:{id:"索引动态更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#索引动态更新"}},[_._v("#")]),_._v(" 索引动态更新")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("跳表中插入数据，如果不更新索引，某 2 个索引结点之间数据过多，性能退化")])]),_._v(" "),t("li",[t("p",[_._v("跳表是通过随机函数来维护索引与原始链表大小之间的平衡")])]),_._v(" "),t("li",[t("p",[_._v("通过随机函数，来决定将这个结点插入到哪几级索引中")])])]),_._v(" "),t("p",[_._v("比如随机函数生成了值 K，就将这个结点添加到第一级到第 K 级索引中")]),_._v(" "),t("p",[_._v("随机函数的选取很重要，从概率上来讲，能够保证跳表的索引大小和数据大小平衡性，避免性能过度退化")])])}),[],!1,null,null,null);v.default=r.exports}}]);