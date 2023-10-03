import { twMerge } from "tailwind-merge";

export type FlexStyleProps<T extends React.ElementType> = {
    as?: T,
    className?: string,
    children?: React.ReactNode,
} & React.ComponentPropsWithoutRef<T>
// export type FlexDivProps = {
//     as? : string,

// } & ;

const Hstack = <T extends React.ElementType = "div">({
    as, className, children, ...props
}: FlexStyleProps<T>) => {
    const TagName = as ?? "div";
    const combination = twMerge(
        "flex flex-row",
        className
    );
    return (
        <TagName className={combination} {...props}>
            {children}
        </TagName>
    );
}

const Vstack = <T extends React.ElementType = "div">({
    as, className, children, ...props
}: FlexStyleProps<T>) => {
    const TagName = as ?? "div";
    const combination = twMerge(
        "flex flex-col",
        className
    );
    return (
        <TagName className={combination} {...props}>
            {children}
        </TagName>
    );
}

const HCenter = <T extends React.ElementType = "div">({
    as, className, children, ...props
}: FlexStyleProps<T>) => {
    const TagName = as ?? "div";
    const combination = twMerge(
        "flex flex-col items-center",
        className
    );
    return (
        <TagName className={combination} {...props}>
            {children}
        </TagName>
    );
}

const VCenter = <T extends React.ElementType = "div">({
    as, className, children, ...props
}: FlexStyleProps<T>) => {
    const TagName = as ?? "div";
    const combination = twMerge(
        "flex flex-col items-center",
        className
    );
    return (
        <TagName className={combination} {...props}>
            {children}
        </TagName>
    );
}

const Center = <T extends React.ElementType = "div">({
    as, className, children, ...props
}: FlexStyleProps<T>) => {
    const TagName = as ?? "div";
    const combination = twMerge(
        "flex flex-col items-center justify-center",
        className
    );
    return (
        <TagName className={combination} {...props}>
            {children}
        </TagName>
    );
}

const HBetween = <T extends React.ElementType = "div">({
    as, className, children, ...props
}: FlexStyleProps<T>) => {
    const TagName = as ?? "div";
    const combination = twMerge(
        "flex flex-row justify-between",
        className
    );
    return (
        <TagName className={combination} {...props}>
            {children}
        </TagName>
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
