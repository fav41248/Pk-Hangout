export type Screen = 'experience' | 'conversations' | 'moments' | 'details' | 'faq' | 'register';

export interface TopicRoom {
  id: string;
  roomNumber: string;
  category: string;
  title: string;
  description: string;
  color: string;
  accentClass: string;
  iconName: string;
  prompts: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'all' | 'hangout-1' | 'hangout-2';
  edition: string;
  imageUrl: string;
  altText: string;
  description: string;
}

export interface ScheduleItem {
  time: string;
  title: string;
  subtitle: string;
  description: string;
  track: 'welcome' | 'talks' | 'food' | 'games' | 'music';
  badge: string;
  locationNote: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface PKThought {
  id: string;
  topic: string;
  quote: string;
  authorLabel: string;
  likes: number;
  timeAgo: string;
}

export interface RegistrationData {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  ageRange: string;
  church: string;
  pastoralContext?: string;
  dietaryNeeds?: string;
  registeredAt: string;
  ticketCode: string;
}
