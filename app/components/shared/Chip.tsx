import React from 'react'

type Props = {
    rounded?: boolean;
    children: React.ReactNode;
    bg?: string;
    color?: string;
    border?: string;
}

const Chip: React.FC<Props> = ({ rounded = true, children, bg = 'bg-background-light', color = "text-white", border = 'border border-white' }) => {
    return (
        <div className={`cursor-pointer min-w-fit flex items-center justify-evenly gap-2 ${color} ${bg} ${rounded ? 'rounded-full px-4 py-[7px]' : `rounded-md ${border} py-1.5 px-3.5`}`}>{children}</div>
    )
}

export default Chip