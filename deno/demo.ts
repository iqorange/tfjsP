import { serve } from "https://deno.land/std@0.62.0/http/server.ts";
const s = serve({ port: 8099 });
console.log("http://localhost:8099/");
for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}