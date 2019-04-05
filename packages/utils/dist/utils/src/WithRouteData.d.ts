import * as React from 'react';
import { RouteChildrenProps } from 'react-router';
export interface IWithRouteDataProps<P, S> {
    /**
     * A render propr that will receive the route params and state.
     * @param params - the route params, with type `P`.
     * @param state - the route state, with type `S`.
     * @param route - the raw route object, as provided by the `Route` component.
     */
    children(params: P, state: S, route: RouteChildrenProps): any;
}
/**
 * A render-prop component that returns a route params - with type `P` - and
 * state - with type `S`.
 * *Warning:* this component doesn't provide any assurance on the returned shape
 * of neither the params nor the state objects.
 * @see [children]{@link IWithRouteDataProps#children}
 */
export declare class WithRouteData<P, S> extends React.Component<IWithRouteDataProps<P, S>> {
    render(): JSX.Element;
}
