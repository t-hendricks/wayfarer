export interface Cities {
    id: number;
    name: string;
    country: string;
    image: string;
    posts: Posts[];
}

export interface Posts {
    id: number;
    title: string;
    description: string;
    image: string;
}

export const cities: Cities[] = [
    {
        id: 1,
        name: 'San Francisco',
        country: 'United States',
        image: '../../assets/sanfrancisco.jpeg',
        posts: [
            {
                id: 1,
                title: "My journey",
                description: "My description is perfect! :)",
                image: '../../assets/sanfrancisco.jpeg'
            },
            {
                id: 2,
                title: "Your journey",
                description: "Your description is not perfect! :(",
                image: '../../assets/sanfrancisco.jpeg'
            }
        ]
    },
    {
        id: 2,
        name: 'London',
        country: 'United Kingdom',
        image: '../../assets/london.jpeg',
        posts: [
            {
                id: 3,
                title: "They're journey",
                description: "They're description.......",
                image: '../../assets/london.jpeg'
            },
            {
                id: 4,
                title: "Our journey",
                description: "Our description is the best! ",
                image: '../../assets/london.jpeg'
            }
        ]
    },
    {
        id: 3,
        name: 'Gibraltar',
        country: 'Spain',
        image: '../../assets/gibraltar.jpeg',
        posts: [
            {
                id: 5,
                title: "Journey",
                description: "Music concert",
                image: '../../assets/gibraltar.jpeg'
            },
            {
                id: 6,
                title: "Journey2",
                description: "Descriptionsssssss",
                image: '../../assets/gibraltar.jpeg'
            }
        ]
    },
]