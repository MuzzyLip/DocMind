import React, { useEffect } from "react";
import type { ComponentType, ReactNode } from "react";
import { eventBus } from "@/utils/eventBus";

export interface AppRouteErrorBoundaryProps {
    Comp: ComponentType<any>;
    title: string;
}

export interface AppRouteErrorBoundaryState {
    hasError: boolean;
}

export class AppRouteErrorBoundary extends React.PureComponent<
    AppRouteErrorBoundaryProps,
    AppRouteErrorBoundaryState
> {
    public constructor(props: AppRouteErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    public static getDerivedStateFromError(): Partial<AppRouteErrorBoundaryState> {
        return { hasError: true };
    }

    public override componentDidCatch(error: any, errorInfo: any): void {
        console.error("AppRouteErrorBoundary caught an error:", error, errorInfo);
    }

    public override render(): ReactNode {
        if (this.state.hasError) {
            return <ErrorAutoNavigator />;
        }

        const { Comp } = this.props;
        return <Comp />;
    }
}

const ErrorAutoNavigator: React.FC = () => {
    useEffect(() => {
        eventBus.emit("global-toast", {
            message: "Error occurred",
            options: {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
            },
        });
        const timer = setTimeout(() => {
            if (window.history.length > 1) {
                window.history.back();
            } else {
                window.location.href = "/guide";
            }
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return null;
};

export default AppRouteErrorBoundary;
