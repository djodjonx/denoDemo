import { serve } from "https://deno.land/std@0.136.0/http/server.ts";

const PORT = 3500

console.log(`http://localhost:${PORT}/`);
serve((req) => {
  const u: URL = new URL(req.url);
  const name: string | null = u.searchParams.get("name");
  return new Response(`Hello World ${name}\n`);
}, { port: PORT });
