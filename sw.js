var CACHE_NAME = 'simon-game-cache-v2';
var urlsToCache = [
  '',
  'style.css',
  'script.js',
  'beep1.mp3',
  'beep2.mp3',
  'beep3.mp3',
  'beep4.mp3',
  '3px-tile.png',
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.0/jquery-ui.min.js',
  'https://fonts.googleapis.com/css?family=Bungee+Shade|Kelly+Slab',
  'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css'
];


self.addEventListener('install', function(event) {
  console.log("installing")
// Perform install steps
event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache).then(function() {
          console.log('All resources have been fetched and cached.');
        });
      })
  );
});

self.addEventListener('fetch', function (event){
  console.log("SW from Simon Game at work");
  event.respondWith(
    caches.match(event.request).then(function(response){
     if(response) return response;
     return fetch(event.request);

    })
  );

});
