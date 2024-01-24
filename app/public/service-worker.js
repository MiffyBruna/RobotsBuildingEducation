self.addEventListener("fetch", function (event) {
    console.log("fetching..");
    event.respondWith(fetch(event.request));
  });
  