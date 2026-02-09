export default {
    async fetch(request, env, ctx) {
        // try to fetch the asset from the ASSETS binding
        // if the asset is not found, it will throw/return 404
        // for SPA, we want to serve index.html for unknown routes

        // However, with "assets" binding, the request is intercepted BEFORE this fetch handler
        // if an asset matches. So if we are here, it means NO asset matched.

        // For a Single Page App (SPA), we want to return index.html for navigation requests
        // that don't match a static file (e.g. /about, /contact).

        // Check if it's a navigation request (optional, but good practice)
        // Or simpler: just return index.html from assets

        try {
            const url = new URL(request.url);
            // Construct a request for index.html
            const indexRequest = new Request(new URL("/index.html", url), request);
            return await env.ASSETS.fetch(indexRequest);
        } catch (e) {
            return new Response("Not Found", { status: 404 });
        }
    },
};
