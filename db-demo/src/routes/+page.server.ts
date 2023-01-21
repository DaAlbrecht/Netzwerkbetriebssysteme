import { prisma } from '$lib/server/database';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	//get all todo items from the database and return them as an array sorted by date
	const todos = await prisma.todo.findMany({
		orderBy: {
			created_at: 'desc'
		}
	});

	return { todos };
}) as PageServerLoad;
