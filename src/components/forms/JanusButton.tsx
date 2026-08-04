import React from "react";
import clsx from "clsx";
import { styles } from "../../styles/styles";

type ButtonVariant = keyof typeof styles.button;
type ButtonSize = "sm" | "md" | "lg";

const sizeClasses: Record<ButtonSize, string> = {
    sm: "text-sm px-3 py-2",
    md: "text-base",
    lg: "text-lg px-6 py-4",
};

interface BaseProps {
    children: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    className?: string;
}

type ButtonProps = BaseProps & {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    href?: never;
    type?: "button" | "submit" | "reset";
};

type LinkProps = BaseProps & {
    href: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
    target?: React.HTMLAttributeAnchorTarget;
    rel?: string;
};

export type JanusButtonProps = ButtonProps | LinkProps;

export function JanusButton(props: JanusButtonProps) {
    const {children, variant = "default", size = "md", disabled = false, className,} = props;

    const classes = clsx(styles.button[variant], sizeClasses[size], "inline-flex items-center justify-center gap-2",
        "focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2", disabled && "pointer-events-none opacity-50",
        className
    );
    if (props.href !== undefined)  {
        return (
            <a
                href={disabled ? undefined : props.href} className={classes}
                onClick={disabled ? undefined : props.onClick} target={props.target} rel={props.rel}
                aria-disabled={disabled}>
                {children}
            </a>
        );
    }
    return (
        <button type={props.type ?? "button"} className={classes} disabled={disabled} onClick={props.onClick}>
            {children}
        </button>
    );
}

/*
Usage examples--

<JanusButton variant="primary">Save</JanusButton>

<JanusButton variant="secondary" onClick={() => console.log("Clicked")}>
    Cancel
</JanusButton>

<JanusButton variant="danger" disabled>
    Delete
</JanusButton>

<JanusButton variant="link" href="/settings">
    Settings
</JanusButton>

<JanusButton variant="primary" size="lg" type="submit">
    Submit
</JanusButton>
*/