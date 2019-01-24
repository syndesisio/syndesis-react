import { WithConnection, WithIntegrationHelpers } from '@syndesis/api';
import { ConnectionOverview, Integration } from '@syndesis/models';
import { IntegrationEditorLayout, Loader } from '@syndesis/ui';
import { WithLoader, WithRouteData } from '@syndesis/utils';
import * as React from 'react';
import { WithClosedNavigation } from '../../../../../../containers';
import { PageTitle } from '../../../../../../containers/PageTitle';
import {
  IntegrationCreatorBreadcrumbs,
  IntegrationEditorChooseAction,
  IntegrationEditorSidebar,
} from '../../../../components';
import resolvers from '../../../../resolvers';
import { getEditConfigureActionHref } from '../../../resolversHelpers';

export interface ISelectActionRouteParams {
  connectionId: string;
  position: string;
}

export interface ISelectActionRouteState {
  connection: ConnectionOverview;
  integration: Integration;
}

export class SelectActionPage extends React.Component {
  public render() {
    return (
      <WithClosedNavigation>
        <WithRouteData<ISelectActionRouteParams, ISelectActionRouteState>>
          {({ connectionId, position }, { connection, integration }) => {
            const positionAsNumber = parseInt(position, 10);
            return (
              <WithConnection id={connectionId} initialValue={connection}>
                {({ data, hasData, error }) => (
                  <WithLoader
                    error={error}
                    loading={!hasData}
                    loaderChildren={<Loader />}
                    errorChildren={<div>TODO</div>}
                  >
                    {() => (
                      <>
                        <PageTitle title={'Choose an action'} />
                        <IntegrationEditorLayout
                          header={<IntegrationCreatorBreadcrumbs step={3} />}
                          sidebar={
                            <WithIntegrationHelpers>
                              {({ getSteps }) => (
                                <IntegrationEditorSidebar
                                  steps={getSteps(integration, 0)}
                                  activeIndex={positionAsNumber}
                                />
                              )}
                            </WithIntegrationHelpers>
                          }
                          content={
                            <IntegrationEditorChooseAction
                              connection={connection}
                              actions={(positionAsNumber > 0
                                ? data.actionsWithTo
                                : data.actionsWithFrom
                              ).sort((a, b) => a.name.localeCompare(b.name))}
                              getActionHref={getEditConfigureActionHref.bind(
                                null,
                                position,
                                integration
                              )}
                            />
                          }
                          cancelHref={resolvers.create.configure.index({
                            integration,
                          })}
                        />
                      </>
                    )}
                  </WithLoader>
                )}
              </WithConnection>
            );
          }}
        </WithRouteData>
      </WithClosedNavigation>
    );
  }
}