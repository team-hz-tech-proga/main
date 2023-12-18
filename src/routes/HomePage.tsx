import React, { useState } from 'react';
import uuid from 'react-uuid';

import { Controls } from '../components/controls';
import { Messages } from '../components/messages';
import ClassCounter from '../components/classCounter';

export const HomePage = () => {
    const [messages, setMessages] = useState<{ id: string; text: string }[]>([]);

    const onSubmit = (text: string) => {
        setMessages((prev) => [...prev, { id: uuid(), text }]);
    };

    return (
        <div className="my-12 max-w-xl mx-auto flex flex-col gap-6">
            <div className="w-[526px] h-[326px] bg-red-500 rounded-3xl overflow-hidden flex flex-col">
                <Messages items={messages} />
                <Controls onSubmit={onSubmit} />
            </div>
            <ClassCounter count={messages.length} />
        </div>
    );
};
