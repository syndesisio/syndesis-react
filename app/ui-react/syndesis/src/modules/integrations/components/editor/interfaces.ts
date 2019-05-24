/* tslint:disable:object-literal-sort-keys no-empty-interface */
import {
  ConnectionBulletinBoard,
  ConnectionOverview,
  Connector,
  DataShape,
  Integration,
  StepKind,
} from '@syndesis/models';
import { include } from 'named-urls';

/**
 * @param actionId - the ID of the action selected in the previous step.
 * @param position - the zero-based position for the new step in the integration
 * flow.
 * @param step - the configuration step when configuring a multi-page connection.
 */
export interface IConfigureStepRouteParams {
  flowId: string;
  position: string;
}

/**
 * @param integration - the integration object, used to render the IVP.
 * @param connection - the connection object selected in the previous step. Needed
 * to render the IVP.
 * @param updatedIntegration - when creating a link to this page, this should
 * never be set. It is used by the page itself to pass the partially configured
 * step when configuring a multi-page connection.
 */
export interface IConfigureStepRouteState {
  step: StepKind;
  integration: Integration;
  updatedIntegration?: Integration;
}

/**
 * @param actionId - the ID of the action selected in the previous step.
 * @param position - the zero-based position for the new step in the integration
 * flow.
 * @param step - the configuration step when configuring a multi-page connection.
 */
export interface IConfigureActionRouteParams {
  flowId: string;
  position: string;
  actionId: string;
  step: string;
}

/**
 * @param integration - the integration object, used to render the IVP.
 * @param connection - the connection object selected in the previous step. Needed
 * to render the IVP.
 * @param updatedIntegration - when creating a link to this page, this should
 * never be set. It is used by the page itself to pass the partially configured
 * step when configuring a multi-page connection.
 */
export interface IConfigureActionRouteState {
  connection: ConnectionOverview;
  integration: Integration;
  updatedIntegration?: Integration;
  configuredProperties: { [key: string]: string };
}

export enum DataShapeDirection {
  INPUT = 'input',
  OUTPUT = 'output',
}

export interface IDescribeDataShapeRouteParams {
  flowId: string;
  actionId?: string;
  position: string;
  direction: DataShapeDirection;
}

export interface IDescribeDataShapeRouteState {
  step: StepKind;
  connection: ConnectionOverview;
  integration: Integration;
  updatedIntegration?: Integration;
}

/**
 * @param connectionId - the ID of the connection selected in the previous step
 * @param position - the zero-based position for the new step in the integration
 * flow.
 */
export interface ISelectActionRouteParams {
  flowId: string;
  connectionId: string;
  position: string;
}

/**
 * @param integration - the integration object, used to render the IVP.
 * @param connection - the connection object selected in the previous step, used
 * to render the IVP.
 */
export interface ISelectActionRouteState {
  connection: ConnectionOverview;
  integration: Integration;
}

/**
 * @param position - the zero-based position for the new step in the integration
 * flow.
 */
export interface ISelectConnectionRouteParams {
  flowId: string;
  position: string;
}

export interface IBaseApiProviderRouteParams {
  flowId: string;
  position: string;
}

export interface IBaseApiProviderRouteState {
  integration: Integration;
}

export interface IReviewActionsRouteState extends IBaseApiProviderRouteState {
  specification: string;
}

export interface ITemplateStepRouteParams extends IConfigureStepRouteParams {}
export interface ITemplateStepRouteState extends IConfigureStepRouteState {}
export interface IDataMapperRouteParams extends IConfigureStepRouteParams {}
export interface IDataMapperRouteState extends IConfigureStepRouteState {}
export interface IRuleFilterStepRouteParams extends IConfigureStepRouteParams {}
export interface IRuleFilterStepRouteState extends IConfigureStepRouteState {}

/**
 * @param integration - the integration object coming from step 3.index, used to
 * render the IVP.
 */
export interface ISelectConnectionRouteState {
  integration: Integration;
}

export interface IBaseRouteParams {
  flowId: string;
}

export interface IBaseRouteState {
  /**
   * the integration object to edit
   */
  integration: Integration;
}

export interface ISaveIntegrationRouteParams {
  flowId: string;
  integrationId?: string;
}

export interface ISaveIntegrationForm {
  name: string;
  description?: string;
}

export interface IPostPublishRouteParams {
  integrationId: string;
}

/**
 * @param integration - the integration object.
 */
export interface ISaveIntegrationRouteState {
  integration: Integration;
}

export interface IUIStep extends StepKind {
  board?: ConnectionBulletinBoard;
  connector?: Connector;
  icon: string;
  uiStepKind: 'api-provider' | StepKind['stepKind'];
  title: string;
  metadata: { [key: string]: any };
  inputDataShape?: DataShape;
  outputDataShape?: DataShape;
}

export interface IUIIntegrationStep extends IUIStep {
  shape: string | undefined;
  previousStepShouldDefineDataShape: boolean;
  shouldAddDataMapper: boolean;
  isUnclosedSplit: boolean;
}

export const stepRoutes = {
  // step 1
  selectStep: '',
  // if selected step is api provider
  apiProvider: include('api-provider', {
    selectMethod: '',
    reviewActions: 'review-actions',
    editSpecification: 'edit-specification',
    setInfo: 'set-info',
    reviewOperations: 'review-operations',
  }),
  // if selected step kind is data mapper
  dataMapper: 'mapper',
  // if selected step kind is basic filter
  basicFilter: 'filter',
  // if selected step kind is template
  template: 'template',
  // if selected step kind is step
  step: 'step',
  // if selected step kind is step
  extension: 'extension',
  // if selected step kind is endpoint
  connection: include('connection/:connectionId', {
    selectAction: '',
    configureAction: ':actionId/:step',
    // if 'any' data shape
    describeData: 'describe-data/:position/:direction',
  }),
};
/**
 * Both the integration creator and editor share the same routes when the creator
 * reaches the third step in the wizard. This object is to keep them DRY.
 */
export const editorRoutes = include(':flowId', {
  index: 'add-step',
  addStep: include(':position/add', stepRoutes),
  editStep: include(':position/edit', stepRoutes),
  saveAndPublish: 'save',
  root: '',
});