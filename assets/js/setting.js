window.$docsify = {
    //定义路由别名，可以更自由的定义路由规则。 支持正则。
    alias: {
      '/.*/_sidebar.md': '/_sidebar.md'
    },
    // 加载 _sidebar.md,加载自定义侧边栏
    loadSidebar: true,
    //加载自定义导航栏
    loadNavbar: true,
    // 强制悬停,切换页面后是否自动跳转到页面顶部。
    auto2top: true,
    notFoundPage: true,
    // 是否启用相对路径
    relativePath: false,
    // 调整副标题的级数
    subMaxLevel: 2,
    // 替换主题色
    themeColor: '#4CAF50',
    themeable: {
      readyTransition: true, // default
      responsiveTables: true  // default
    },

    showLevel: true,
    //文档标题，会显示在侧边栏顶部。
    name: '',
    //配置仓库地址或者 username/repo 的字符串，会在页面右上角渲染一个 GitHub Corner 挂件。
    repo: '',
    //禁用 emoji 解析
    noEmoji: false,
    tocLevel: 6,
    mergeNavbar: true,
    formatUpdated: '{YYYY}/{MM}/{DD} {HH}:{mm}',
    //搜索配置项
    search: {
      maxAge: 86400000, // 过期时间，单位毫秒，默认一天
      paths: '/', // or 'auto'
      placeholder: '搜索...',
      noData: '未找到结果，换个搜索词试试？',
      // 搜索标题的最大程级, 1 - 6
      depth: 6
    },
    pagination: {
      previousText: '上一章节',
      nextText: '下一章节',
    },
    copyCode: {
      buttonText: '复制',
      errorText: '错误',
      successText: '已复制到剪贴板'
    }
  };

  // if (typeof navigator.serviceWorker !== 'undefined') {
  //   navigator.serviceWorker.register('sw.js')
  // }