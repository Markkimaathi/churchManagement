
import { BsGrid1X2Fill, BsChatDotsFill, BsPersonFill, BsClipboardData, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';

// Define sidebar data for the admin role
export const adminSidebarData = [
  {
    title: 'Dashboard', // Title of the sidebar item
    icon: BsGrid1X2Fill, // Icon component for the sidebar item
    link: '/' // Link for the sidebar item
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
    title: 'About',
    icon: BsMenuButtonWideFill,
    link: '/about'
  }
];
