// import { redirect } from '@sveltejs/kit';
// import type { LayoutServerLoad } from './$types';

// export const load: LayoutServerLoad = ({ locals }) => {
//   const user = locals.user;

//   if (!user) throw redirect(302, '/signin');
//   if (user.role !== 'ADMIN') throw redirect(302, '/');

//   return { user };
// };
