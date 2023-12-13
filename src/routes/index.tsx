import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Header } from '../components/Header';

import { BalancePage } from './BalancePage';
import { HomePage } from './HomePage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Header />,
        children: [
            {
                path: '',
                element: <HomePage />,
            },
            {
                path: 'balance',
                element: <BalancePage />,
            },
        ],
    },
]);
