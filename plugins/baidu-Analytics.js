/*
** 只在生产模式的客户端中使用
*/
if (process.env.NODE_ENV === 'production') {
  var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "http://data.zz.baidu.com/urls?site=blog.lihaile.work&token=5IwKItdAqaTw0p9n";
    hm.id = "blog_lihaile";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();

  /*
  ** 应用挂载后
  */
  window.onNuxtReady((app) => {
    app.$nuxt.$on('routeChanged', (to, from) => {
      var _hmt = _hmt || [];
      (function() {
        document.getElementById('blog_lihaile') && document.getElementById('blog_lihaile').remove()
        var hm = document.createElement("script");
        hm.src = "http://data.zz.baidu.com/urls?site=blog.lihaile.work&token=5IwKItdAqaTw0p9n";
        hm.id = "blog_lihaile";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
    })
  })
}
