import { PropsWithChildren, ReactElement } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { BottomBar } from "./BottomBar";

export interface MainPageLayoutProps {}

export const MainPageLayout = ({
    children,
}: PropsWithChildren<MainPageLayoutProps>): ReactElement => {
    return (
        <div className="main-page-layout w-full h-full bg-background flex flex-col">
            <Topbar />
            <div className="main-page-layout-content flex-1 flex">
                <Sidebar />
                <div className="main-page-layout-inner flex-1">{children}</div>
            </div>
            <BottomBar />
        </div>
    );
};
