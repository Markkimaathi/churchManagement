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
import AnnounceForm from '../pages/Clergy/AnnouncementForm/AnnounceForm.js';
import AllAnnouncementsTable from '../pages/Admin/AllAnnouncements/AllAnnouncementsTable.js';
import AllRequestsTable from '../pages/Member/PrayerRequests/AllRequestsTable.js';
import AllEventsTable from '../pages/Clergy/EventsTable/EventsTable.js';
import Events from '../pages/Member/EventTable/Events.js';



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
    link: '/table-announcements',
    component: AnnouncementTable
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
    title: 'All Announcements',
    icon: FaBell,
    link: '/all-announcements',
    component: AllAnnouncementsTable
  },
  {
    title: 'Events',
    icon: BsChatDotsFill,
    link: '/events',
    component: Events
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
    title: 'Prayers',
    icon: BsChatDotsFill,
    link: '/PrayerTable',
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
    title: 'Announcement Form',
    icon: FaBell,
    link: '/announcements',
    component: AnnounceForm
  },
  {
    title: 'All Events',
    icon: FaBell,
    link: '/all-events',
    component: AllEventsTable,
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
  {
    title: 'Announcements',
    icon: FaBell,
    link: '/MemberTable',
    component: MemberTable
  },
  {
    title: 'Prayers',
    icon: BsChatDotsFill,
    link: '/PrayerTable',
    component: AllRequestsTable
  },
  {
    title: 'Events',
    icon: BsChatDotsFill,
    link: '/events',
    component: Events
  },
];
