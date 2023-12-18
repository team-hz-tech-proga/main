import React, { useState } from 'react';

import { checkString } from '../utils/checkString';

interface ControlsProps {
    onSubmit: (text: string) => void;
}

export const Controls = ({ onSubmit }: ControlsProps) => {
    const [value, setValue] = useState('');

    const onFormSubmit = (text?: string) => {
        if (!checkString(text)) return;

        onSubmit(text);
        setValue('');
    };

    return (
        <form className="flex gap-3 p-3" onSubmit={(e) => e.preventDefault()}>
            <input
                className="w-full rounded-md bg-slate-200 px-2"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button
                type="submit"
                className="px-3 py-1 bg-slate-200 rounded-md w-fit"
                onClick={() => onFormSubmit(value)}
            >
                Отправить
            </button>
        </form>
    );
};
