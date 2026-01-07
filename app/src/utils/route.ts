import { ExtraRouteConfig, routeConfig, RouteConfig, RouteNameType } from "../route-config";
import { generatePath, useNavigate } from "react-router-dom";
import { useCallback, useMemo } from "react";

export { RouteNameType } from "../route-config";

type PickExtraRouteConfig<
    T extends RouteNameType,
    K extends string,
> = T extends keyof ExtraRouteConfig
    ? K extends keyof ExtraRouteConfig[T]
        ? ExtraRouteConfig[T][K]
        : string
    : string;

/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Inspired by {@link https://github.com/ghoullier/awesome-template-literal-types#router-params-parsing}
 * Supports optional params
 */
type ExtractRouteParams<T extends RouteNameType, P extends string> = string extends P
    ? Record<string, string>
    : P extends `${infer _Start}:${infer Param}/${infer Rest}`
    ? Param extends `${infer Param}?`
        ? { [k in Param]?: PickExtraRouteConfig<T, k> } & ExtractRouteParams<T, Rest>
        : { [k in Param]: PickExtraRouteConfig<T, k> } & ExtractRouteParams<T, Rest>
    : P extends `${infer _Start}:${infer Param}`
    ? Param extends `${infer Param}?`
        ? { [k in Param]?: PickExtraRouteConfig<T, k> }
        : { [k in Param]: PickExtraRouteConfig<T, k> }
    : {};
/* eslint-enable @typescript-eslint/no-unused-vars */

export type RouteParams<T extends RouteNameType> = ExtractRouteParams<T, RouteConfig[T]["path"]>;

export function generateRoutePath<T extends RouteNameType>(
    name: T,
    params?: RouteParams<T>,
): string {
    return generatePath(routeConfig[name].path, params);
}

/**
 * Push history with Remo route
 */
export function usePushHistory(): <T extends RouteNameType>(
    name: T,
    params?: RouteParams<T>,
    state?: any,
) => void {
    const navigate = useNavigate();

    const pushHistory = useCallback(
        (name: RouteNameType, params: RouteParams<RouteNameType> = {}, state?: any) => {
            navigate(generateRoutePath(name, params), { state });
        },
        [navigate],
    );

    return pushHistory;
}

/**
 * Replace history with Remo route
 */
export function useReplaceHistory(): <T extends RouteNameType>(
    name: T,
    params?: RouteParams<T>,
) => void {
    const navigate = useNavigate();

    const pushHistory = useCallback(
        (name: RouteNameType, params: RouteParams<RouteNameType> = {}) => {
            navigate(generateRoutePath(name, params), { replace: true });
        },
        [navigate],
    );

    return pushHistory;
}

/**
 * Get url parameters
 * This facility not involves react-router, so you can use it simply.
 */
export function useURLParams(): Record<string, string> {
    const urlSearchParams = useMemo(
        () => new URLSearchParams(window.location.search),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [window.location.search],
    );

    const params = useMemo(() => {
        const res: Record<string, string> = {};
        for (const [key, value] of urlSearchParams.entries()) {
            res[key] = value;
        }
        return res;
    }, [urlSearchParams]);

    return params;
}
