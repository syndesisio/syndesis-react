import { Action, ActionDescriptor, Connection, Integration, IntegrationOverview, Step } from '@syndesis/models';
import * as React from 'react';
import { IApiContext } from './ApiContext';
export declare const NEW_INTEGRATION: Integration;
declare type UpdateOrAddConnection = (integration: Integration, connection: Connection, action: Action, flow: number, position: number, configuredProperties: any) => Promise<Integration>;
export interface IWithIntegrationHelpersChildrenProps {
    /**
     * adds a step of type connection to the provided integration object.
     *
     * @param integration - the integration object to modify
     * @param connection - the connection object that's been used to set up the
     * step
     * @param action - the action that's been used to set up the step
     * @param flow - the zero-based index of the flow where to add the step
     * @param position - the zero-based index of the steps where to add the step
     * @param configuredProperties - the values configured by the user for the step
     *
     * @todo should we check `flow` and `position` to see if they are valid?
     * @todo perhaps rename it with a better name
     */
    addConnection: UpdateOrAddConnection;
    /**
     * updates a step of type connection to the provided integration object.
     *
     * @param integration - the integration object to modify
     * @param connection - the connection object that's been used to set up the
     * step
     * @param action - the action that's been used to set up the step
     * @param flow - the zero-based index of the flow where to add the step
     * @param position - the zero-based index of the steps where to add the step
     * @param configuredProperties - the values configured by the user for the step
     *
     * @todo perhaps rename it with a better name
     * @todo should we check `flow` and `position` to see if they are valid?
     */
    updateConnection: UpdateOrAddConnection;
    /**
     * updates a step of type connection to the provided integration object if
     * a step exists at the provided `flow` and `position` indexes; a new step is
     * added otherwise.
     *
     * @param integration - the integration object to modify
     * @param connection - the connection object that's been used to set up the
     * step
     * @param action - the action that's been used to set up the step
     * @param flow - the zero-based index of the flow where to add the step
     * @param position - the zero-based index of the steps where to add the step
     * @param configuredProperties - the values configured by the user for the step
     *
     * @todo perhaps rename it with a better name
     * @todo should we check `flow` and `position` to see if they are valid?
     */
    updateOrAddConnection: UpdateOrAddConnection;
    /**
     * returns an empty integration object.
     *
     * @todo make the returned object immutable to avoid uncontrolled changes
     */
    getEmptyIntegration(): Integration;
    /**
     * asynchronously saves the provided integration, returning the saved
     * integration in case of success.
     *
     * @param integration
     *
     * @todo make the returned object immutable to avoid uncontrolled changes
     */
    saveIntegration(integration: Integration): Promise<Integration>;
    /**
     * updates the name of an integration.
     *
     * @param integration
     * @param name
     */
    setName(integration: Integration, name: string): Integration;
    /**
     * returns the list of steps of the provided integration.
     *
     * @param value
     * @param flow
     *
     * @todo make the returned object immutable to avoid uncontrolled changes
     */
    getSteps(integration: Integration, flow: number): Step[];
    /**
     * returns a specific step of the provided integration.
     *
     * @param value
     * @param flow
     *
     * @todo make the returned object immutable to avoid uncontrolled changes
     */
    getStep(integration: Integration, flow: number, step: number): Step;
    /**
     * returns true if the provided integration can be published; returns false
     * otherwise.
     *
     * @param integration
     */
    canPublish(integration: IntegrationOverview): boolean;
    /**
     * returns true if the provided integration can be activated; returns false
     * otherwise.
     *
     * @param integration
     */
    canActivate(integration: IntegrationOverview): boolean;
    /**
     * returns true if the provided integration can be edited; returns false
     * otherwise.
     *
     * @param integration
     */
    canEdit(integration: IntegrationOverview): boolean;
    /**
     * returns true if the provided integration can be deactivated; returns false
     * otherwise.
     *
     * @param integration
     */
    canDeactivate(integration: IntegrationOverview): boolean;
}
export interface IWithIntegrationHelpersProps {
    children(props: IWithIntegrationHelpersChildrenProps): any;
}
export declare class WithIntegrationHelpersWrapped extends React.Component<IWithIntegrationHelpersProps & IApiContext> {
    constructor(props: IWithIntegrationHelpersProps & IApiContext);
    getActionDescriptor(connectionId: string, actionId: string, configuredProperties: any): Promise<ActionDescriptor | null>;
    addConnection(integration: Integration, connection: Connection, action: Action, flow: number, position: number, configuredProperties: any): Promise<Integration>;
    updateConnection(integration: Integration, connection: Connection, action: Action, flow: number, position: number, configuredProperties: any): Promise<Integration>;
    updateOrAddConnection(integration: Integration, connection: Connection, action: Action, flow: number, position: number, configuredProperties: any): Promise<Integration>;
    getEmptyIntegration(): Integration;
    saveIntegration(integration: Integration): Promise<Integration>;
    setName(integration: Integration, name: string): Integration;
    getSteps(integration: Integration, flow: number): Step[];
    getStep(integration: Integration, flow: number, step: number): Step;
    canPublish(integration: IntegrationOverview): boolean;
    canActivate(integration: IntegrationOverview): boolean;
    canEdit(integration: IntegrationOverview): boolean;
    canDeactivate(integration: IntegrationOverview): boolean;
    render(): any;
}
/**
 * This component provides provides through a render propr a number of helper
 * functions useful when working with an integration.
 *
 * Some of these helpers are available also as stand-alone functions
 * (packages/api/src/integrationHelpers/index.ts), but this component provides
 * methods like `saveIntegration` that can talk with the backend without any
 * additional information provided.
 *
 * Methods that modify an integration return a immutable copy of the original
 * object, to reduce the risk of bugs.
 *
 * @see [addConnection]{@link IWithIntegrationHelpersChildrenProps#addConnection}
 * @see [updateConnection]{@link IWithIntegrationHelpersChildrenProps#updateConnection}
 * @see [updateOrAddConnection]{@link IWithIntegrationHelpersChildrenProps#updateOrAddConnection}
 * @see [getEmptyIntegration]{@link IWithIntegrationHelpersChildrenProps#getEmptyIntegration}
 * @see [saveIntegration]{@link IWithIntegrationHelpersChildrenProps#saveIntegration}
 * @see [setName]{@link IWithIntegrationHelpersChildrenProps#setName}
 * @see [getSteps]{@link IWithIntegrationHelpersChildrenProps#getSteps}
 * @see [getStep]{@link IWithIntegrationHelpersChildrenProps#getStep}
 * @see [canPublish]{@link IWithIntegrationHelpersChildrenProps#canPublish}
 * @see [canActivate]{@link IWithIntegrationHelpersChildrenProps#canActivate}
 * @see [canEdit]{@link IWithIntegrationHelpersChildrenProps#canEdit}
 * @see [canDeactivate]{@link IWithIntegrationHelpersChildrenProps#canDeactivate}
 */
export declare const WithIntegrationHelpers: React.FunctionComponent<IWithIntegrationHelpersProps>;
export {};
