'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e87b20a8ca9b1e7e29f58d389a3bae79",
"assets/AssetManifest.bin.json": "5df27c30a97129f33aedb0e3bb18d6f8",
"assets/assets/characters/capybara.jpg": "18f985496e60b884b28885c3d3099fff",
"assets/assets/characters/cat.jpg": "dfc4dad2d3f0ef1e1d06b32c94f5483a",
"assets/assets/characters/deer.jpg": "f22c2b76d2a193787eba7176bd021ecf",
"assets/assets/characters/dog.jpg": "e669240573a3aedda16e5c0f90fd0891",
"assets/assets/characters/dolphin.jpg": "f6c37c2b0ac839aa869ab3c38d333d3d",
"assets/assets/characters/elephant.jpg": "d64b1bf85dac8e6dcd7229049e496234",
"assets/assets/characters/enfj.jpg": "4770a8412353738a029774beccdcd72b",
"assets/assets/characters/enfp.jpg": "f7af4456d689958f6f5934e8e1d82be0",
"assets/assets/characters/entj.jpg": "1fc1b9ecd480479b019a337290212545",
"assets/assets/characters/entp.jpg": "5ba02a3c7c5ef80ca8e21af29ec1852a",
"assets/assets/characters/esfj.jpg": "6acd84ea36b65e4a55d89f23293a5570",
"assets/assets/characters/esfp.jpg": "984a6b9b5d948439472d5a2edf1b84d9",
"assets/assets/characters/estj.jpg": "b392d0ad54af7564e00ead6ffe4502d3",
"assets/assets/characters/estp.jpg": "5e3468129f3d8554c9b4a9c0092de436",
"assets/assets/characters/hanuman.jpg": "0fdd32bf52f072c909767d415b103a0c",
"assets/assets/characters/hawk.jpg": "b131901b3aff106990194ac8ab649795",
"assets/assets/characters/hermit.jpg": "e16fa4d25f90f2bd4166cd1431df01e7",
"assets/assets/characters/horse.jpg": "5e37608b1b223c8082d358c1dfbf22c6",
"assets/assets/characters/infj.jpg": "a7bb084d00b27d111f5486f50828917c",
"assets/assets/characters/infp.jpg": "7c9d6b591dac374297c8ae1a14a31a3b",
"assets/assets/characters/intj.jpg": "b030486400609558b8de9bb5468287ec",
"assets/assets/characters/intp.jpg": "a6673431c7da64a61dc89f92e7a94c57",
"assets/assets/characters/isfj.jpg": "91ae1c222a1645215fc56621030d0b13",
"assets/assets/characters/isfp.jpg": "eec7bc38ad873325a52269da422f8239",
"assets/assets/characters/istj.jpg": "c134e353079085a162117535887c6d2d",
"assets/assets/characters/istp.jpg": "072872c922e7e8175b7ba92d392b4e47",
"assets/assets/characters/lak.jpg": "53c734f12871d67864ff4eb4c382f108",
"assets/assets/characters/lion.jpg": "79a521c5720e7218750e67a24a552f53",
"assets/assets/characters/monkey.jpg": "b22e056a99b4f64eadaf22528ee87575",
"assets/assets/characters/ongkot.jpg": "09a5583b0121bdf7218a305e9acd0b36",
"assets/assets/characters/owl.jpg": "3458d4b5c241dc0d3a3a6bb257c2bc35",
"assets/assets/characters/panda.jpg": "2ec77c326c2b39b8ed56a8b9217f2690",
"assets/assets/characters/parrot.jpg": "3f31ac51632fc41e406bdabff9cba74c",
"assets/assets/characters/pibek.jpg": "f2c2b52f65e34d68df13b43b54e32b58",
"assets/assets/characters/ram.jpg": "d4d74ba169de33a8ec4f0d50c41411ac",
"assets/assets/characters/rhino.jpg": "74a5652f26db3662531e81cb67c4b98c",
"assets/assets/characters/sida.jpg": "53e55ee00407b7ea37a6a73ba08e73c2",
"assets/assets/characters/sukreep.jpg": "764e320f81dd47bcb5d921ea272b24ea",
"assets/assets/characters/tosakan.jpg": "5d162394c45b31f50b65e2852e24dd9c",
"assets/assets/characters/wildcat.jpg": "9db022c84a3ecf526ae6e09c666253f7",
"assets/assets/icon/icon.png": "240cc4c4e929db106c9b2fd9f45067f7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0bf97359be498dbefa8f091dfc7d9f7d",
"assets/NOTICES": "a011d7787058c1849d677cf8385eab5d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "08860684e682ea209e516d2c2ce39c9f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7cfc7fdb536b638e73f7e6fbc53784f0",
"/": "7cfc7fdb536b638e73f7e6fbc53784f0",
"main.dart.js": "7806a6c3c99587e454c2d76b5e276bc4",
"manifest.json": "8fee9bf27530e4b72195f0f7aacb7af1",
"version.json": "120e6c2d2b1d2b5713779a95a4178696"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
