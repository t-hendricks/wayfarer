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
        title: "St. Paul's Cathedral",
        description: "Sir Christopher Wren’s 300-year-old architectural masterpiece is a London icon.",
        image: '../../assets/london-topic2.png',
        author: 'London Tourism Office',
        content: 'Inside, rising more than 85m above the floor, is the dome, supported by eight huge columns. It actually consists of three parts: a plastered brick inner dome, a nonstructural lead outer dome visible on the skyline and a brick cone between them holding it all together. The walkway around its base, accessed via 257 steps from a staircase on the western side of the southern transept, is called the Whispering Gallery. A further 119 steps brings you to the exterior Stone Gallery, your first taste of the city vistas, and 152 iron steps more bring you to the Golden Gallery at the very top, with unforgettable views of London.',
        city: 'London'
    },
    {
        id: 2,
        title: "Westminster Abbey",
        description: "A splendid mixture of architectural styles, Westminster Abbey is considered the finest example of Early English Gothic.",
        image: '../../assets/london-topic1.png',
        author: 'Grzegorz Pakula',
        content: 'Much of the Abbeys architecture is from the 13th century, but it was founded much earlier, in AD 960. Henry III began work on the new Abbey building in 1245 but didnt complete it; the Gothic nave was finished under Richard II in 1388. The Lady Chapel was completed after 13 years of construction in 1516. For centuries, the countrys greatest have been interred here, including 17 monarchs from King Henry III (1272) to King George II (1760). Every monarch since William the Conqueror has been crowned here, with the exception of a couple of Eds who were either murdered (Edward V) or abdicated (Edward VIII) before the magic moment. It has also hosted 16 royal weddings, the most recent being that of Prince William and Catherine Middleton in 2011.',
        city: 'London'
    },
    {
        id: 3,
        title: "The Last Colony of Europe",
        description: "Gibraltar is the only remaining colony in Europe. This situation is a vestige of the dynastic conflicts of the Ancien Régime.",
        image: '../../assets/gibraltar-topic2.png',
        author: 'Jose Manuel Albares',
        content: 'Over the years, the United Nations has established a doctrine on the colonial status of Gibraltar. According to this doctrine, Gibraltar is today a non-self-governing territory pending decolonization. As such, it is not part of the territory of the United Kingdom, which is its administering power and is responsible for its external relations. The existence of a colonial situation in Gibraltar violates the territorial integrity of Spain and must be brought to an end through bilateral negotiations between the United Kingdom and Spain. Negotiations on sovereignty are the exclusive responsibility of the Governments of Spain and of the United Kingdom.​',
        city: 'Gibraltar'
    },
    {
        id: 4,
        title: "The History of Gibraltar",
        description: "The position of Gibraltar guarding the entrance to the Mediterranean is",
        image: '../../assets/gibraltar-topic1.png',
        author: 'Ben Johnson',
        content: 'The six square kilometres of the Rock of Gibraltar are steeped in history, from the very beginning around 100,000 years ago when primitive humans and Neanderthals fished the shoreline and inhabited the limestone caves, to visiting Phoenician and later Roman seafarers. It was the Moors of Tarek ibn Ziyad however that first settled the Rock in 711AD, and since then, this much-prized site and its people have witnessed many sieges and battles over the centuries. The position of Gibraltar guarding the entrance to the Mediterranean is unrivalled, and has for many years been fought over by Spain, France and Britain, all claiming possession. Gibraltar was captured by the British Fleet in 1704 during the war of the Spanish Succession. On 4th August 1704, an Anglo-Dutch fleet under the command of Admiral George Rooke took Gibraltar from the Spanish. From dawn on that day and for the next five hours, some 15,000 canons were fired from the fleet into the city. The invaders, led by the English majority, landed the same morning and not surprisingly encountered little opposition.',
        city: 'Gibraltar'
    },
      {
        id: 5,
        title: "How the 1906 Earthquake Changed San Francisco",
        description: "The nearly 400,000 men, women and children who called San Francisco home",
        image: '../../assets/1906.png',
        author: 'Lauren Oster',
        content: 'Modern-day Californians are well aware of the fact that they’ve struck a delicate bargain with the ground beneath their feet. Scientists now know that the tectonic plates grinding together along the state’s fault lines are so active that, 16 million years from now, Los Angeles will be north of the Bay Area. The nearly 400,000 men, women and children who called San Francisco home in 1906 had no such knowledge, of course, and when a massive earthquake struck in the early hours of April 18th, their world fell apart in an instant.',
        city: 'San Francisco'
    },
    {
        id: 6,
        title: "11 Things Not to Miss in San Francisco",
        description: "The City by the Bay, packs a lot of fun",
        image: '../../assets/not-to-miss.png',
        author: 'Christine Williams and Jules Hatfield',
        content: 'San Francisco is quickly becoming one of the most visited cities in the U.S. and it’s easy to see why. "The City by the Bay" packs a lot of fun into just a 7 mile-by-7 mile area. With an eclectic mix of neighborhoods, there’s truly something for everyone in San Francisco. From the rugged coastline and the redwood tree-filled parks, to the busy streets of the city itself, there’s plenty to do. As a Bay Area native, I’ve spent many a foggy day playing tour guide in San Francisco for visiting friends and family. If you’re nervous that San Francisco may be a bit over your budget, fear not! We’re hosting a new show on Travel Channel called Shoestring Getaways that will show you how to get the most out of your travels on a shoestring budget, in San Francisco.',
        city: 'San Francisco'
    }
]