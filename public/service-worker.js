if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js");
      let a = Promise.resolve();
      return (
        s[e] ||
          (a = new Promise(async (a) => {
            if ("document" in self) {
              const s = document.createElement("script");
              (s.src = e), document.head.appendChild(s), (s.onload = a);
            } else importScripts(e), a();
          })),
        a.then(() => {
          if (!s[e]) throw new Error(`Module ${e} didn’t register its module`);
          return s[e];
        })
      );
    },
    a = (a, s) => {
      Promise.all(a.map(e)).then((e) => s(1 === e.length ? e[0] : e));
    },
    s = { require: Promise.resolve(a) };
  self.define = (a, c, i) => {
    s[a] ||
      (s[a] = Promise.resolve().then(() => {
        let s = {};
        const r = { uri: location.origin + a.slice(1) };
        return Promise.all(
          c.map((a) => {
            switch (a) {
              case "exports":
                return s;
              case "module":
                return r;
              default:
                return e(a);
            }
          })
        ).then((e) => {
          const a = i(...e);
          return s.default || (s.default = a), s;
        });
      }));
  };
}
define("./service-worker.js", ["./workbox-1ca495a9"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/NfayB60Ua2molHC7eY6zu/_buildManifest.js",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url: "/_next/static/NfayB60Ua2molHC7eY6zu/_ssgManifest.js",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url:
            "/_next/static/chunks/0b518ec303c198170f0448482627341c928408f3.548a36d673b8d4833808.js",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url: "/_next/static/chunks/30.3f43465da2fb07c1f138.js",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url: "/_next/static/chunks/6de13d4a.13d34cb4b21a81c93bde.js",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url: "/_next/static/chunks/75fc9c18.8f193e2393b07d969f29.js",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url:
            "/_next/static/chunks/8dba8ee4321b59ec5ec3d15a9c7acc0af2ec7578.9968cf56d666e65d9fed.js",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url:
            "/_next/static/chunks/9fe7659250b015858e251d63c34e2f67a8c6dcc0.5ed4d1a851274ab65318.js",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url:
            "/_next/static/chunks/a83b75b51937fc1d91ebf911012d7fff8c7dc826.9fdcbe9a21d464603e7f.js",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url:
            "/_next/static/chunks/cdb50eac16cc4aa2c9de7725ab1a7842f2410896.81a17df0f80f0edfdcd4.js",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url: "/_next/static/chunks/framework.bb026090cb9d8c12d9a0.js",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url: "/_next/static/chunks/main-e326d525e56c6e48b12a.js",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url: "/_next/static/chunks/pages/_app-f3efb3d74cf382bfb8d7.js",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url: "/_next/static/chunks/pages/_error-fa286ff31cc5d62c29b8.js",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url: "/_next/static/chunks/pages/about-76ee430c5613b74e55cf.js",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url:
            "/_next/static/chunks/pages/admin-dashboard-bead52f699b20fee8d4c.js",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url:
            "/_next/static/chunks/pages/authentication-ea0c7da3837ff2666ead.js",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url:
            "/_next/static/chunks/pages/book-service-fe217e303aa839461bb2.js",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url: "/_next/static/chunks/pages/clients-a968de38b4dfc82ad143.js",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url: "/_next/static/chunks/pages/contact-us-ade427e59aa45a1dcae1.js",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url: "/_next/static/chunks/pages/fallback-ddf7373b55075d59bbc1.js",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url: "/_next/static/chunks/pages/fix-date-560f61d34a981d685515.js",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url:
            "/_next/static/chunks/pages/forgot-password-46229925e6e4e43ac0ef.js",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url:
            "/_next/static/chunks/pages/how-it-works-14b8d10de01381f22084.js",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url: "/_next/static/chunks/pages/index-54ec966d7a3ebbbae07a.js",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url: "/_next/static/chunks/pages/invoices-79e9d714c2103317c995.js",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url: "/_next/static/chunks/pages/payments-4991c16644c0ad3d97f0.js",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url: "/_next/static/chunks/pages/pricing-3d80b7ba0d125c8505e2.js",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url:
            "/_next/static/chunks/pages/reset/%5Breset%5D-23e32192a570f99bf80d.js",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url: "/_next/static/chunks/pages/services-e4cfccedd84e32c817f8.js",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url:
            "/_next/static/chunks/pages/user-details-201b1bb52155178a0717.js",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url: "/_next/static/chunks/polyfills-0a3f5575d2f25aee06a0.js",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url: "/_next/static/chunks/webpack-5d5dc662e96ad584fb07.js",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url: "/_next/static/css/1620a893d2fde0549ee5.css",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url: "/_next/static/css/21475962050e37905de8.css",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url: "/_next/static/css/2a0820a5361785bae207.css",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url: "/_next/static/css/3348abea54f365537782.css",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url: "/_next/static/css/49ddd9f6770909dbadf0.css",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url: "/_next/static/css/71ddcdc7ee2aec783621.css",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url: "/_next/static/css/787b164630fd73d73eae.css",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url: "/_next/static/css/7ad414a022fdb17ea637.css",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url: "/_next/static/css/83be6e3f36b8f5dc0877.css",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url: "/_next/static/css/83cb719bb122995beb8a.css",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url: "/_next/static/css/b78262c4081a67673850.css",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url: "/_next/static/css/c651eb2b3a16e6ab6259.css",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url: "/_next/static/css/ea53a0eef59fe24361c5.css",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url:
            "/_next/static/media/bikes.5cb6844c3c2c681df2862b82b55ecc9b.webp",
          revision: "NfayB60Ua2molHC7eY6zu",
        },
        {
          url: "/android-chrome-192x192.png",
          revision: "927501b62e07ca7d89139a18ba0d79aa",
        },
        {
          url: "/android-chrome-512x512.png",
          revision: "f2859fa91dc17cfdace1c8ec004e2ffa",
        },
        {
          url: "/apple-touch-icon.png",
          revision: "6b712f5587eb9d4fdc0a0e9b3f86c674",
        },
        { url: "/avatar.svg", revision: "7954635700afcfc1e2f2312f53b931c3" },
        {
          url: "/banner-big-circle.webp",
          revision: "90c3ba5a0aa54d8ac7ba2d1f1e7c215a",
        },
        {
          url: "/banner-small-circle.png",
          revision: "aa380abb3fcb9d495110112456ad8e12",
        },
        { url: "/bike.webp", revision: "45fe1436fdcd73d00bdbb0ca0088f634" },
        { url: "/bikeImg.webp", revision: "9ccd79899f7a75f681f655e420373d35" },
        { url: "/bikes.webp", revision: "183e2edc63995617bbe4c5a20cbf0f42" },
        {
          url: "/brand-logo1.svg",
          revision: "9bd161e35798e436dcb7048ed6150413",
        },
        {
          url: "/brand-logo10.svg",
          revision: "665d8aa6b76adb34a2cd33d2e4dee438",
        },
        {
          url: "/brand-logo2.svg",
          revision: "5101a5a5611b91130cb51703f3cb1459",
        },
        {
          url: "/brand-logo3.svg",
          revision: "7d49e445e0e303baa7e5d5fe6c79aeb8",
        },
        {
          url: "/brand-logo4.svg",
          revision: "96cf56399ad9a2b43c35435f34934dce",
        },
        {
          url: "/brand-logo5.svg",
          revision: "994a88f21bd0f05bc27b2fe82c4ac9c0",
        },
        {
          url: "/brand-logo6.svg",
          revision: "a527f9041edb6d5cb000f5b4fb32f7ce",
        },
        {
          url: "/brand-logo7.svg",
          revision: "3217ed54e8086b72b98a3790b28a1056",
        },
        {
          url: "/brand-logo8.svg",
          revision: "4db56ee7be867480b80d9c81d27b2643",
        },
        {
          url: "/brand-logo9.svg",
          revision: "db00161ed37fc9414c65b005e362de5c",
        },
        { url: "/call.webp", revision: "002a118c92d3cf2734d50fea56f1f78b" },
        { url: "/card-img1.png", revision: "d33ad78159e08cafea89acf1143c908f" },
        { url: "/card-img2.png", revision: "183d53140e7fa6974b207e67ffd08007" },
        { url: "/card-img3.png", revision: "c4fb3b8d17023bcb2b1d18ac9b43cc6a" },
        { url: "/card-img4.png", revision: "6b05a188fcedabf12ed770bbe120caaf" },
        { url: "/card-img5.png", revision: "a1a817670e6d03451399b2a930382e39" },
        { url: "/card-img6.png", revision: "009a1e724a17bba2229b3b9a0cf8edb0" },
        {
          url: "/center-bike.webp",
          revision: "32ffa5bde463b9c8742997b19c0f4cf4",
        },
        { url: "/comma-end.png", revision: "f9301587a80368acf77af10a040acb59" },
        {
          url: "/comma-start.png",
          revision: "235c3892c6f3fae3b6f9718a6e0baef5",
        },
        {
          url: "/counter-bg.webp",
          revision: "fc6d540f92f8096d8bd876dc222296cf",
        },
        { url: "/earth.webp", revision: "28d7a17d1134a8a8332dfbdb206caa9d" },
        { url: "/engine.webp", revision: "bf72159f2ffdccc483fd557b24dde776" },
        {
          url: "/favicon-16x16.png",
          revision: "bb928e607963551d6b7ffd8dbb787dc4",
        },
        {
          url: "/favicon-32x32.png",
          revision: "2ee44037c985997bc153c15592b154ae",
        },
        { url: "/favicon.ico", revision: "e0da01a990ec5afd7515fba5bbe4bbff" },
        {
          url: "/footer-circle-left.png",
          revision: "2faaaff881a49a8b2065f60e14feac55",
        },
        {
          url: "/footer-circle-right.png",
          revision: "cdb72832a74d4d2a67f64af002c0f6d4",
        },
        { url: "/landing.webp", revision: "135af8e657179b23e2bd1c31b0b2399e" },
        { url: "/manifest.json", revision: "d9ee06d40585156d2097297cfa7619b3" },
        { url: "/mechanic.webp", revision: "8bfaf73769115a7a11386f758a48ccd7" },
        { url: "/message.svg", revision: "41f433fdd4dc6a36602e86b0398c34a8" },
        { url: "/preloader.gif", revision: "56373cf32526a60fdbeb10d63953e978" },
        {
          url: "/pricing center design.webp",
          revision: "fe22d9e7a5a1dd4434d23aa8ef8c6a5d",
        },
        { url: "/scene.glb", revision: "1d192ca50dee44b93eda8ce0e6b476b5" },
        { url: "/service.webp", revision: "df0dff2ba8120c5de06ce5fcaf601604" },
        {
          url: "/service_icon1.svg",
          revision: "6675d40d06466060ef3026606fb2c276",
        },
        {
          url: "/service_icon2.svg",
          revision: "eaf9d8e2b75c19f81ad5a67946aa33fb",
        },
        {
          url: "/service_icon3.svg",
          revision: "d28a484bf8d146a58908053951eaa8f5",
        },
        {
          url: "/service_icon4.svg",
          revision: "c843a4ed38261343c9254cd880f7c222",
        },
        { url: "/vercel.svg", revision: "4b4f1876502eb6721764637fe5c41702" },
        { url: "/welding.webp", revision: "cd03879c2b6a07928edeeb5afef14492" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 1,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/api\/.*$/i,
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /.*/i,
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    );
});
