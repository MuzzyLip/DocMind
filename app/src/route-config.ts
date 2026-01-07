import { ComponentType } from "react";
import GuidePage from "./pages/GuidePage";
import ChatPage from "./pages/ChatPage";
import KnowledgeBasePage from "./pages/KnowledgeBasePage";
import SidecarPage from "./pages/SidecarPage";
import SettingsPage from "./pages/SettingsPage";

export enum RouteNameType {
    GuideCheckPage = "GuideCheckPage",
    ChatPage = "ChatPage",
    KnowledgeBasePage = "KnowledgeBasePage",
    SidecarServicePage = "SidecarServicePage",
    SettingsPage = "SettingsPage",
}

export const routeConfig = {
    [RouteNameType.GuideCheckPage]: {
        title: "Guide",
        path: "/guide",
        component: GuidePage,
    },
    [RouteNameType.ChatPage]: {
        title: "Chat",
        path: "/chat",
        component: ChatPage,
    },
    [RouteNameType.KnowledgeBasePage]: {
        title: "KnowledgeBase",
        path: "/knowledge",
        component: KnowledgeBasePage,
    },
    [RouteNameType.SidecarServicePage]: {
        title: "SidecarService",
        path: "/sidecar",
        component: SidecarPage,
    },
    [RouteNameType.SettingsPage]: {
        title: "Settings",
        path: "/settings",
        component: SettingsPage,
    },
} as const;

type CheckRouteConfig<
    T extends {
        [name in RouteNameType]: {
            title: string;
            path: string;
            component: ComponentType<any>;
        };
    },
> = T;

export type ExtraRouteConfig = {};

export type RouteConfig = CheckRouteConfig<typeof routeConfig>;
