
export interface User {
    id: number;
    name: string;
    surname: string;
    username: string;
    email: string;
    password: string;
}

export interface UserProfile {
    user: User;
    id: number;
    profilePicture?: string;
    postAmount: number;
    followerAmount: number;
    followingAmount: number;
    description?: string;
    profilePosts: Post[];
    profileInvasivePosts: Post[];
}

export interface Post {
    id: number;
    userWhoPosted: User;
    userWhoGotTargeted: User;
    image: string;
    description: string;
    likesAmount: number;
    commentsAmount: number;
    likes: UserProfile[];
    comments: Comment[];
}

export interface HomeFeed {
    listOfPosts: Post[];
}

export interface Comment {
    id: number;
    userWhoCommented: User;
    post: Post;
    comment: string;
    likes: number;
    reply: Comment[];
}