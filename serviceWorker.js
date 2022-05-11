const CvEnLigne = "CvEnLigne"
const assets = [
    "logo.png",
    "style.css",
    "offline.html"
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(CvEnLigne).then(cache => {
            cache.addAll(assets);
            console.log(assets);

        })
    );
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request);
        })
    );
});