import type { PageLoad } from './$types';

export const csr = false;

export const load: PageLoad = async ({ fetch }) => {
  const response = await fetch('http://localhost:3000/api/graphql', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: "query { posts { notes tags file {filename url} } }",
    }),
  })
  const result = await response.json()

	return {
    posts: result.data.posts
	};
};
