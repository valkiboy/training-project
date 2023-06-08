import { lazy } from 'react';

// export const AboutPageAsync = lazy(() => import('./about-page'));
export const AboutPageAsync = lazy(() => new Promise(resolve => {
    //@ts-ignore
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ
    setTimeout(() => resolve(import('./about-page')), 1500)
}) );