import { BsGrid1X2Fill, BsChatDotsFill, BsPersonFill, BsClipboardData, BsMenuButtonWideFill, BsFillGearFill} from 'react-icons/bs';
import { IoPerson } from 'react-icons/io5';
import { RiCalendar2Fill } from 'react-icons/ri';
import EventsCalendar from './EventsCalendar.js';

// Define sidebar data for the admin role
export const adminSidebarData = [
  {
    title: 'Dashboard', 
    icon: BsGrid1X2Fill,
    link: '/' 
  },
  {
    title: 'Prayer Requests',
    icon: BsChatDotsFill,
    link: '/pastoral-care'
  },
  {
    title: 'Leadership',
    icon: BsPersonFill,
    link: '/leadership'
  },
  {
    title: 'Administration',
    icon: BsClipboardData,
    link: '/administration'
  },
  {
    title: 'About',
    icon: BsMenuButtonWideFill,
    link: '/about'
  },
  {
    title: 'Settings',
    icon: BsFillGearFill,
    link: '/settings'
  }, 
  {
    title: 'Events Calendar', 
    icon: RiCalendar2Fill,
    link: '/events-calendar',
    component: EventsCalendar
  }
];

// Define sidebar data for the clergy role
export const clergySidebarData = [
  {
    title: 'Dashboard',
    icon: BsGrid1X2Fill,
    link: '/'
  },
  {
    title: 'Prayer Requests',
    icon: BsChatDotsFill,
    link: '/pastoral-care'
  },
  {
    title: 'About',
    icon: BsMenuButtonWideFill,
    link: '/about'
  },
  {
    title: 'Events Calendar',
    icon: RiCalendar2Fill,
    link: '/events-calendar',
    component: EventsCalendar 
  },
];

// Define sidebar data for the member role
export const memberSidebarData = [
  {
    title: 'Dashboard',
    icon: BsGrid1X2Fill,
    link: '/'
  },
  {
    title: 'Profile Management',
    icon: IoPerson,
    link: '/profile-management'
  },
  {
    title: 'Events Calendar',
    icon: RiCalendar2Fill,
    link: '/events-calendar',
    component: EventsCalendar 
  },
  {
    title: 'About',
    icon: BsMenuButtonWideFill,
    link: '/about'
  },
];
