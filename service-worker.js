/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "99947e1b46a5a50c467c0e444ddba754"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.bd5fcdc6.js",
    "revision": "63ee03f03d39c47d65ac67485a27a829"
  },
  {
    "url": "assets/js/10.0f1a6214.js",
    "revision": "aed2ce279cb8069139b9ce0b4c0d8761"
  },
  {
    "url": "assets/js/11.1dcef5e3.js",
    "revision": "b44c80b1e90dd1fea3953864833ff464"
  },
  {
    "url": "assets/js/12.e1bab619.js",
    "revision": "0c777fe88fdd1926f6457e03ff5126c9"
  },
  {
    "url": "assets/js/13.4ab2683e.js",
    "revision": "7208e8294b490b53b99964be4640a8ae"
  },
  {
    "url": "assets/js/14.96939e98.js",
    "revision": "087388776d721e414f81616e1d18a6ac"
  },
  {
    "url": "assets/js/15.881f1c71.js",
    "revision": "139fb947484616d1abc8e1b44abbcbda"
  },
  {
    "url": "assets/js/16.312b5bea.js",
    "revision": "bc467476030fc056cc659098f66714de"
  },
  {
    "url": "assets/js/17.dd519a46.js",
    "revision": "ae2039acff2a28a34427d168746b4c61"
  },
  {
    "url": "assets/js/18.5ac236ed.js",
    "revision": "6ebf26e8a597d729a1f560a4bfc03fc9"
  },
  {
    "url": "assets/js/4.2031a5d1.js",
    "revision": "e10459d3809dba98c1bba49ef9ec64c3"
  },
  {
    "url": "assets/js/5.d8563f99.js",
    "revision": "7347dfdedba2d017c568c7b51150269e"
  },
  {
    "url": "assets/js/6.a504b635.js",
    "revision": "6663f4417c923daea0fe08aad64d7c09"
  },
  {
    "url": "assets/js/7.6503cb7d.js",
    "revision": "fe02ddd8bfbd811354a0d6b7f3f2a35d"
  },
  {
    "url": "assets/js/8.fc5b7506.js",
    "revision": "868cb4ce0a0a9291b4a5dade91da3cf6"
  },
  {
    "url": "assets/js/9.d898caf8.js",
    "revision": "c6abf0f2268fd16ebac5d1a16ddc286e"
  },
  {
    "url": "assets/js/app.a8ef8ea3.js",
    "revision": "3410af8aa42d5dc8b6ec97c4fe1b52ca"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.fe7c321e.js",
    "revision": "a64ebb2f4c1ee386f2eed5d866fffdab"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "4eb7b4b44ca7f2cdc37b47581378e811"
  },
  {
    "url": "categories/java/index.html",
    "revision": "88378260e2186aa0655a6d10c8399360"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "7f5576b03737556c2d54424a56744599"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "c52cd87c979de3bbcb75d083362f4053"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "765b68f1358dc3fe5295b3a2a0660084"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "b32d0207bfb2d951fe95cba1e1f61420"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "9eee3f503de4fedb512b1988136c9f59"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "ae30fc4840a363119b7f035b73f43b4c"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "549169740c8ceb665317d2adae8348ba"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "1ee3d247feaa4334e132a26fb4921d25"
  },
  {
    "url": "tags/js/index.html",
    "revision": "43237b6f29f5151e4de7e6e0fcc5de39"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "0a2ed8ba06bc1251f96c55813f31f0b8"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "6fab98282b75bed63f449374c9f59c09"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "28c79c5f4cf94c4049c54554b7efbd43"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "a359b03a2bc490c8e85d88c57e5e7e81"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "22ba313e023ac3f15fbdbae97a37afdc"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "22cbd687aa5a8d4168e19ce6f3f5cac6"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "d3ba53262b295f87343a31a0784bb194"
  },
  {
    "url": "timeline/index.html",
    "revision": "0f1fcdd80d469f1bee701eb167f10aa6"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "5599d98d603fdbb934af8c2f835448c7"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "9f4344cff10b20e01664987d4961e408"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "b1a42bfa59c5e7f1f58210f146d1714c"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "029e88a184c4bd0c806f04ffb8267cfc"
  },
  {
    "url": "生活分享/life.html",
    "revision": "14571bb6359440d104f4d3da12b065f5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
