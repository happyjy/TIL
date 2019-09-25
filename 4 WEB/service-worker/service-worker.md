# service-worker로 local Resource로 요청 하는 방법에 대해서 알아보기 시작한다.


## 1. Register the service worker
>  아래와 같은 코드로 service worker를 등록 한다.

```js
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
    .then(registration => {
      console.log('Service Worker is registered', registration);
    })
    .catch(err => {
      console.error('Registration failed:', err);
    });
  });
}

```

## 2. Register the service worker
> service worker의 상태 변화는 아래 추가한 service-worker 파일의 이벤트를 수행한다.

### 2.1 Add Event Listeners
> service-worder.js에 다음과 같이 입력 한다.

* 설명  
  - service worker는 install event는 resistation 마지막에 수행한다.
  실제 앱에서는 install은 static assets을 캐싱하는데 좋은 장소 잇다. 
  [중요]but in a real-world app this would be a good place for caching static assets. We'll look at how to do that in Lab: Caching files with Service Worker.

  - service worker가 등록되면 새로운 service worker가 새로운거라고 인식한다.
  브라우저가 새로운 service worker라고 인지하면 새 service worker를 설치한다.
  
   When a service worker is registered, the browser detects if the service worker is new (either because it is different from the previously installed service worker or because there is no registered service worker for this site). If the service worker is new (as it is in this case), then the browser installs it.

  - The service worker emits an activate event when it takes control of the page. The above code logs a message here, but this event is often used to update caches.

  - 새로운 service worker는 이전 service worker가 사용되지 않을때까지 사용할 수 있도록 활성화 되지 않는다. 이 이유때문에 모든 페이지가 service worker로 컨트롤할 수 있다. 그래서 새로운 service worker가 동작하기 전에 새로 생기기 이전에 service worker는 등록 해제가 된다. 

  Only one service worker can be active at a time for a given scope (see Exploring service worker scope), so a newly installed service worker isn't activated until the existing service worker is no longer in use. This is why all pages controlled by a service worker must be closed before a new service worker can take over. Since we unregistered the existing service worker, the new service worker was activated immediately.


```js
self.addEventListener('install', event => {
  console.log('Service worker installing...');
  // Add a call to skipWaiting here
});

self.addEventListener('activate', event => {
  console.log('Service worker activating...');
});
```

### 2.2 Update the service worker

* 설명 
 - The browser detects a byte difference between the new and existing service worker file (because of the added comment), **so the new service worker is installed. Since only one service worker can be active at a time (for a given scope), even though the new service worker is installed, it isn't activated until the existing service worker is no longer in use.** <u>By closing all pages under the old service worker's control, we are able to activate the new service worker.</u>

### 2.3 Skipping the waiting phase
> install되고 바로 activate event를 수행 할 수 있도록 해준다.
It is possible for a new service worker to activate immediately, even if an existing service worker is present, by skipping the waiting phase.

Save the file and refresh the page. Notice that the new service worker installs and activates immediately, even though a previous service worker was in control.

```js
self.skipWaiting();
```


## 3. Intercept network requests
> Service Workers can act as a proxy between your web app and the network.
Let's add a fetch listener to intercept requests from our domain.
Add the following code to service-worker.js:

```js
self.addEventListener('fetch', event => {
  console.log('Fetching:', event.request.url);
});
```
* 설명 
  - Save the script and refresh the page to install and activate the updated service worker.

  - Check the console and observe that no fetch events were logged. Refresh the page and check the console again. You should see fetch events this time for the page and its assets (like CSS).

  - Click the links to Other page, Another page, and Back.

  - You'll see fetch events in the console for each of the pages and their assets. Do all the logs make sense?


* 설명2
 - The service worker receives a fetch event for every HTTP request made by the browser that is within its scope. 
 The fetch event object contains the request. 
 Listening for fetch events in the service worker is similar to listening to click events in the DOM.
  In our code, when a fetch event occurs, we log the requested URL to the console (in practice we could also create and return our own custom response with arbitrary resources).

  - [중요]Why didn't any fetch events log on the first refresh?
   By default, fetch events from a page won't go through a service worker unless the page request itself went through a service worker.
   This ensures consistency in your site; if a page loads without the service worker, so do its subresources.

> 아래 주소로 service-worker로 어떻게 local Resource로 요청하는지 알아보자 
http://lea.verou.me/2017/10/different-remote-and-local-resource-urls-with-service-workers/

> service-worker를 사용하는 방법에 대해서 알아보자
https://developers.google.com/web/fundamentals/primers/service-workers/



## ref 
https://developers.google.com/web/ilt/pwa/lab-scripting-the-service-worker#31_add_event_listeners