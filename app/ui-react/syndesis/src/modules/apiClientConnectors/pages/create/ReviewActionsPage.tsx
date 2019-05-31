import { useApiProviderSummary } from '@syndesis/api';
import * as H from '@syndesis/history';
import {
  ApiConnectorCreatorLayout,
  ButtonLink,
  OpenApiReviewActions,
  PageLoader,
  PageSection,
} from '@syndesis/ui';
import { useRouteData, WithLoader } from '@syndesis/utils';
import * as React from 'react';
import { Translation } from 'react-i18next';
import { UIContext } from '../../../../app';
import { PageTitle } from '../../../../shared';
import { WithLeaveConfirmation } from '../../../../shared/WithLeaveConfirmation';
import {
  ApiConnectorCreatorBreadcrumb,
  ApiConnectorCreatorWizardSteps,
} from '../../components';
import resolvers from '../../resolvers';
import routes from '../../routes';

export interface IReviewActionsRouteState {
  specification: string;
}

export const ReviewActionsPage: React.FunctionComponent = () => {
  const uiContext = React.useContext(UIContext);
  const { state, history } = useRouteData<null, IReviewActionsRouteState>();
  const { apiSummary, loading, error } = useApiProviderSummary(
    state.specification
  );

  React.useEffect(() => {
    if (error) {
      uiContext.pushNotification((error as Error).message, 'error');
      history.push(resolvers.create.upload());
    }
  }, [error, uiContext, history]);

  return (
    <Translation ns={['apiClientConnectors', 'shared']}>
      {t => (
        <WithLeaveConfirmation
          i18nTitle={t('unsavedChangesTitle')}
          i18nConfirmationMessage={t('unsavedChangesMessage')}
          shouldDisplayDialog={(location: H.LocationDescriptor) => {
            const url =
              typeof location === 'string' ? location : location.pathname!;
            return !url.startsWith(routes.create.root);
          }}
        >
          {() => (
            <>
              <PageTitle title={t('apiClientConnectors:create:review:title')} />
              <ApiConnectorCreatorBreadcrumb cancelHref={resolvers.list()} />
              <ApiConnectorCreatorLayout
                header={<ApiConnectorCreatorWizardSteps step={2} />}
                content={
                  <PageSection>
                    <WithLoader
                      loading={loading}
                      loaderChildren={<PageLoader />}
                      error={error !== false}
                      errorChildren={<></>}
                    >
                      {() => (
                        <>
                          <OpenApiReviewActions
                            i18nApiDefinitionHeading={t(
                              'apiClientConnectors:create:review:sectionApiDefinition'
                            )}
                            i18nDescriptionLabel={t(
                              'apiClientConnectors:create:review:descriptionLabel'
                            )}
                            i18nImportedHeading={t(
                              'apiClientConnectors:create:review:sectionImported'
                            )}
                            i18nNameLabel={t(
                              'apiClientConnectors:create:review:nameLabel'
                            )}
                            apiProviderDescription={apiSummary!.description}
                            apiProviderName={apiSummary!.name}
                            i18nOperationsHtmlMessage={`<strong>${
                              apiSummary!.actionsSummary!.totalActions
                            }</strong> operations`}
                            i18nWarningsHeading={t(
                              'apiClientConnectors:create:review:sectionWarnings'
                            )}
                            warningMessages={
                              apiSummary!.warnings
                                ? apiSummary!.warnings.map(
                                    warning => (warning as any).message
                                  )
                                : undefined
                            }
                          />
                          <div>
                            <ButtonLink href={resolvers.create.upload()}>
                              {t('Back')}
                            </ButtonLink>
                            &nbsp;&nbsp;&nbsp;
                            <ButtonLink
                              href={resolvers.create.specification({
                                specification: apiSummary!.configuredProperties!
                                  .specification,
                              })}
                            >
                              {t(
                                'apiClientConnectors:create:review:btnReviewEdit'
                              )}
                            </ButtonLink>
                            &nbsp;
                            <ButtonLink
                              as={'primary'}
                              href={resolvers.create.security({
                                specification: apiSummary!,
                              })}
                            >
                              {t('Next')}
                            </ButtonLink>
                          </div>
                        </>
                      )}
                    </WithLoader>
                  </PageSection>
                }
              />
            </>
          )}
        </WithLeaveConfirmation>
      )}
    </Translation>
  );
};