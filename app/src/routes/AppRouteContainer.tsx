import React, { ComponentType, ReactElement } from "react";
import AppRouteErrorBoundary from "./AppErrorBoundary";
import { ThemeBodyProvider } from "@/components";

interface AppRouteContainerProps {
    Component: ComponentType<any>;
    title: string;
}

const AppRouteContainer: React.FC<AppRouteContainerProps> = (props): ReactElement => {
    return (
        <ThemeBodyProvider>
            <AppRouteErrorBoundary Comp={props.Component} title={props.title} />
        </ThemeBodyProvider>
    );
};

export default AppRouteContainer;
