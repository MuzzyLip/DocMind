import { create } from "zustand";
import { persist } from "zustand/middleware";

export const STORE_VERSION = 1;
export type ModelStatus = "UnDownloaded" | "UnChosen" | "UnUsed" | "Used";

export interface AppGlobalStore {
    /** Record User Is First Time Open App */
    isFirstTimeOpenApp: boolean;
    /**
     * llm status. See Declaration: {@link ModelStatus}
     */
    llmStatus: ModelStatus;
    /** llm model name */
    llmModel: string;
    /**
     * Embedding model status. See Declaration: {@link ModelStatus}
     */
    embeddingModelStatus: ModelStatus;
    /** embedding model name */
    embeddingModelName: string;
}

export const useAppGlobalStore = create<AppGlobalStore>()(
    persist(
        (): AppGlobalStore => ({
            isFirstTimeOpenApp: true,
            llmStatus: "UnDownloaded",
            llmModel: "",
            embeddingModelStatus: "UnDownloaded",
            embeddingModelName: "",
        }),
        {
            name: "doc-mind-app-global-store",
            version: STORE_VERSION,
            partialize: state => ({
                isFirstTimeOpenApp: state.isFirstTimeOpenApp,
            }),
        },
    ),
);
