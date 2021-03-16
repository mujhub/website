// IMPORTANT! Update this cache name and cache whitelist on subsequent builds

var CURRENT_VERSION = "29d0444c"; //current cache name
var CACHE_VERSION_WHITELIST = ["29d0444c"]; //names of current and previous caches which can be used further

var urlsToCache = ["/"];

// Install a service worker
self.addEventListener("install", (event) => {
	//skip the waiting phase
	self.skipWaiting();

	// Perform install steps
	event.waitUntil(
		caches.open(CURRENT_VERSION).then(function (cache) {
			return cache.addAll(urlsToCache);
		})
	);
});

// Cache and return requests
self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches.match(event.request).then(function (response) {
			if (response) {
				return response;
			}
			return fetch(event.request);
		})
	);
});

// Update a service worker
self.addEventListener("activate", (event) => {
	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames.map((cacheName) => {
					if (CACHE_VERSION_WHITELIST.indexOf(cacheName) === -1) {
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
});
