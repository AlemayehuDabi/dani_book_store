import { lucia } from '$lib/server/lucia';
import prisma from '$lib/server/prisma';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import { Argon2id } from 'oslo/password';

export const actions: Actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();

    console.log('data in signup action');

    const { name, email, password } = Object.fromEntries(data) as Record<
      string,
      string
    >;

    console.log('destructured data in signup action', name, email, password);

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user) {
      return fail(400, {
        state: 'error',
        message: 'User already exists',
      });
    }

    const hashedPassword = await new Argon2id().hash(password);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const session = await lucia.createSession(newUser.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);

    cookies.set(sessionCookie.name, sessionCookie.value, {
      path: '.',
      ...sessionCookie.attributes,
    });

    redirect(302, '/');
  },
};
