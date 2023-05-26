export interface Posts {
    id: number;
    title: string;
    description: string;
    image: string;
    author: string;
    content: string;
    city: string;
}

export const posts: Posts[] = [
    {
        id: 1,
        title: "My journey",
        description: "My description is perfect! :)",
        image: '../../assets/sanfrancisco.jpeg',
        author: '',
        content: '',
        city: 'San Francisco'
    },
    {
        id: 2,
        title: "Your journey",
        description: "Your description is not perfect! :(",
        image: '../../assets/sanfrancisco.jpeg',
        author: '',
        content: '',
        city: 'San Francisco'
    },
    {
        id: 3,
        title: "They're journey",
        description: "They're description.......",
        image: '../../assets/london.jpeg',
        author: '',
        content: '',
        city: 'London'
    },
    {
        id: 4,
        title: "Our journey",
        description: "Our description is the best! ",
        image: '../../assets/london.jpeg',
        author: '',
        content: '',
        city: 'London'
    },
    {
        id: 5,
        title: "Journey",
        description: "Music concert",
        image: '../../assets/gibraltar.jpeg',
        author: '',
        content: '',
        city: 'Gibraltar'
    },
    {
        id: 6,
        title: "Journey2",
        description: "Descriptionsssssss",
        image: '../../assets/gibraltar.jpeg',
        author: '',
        content: '',
        city: 'Gibraltar'
    },
    {
        id: 7,
        title: "THIS IS MY journey!!!!!!!",
        description: "Your description is not perfect! :(",
        image: '../../assets/sanfrancisco.jpeg',
        author: '',
        content: '',
        city: 'San Francisco'
    }
]