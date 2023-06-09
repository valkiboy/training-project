import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib/class-names/class-names'
import cls from './button.module.scss'
import { clear } from 'console';
import { Theme } from 'app/providers/theme-provider';

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button className={classNames(cls.button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}