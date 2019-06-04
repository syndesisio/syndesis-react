import * as H from '@syndesis/history';
import { Button, Grid } from 'patternfly-react';
import * as React from 'react';
import { ButtonLink, Container } from '../../Layout';
import './ExtensionImportReview.css';

export interface IImportAction {
  description: string;
  name: string;
}

export interface IExtensionImportReviewProps {
  /**
   * The extension actions.
   */
  actions?: IImportAction[];

  /**
   * The href that will be navigated to when the cancel button is clicked.
   */
  cancelLink: H.LocationDescriptor;

  /**
   * The optional description of the extension.
   */
  extensionDescription?: string;

  /**
   * The ID of the extension.
   */
  extensionId: string;

  /**
   * The name of the extension.
   */
  extensionName: string;

  /**
   * The unique, not for user consumption, identifier.
   */
  extensionUid: string;

  /**
   * The localized label for the list of actions.
   */
  i18nActionsLabel: string;

  /**
   * The localized text for the cancel button.
   */
  i18nCancel: string;

  /**
   * The localized 'Description' label.
   */
  i18nDescriptionLabel: string;

  /**
   * The localized text identifying the extension type.
   */
  i18nExtensionTypeMessage: string;

  /**
   * The localized 'ID' label.
   */
  i18nIdLabel: string;

  /**
   * The localized text for the import button.
   */
  i18nImport: string;

  /**
   * The localized 'Name' label.
   */
  i18nNameLabel: string;

  /**
   * The localized title.
   */
  i18nTitle: string;

  /**
   * The localized 'Type' label.
   */
  i18nTypeLabel: string;

  /**
   * Obtains a localized message with the action name and description.
   * @param name the action name
   * @param description the action description
   */
  i18nActionText(name: string, description: string): string;

  /**
   * Callback for when the import button is clicked.
   * @param extensionUid the UID of the extension being imported/installed
   */
  onImport(extensionUid: string): void;
}

/**
 * A function component that displays the extension import review information.
 */
export const ExtensionImportReview: React.FunctionComponent<
  IExtensionImportReviewProps
> = props => {
  const getActions = (): JSX.Element => {
    if (!props.actions) {
      return <Grid.Col />;
    }

    return (
      <Container>
        {props.actions
          ? props.actions.map((action, index) =>
              index === 0 ? (
                <Grid.Col
                  key={0}
                  dangerouslySetInnerHTML={{
                    __html: props.i18nActionText(
                      action.name,
                      action.description
                    ),
                  }}
                />
              ) : (
                <Grid.Row key={index}>
                  <Grid.Col key={0} xs={2} />
                  <Grid.Col
                    key={1}
                    dangerouslySetInnerHTML={{
                      __html: props.i18nActionText(
                        action.name,
                        action.description
                      ),
                    }}
                  />
                </Grid.Row>
              )
            )
          : null}
      </Container>
    );
  };

  const handleImport = () => {
    return props.onImport(props.extensionUid);
  };

  return (
    <Grid className="extension-import-review__container">
      <Grid.Row className="extension-import-review__title">
        {props.i18nTitle}
      </Grid.Row>
      <Grid.Row>
        <Grid.Col xs={2} className="extension-import-review__propertyLabel">
          {props.i18nIdLabel}
        </Grid.Col>
        <Grid.Col className="extension-import-review__propertyValue">
          {props.extensionId}
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col xs={2} className="extension-import-review__propertyLabel">
          {props.i18nNameLabel}
        </Grid.Col>
        <Grid.Col className="extension-import-review__propertyValue">
          {props.extensionName}
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col xs={2} className="extension-import-review__propertyLabel">
          {props.i18nDescriptionLabel}
        </Grid.Col>
        <Grid.Col className="extension-import-review__propertyValue">
          {props.extensionDescription ? props.extensionDescription : null}
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col xs={2} className="extension-import-review__propertyLabel">
          {props.i18nTypeLabel}
        </Grid.Col>
        <Grid.Col className="extension-import-review__propertyValue">
          {props.i18nExtensionTypeMessage}
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col xs={2} className="extension-import-review__propertyLabel">
          {props.i18nActionsLabel}
        </Grid.Col>
        {getActions()}
      </Grid.Row>
      <Grid.Row>
        <Grid.Col xsOffset={2}>
          <Grid.Row>
            <Grid.Col>
              <Container className="extension-import-review__buttonBar">
                <Button bsStyle="primary" onClick={handleImport}>
                  {props.i18nImport}
                </Button>
                <ButtonLink
                  data-testid={'extension-import-review-cancel-button'}
                  className="extension-import-review__cancelButton"
                  href={props.cancelLink}
                  as={'default'}
                >
                  {props.i18nCancel}
                </ButtonLink>
              </Container>
            </Grid.Col>
          </Grid.Row>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  );
};
