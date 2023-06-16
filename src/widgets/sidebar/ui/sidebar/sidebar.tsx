import { useState } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';
import { LangSwitcher } from 'widgets/lang-switcher/lang-switcher';
import { ThemeSwitcher } from 'widgets/theme-switcher';
import cls from './sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <button type="button" onClick={onToggle}>TOGGLE</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
