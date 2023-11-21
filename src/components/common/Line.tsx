import React from 'react'
import { twMerge } from 'tailwind-merge'

const Helical = (
    {
        color,
        degree
    }: {
        color: string,
        degree: number
    }
) => {
    const base = 'w-full h-[1px]';
    const styleApply = twMerge(base, `bg-${color ?? 'gray'}-${degree ?? 300}`);
    return (
        <div className={styleApply} />
    )
};

const Vertical = (
    {
        color,
        degree
    }: {
        color: string,
        degree: number
    }
) => {
    const base = 'w-[1px] h-full';
    const styleApply = twMerge(base, `bg-${color ?? 'gray'}-${degree ?? 300}`);
    return (
        <div className={styleApply} />
    )
};

export const Line = {
    Helical,
    Vertical,
}