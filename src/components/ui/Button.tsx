"use client"

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
}

function Button({
                    children,
                    className,
                    variant = 'primary',
                    ...props
                }: ButtonProps) {
    const baseClasses = 'py-2 px-4 rounded transition-colors cursor-pointer border border-transparent';

    const variantClasses = {
        primary: 'bg-primary-100 text-black hover:bg-primary-50 font-medium',
        secondary: 'bg-secondary-100 text-primary-200 hover:bg-secondary-200 active:border-primary-600 hover:[-webkit-text-stroke:0.3px_theme(colors.primary.200)]',
    };

    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className || ''}`;

    return (
        <button className={combinedClasses} {...props}>
            {children}
        </button>
    );
}

export default Button;