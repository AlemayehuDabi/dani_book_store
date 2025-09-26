export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  price: number;
  coverImage: string;
  genre: string;
  rating: number;
  publishedYear: number;
  pages: number;
}

export const books: Book[] = [
  {
    id: '1',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    description: 'A dazzling novel about all the choices that go into a life well lived.',
    price: 15.99,
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop&crop=center',
    genre: 'Fiction',
    rating: 4.5,
    publishedYear: 2020,
    pages: 304
  },
  {
    id: '2',
    title: 'Atomic Habits',
    author: 'James Clear',
    description: 'An Easy & Proven Way to Build Good Habits & Break Bad Ones.',
    price: 18.99,
    coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=center',
    genre: 'Self-Help',
    rating: 4.8,
    publishedYear: 2018,
    pages: 320
  },
  {
    id: '3',
    title: 'The Seven Husbands of Evelyn Hugo',
    author: 'Taylor Jenkins Reid',
    description: 'A captivating novel about a reclusive Hollywood icon.',
    price: 16.99,
    coverImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop&crop=center',
    genre: 'Fiction',
    rating: 4.6,
    publishedYear: 2017,
    pages: 400
  },
  {
    id: '4',
    title: 'Educated',
    author: 'Tara Westover',
    description: 'A memoir about the struggle for self-invention.',
    price: 17.99,
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop&crop=center',
    genre: 'Biography',
    rating: 4.7,
    publishedYear: 2018,
    pages: 352
  },
  {
    id: '5',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    description: 'Timeless lessons on wealth, greed, and happiness.',
    price: 19.99,
    coverImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=400&fit=crop&crop=center',
    genre: 'Business',
    rating: 4.9,
    publishedYear: 2020,
    pages: 256
  },
  {
    id: '6',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    description: 'A lone astronaut must save the earth from disaster.',
    price: 20.99,
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop&crop=center',
    genre: 'Science Fiction',
    rating: 4.8,
    publishedYear: 2021,
    pages: 496
  },
  {
    id: '7',
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    description: 'A woman refuses to speak after allegedly murdering her husband.',
    price: 14.99,
    coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=center',
    genre: 'Thriller',
    rating: 4.4,
    publishedYear: 2019,
    pages: 336
  },
  {
    id: '8',
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens',
    description: 'A mystery and love story set in the marshes of North Carolina.',
    price: 16.99,
    coverImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop&crop=center',
    genre: 'Fiction',
    rating: 4.6,
    publishedYear: 2018,
    pages: 384
  },
  {
    id: '9',
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    description: 'A brief history of humankind.',
    price: 21.99,
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop&crop=center',
    genre: 'History',
    rating: 4.5,
    publishedYear: 2014,
    pages: 443
  },
  {
    id: '10',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    description: 'A magical fable about following your dreams.',
    price: 13.99,
    coverImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=400&fit=crop&crop=center',
    genre: 'Fiction',
    rating: 4.3,
    publishedYear: 1988,
    pages: 208
  },
  {
    id: '11',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    description: 'A groundbreaking tour of the mind and explains the two systems that drive the way we think.',
    price: 22.99,
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop&crop=center',
    genre: 'Psychology',
    rating: 4.7,
    publishedYear: 2011,
    pages: 499
  },
  {
    id: '12',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    description: 'A classic American novel about the Jazz Age.',
    price: 12.99,
    coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=center',
    genre: 'Classic',
    rating: 4.2,
    publishedYear: 1925,
    pages: 180
  }
];

export const genres = [
  'All',
  'Fiction',
  'Self-Help',
  'Biography',
  'Business',
  'Science Fiction',
  'Thriller',
  'History',
  'Psychology',
  'Classic'
];
