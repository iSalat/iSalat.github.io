'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "e5c57a7d18c208554972de9ef20e4850",
"index.html": "c92f721aae0880577eb9c911788b90fb",
"/": "c92f721aae0880577eb9c911788b90fb",
"main.dart.js": "6269e5980230d112538510243514bb8e",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "dfefc9c428908ad74826ea25554e72c8",
"icons/Icon-192.png": "a0dea811cb903d0ac571e06010273add",
"icons/Icon-maskable-192.png": "a0dea811cb903d0ac571e06010273add",
"icons/Icon-maskable-512.png": "10bd8846c659462923e90a2109112162",
"icons/Icon-512.png": "10bd8846c659462923e90a2109112162",
"manifest.json": "1549b1d7866978a29b00fa0223e6f616",
"assets/AssetManifest.json": "c3080f4ddee4197d55cec50577646bfc",
"assets/NOTICES": "6600e0aa60f8d17de04f4f50d3c78e70",
"assets/FontManifest.json": "edf5f3d794ce55b8257ef41671fc0d97",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/flutter_login/assets/images/ecorp.png": "24e80e9441acf073076893cebbe60ac0",
"assets/packages/sign_in_button/assets/logos/google_dark.png": "d18b748c2edbc5c4e3bc221a1ec64438",
"assets/packages/sign_in_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/packages/sign_in_button/assets/logos/2.0x/google_dark.png": "68d675bc88e8b2a9079fdfb632a974aa",
"assets/packages/sign_in_button/assets/logos/2.0x/google_light.png": "1f00e2bbc0c16b9e956bafeddebe7bf2",
"assets/packages/sign_in_button/assets/logos/2.0x/facebook_new.png": "dd8e500c6d946b0f7c24eb8b94b1ea8c",
"assets/packages/sign_in_button/assets/logos/3.0x/google_dark.png": "c75b35db06cb33eb7c52af696026d299",
"assets/packages/sign_in_button/assets/logos/3.0x/google_light.png": "3aeb09c8261211cfc16ac080a555c43c",
"assets/packages/sign_in_button/assets/logos/3.0x/facebook_new.png": "689ce8e0056bb542425547325ce690ba",
"assets/packages/sign_in_button/assets/logos/facebook_new.png": "93cb650d10a738a579b093556d4341be",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "1afeb6c68565330cfc3762445c28063d",
"assets/fonts/MaterialIcons-Regular.otf": "8160d18c77e380d60f15f12f986367d9",
"assets/assets/images/track_image.png": "2fd34bdfa7b5d8a5df15b12fe3f9dcef",
"assets/assets/images/record_image.png": "0f991b45e7ee559400109ab940335daa",
"assets/assets/images/settings_icon.png": "e40b621fa085c2e5ad45b1ecec72159e",
"assets/assets/images/mosque_icon.png": "378ccbb7abb1b3484bab4046fad026d6",
"assets/assets/images/salat_icon.png": "cf0db62089dbff553cf7a5a598deb0e1",
"assets/assets/images/group_icon.png": "c130fcaf62df9f8596e739a6dee194e2",
"assets/assets/images/stats_icon.png": "a97d6291bd0b7081201403dbc5d4bc0c",
"assets/assets/images/icone.png": "aeba83a07c8a047dba5a4543a66f884a",
"assets/assets/images/solo_icon.png": "33475a64132e0e40fbd0c2a6aa6740bc",
"assets/assets/images/report_icon.png": "42b48923ddd7decd28f550a575cf677f",
"assets/assets/images/improve_image.png": "fe3bf3187889c0ab1f05a8e65c5eb417",
"assets/assets/images/target_icon.png": "178900e8eeac19aa7df6e3cae4ee19d6",
"assets/assets/images/salat_icon.svg": "cddad5f2615da459b7502730a3877be6",
"assets/assets/fonts/BottomNavIcons.ttf": "b96e2fc62628206cc21db336335dae37",
"assets/assets/fonts/montserrat/Montserrat-LightItalic.ttf": "471a0493b1695aa975532d42ea7c0d84",
"assets/assets/fonts/montserrat/Montserrat-Medium.ttf": "aca6287f22eef510c1e622c97bb1e1e1",
"assets/assets/fonts/montserrat/Montserrat-BoldItalic.ttf": "616c74c716c5c55f333bb8f91af216fb",
"assets/assets/fonts/montserrat/Montserrat-Light.ttf": "a17f43cc60643d965636985afc00a221",
"assets/assets/fonts/montserrat/Montserrat-ThinItalic.ttf": "13cf2c4a5e253cf43b82a7d3f8485c88",
"assets/assets/fonts/montserrat/Montserrat-ExtraLight.ttf": "d88fa2ca46d05df6986d2eaeafee2225",
"assets/assets/fonts/montserrat/Montserrat-Thin.ttf": "426a4b74bf1d6920508384899bfb695b",
"assets/assets/fonts/montserrat/Montserrat-Bold.ttf": "d14ad1035ae6da4e5a71eca362a8d696",
"assets/assets/fonts/montserrat/Montserrat-MediumItalic.ttf": "3ebc1a21c12a3051dcdd80e7605eb630",
"assets/assets/fonts/montserrat/Montserrat-BlackItalic.ttf": "39833eed48300f751547827bd709ddc5",
"assets/assets/fonts/montserrat/Montserrat-SemiBold.ttf": "7ffeec2b4edb434d393875ffbe633c30",
"assets/assets/fonts/montserrat/Montserrat-ExtraLightItalic.ttf": "7cc3c8b2cf1436f14f94e4788f131454",
"assets/assets/fonts/montserrat/Montserrat-ExtraBold.ttf": "dc2f156b60f53c591fc0d2b98cbf01bf",
"assets/assets/fonts/montserrat/Montserrat-Black.ttf": "55e37a35525c63e130e76d588f2f5e8d",
"assets/assets/fonts/montserrat/Montserrat-Regular.ttf": "34de1239b12123b85ff1a68b58835a1f",
"assets/assets/fonts/montserrat/Montserrat-Italic.ttf": "df17124cad6f4767f3bf115f961a14b4",
"assets/assets/fonts/montserrat/Montserrat-SemiBoldItalic.ttf": "a8802bc3d04c500037fff80756ec3da7",
"assets/assets/fonts/montserrat/Montserrat-ExtraBoldItalic.ttf": "67e72285fcfc55467364a1493004cb9e",
"assets/assets/fonts/raleway/Raleway-BoldItalic.ttf": "17e4f15fd9c264d7a42545c6805bcfdf",
"assets/assets/fonts/raleway/Raleway-MediumItalic.ttf": "15a3a013eeb5a3bdc9f20227ca62861d",
"assets/assets/fonts/raleway/Raleway-ThinItalic.ttf": "288e7c0d0109f91c766c7096f2a0217d",
"assets/assets/fonts/raleway/Raleway-ExtraLight.ttf": "550ad10fece0b35b0325d38192701592",
"assets/assets/fonts/raleway/Raleway-Medium.ttf": "b952c3c81ba34b54c66c748ea1e828a7",
"assets/assets/fonts/raleway/Raleway-SemiBold.ttf": "87641f9900d717d6bfbf108b8755868e",
"assets/assets/fonts/raleway/Raleway-ExtraBold.ttf": "27f7ef17de3691b5cdb9f1ee1ee5cc6a",
"assets/assets/fonts/raleway/Raleway-ExtraBoldItalic.ttf": "103c571d4c407f84e5cde93be75a25e7",
"assets/assets/fonts/raleway/Raleway-Regular.ttf": "20d41940068e45b114d32b48d684ef39",
"assets/assets/fonts/raleway/Raleway-ExtraLightItalic.ttf": "2a6861ab9c9233a15d90d59d3050840f",
"assets/assets/fonts/raleway/Raleway-SemiBoldItalic.ttf": "806d2907def84e9d321b462b43247111",
"assets/assets/fonts/raleway/Raleway-Light.ttf": "ed645c2b20d22612c4985bc4e4b4a7ff",
"assets/assets/fonts/raleway/Raleway-Black.ttf": "35e0e2e7a5b03275ba569a214edbab77",
"assets/assets/fonts/raleway/Raleway-BlackItalic.ttf": "ce55274864c3c831b62f242c26a0d0d5",
"assets/assets/fonts/raleway/Raleway-LightItalic.ttf": "7f5fba2f6aeba3babf61fcd6adbc7798",
"assets/assets/fonts/raleway/Raleway-Thin.ttf": "db8e7354e2585143a4f7ef6f71bfe0ca",
"assets/assets/fonts/raleway/Raleway-Italic.ttf": "b88299f8225ae49ce121b1f6aa456dbc",
"assets/assets/fonts/raleway/Raleway-Bold.ttf": "88079335418f389bfb2d86bc4f1ced64",
"assets/assets/translations/en.json": "237ff1c54baed335d07ea20ad24a2818",
"assets/assets/translations/fr-FR.json": "038b4f272c29d3d1936506d9589fa1f7",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
