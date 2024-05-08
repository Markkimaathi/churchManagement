import { BsGrid1X2Fill, BsChatDotsFill, BsPersonFill, BsClipboardData, BsMenuButtonWideFill, BsFillGearFill,} from 'react-icons/bs';
import { IoPerson } from 'react-icons/io5';
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
  }
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
    link: '/Profile'
  },
  {
    title: 'About',
    icon: BsMenuButtonWideFill,
    link: '/about'
  },
];




