import { BsGrid1X2Fill, BsChatDotsFill,BsClipboardData, BsMenuButtonWideFill, BsFillGearFill} from 'react-icons/bs';
import { IoPerson } from 'react-icons/io5';
import { RiCalendar2Fill } from 'react-icons/ri';
import EventsCalendar from './EventsCalendar/EventsCalendar.js';
import { FaUsers } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

// Define sidebar data for the admin role
export const adminSidebarData = [
  {
    title: 'Dashboard', 
    icon: BsGrid1X2Fill,
    link: '/admin' 
  },
  {
    title: 'Admin Profile Management',
    icon: FaUsers,
    link: '/Admin-Profile-Management'
  },
  {
    title: 'Announcements',
    icon: FaBell,
    link: '/announcements'
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
    title: 'Events Calendar',
    icon: RiCalendar2Fill,
    link: '/events-calendar',
    component: EventsCalendar
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
    title: 'Clergy Profile Management',
    icon: IoPerson,
    link: '/clergy-profile-management'
  },
  {
    title: 'Prayer Requests',
    icon: BsChatDotsFill,
    link: '/prayer-requests'
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
  {
    title: 'Announcements',
    icon: FaBell,
    link: '/announcements'
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
    link: '/profile-management'
  },
  {
    title: 'Events Calendar',
    icon: RiCalendar2Fill,
    link: '/events-calendar',
    component: EventsCalendar 
  },
  {
    title: 'Prayer Requests',
    icon: BsChatDotsFill,
    link: '/prayer-requests'
  },
  {
    title: 'About',
    icon: BsMenuButtonWideFill,
    link: '/about'
  },
  {
    title: 'Announcements',
    icon: FaBell,
    link: '/announcements'
  }
];
