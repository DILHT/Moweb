import { MdStarRate } from 'react-icons/md';
import { MdCompassCalibration } from 'react-icons/md';
import { MdFormatListBulleted } from 'react-icons/md';

export const menu = [
    { to: '/',          label: 'Discover',   icon: <MdCompassCalibration  className='space-x-1'/> },
    { to: '/top-rated', label: 'Top Rated',  icon: <MdStarRate className='space-x-1'/> },
    { to: '/genres',    label: 'Genres',     icon: <MdFormatListBulleted className='space-x-1'/> },
];