import React, { ReactElement } from "react";

export interface TopbarProps {}

export const Topbar: React.FC<TopbarProps> = (): ReactElement => {
    return <div className="w-full h-14 bg-sidebar-background">Topbar</div>;
};
