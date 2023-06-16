import { classNames } from 'shared/lib/class-names/class-names';
import { AppLink, AppLinkTheme } from 'shared/ui/app-link/app-link';
import cls from './navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>Главная</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about">О сайте</AppLink>
        </div>
    </div>
);
