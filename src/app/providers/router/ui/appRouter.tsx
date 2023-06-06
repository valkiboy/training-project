import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { routeConfig } from "shared/config/routeConfig/routeConfig"


const AppRouter = () => {
    console.log('Object.values(routeConfig)', Object.values(routeConfig))
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={element} />
                ))}
            </Routes>
        </Suspense>
    )
}

export default AppRouter;
