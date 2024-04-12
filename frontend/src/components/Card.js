// Card.js

import React from 'react';

export default function Card({ title, subtitle, children, ...props }) {
    return (
        <div className={`bg-slate-900 text-white px-4 py-3 rounded-lg ${props.className}`}>
            <h2 className="text-lg font-semibold sticky top-0">{title}</h2>
            <p className="text-xs text-white text-opacity-35">{subtitle}</p>

            {children}
        </div>
    )
}