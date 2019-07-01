let staticCache = 'restaurant-review-cache-v1';


// Resources to cache
let urlsToCache = [
    './',
    '/index.html',
    './restaurant.html',
    './css/styles.css',
    './js/dbhelper.js',
    './js/main.js',
    './js/restaurant_info.js',
    './js/sw-register.js',
    './data/restaurants.json',
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
    './img/6.jpg',
    './img/7.jpg',
    './img/8.jpg',
    './img/9.jpg',
    './img/10.jpg',
]

// Service Worker Install

self.addEventListener('install', event => {
    event.respondWith(
        caches.open(staticCache).then(cache => cache.addAll(urlsToCache))
    )
})

// activate service worker

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            if(response) {
                return response
            }
            return fetch(event.request)
        })
    )
})

// Fetching offline content view

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});