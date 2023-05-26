interface Cities {
    id: number;
    name: string;
    country: string;
    image: string;
}

export const cities: Cities[] = [
    {
        id: 1,
        name: 'San Francisco',
        country: 'United States',
        image: '../../assets/sanfrancisco.jpeg'
    },
    {
        id: 2,
        name: 'London',
        country: 'United Kingdom',
        image: '../../assets/london.jpeg'
    },
    {
        id: 3,
        name: 'Gibraltar',
        country: 'Spain',
        image: '../../assets/gibraltar.jpeg'
    },
]