let store = {
    _state: {
        profilePage: {
            posts: [],
            likeCount: 0,
            newPostText: ""
        },
        messagesPage: {
            messages:
            {
                userName: 'Nikita',
                userId: 1,
                message: "ssss"
            }

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
    },
    _callSubscriber() {
        console.log("state changed");
    },
    getState() {
        return this._state;
    },
    addMessage(text) {
        this._state.messagesPage.messages.message = text;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                post: text,
                likeCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = text;
            this._callSubscriber(this._state);
        }
    }
};

export default store;
window.store = store;