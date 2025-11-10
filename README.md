# 📚 Dani Book Store

A **modern, full-stack book store platform** built with **SvelteKit**, **TailwindCSS**, **Prisma**, **Neon**, and **Better Auth**.  
Dani Book Store allows users to explore, favorite, and purchase books, while providing an intuitive **admin dashboard** for managing content — all within a clean, responsive design.

---

## ✨ Features

### 👤 User Features
- **Modern UI/UX** – Sleek design with smooth animations and full responsiveness  
- **Book Collection** – Browse curated books with covers, authors, prices, and ratings  
- **Search & Filter** – Real-time search and genre filtering  
- **Favorites** – Save and manage your favorite books  
- **Cart & Checkout** – Add books to cart and complete payments securely  
- **Authentication** – Sign up, log in, and manage your profile via Better Auth  
- **Accessibility** – Optimized for screen readers and keyboard navigation  

### 🛠️ Admin Features
- **Admin Dashboard** – Role-protected panel for managing books and orders  
- **Book Management** – Create, edit, delete, and organize books  
- **Order Management** – Track and manage user orders  
- **User Roles** – Manage user permissions and roles  
- **Analytics Overview** – Insights into top-selling books and performance metrics  

---

## 🧩 Tech Stack

| Category | Technology |
|-----------|-------------|
| **Framework** | [SvelteKit](https://kit.svelte.dev) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com) |
| **ORM** | [Prisma](https://www.prisma.io) |
| **Database** | [Neon](https://neon.tech) (PostgreSQL) |
| **Authentication** | [Better Auth](https://better-auth.com) |
| **Deployment** | [Vercel](https://vercel.com) |
| **Package Manager** | pnpm / npm |

---

## 🗂️ Folder Structure

<pre>
  dani_book_store/
│
├── src/
│ ├── lib/
│ │ ├── prisma.ts # Prisma client
│ │ ├── auth.ts # Better Auth config
│ │ ├── utils.ts # Reusable helpers
│ │ └── types.ts # Shared types/interfaces
│ │
│ ├── routes/
│ │ ├── (public)/ # User-facing routes
│ │ │ ├── +page.svelte
│ │ │ ├── books/
│ │ │ ├── favorites/
│ │ │ ├── cart/
│ │ │ └── checkout/
│ │ │
│ │ ├── (auth)/ # Login / Register / Profile
│ │ │ ├── login/
│ │ │ ├── register/
│ │ │ └── profile/
│ │ │
│ │ └── (admin)/ # Admin dashboard (role-based access)
│ │ ├── +layout.server.ts
│ │ ├── +layout.svelte
│ │ ├── +page.svelte
│ │ ├── books/
│ │ ├── orders/
│ │ ├── users/
│ │ └── analytics/
│ │
│ ├── hooks.server.ts # Session & role handling
│ └── app.d.ts
│
├── prisma/
│ ├── schema.prisma # DB schema
│ └── migrations/
│
├── static/ # Assets (images, icons, etc.)
├── .env # Environment variables
├── package.json
├── svelte.config.js
└── tailwind.config.js
</pre>


---

## 🧠 Role-Based Access Control

Using **Better Auth** and SvelteKit route protection:

- Users can browse, search, and buy books.

- Admins have access to `/admin` routes for managing books and orders.

Example protection (`src/routes/(admin)/+layout.server.ts`):

```ts
import { redirect } from "@sveltejs/kit";

export const load = async ({ locals }) => {
  const user = locals.user;
  if (!user || user.role !== "admin") {
    throw redirect(302, "/login");
  }
  return { user };
};
```

⚙️ Getting Started

1️⃣ Clone the repo

git clone https://github.com/your-username/dani_book_store.git

cd dani_book_store

2️⃣ Install dependencies

pnpm install
# or
npm install

3️⃣ Set up environment variables

Create a .env file in the root:

DATABASE_URL="your_neon_postgres_connection_string"

BETTER_AUTH_SECRET="your_better_auth_secret"

4️⃣ Set up Prisma

npx prisma migrate dev

npx prisma generate

5️⃣ Run the development server

npm run dev

Then open 👉 http://localhost:5173

💳 Future Enhancements

Here are a few features planned for future versions:

📦 Wishlist & Gift options

💬 Book reviews and comments

🌙 Dark mode

🧾 Invoice and order tracking system

🪙 Loyalty points for active readers

📱 Mobile app (Expo + Supabase integration)

🧑‍💻 Author

Alemayehu Dabi

Full-stack developer & system designer passionate about modern web applications.

📧 alemayehudabi606@gmail.com

🌐 https://www.linkedin.com/in/Alemayehu-dabi-79b5212a1

🪪 License

This project is licensed under the MIT License — feel free to use and modify for personal or commercial use.

