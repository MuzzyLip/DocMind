// ModelStatus Component. Show Topbar LLM/Embedding Model Status. Only Need Model Kind. Get Status/Name In AppGlobalStore.
import React, { ReactElement, useMemo } from "react";
import { ModelKind } from "./ModelStatus";
import { useAppGlobalStore } from "@/stores";
import classNames from "classnames";
import { EmbeddingModelIcon, LLMModelIcon } from "../SvgIcon";

export interface ModelStatusProps {
    modelKind: ModelKind;
}

export const ModelStatusComp: React.FC<ModelStatusProps> = ({ modelKind }): ReactElement => {
    const status = useAppGlobalStore(state =>
        modelKind === ModelKind.LLM ? state.llmStatus : state.embeddingModelStatus,
    );
    const modelName = useAppGlobalStore(state =>
        modelKind === ModelKind.LLM ? state.llmModel : state.embeddingModelName,
    );
    const IconEl = useMemo(() => {
        switch (modelKind) {
            case ModelKind.LLM:
                return <LLMModelIcon />;
            case ModelKind.Embedding:
                return <EmbeddingModelIcon />;
        }
    }, [modelKind]);
    return (
        <div
            className={classNames(
                "model-status-comp w-fit px-3 h-8 rounded-2xl transition-colors flex items-center justify-center cursor-pointer gap-1",
                {
                    "bg-llm-background": modelKind === ModelKind.LLM,
                    "hover:bg-llm-hover-background": modelKind === ModelKind.LLM,
                    "text-llm-text": modelKind === ModelKind.LLM,
                    "bg-embedding-background": modelKind === ModelKind.Embedding,
                    "hover:bg-embedding-hover-background": modelKind === ModelKind.Embedding,
                    "text-embedding-text": modelKind === ModelKind.Embedding,
                },
            )}
        >
            <div className="model-status-comp-icon">{IconEl}</div>
            <div className="model-status-comp-model-name text-sm mt-0.5">
                {modelKind}: {status === "Used" ? modelName : "——"}
            </div>
        </div>
    );
};
