import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { routeConfig } from "shared/config/route-config/route-config"


const AppRouter = () => {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <div className="page-wrapper">
                                {element}
                            </div>} />
                ))}
            </Routes>
        </Suspense>
    )
}

export default AppRouter;
