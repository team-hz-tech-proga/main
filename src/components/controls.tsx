import React, { useState } from 'react';

interface ControlsProps {
    onSubmit: (text: string) => void;
}

export const Controls = ({ onSubmit }: ControlsProps) => {
    const [value, setValue] = useState('');

    const onFormSubmit = (text: string) => {
        if (!text) return;

        onSubmit(text);
        setValue('');
    };

    return (
        <form className="p-6 flex gap-4" onSubmit={(e) => e.preventDefault()}>
            <input
                className="w-full border-1 rounded-md px-2"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button className="bg-slate-200 rounded-md px-3 py-1" type="submit" onClick={() => onFormSubmit(value)}>
                Отправить
            </button>
        </form>
    );
};
