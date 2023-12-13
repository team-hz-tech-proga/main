import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { routes } from '../utils/routes';

const items = [
    { title: 'home page', path: routes.index() },
    { title: 'balance page', path: routes.balance() },
];

export const Header = () => {
    return (
        <>
            <header className="flex gap-3 mb-6 mx-auto max-w-3xl px-4 py-2">
                {items.map((item) => (
                    <NavLink
                        style={({ isActive }) =>
                            isActive ? { fontWeight: 'bold', borderBottom: '1px solid black' } : {}
                        }
                        to={item.path}
                    >
                        {item.title}
                    </NavLink>
                ))}
            </header>
            <main className="mx-auto max-w-3xl px-4">
                <Outlet />
            </main>
        </>
    );
};
