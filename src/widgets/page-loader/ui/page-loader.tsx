import { FC } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';
import { Loader } from 'shared/ui/loader/loader';
import cls from './page-loader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(cls.pageLoader, {}, [className])}>
        <Loader />
    </div>
);
