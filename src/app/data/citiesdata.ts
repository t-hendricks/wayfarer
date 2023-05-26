import { Posts, posts } from "./postsdata";

export interface Cities {
    id: number;
    name: string;
    country: string;
    image: string;
    posts: Posts[];
}

function addPosts(cityName: string): any {
    let cityPosts: Posts[] = [];
    for(let i = posts.length - 1; i >= 0; i--) {
        if (posts[i].city === cityName) {
            cityPosts.push(posts[i]);
        }
    }

    return cityPosts;
}

export const cities: Cities[] = [
    {
        id: 1,
        name: 'San Francisco',
        country: 'United States',
        image: '../../assets/sanfrancisco.jpeg',
        posts: addPosts('San Francisco')
    },
    {
        id: 2,
        name: 'London',
        country: 'United Kingdom',
        image: '../../assets/london.jpeg',
        posts: addPosts('London')
    },
    {
        id: 3,
        name: 'Gibraltar',
        country: 'Spain',
        image: '../../assets/gibraltar.jpeg',
        posts: addPosts('Gibraltar')
    },
]