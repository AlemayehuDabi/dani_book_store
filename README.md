# 📚 BookStore - Modern Book Store Website

A stunning, modern, and responsive book store website built with SvelteKit and TailwindCSS. This is a frontend-only application with no backend or database requirements.

## ✨ Features

- **Modern Design**: Clean, professional UI with smooth animations and hover effects
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Book Collection**: Display of books with cover images, titles, authors, descriptions, prices, and ratings
- **Search & Filter**: Real-time search functionality and genre filtering
- **Hero Section**: Eye-catching landing section with gradient backgrounds
- **Navigation**: Sticky navbar with smooth scrolling
- **Footer**: Complete footer with social links and contact information
- **Accessibility**: Proper ARIA labels, contrast ratios, and keyboard navigation
- **Performance**: Lazy loading images and optimized animations

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd book_store_dani
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Tech Stack

- **SvelteKit**: Modern web framework
- **TailwindCSS**: Utility-first CSS framework
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool and dev server

## 📁 Project Structure

```
src/
├── lib/
│   ├── data/
│   │   └── books.ts          # Mock book data
│   └── assets/
│       └── favicon.svg       # Site favicon
├── routes/
│   ├── +layout.svelte        # Main layout
│   ├── +page.svelte          # Home page
│   ├── about/
│   │   └── +page.svelte      # About page
│   └── contact/
│       └── +page.svelte      # Contact page
├── app.css                   # Global styles
└── app.html                  # HTML template
```

## 🎨 Design Features

- **Color Palette**: Modern blue and purple gradients with clean grays
- **Typography**: Inter font for body text, Playfair Display for headings
- **Animations**: Smooth transitions, hover effects, and scroll animations
- **Cards**: Rounded corners, soft shadows, and hover transformations
- **Buttons**: Gradient backgrounds with hover effects and scale transforms

## 📱 Responsive Design

- **Mobile**: Single column layout with touch-friendly buttons
- **Tablet**: Two-column book grid with optimized spacing
- **Desktop**: Four-column book grid with full navigation
- **Large Screens**: Maximum width containers with centered content

## 🔍 Search & Filter

- **Real-time Search**: Search by title, author, or description
- **Genre Filter**: Filter books by category (Fiction, Non-fiction, etc.)
- **Combined Filtering**: Search and genre filters work together
- **No Results**: Friendly message when no books match criteria

## ♿ Accessibility

- **ARIA Labels**: Proper labeling for screen readers
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG compliant contrast ratios
- **Focus States**: Clear focus indicators
- **Alt Text**: Descriptive image alt text

## 🚀 Deployment

The application can be deployed to any static hosting service:

1. **Build the project**:
```bash
npm run build
```

2. **Deploy the `build` folder** to your hosting service

### Recommended Hosting Services

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## 📝 Customization

### Adding New Books

Edit `src/lib/data/books.ts` to add new books to the collection:

```typescript
{
  id: 'unique-id',
  title: 'Book Title',
  author: 'Author Name',
  description: 'Book description...',
  price: 19.99,
  coverImage: 'https://example.com/image.jpg',
  genre: 'Fiction',
  rating: 4.5,
  publishedYear: 2024,
  pages: 300
}
```

### Styling Customization

- Edit `tailwind.config.js` for color schemes and animations
- Modify `src/app.css` for global styles and component classes
- Update component files for specific styling changes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Book cover images from Unsplash
- Icons from Heroicons
- Fonts from Google Fonts
- Design inspiration from modern e-commerce sites

---

Made with ❤️ for book lovers everywhere!