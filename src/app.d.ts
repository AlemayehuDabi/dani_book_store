import type { lucia } from '$lib/server/lucia';

declare global {
  namespace App {
    // Make TypeScript understand what we put in locals inside hooks.server.ts
    interface Locals {
      user: (typeof lucia)['$infer']['User'] | null;
      session: (typeof lucia)['$infer']['Session'] | null;
    }

    // If you pass the user to the page (+layout.server.ts / +page.server.ts)
    interface PageData {
      user: App.Locals['user'];
    }
  }
}

// Optional: make lucia() callable in server files with correct types
declare module 'lucia' {
  interface Register {
    Lucia: typeof import('$lib/server/lucia').lucia;
  }
}
