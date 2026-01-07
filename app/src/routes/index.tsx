import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routeConfig, type RouteConfig } from "../route-config";
import AppRouteContainer from "./AppRouteContainer";
import { MainPageLayout } from "@/layout";

export function AppRoutes(): React.JSX.Element {
    return (
        <BrowserRouter>
            <MainPageLayout>
                <Routes>
                    {Object.keys(routeConfig).map((name: string) => {
                        const routeName = name as keyof RouteConfig;
                        const { title, path, component } = routeConfig[routeName];
                        return (
                            <Route
                                key={title}
                                path={path}
                                element={<AppRouteContainer Component={component} title={title} />}
                            />
                        );
                    })}
                </Routes>
            </MainPageLayout>
        </BrowserRouter>
    );
}
