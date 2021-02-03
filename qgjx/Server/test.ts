// @ts-ignore
import { serve } from "https://deno.land/std@0.85.0/http/server.ts";
const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
// @ts-ignore
for await (const req of s) {
    req.respond({ body: "Hello World\n" });
}
// deno run --allow-net Server/test.ts