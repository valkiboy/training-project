import { lazy } from 'react';

// export const MainPageAsync = lazy(() => import('./main-page'));
export const MainPageAsync = lazy(() => new Promise(resolve => {
    //@ts-ignore
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ
    setTimeout(() => resolve(import('./mainPage')), 1500)
}) );