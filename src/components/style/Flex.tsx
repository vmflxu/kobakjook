import { twMerge } from "tailwind-merge";

export type FlexDivProps = {} & React.HTMLProps<HTMLDivElement>;

const Hstack = ({ className, children, ...props }: FlexDivProps) => {
    const combination = twMerge(
        "flex flex-row",
        className
    );
    return (
        <div className={combination} {...props}>
            {children}
        </div>
    );
}

const Vstack = ({ className, children, ...props }: FlexDivProps) => {
    const combination = twMerge(
        "flex flex-col",
        className
    );
    return (
        <div className={combination} {...props}>
            {children}
        </div>
    );
}

const HCenter = ({ className, children, ...props }: FlexDivProps) => {
    const combination = twMerge(
        "flex flex-col items-center",
        className
    );
    return (
        <div className={combination} {...props}>
            {children}
        </div>
    );
}

const VCenter = ({ className, children, ...props }: FlexDivProps) => {
    const combination = twMerge(
        "flex flex-col justify-center",
        className
    );
    return (
        <div className={combination} {...props}>
            {children}
        </div>
    );
}

const Center = ({ className, children, ...props }: FlexDivProps) => {
    const combination = twMerge(
        "flex flex-col items-center justify-center",
        className
    );
    return (
        <div className={combination} {...props}>
            {children}
        </div>
    );
}

const HBetween = ({ className, children, ...props }: FlexDivProps) => {
    const combination = twMerge(
        "flex flex-row justify-between",
        className
    );
    return (
        <div className={combination} {...props}>
            {children}
        </div>
    );
}

export const Flex = {
    Hstack,
    Vstack,
    HCenter,
    VCenter,
    Center,
    HBetween,
}
