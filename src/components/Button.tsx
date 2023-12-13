import React, { ReactNode } from 'react';
import cn from 'classnames';

interface ButtonProps {
    view: 'buy' | 'sell';
    children: ReactNode;
}

export const Button = ({ children, view }: ButtonProps) => {
    return (
        <button className={cn('px-6 py-2 rounded-md text-white', view === 'buy' ? 'bg-green-500' : 'bg-red-500')}>
            {children}
        </button>
    );
};
