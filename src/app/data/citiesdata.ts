import { Posts, posts } from "./postsdata";

function addPosts(cityName: string): any {
    let cityPosts: Posts[] = [];
    for (let i = posts.length - 1; i >= 0; i--) {
        if (posts[i].city === cityName) {
            cityPosts.push(posts[i]);
        }
    }

    return cityPosts;
}

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
        posts: addPosts('San Francisco'),
        heroImage: ['../../assets/sanfrancisco.jpg', '../../assets/sanfrancisco2.jpg', '../../assets/sanfrancisco3.jpg']
    },
    {
        id: 2,
        name: 'London',
        country: 'United Kingdom',
        image: '../../assets/london.jpeg',
        posts: addPosts('London'),
        heroImage: ['../../assets/london.jpg', '../../assets/london2.jpg', '../../assets/london3.jpg']
    },
    {
        id: 3,
        name: 'Gibraltar',
        country: 'Spain',
        image: '../../assets/gibraltar.jpeg',
        posts: addPosts('Gibraltar'),
        heroImage: ['../../assets/gilbratar.jpg', '../../assets/gilbratar2.jpg', '../../assets/gilbratar3.jpg']
    },
]