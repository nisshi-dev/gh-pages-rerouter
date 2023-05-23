import { CUSTOM_PATH, GH_PAGES_URL } from "./constants";

addEventListener("fetch", (event: FetchEvent) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url);

  if (url.pathname.endsWith("/")) {
    url.pathname = url.pathname.slice(0, url.pathname.length - 1);
  }

  if (url.pathname.startsWith(CUSTOM_PATH)) {
    url.pathname = url.pathname.replace(CUSTOM_PATH, "/");
  }

  const targetURL = GH_PAGES_URL + url.pathname;

  return fetch(targetURL);
}
