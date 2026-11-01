import { TopicRoom, GalleryItem, ScheduleItem, FaqItem, PKThought } from '../types';

export const REGISTRATION_FORM_URL = "https://luma.com/ed9hzn5a?tk=omBWN8";

export const EVENT_ASSETS = {
  logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzY5v5fn3nB2oPyA3PixROr5d3KqXOTVroGf7ZU61HegQ1ZusMmAbwgi0vhmTLjGlFPL-XC3-z347wc6FLQBUjRjZjhY5QJFIFRJXRj3rcsGcJ_OgW2NS0IVy7-GfehYVkYCES8OH9XEwzTW3jiXLy0XdHIt6ldaoT855o21zl2BbbdevGZoe9hP08q8Te4YVEBSx5hMVxlEjJhLYJ64QppVukwjb_kKEoO0t0e7BlJrofXHDGft0P',
  heroMain: '/assets/aistudio/img_7960.jpg',
  storyCircle: '/assets/aistudio/img_8111.jpg',
  gamesShowcase: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAh6KLUv-2mtNkQw-rJvggJSdPG_xJtyfKdpPInxwYN67vYkunhqRA4D_F8FJO73Va23OdAVbAaBYFilnsQumitAUpVYgAxjBZglpRYFtNOFbcGKW-hhIW7-cRGt2HEjRAxsCTJgc0TnfTjX_tllbRKY06ryGO1sn4u4qxWuCzvEqT677tri6uzbv5x5nPsv2_wkFe5dvJcC3hHHVtb0q0S9OAWBfHywYl9LoNHD4xKSZbds2H2VoU1',
  galleryLaughs: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhvqJgjQ0VgJp5dVTNJXlWCKayR4ImwMKWWsgMO4GgHkxAINKR2YB1ZN8Bq7NaMoQmVEVu9jIoknl8iy_bTg6S8p5EqGUQEO--RCNHgBC95YXS1EEs2eeOe1sFB7HPOavY28E_T96K-EjHtgm9O9k2bFilmq1DeK0mGs_HVRuLdeDBwHgpJZypYj1MXkVyAln-Oq5Pm0REvoQt2hGwhDlD_dyalc3h4QdDBntgvW6Wsr0gBYLwmGD1',
  galleryCircles: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnXXnyPFhFLcs6MQunt66SVkr8hkpaaIcdtAAxhcYTh93lDdcixrC6DduItjFV_T1q6bvlLqIAwU5r_PYW7xWH61_NZHs29HDwQJK9XwCIaGa_lPZ-PCHG2JQdV4ioWmjJw_H3s9BIKZU2uniI1_JSNuf59fcVAEdSXmzg9U-A8L6lY1UpbNGLObg9chv2H7HxK03N5ewExJ4WSj5Nsv4InNKKKlXM8wHkyRzOfzp3mudZPZdOEZkI',
  galleryGames: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxzzlkqGC9JamAuLjBOjr0dTsHo91nq0e-gJsuZVFd_kGStigKn-HW0Scbbpf0C0fOE1kPZu0kt4a0v7lIDajrZhji9Wikk6VD178gBHqPASXN6hJYUrLgpiOkgZRtmktXz_kBJvSe8D1UrtXxhIkCkUA57_8MrlcIwQqH6YAO-o-W4hK9bA8nb-RikWtQkI7L_XBWU5BQ75oAXJ0qU8Fcfk-8Q5Yfft6BydKBoRmGFpNwIuLIAzJx',
};

export const TOPIC_ROOMS: TopicRoom[] = [
  {
    id: 'identity',
    roomNumber: 'Room 01',
    category: 'IDENTITY & SELF',
    title: 'ME, BEYOND THE TITLE',
    description: "Discovering who you are beyond being introduced as somebody's child. Unpacking personal passions, individual autonomy, and finding your distinct voice.",
    color: '#ffb4a4',
    accentClass: 'text-primary bg-primary-container/15 border-primary-container/40',
    iconName: 'badge',
    prompts: [
      'Who are you when no one from church is looking?',
      'How do you separate your parents’ calling from your personal passions?',
      'Navigating the pressure to be a "model child" everywhere you go.'
    ]
  },
  {
    id: 'relationships',
    roomNumber: 'Room 02',
    category: 'SOCIAL FABRIC',
    title: 'LIFE, FRIENDSHIPS & RELATIONSHIPS',
    description: 'Friendships, dating, social circles, setting healthy emotional boundaries, and the vulnerability of romantic relationships under public scrutiny.',
    color: '#ffb95f',
    accentClass: 'text-secondary bg-secondary/15 border-secondary/40',
    iconName: 'favorite',
    prompts: [
      'Dating while pastoral: when the congregation wants updates before you even make it official.',
      'Building genuine friends who don’t treat your living room like church reception.',
      'Setting boundaries with congregation members who text you about your parents.'
    ]
  },
  {
    id: 'expectations',
    roomNumber: 'Room 03',
    category: 'HOME LIFE & REALITY',
    title: 'EXPECTATIONS VS REALITY',
    description: 'The pressures, responsibilities, unspoken family sacrifices, and the hilarious untold stories that only pastoral kids secretly laugh about.',
    color: '#cebdff',
    accentClass: 'text-tertiary bg-tertiary/15 border-tertiary/40',
    iconName: 'balance',
    prompts: [
      'Sunday morning car rides: the chaotic rush behind the calm pulpit smiles.',
      'When your family vacation gets cancelled because a member needed emergency counseling.',
      'The silent sacrifices of growing up in the mission house.'
    ]
  },
  {
    id: 'career',
    roomNumber: 'Room 04',
    category: 'CALLING & CAREER',
    title: 'DREAMS, PURPOSE & THE FUTURE',
    description: 'Your career trajectory, tech, arts, business goals, and defining personal achievement when expectations might nudge you strictly into church music or youth ministry.',
    color: '#ffb4a4',
    accentClass: 'text-primary bg-primary/15 border-primary/40',
    iconName: 'rocket_launch',
    prompts: [
      'Pursuing careers in secular creative industries, tech, or entrepreneurship without guilt.',
      'Explaining to church folks that your calling might be software engineering, not the altar.',
      'Financial realities: breaking generational money taboos in ministry homes.'
    ]
  },
  {
    id: 'faith',
    roomNumber: 'Room 05',
    category: 'HONEST FAITH',
    title: 'FAITH & THE QUESTIONS WE ASK',
    description: 'Honest dialog about personal convictions, tackling difficult theological questions, wrestling with church hurt, and growing at your own pace without shame.',
    color: '#ee9800',
    accentClass: 'text-secondary bg-secondary-container/15 border-secondary-container/40',
    iconName: 'psychology_alt',
    prompts: [
      'Is my faith really mine, or is it just the default family business?',
      'Dealing with church hurt when the offender was someone your parents mentored.',
      'Finding God afresh without the religious performance.'
    ]
  },
  {
    id: 'lifestyle',
    roomNumber: 'Room 06',
    category: 'AUTHENTIC LIVING',
    title: 'LIFE OUTSIDE THE CHURCH WALLS',
    description: 'The everyday experiences, music, sports, hobbies, pop culture, life hacks, and the multifaceted dimensions that make up your true authentic life.',
    color: '#dfe2f1',
    accentClass: 'text-on-surface bg-surface-bright border-surface-bright/40',
    iconName: 'travel_explore',
    prompts: [
      'Enjoying secular music, arts, and fashion without second-guessing yourself.',
      'Mental health & therapy: why prayer and professional therapy belong together.',
      'Finding your joy in Boxing Day and celebrating life to the fullest.'
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'moment-1',
    title: 'Hangout 2.0 Group Snapshot',
    subtitle: 'Outdoor Grounds · Ibadan',
    category: 'hangout-2',
    edition: 'Pk’s Hangout 2.0',
    imageUrl: '/assets/aistudio/img_8253.jpg',
    altText: 'Group photo of Pastors Kids gathered outdoors in Ibadan during Hangout 2.0.',
    description: 'A wonderful moment capturing attendees of Pastors Kids Hangout 2.0.'
  },
  {
    id: 'moment-2',
    title: 'Hangout 2.0 Outdoor Fellowship',
    subtitle: 'Garden Grounds · Ibadan',
    category: 'hangout-2',
    edition: 'Pk’s Hangout 2.0',
    imageUrl: '/assets/aistudio/img_7875.jpg',
    altText: 'Pastors Kids gathered in outdoor seating during Hangout 2.0 in Ibadan.',
    description: 'Enjoying the open-air fellowship and warm conversations at Hangout 2.0.'
  },
  {
    id: 'moment-3',
    title: 'Registration & Welcome Desk',
    subtitle: 'Baptist House Grounds · Ibadan',
    category: 'hangout-2',
    edition: 'Pk’s Hangout 2.0',
    imageUrl: '/assets/aistudio/IMG_7738_e1af0075.jpg',
    altText: 'Welcome check-in and laptop registration setup at Baptist House grounds during Hangout 2.0.',
    description: 'Attendees checking in and getting settled under the mango trees at Baptist House, Ibadan.'
  },
  {
    id: 'moment-4',
    title: 'Laughter & Heart-to-Heart Chats',
    subtitle: 'Garden Lawn · Ibadan',
    category: 'hangout-2',
    edition: 'Pk’s Hangout 2.0',
    imageUrl: '/assets/aistudio/IMG_7771_16c77313.jpg',
    altText: 'Friends sharing stories and laughing during Hangout 2.0 outdoor session.',
    description: 'Candid moments of joy, laughter, and building lifelong bonds under the sun.'
  },
  {
    id: 'moment-5',
    title: 'Warm Smiles & Deep Connections',
    subtitle: 'Open Seating · Ibadan',
    category: 'hangout-2',
    edition: 'Pk’s Hangout 2.0',
    imageUrl: '/assets/aistudio/IMG_7775_f21fb70d.jpg',
    altText: 'Attendees engaging in warm conversation during Hangout 2.0.',
    description: 'Creating space for authentic conversations and genuine peer fellowship.'
  },
  {
    id: 'moment-6',
    title: 'Under the Mango Trees Circle',
    subtitle: 'Amphitheater Grounds · Ibadan',
    category: 'hangout-2',
    edition: 'Pk’s Hangout 2.0',
    imageUrl: '/assets/aistudio/IMG_7806_98da0133.jpg',
    altText: 'Large gathering of Pastors Kids seated under the mango trees during Hangout 2.0.',
    description: 'The entire community gathered together for keynote discussions and shared fellowship.'
  },
  {
    id: 'moment-7',
    title: 'Spontaneous Sharing & Stories',
    subtitle: 'Activity Hub · Ibadan',
    category: 'hangout-2',
    edition: 'Pk’s Hangout 2.0',
    imageUrl: '/assets/aistudio/IMG_7867_c9492eba.jpg',
    altText: 'Speakers and attendees sharing moments and thoughts during Hangout 2.0.',
    description: 'Open mic and interactive moments where PKs share personal experiences and insights.'
  },
  {
    id: 'moment-8',
    title: 'Vibrant Energy & Atmosphere',
    subtitle: 'Picnic Lawn · Ibadan',
    category: 'hangout-2',
    edition: 'Pk’s Hangout 2.0',
    imageUrl: '/assets/aistudio/IMG_7870_5c68328a.jpg',
    altText: 'Vibrant energy and joyful interaction among attendees at Hangout 2.0.',
    description: 'Celebrating community, faith, and joy in a relaxed, zero-pretense environment.'
  }
];

export const SCHEDULE_ITEMS: ScheduleItem[] = [
  {
    time: '10:00 AM – 10:45 AM',
    title: 'Arrival, Check-in & Icebreaker Jams',
    subtitle: 'Welcome Patio & Garden Terrace',
    description: 'Grab your personalized badge, grab hot chops and iced drinks, and pick your table. Acoustic soul tunes playing softly in the background.',
    track: 'welcome',
    badge: 'Welcome Track',
    locationNote: 'Terrace & Welcome Deck'
  },
  {
    time: '10:45 AM – 12:15 PM',
    title: 'Unpacking the Tag: "Me, Beyond the Title"',
    subtitle: 'Main Pavilion Circle',
    description: 'Opening interactive keynote & panel session with 3 PKs sharing vulnerable milestones. Open floor conversation where zero topics are taboo.',
    track: 'talks',
    badge: 'Keynote & Circle',
    locationNote: 'Main Pavilion Circle'
  },
  {
    time: '12:15 PM – 01:45 PM',
    title: 'The Great Feast: BBQ, Jollof & Sweet Chops',
    subtitle: 'Food Court & Picnic Grounds',
    description: 'Fire-grilled chicken, Ibadan party jollof, amala bar, mocktails, and plenty of room to mingle and sit with people from other churches.',
    track: 'food',
    badge: 'Feast & Fellowship',
    locationNote: 'Garden Food Lounge'
  },
  {
    time: '01:45 PM – 03:30 PM',
    title: 'Board Games Smackdown & Breakout Rooms',
    subtitle: 'Game Pavilions & Conversation Pods',
    description: 'Monopoly, Chess, Scrabble, FIFA console, charades, plus designated quiet conversation rooms for those who want deeper one-on-one talks.',
    track: 'games',
    badge: 'Games & Tournaments',
    locationNote: 'Activity Hub & Pods'
  },
  {
    time: '03:30 PM – 05:00 PM',
    title: 'The Raw Panel: Questions We Never Ask on Sunday',
    subtitle: 'Open Amphitheater',
    description: 'Anonymous question jar opened live. Candid discussion on dating, financial boundaries, church hurt, career pivots, and authentic faith.',
    track: 'talks',
    badge: 'Unfiltered Panel',
    locationNote: 'Open Amphitheater'
  },
  {
    time: '05:00 PM – 06:30 PM',
    title: 'Acoustic Jam, Fireside Benediction & Send-off',
    subtitle: 'Evening Lantern Circle',
    description: 'Unplugged guitar jam, spontaneous storytelling, closing prayer of affirmation for our futures, and photo ops as twilight settles.',
    track: 'music',
    badge: 'Sunset Jam & Close',
    locationNote: 'Lantern Lawn'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: "Who is the Pastors' Kids Hangout for?",
    answer: "This gathering is exclusively designed for children of pastors and ministers within the Ibadan Baptist Conference (and affiliated fellow PK friends)",
    category: 'Eligibility'
  },
  {
    id: 'faq-2',
    question: 'When is the event taking place?',
    answer: 'The hangout takes place on Boxing Day — Saturday, December 26, 2026. The official gathering starts at 09:00 AM (GMT+1)',
    category: 'Date & Time'
  },
  {
    id: 'faq-3',
    question: 'Where will it take place?',
    answer: 'The event takes place at Baptist House, Ibadan, Oyo State, Nigeria on December 26, 2026.',
    category: 'Location'
  },
  {
    id: 'faq-4',
    question: 'What should I expect? Will parents or church elders be there?',
    answer: 'No senior pastoral supervision or preaching. This is strictly a peer-level hangout. Expect great food, board games, breakout circle chats, storytelling, acoustic music, laughter, and an absolute zero-pretense zone. Come in casual, comfortable attire.',
    category: 'Format & Atmosphere'
  },
  {
    id: 'faq-5',
    question: 'How do I register, and is there a fee?',
    answer: 'Simply fill out the registration form below. Registration is 100% free.',
    category: 'Cost & Registration'
  },
  {
    id: 'faq-6',
    question: 'Can I invite my sibling or another PK friend from another city?',
    answer: 'Yes! PKs traveling back to Ibadan for the Christmas holidays or visiting siblings are warmly welcome. Just have them registered.',
    category: 'Guests'
  }
];

export const INITIAL_THOUGHTS: PKThought[] = [
  {
    id: 'thought-1',
    topic: 'IDENTITY & SELF',
    quote: "For years I thought my personality was just whatever the church congregation approved of. Learning who I am on a Tuesday morning was the beginning of my freedom.",
    authorLabel: 'Daughter of Baptist Minister, Bodija',
    likes: 34,
    timeAgo: '2 days ago'
  },
  {
    id: 'thought-2',
    topic: 'EXPECTATIONS VS REALITY',
    quote: "People think being a PK means you never doubt God. In truth, watching the behind-the-scenes politics sometimes made doubting harder to talk about. Having a space where I don’t have to pretend is everything.",
    authorLabel: 'Pastor’s Son, Oritamefa',
    likes: 52,
    timeAgo: '3 days ago'
  },
  {
    id: 'thought-3',
    topic: 'CALLING & CAREER',
    quote: "When I chose UI/UX design over full-time ministry, my church thought I was backsliding. Now I build digital tools for nonprofits worldwide. Your calling is where your passion meets the world's deep need.",
    authorLabel: 'Product Designer & PK, Mokola',
    likes: 41,
    timeAgo: '1 week ago'
  },
  {
    id: 'thought-4',
    topic: 'SOCIAL FABRIC',
    quote: "The hardest part of dating was wondering if someone liked me for me, or if they wanted the clout of dating the pastor's child. Genuine connection is rare and priceless.",
    authorLabel: 'Pharmacist & PK, Ring Road',
    likes: 29,
    timeAgo: '1 week ago'
  }
];
