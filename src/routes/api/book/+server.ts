import { books, type Book } from '$lib/data/books';

export async function GET() {
  return new Response(JSON.stringify(books), {
    headers: {
      'Content-type': 'application/json',
    },
  });
}
