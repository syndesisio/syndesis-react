import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { StoryHelper } from '../../.storybook/StoryHelper';
import { CustomizationsExtensionDetail } from '../../src';
import {
  ExtensionType,
  IAction,
  IExtension,
  IIntegration,
} from '../../src/Customization/models';

export const extensionDetailStory = 'step extension in use';

const stories = storiesOf(
  'Customization/CustomizationsExtensionDetail',
  module
);

const integrations = [
  {
    description: "This is Integration 1's description",
    name: 'Integration 1',
  } as IIntegration,
  {
    name: 'integration-2',
  } as IIntegration,
];

const extension = {
  name: 'Loop',
  description: 'Add a loop',
  extensionId: 'io.syndesis.extensions:syndesis-extension-loop',
  actions: [
    {
      name: 'Action 1',
      description: "This is Action 1's description",
    } as IAction,
    {
      name: 'Action 2',
      description: "This is Action 2's description",
    } as IAction,
    {
      name: 'Action 3',
      description: "This is Action 3's description",
    } as IAction,
    {
      name: 'Action 4',
      description: "This is Action 4's description",
    } as IAction,
    {
      name: 'Action 5',
      description: "This is Action 5's description",
    } as IAction,
  ],
  extensionType: ExtensionType.Steps,
  uses: integrations.length,
} as IExtension;
const notUsedExtension = {
  ...extension,
  description: undefined,
  extensionType: ExtensionType.Connectors,
  uses: 0,
} as IExtension;
const libraryExtension = {
  ...extension,
  extensionType: ExtensionType.Libraries,
} as IExtension;

const deleteText = 'Delete';
const deleteActionText = deleteText + ' ' + extension.name;
const deleteTip = 'Delete this extension';
const descriptionText = 'Description';
const idMsg = '(ID: ' + extension.extensionId + ')';
const lastUpdateText = 'Last Update';
const lastUpdateDate = 'Dec 10, 2018, 10:32:28 AM';
const nameText = 'Name';
const notUsedByIntegrationsMsg = 'Not used by any integrations';
const overviewText = 'Overview';
const selectIntegrationText = 'selected integration is ';
const supportedConnectorsText = 'Supported Connectors';
const supportedLibrariesText = 'Supported Libraries';
const supportedStepsText = 'Supported Steps';
const stepTypeMessage = 'Step Extension';
const connectorTypeMessage = 'Connector Extension';
const libraryTypeMessage = 'Library Extension';
const typeText = 'Type';
const updateText = 'Update';
const updateActionText = updateText + ' ' + extension.name;
const updateTip = 'Update this extension';
const usageText = 'Usage';
const usedByIntegrationsMsg = 'Used by ' + extension.uses + ' integrations';

const inUseTestNotes =
  '- Verify the header section has the extension name of "' +
  extension.name +
  '"\n' +
  '- Verify the header section has the extension ID text of "' +
  idMsg +
  '"\n' +
  '- Verify the header section has an update and delete button\n' +
  '- Verify the update button is enabled\n' +
  '- Verify the update button text is "' +
  updateText +
  '"\n' +
  '- Verify the update button tooltip is "' +
  updateTip +
  '"\n' +
  '- Verify clicking the update button prints "' +
  updateActionText +
  '" in the ACTION LOGGER\n' +
  '- Verify the delete button is disabled\n' +
  '- Verify the delete button text is "' +
  deleteText +
  '"\n' +
  '- Verify the delete button does not have a tooltip\n' +
  '- Verify the card body has sections for overview, supported steps, and usage\n' +
  '- Verify the overview section has a title of "' +
  overviewText +
  '"\n' +
  '- Verify the overview section has a name label with a title of "' +
  nameText +
  '"\n' +
  '- Verify the extension name is "' +
  extension.name +
  '"\n' +
  '- Verify the overview section has a description label with a title of "' +
  descriptionText +
  '"\n' +
  '- Verify the extension description is "' +
  extension.description +
  '"\n' +
  '- Verify the overview section has a type label with a title of "' +
  typeText +
  '"\n' +
  '- Verify the extension type is "' +
  stepTypeMessage +
  '"\n' +
  '- Verify the overview section has a last update label with a title of "' +
  lastUpdateText +
  '"\n' +
  '- Verify the extension last update date is "' +
  lastUpdateDate +
  '"\n' +
  '- Verify the supported steps section has a title of "' +
  supportedStepsText +
  '"\n' +
  '- Verify the supported steps section has 5 actions with the appropriate names and descriptions\n' +
  '- Verify the usage section has a title of "' +
  usageText +
  '"\n' +
  '- Verify the usage section has a usage message of "' +
  usedByIntegrationsMsg +
  '"\n' +
  '- Verify the usage section has a 2 column table\n' +
  '- Verify the first column heading is "' +
  nameText +
  '"\n' +
  '- Verify the second column heading is "' +
  descriptionText +
  '"\n' +
  '- Verify the table has 2 rows of integration names and 1 description\n' +
  '- Verify the integration names show as links\n' +
  '- Verify clicking on the name of the integration prints "' +
  selectIntegrationText +
  '" and then the integration ID';

const libraryTypeTestNotes =
  '- Verify the extension type is "' +
  libraryTypeMessage +
  '"\n' +
  '- Verify the supported steps section has a title of "' +
  supportedLibrariesText +
  '"';

const notUsedTestNotes =
  '- Verify the header section has the extension name of "' +
  extension.name +
  '"\n' +
  '- Verify the header section has the extension ID text of "' +
  idMsg +
  '"\n' +
  '- Verify the header section has an update and delete button\n' +
  '- Verify the update button is enabled\n' +
  '- Verify the update button text is "' +
  updateText +
  '"\n' +
  '- Verify the update button tooltip is "' +
  updateText +
  '"\n' +
  '- Verify clicking the update button prints "' +
  updateActionText +
  '" in the ACTION LOGGER\n' +
  '- Verify the delete button is enabled\n' +
  '- Verify the delete button text is "' +
  deleteText +
  '"\n' +
  '- Verify the delete button tooltip is "' +
  deleteTip +
  '"\n' +
  '- Verify clicking the delete button prints "' +
  deleteActionText +
  '" in the ACTION LOGGER\n' +
  '- Verify the card body has sections for overview, supported steps, and usage\n' +
  '- Verify the overview section has a title of "' +
  overviewText +
  '"\n' +
  '- Verify the overview section has a name label with a title of "' +
  nameText +
  '"\n' +
  '- Verify the extension name is "' +
  extension.name +
  '"\n' +
  '- Verify the overview section has a description label with a title of "' +
  descriptionText +
  '"\n' +
  '- Verify the extension description is empty\n' +
  '- Verify the overview section has a type label with a title of "' +
  typeText +
  '"\n' +
  '- Verify the extension type is "' +
  connectorTypeMessage +
  '"\n' +
  '- Verify the overview section has a last update label with a title of "' +
  lastUpdateText +
  '"\n' +
  '- Verify the extension last update date is "' +
  lastUpdateDate +
  '"\n' +
  '- Verify the supported steps section has a title of "' +
  supportedConnectorsText +
  '"\n' +
  '- Verify the supported steps section has 5 actions with the appropriate names and descriptions\n' +
  '- Verify the usage section has a title of "' +
  usageText +
  '"\n' +
  '- Verify the usage section has a usage message of "' +
  notUsedByIntegrationsMsg +
  '"\n' +
  '- Verify the usage section does NOT have a table';

stories
  .addDecorator(story => <StoryHelper>{story()}</StoryHelper>)
  .add(
    extensionDetailStory,
    withNotes(inUseTestNotes)(() => (
      <CustomizationsExtensionDetail
        extension={extension}
        i18nDelete={deleteText}
        i18nDescription={descriptionText}
        i18nIdMessage={idMsg}
        i18nLastUpdate={lastUpdateText}
        i18nLastUpdateDate={lastUpdateDate}
        i18nName={nameText}
        i18nOverview={overviewText}
        i18nSupportedConnectors={supportedConnectorsText}
        i18nSupportedLibraries={supportedLibrariesText}
        i18nSupportedSteps={supportedStepsText}
        i18nType={typeText}
        i18nTypeMessage={stepTypeMessage}
        i18nUpdate={updateText}
        i18nUpdateTip={updateTip}
        i18nUsage={usageText}
        i18nUsageMessage={usedByIntegrationsMsg}
        onDelete={action(deleteActionText)}
        onSelectIntegration={action(selectIntegrationText)}
        onUpdate={action(updateActionText)}
        usedByIntegrations={integrations}
      />
    ))
  )
  .add(
    'connector extension not in use',
    withNotes(notUsedTestNotes)(() => (
      <CustomizationsExtensionDetail
        extension={notUsedExtension}
        i18nDelete={deleteText}
        i18nDeleteTip={deleteTip}
        i18nDescription={descriptionText}
        i18nIdMessage={idMsg}
        i18nLastUpdate={lastUpdateText}
        i18nLastUpdateDate={lastUpdateDate}
        i18nName={nameText}
        i18nOverview={overviewText}
        i18nSupportedConnectors={supportedConnectorsText}
        i18nSupportedLibraries={supportedLibrariesText}
        i18nSupportedSteps={supportedStepsText}
        i18nType={typeText}
        i18nTypeMessage={connectorTypeMessage}
        i18nUpdate={updateText}
        i18nUsage={usageText}
        i18nUsageMessage={notUsedByIntegrationsMsg}
        onDelete={action(deleteActionText)}
        onSelectIntegration={action(selectIntegrationText)}
        onUpdate={action(updateActionText)}
      />
    ))
  )
  .add(
    'library extension in use',
    withNotes(libraryTypeTestNotes)(() => (
      <CustomizationsExtensionDetail
        extension={libraryExtension}
        i18nDelete={deleteText}
        i18nDescription={descriptionText}
        i18nIdMessage={idMsg}
        i18nLastUpdate={lastUpdateText}
        i18nLastUpdateDate={lastUpdateDate}
        i18nName={nameText}
        i18nOverview={overviewText}
        i18nSupportedConnectors={supportedConnectorsText}
        i18nSupportedLibraries={supportedLibrariesText}
        i18nSupportedSteps={supportedStepsText}
        i18nType={typeText}
        i18nTypeMessage={libraryTypeMessage}
        i18nUpdate={updateText}
        i18nUpdateTip={updateTip}
        i18nUsage={usageText}
        i18nUsageMessage={usedByIntegrationsMsg}
        onDelete={action(deleteActionText)}
        onSelectIntegration={action(selectIntegrationText)}
        onUpdate={action(updateActionText)}
        usedByIntegrations={integrations}
      />
    ))
  );
