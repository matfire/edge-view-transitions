import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import edge from "edge.js";
import { Hono } from "hono";
import { edgeViewTransitions } from "@matfire/edge-view-transitions";
const app = new Hono();
app.use("/assets/*", serveStatic({ root: "./" }));

edge.use(edgeViewTransitions);
edge.mount(new URL("./views", import.meta.url));

app.get("/", async (c) => {
  return c.html(await edge.render("home"));
});

app.get("/details", async (c) => {
  return c.html(await edge.render("details"));
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
