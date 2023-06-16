import { FC } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';
import { Link, LinkProps } from 'react-router-dom';
import cls from './app-link.module.scss';

export enum AppLinkTheme {
    PRYMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps{
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRYMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.appLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
