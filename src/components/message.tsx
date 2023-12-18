import React from 'react';

export const Message = ({ text, id }: { id: string; text: string }) => {
    return (
        <p id={id} className="px-3 py-1 bg-slate-900 text-slate-200 w-fit rounded-md">
            {text}
        </p>
    );
};
