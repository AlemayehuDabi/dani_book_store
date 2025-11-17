import { books, type Book } from '$lib/data/books';
import type { RequestEvent } from '@sveltejs/kit';

export async function GET() {
  return new Response(JSON.stringify(books), {
    headers: {
      'Content-type': 'application/json',
    },
  });
}

// admin create book
export async function POST(event: RequestEvent) {
  const data: Book = await event.request.json();

  console.log('data form admin', data);
}
