import React, { ReactElement } from "react";

export interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = (): ReactElement => {
    return <div className="w-20 bg-sidebar-background">Sidebar</div>;
};
