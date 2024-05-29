import { BsGrid1X2Fill, BsChatDotsFill, BsMenuButtonWideFill,} from 'react-icons/bs';
import { IoPerson } from 'react-icons/io5';
import { RiCalendar2Fill } from 'react-icons/ri';
import EventsCalendar from './EventsCalendar/EventsCalendar.js';
import { FaBell } from "react-icons/fa";
import { FaTable } from "react-icons/fa";
import UserTable from '../pages/Admin/UserTable/UserTable.js';
import AnnouncementTable from '../pages/Admin/AnnouncementTable/AnnouncementTable.js';
import MemberTable from '../pages/Member/MemberTable/MemberTable.js';
import PrayerTable from '../pages/Clergy/PrayerTable/PrayerTable.js';


// Define sidebar data for the admin role
export const adminSidebarData = [
  {
    title: 'Dashboard', 
    icon: BsGrid1X2Fill,
    link: '/' 
  },
  {
    title: 'User Table',
    icon: FaTable,
    link:'/all-users',
    component: UserTable
  },
  {
    title: 'Announcements',
    icon: FaBell,
    link: '/table-announcements'
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
    link: '/prayer-requests',
    component: PrayerTable
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
    title: 'Announcement Table',
    icon: FaBell,
    link: '/announcements',
    component: AnnouncementTable
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
    link: '/MemberTable',
    component: MemberTable
  }
];
