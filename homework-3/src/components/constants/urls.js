const baseURL = 'https://jsonplaceholder.typicode.com/';

const users = '/users';
const comments = '/comments';
const cars = '/cars';

const urls = {
    users,
    comments,
    carsUrl: {
        baseURL: 'http://owu.linkpc.net/carsAPI/v1',
        cars,
        byId: (id) => `${cars}/${id}`
    }
};

export { baseURL, urls };