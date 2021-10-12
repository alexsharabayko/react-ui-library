import userImg from './assets/user.png';
import activeImg from './assets/active.png';
import gaImg from './assets/ga.png';
import instImg from './assets/inst.png';
import shopImg from './assets/shop.png';
import wooImg from './assets/woo.png';

export interface IUser {
  id: number;
  name: string;
  avatarSrc: string;
}

export interface IIntegration {
  id: number;
  title: string;
  imageSrc: string;
}

export interface ITask {
  id: number;
  name: string;
  completed: boolean;
  cpu: number;
  userId: number;
  integrationId: number;
}

export const USERS: IUser[] = [
  {
    id: 1,
    name: 'Louie Popp',
    avatarSrc: userImg,
  },
  {
    id: 2,
    name: 'Jonas Rafn',
    avatarSrc: userImg,
  },
  {
    id: 3,
    name: 'Fiona Rakipi',
    avatarSrc: userImg,
  },
  {
    id: 4,
    name: 'Martin Navne',
    avatarSrc: userImg,
  },
  {
    id: 5,
    name: 'Kristoffer Degn',
    avatarSrc: userImg,
  },
];

export const INTEGRATIONS: IIntegration[] = [
  {
    id: 1,
    title: 'ActiveCampaign',
    imageSrc: activeImg,
  },
  {
    id: 2,
    title: 'GoogleAnalytics',
    imageSrc: gaImg,
  },
  {
    id: 3,
    title: 'Instagram',
    imageSrc: instImg,
  },
  {
    id: 4,
    title: 'Woocommerce',
    imageSrc: wooImg,
  },
  {
    id: 5,
    title: 'Shopify',
    imageSrc: shopImg,
  },
];

export const TASKS: ITask[] = [
  {
    id: 1,
    name: 'Catalog',
    completed: false,
    cpu: 80,
    userId: 1,
    integrationId: 5,
  },
  {
    id: 2,
    name: 'Graphs',
    completed: true,
    cpu: 50,
    userId: 2,
    integrationId: 4,
  },
  {
    id: 3,
    name: 'Basket',
    completed: false,
    cpu: 90,
    userId: 3,
    integrationId: 3,
  },
  {
    id: 4,
    name: 'Product',
    completed: true,
    cpu: 10,
    userId: 4,
    integrationId: 2,
  },
  {
    id: 5,
    name: 'Menu',
    completed: false,
    cpu: 55,
    userId: 5,
    integrationId: 1,
  },
  {
    id: 6,
    name: 'Audio',
    completed: true,
    cpu: 27,
    userId: 1,
    integrationId: 5,
  },
  {
    id: 7,
    name: 'Video',
    completed: false,
    cpu: 33,
    userId: 2,
    integrationId: 4,
  },
  {
    id: 8,
    name: 'Account',
    completed: true,
    cpu: 74,
    userId: 3,
    integrationId: 3,
  },
  {
    id: 9,
    name: 'Blog',
    completed: false,
    cpu: 5,
    userId: 4,
    integrationId: 2,
  },
  {
    id: 10,
    name: 'PDF',
    completed: true,
    cpu: 8,
    userId: 5,
    integrationId: 1,
  },
];
