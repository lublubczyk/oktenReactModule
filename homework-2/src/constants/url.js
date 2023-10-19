const baseURL = 'https://jsonplaceholder.typicode.com';
const spaceBaseURL = 'https://api.spacexdata.com';

const posts = '/posts';
const version = '/v3';
const launches = '/launches/';

const urls = {
    users: { posts, byId: (id) => `${posts}/${id}` },
    space: { version, launches }
};

export { baseURL, urls, spaceBaseURL };