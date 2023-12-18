import React from 'react';

import { Message } from './message';

interface MessagesProps {
    items: {
        id: string;
        text: string;
    }[];
}

export const Messages = ({ items }: MessagesProps) => {
    return (
        <div className="bg-slate-200 p-6 flex-1 flex flex-col items-end gap-3 overflow-y-scroll">
            {items.map((item) => (
                <Message text={item.text} key={item.id} id={item.id} />
            ))}
        </div>
    );
};
