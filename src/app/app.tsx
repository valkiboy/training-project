import { useTheme } from 'app/providers/theme-provider';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/class-names';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';
import { AppRouter } from './providers/router';
import './styles/index.scss';

function Component() {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <div>
            <button type="button" onClick={toggle}>{t('Перевод')}</button>
            {t('Тестовый пример')}
        </div>
    );
}

function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
