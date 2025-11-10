import { books } from '$lib/data/books';

export function GET() {
  return new Response(JSON.stringify(books), {
    headers: {
      'Content-type': 'application/json',
    },
  });
}
