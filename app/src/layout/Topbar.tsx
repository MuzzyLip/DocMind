import React, { ReactElement } from "react";
import LogoSVG from "@/assets/logo.svg";
import { AppNameSvg, ModelStatusComp, WindowActionsIcon } from "@/components";
import { ModelKind } from "@/components/ModelStatus/ModelStatus";

export interface TopbarProps {}

export const Topbar: React.FC<TopbarProps> = (): ReactElement => {
    return (
        <div className="w-full h-14 df bg-sidebar-background app-drag flex justify-between items-center border-b border-b-border">
            <div className="top-side-left flex ml-4">
                {/* TODO: To Github Repository When Click Logo */}
                <div className="top-logo-icon w-10 h-10 rounded-xl cursor-pointer mr-4 flex items-center justify-center app-no-drag">
                    <img src={LogoSVG} />
                </div>
                <div className="top-app-slogan mr-6 app-no-drag flex flex-col justify-center">
                    <div className="top-app-name-icon">
                        <AppNameSvg />
                    </div>
                    <div className="top-app-name-slogan text-xs">High Performance RAG Client</div>
                </div>
                <div className="top-app-status flex gap-4">
                    <div className="llm-model-status app-no-drag">
                        <ModelStatusComp modelKind={ModelKind.LLM} />
                    </div>
                    <div className="embedding-model-status app-no-drag">
                        <ModelStatusComp modelKind={ModelKind.Embedding} />
                    </div>
                </div>
            </div>
            <div className="top-side-right mr-4">
                <div className="window-operation-bar flex gap-4">
                    <div className="window-operation-bar-item app-no-drag cursor-pointer">
                        <WindowActionsIcon action="minimize" />
                    </div>
                    <div className="window-operation-bar-item app-no-drag cursor-pointer mt-0.5">
                        <WindowActionsIcon action="maximize" size={20} />
                    </div>
                    <div className="window-operation-bar-item app-no-drag cursor-pointer">
                        <WindowActionsIcon action="close" />
                    </div>
                </div>
            </div>
        </div>
    );
};
