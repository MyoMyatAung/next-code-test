import React from 'react'

type Props = {
    rounded?: boolean;
    children: React.ReactNode;
    isActive?: boolean;
}

const Chip: React.FC<Props> = ({ rounded = true, children, isActive = false }) => {
    return (
        <div className={`cursor-pointer min-w-fit flex items-center justify-evenly gap-2 ${isActive ? 'bg-white text-background-main' : 'bg-background-light'} ${rounded ? 'rounded-full px-4 py-[7px]' : 'rounded-md border border-white py-1.5 px-3.5'}`}>{children}</div>
    )
}

export default Chip