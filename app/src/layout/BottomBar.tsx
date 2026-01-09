import React, { ReactElement } from "react";

export interface BottomBarProps {}

export const BottomBar: React.FC<BottomBarProps> = (): ReactElement => {
    return (
        <div className="w-full h-6 bg-sidebar-background border-t border-t-border">BottomBar</div>
    );
};
