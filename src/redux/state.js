import { rerenderEntireTree } from '../render';

let state = {
    profilePage: {
        posts: [],
        likeCount: 0,
        newPostText: "Nikita"
    },
    messagesPage: {
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
        ]
    },
    navbarPage: {
        users: [
            { user: 'Nik' },
            { user: 'Nik' },
            { user: 'Nik' },
            { user: 'Nik' },
            { user: 'Nik' },
            { user: 'Nik' }
        ]
    },
};

export let addPost = (text) => {
    let newPost = {
        post: text,
        likeCount: 0
    };
    state.profilePage.posts.unshift(newPost);
    rerenderEntireTree(state);
};

export default state;