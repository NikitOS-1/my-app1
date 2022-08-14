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
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log("state changed");
    },
    addMessage(text) {
        this._state.messagesPage.messages.message = text;
        this._callSubscriber(this._state);
    },
    addPost(text) {
        let newPost = {
            post: text,
            likeCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._callSubscriber(this._state);
    },
    updateNewPostText(text) {
        this._state.profilePage.newPostText = text;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
};

export default store;
window.store = store;