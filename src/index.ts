addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url)

  if (url.pathname.endsWith('/')) {
    url.pathname = url.pathname.slice(0, url.pathname.length - 1)
  }

  if (url.pathname.startsWith('/prototypes/')) {
    url.pathname = url.pathname.replace('/prototypes/', '/')
  }

  const targetURL = 'https://nisshi-dev.github.io' + url.pathname

  return fetch(targetURL)
}
