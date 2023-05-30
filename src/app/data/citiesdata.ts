import { Posts, posts } from "./postsdata";

export interface Cities {
    id: number;
    name: string;
    country: string;
    image: string;
    posts: Posts[];
    heroImage: string[];
}

export const cities: Cities[] = [
    {
        id: 1,
        name: 'San Francisco',
        country: 'United States',
        image: '../../assets/sanfrancisco.jpeg',
        posts: posts.reverse().filter(post => post.city === 'San Francisco'),
        heroImage: ['../../assets/sanfrancisco.jpg', '../../assets/sanfrancisco2.jpg', '../../assets/sanfrancisco3.jpg']
    },
    {
        id: 2,
        name: 'London',
        country: 'United Kingdom',
        image: '../../assets/london.jpeg',
        posts: posts.reverse().filter(post => post.city === 'London'),
        heroImage: ['../../assets/london.jpg', '../../assets/london2.jpg', '../../assets/london3.jpg']
    },
    {
        id: 3,
        name: 'Gibraltar',
        country: 'Spain',
        image: '../../assets/gibraltar.jpeg',
        posts: posts.reverse().filter(post => post.city === 'Gibraltar'),
        heroImage: ['../../assets/gilbratar.jpg', '../../assets/gilbratar2.jpg', '../../assets/gilbratar3.jpg']
    },
]