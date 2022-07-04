import { rerenderEntireTree } from '../render';

let state = {
    posts: [],
    messages: [
        {
            userName: 'Nikita',
            userId: 1,
            message: 'Hello im nikita'
        },
        {
            userName: 'Nikita',
            userId: 1,
            message: 'Hello im nikita'
        }
    ],
    users: [
        { user: 'Nik' },
        { user: 'Nik' },
        { user: 'Nik' },
        { user: 'Nik' },
        { user: 'Nik' },
        { user: 'Nik' }
    ]
};

export let addPost = (text) => {
    let newPost = {
        post: text,
        likeCount: 0
    };
    state.posts.unshift(newPost);
    rerenderEntireTree(state);
};

export default state;