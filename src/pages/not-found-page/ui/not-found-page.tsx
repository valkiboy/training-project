import { FC } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import cls from './not-found-page.module.scss';

interface notFoundPageProps {
    className?: string;
}

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.notFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    );
};
