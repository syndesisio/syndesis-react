import { Action, ActionDescriptor, ActionDescriptorStep, ConfigurationProperty, ConnectionOverview, Connector } from '@syndesis/models';
export declare function getActionsWithFrom(actions?: Action[]): Action[];
export declare function getActionsWithTo(actions?: Action[]): Action[];
export declare function getConnectionConnector(connection: ConnectionOverview): Connector;
export declare function getConnectorActions(connector: Connector): Action[];
export declare function getActionById(actions: Action[], actionId: string): Action;
export declare function getActionDescriptor(action: Action): ActionDescriptor;
export declare function getActionSteps(descriptor: ActionDescriptor): ActionDescriptorStep[];
export declare function getActionStep(steps: ActionDescriptorStep[], step: number): ActionDescriptorStep;
export declare function getActionStepDefinition(step: ActionDescriptorStep): {
    [name: string]: ConfigurationProperty;
};
