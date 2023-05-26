import { Posts, posts } from "./postsdata";

export interface Cities {
    id: number;
    name: string;
    country: string;
    image: string;
    posts: Posts[];
}

export const cities: Cities[] = [
    {
        id: 1,
        name: 'San Francisco',
        country: 'United States',
        image: '../../assets/sanfrancisco.jpeg',
        posts: [
            posts[0],
            posts[1]
        ]
    },
    {
        id: 2,
        name: 'London',
        country: 'United Kingdom',
        image: '../../assets/london.jpeg',
        posts: [
            posts[2],
            posts[3]
        ]
    },
    {
        id: 3,
        name: 'Gibraltar',
        country: 'Spain',
        image: '../../assets/gibraltar.jpeg',
        posts: [
            posts[4],
            posts[5]
        ]
    },
]