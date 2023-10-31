const baseURL = 'https://jsonplaceholder.typicode.com';

const users = '/users';
const posts = '/posts';
const comments = '/comments'

const urls = {
    users,
    posts,
    comments,
    userId: (id) => users + '/' + id,
    userPosts: (id) => users + '/' + id + posts,
    postComments: (id) => posts + '/' + id + comments
};

export { baseURL, urls };