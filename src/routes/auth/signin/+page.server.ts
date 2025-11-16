import prisma from '$lib/server/prisma';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import { Argon2id } from 'oslo/password';
import { lucia } from '$lib/server/lucia';

export const actions: Actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();

    console.log('data from sign-in', data);

    const { email, password } = Object.fromEntries(data) as Record<
      string,
      string
    >;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return fail(400, { error: 'Invalid Credential' });
    }

    const validPassword = await new Argon2id().verify(user.password, password);

    if (!validPassword) {
      return fail(400, { error: 'Invalid Credential' });
    }

    const session = await lucia.createSession(user.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies.set(sessionCookie.name, sessionCookie.value, {
      path: '.',
      ...sessionCookie.attributes,
    });

    redirect(302, '/');
  },
};
