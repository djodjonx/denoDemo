import { serve } from "https://deno.land/std@0.136.0/http/server.ts";
const worker = new Worker(new URL("./worker.ts", import.meta.url).href, {
  type: "module",
  deno: true
});
const PORT = 3500

console.log(`http://localhost:${PORT}/`);
serve((req) => {
  const u: URL = new URL(req.url);
  const name: string | null = u.searchParams.get("name");
  worker.postMessage({ url: u.toJSON(), name, filename: './log.txt' });
  const encoder = new TextEncoder()
  Deno.writeFileSync('./log.txt', encoder.encode(new Date().toDateString()), { append: true })
  return new Response(`Hello World ${name}\n`);
}, { port: PORT });
