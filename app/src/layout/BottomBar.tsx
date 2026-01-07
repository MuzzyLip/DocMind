import React, { ReactElement } from "react";

export interface BottomBarProps {}

export const BottomBar: React.FC<BottomBarProps> = (): ReactElement => {
    return <div className="w-full h-10 bg-sidebar-background">BottomBar</div>;
};
