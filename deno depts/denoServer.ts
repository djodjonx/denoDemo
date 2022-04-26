import { http } from './depts.ts';
import { requestedEvent, createPostEvent} from './listerner.ts'

const PORT = 3500

console.log(`http://localhost:${PORT}/`);

http.serve((req: Request) => {
  const u: URL = new URL(req.url);
  const requestedPostEvent = createPostEvent(u.toJSON())
  if (req.method === 'POST') {
    self.dispatchEvent(requestedPostEvent)
  }


  const name: string | null = u.searchParams.get("name");
  if (name === 'Fconnect') {
    self.dispatchEvent(requestedEvent)
  }
  return new Response(`Hello World ${name}\n`);
}, { port: PORT });
