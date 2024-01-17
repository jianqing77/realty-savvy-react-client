import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, NavLink } from 'react-router-dom';
import General from './General.jsx';
import Security from './Security.jsx';
import Favorites from './Favorites.jsx';
import Notifications from './Notifications.jsx';
import {
    FingerPrintIcon,
    Cog6ToothIcon,
    BellIcon,
    HeartIcon,
    ListBulletIcon,
} from '@heroicons/react/24/outline';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const navigation = [
    { name: 'General', href: 'general', icon: Cog6ToothIcon },
    { name: 'Security', href: 'security', icon: FingerPrintIcon },
    { name: 'Favorites', href: 'favorites', icon: HeartIcon },
    { name: 'Listings', href: 'listings', icon: ListBulletIcon },
    { name: 'Notifications', href: 'notifications', icon: BellIcon },
];

export default function Profile() {
    const currentUser = useSelector((state) => state.auth.currentUser);

    return (
        <div className="grid grid-cols-12 px-10">
            <div className="hidden md:block sm:col-span-2">
                {/* nav sidebar */}
                <div className="flex flex-col py-16 gap-y-5 px-6 ring-1 ring-white/5">
                    <nav>
                        <ul role="list" className="space-y-1">
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <NavLink
                                        to={item.href}
                                        className={({ isActive }) =>
                                            classNames(
                                                isActive
                                                    ? 'bg-dark-100 text-yellow-100'
                                                    : 'hover:bg-dark-100 hover:text-yellow-100',
                                                'group flex gap-x-3 rounded-md p-2 text-base leading-6 font-semibold'
                                            )
                                        }>
                                        <item.icon
                                            className="h-6 w-6 shrink-0"
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="col-span-12 sm:col-span-10">
                {/* <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8"> */}
                <Routes>
                    <Route index path="general" element={<General />} />
                    <Route path="security" element={<Security />} />
                    <Route path="favorites" element={<Favorites />} />
                    <Route path="notifications" element={<Notifications />} />
                    <Route path="*" element={<General />} /> {/* Fallback route */}
                </Routes>
                {/* </div> */}
            </div>
        </div>
    );
}