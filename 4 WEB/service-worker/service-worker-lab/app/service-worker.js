self.addEventListener('install', event => {
  console.log('Service worker installing...');
  // Add a call to skipWaiting here
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service worker activating...');
});

// I'm a new service worker

self.addEventListener('fetch', event => {
  console.log('## fetch:', event.request.url);
  var url = event.request.url;

  if (url.indexOf("index.css") > -1){
    console.log("## intercept ");
    var newURL = "http://localhost:8081/styles_copy2/index.css"
    var response = fetch(new Request(newURL), event.request)
				.then(r => r.status < 400? r : Promise.reject())
				// if that fails, return original request
				.catch(err => fetch(event.request));

    event.respondWith(response);
  }
  // if (url.indexOf("get.mavo.io/mavo.") > -1 || url.indexOf("dev.mavo.io/dist/mavo.") > -1) {
  //   var newURL = url.replace(/.+?(get|dev)\.mavo\.io\/(dist\/)?/, "http://localhost:8000/dist/") + "?" + Date.now();

  //   var response = fetch(new Request(newURL), event.request)
  //     .then(r => r.status < 400? r : Promise.reject())
  //     // if that fails, return original request
  //     .catch(err => fetch(event.request));

  //   event.respondWith(response);
  // }
});