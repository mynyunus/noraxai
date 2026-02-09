export default {
    async fetch(request, env, ctx) {
        // Assets are intercepted automatically before this fetch handler
        // If the request reaches here, it means no asset was found.
        return new Response("Not Found", { status: 404 });
    },
};
