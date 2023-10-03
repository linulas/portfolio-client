import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { PRIVATE_DATA_URL } from '$env/static/private';

export const config = {
	isr: {
		expiration: 60,
	},
};

export const load: PageServerLoad = async ({ fetch }) => {
  if (!PRIVATE_DATA_URL) {
    console.error(`⛔️ [error] PRIVATE_DATA_URL is not set`);
    throw error(500);
  }

	const response = await fetch(PRIVATE_DATA_URL);
	if (!response.ok) {
		console.error(response);
		throw error(response.status, response.statusText);
	}

	const data: ApiResponse = await response.json();
	return data;
};
