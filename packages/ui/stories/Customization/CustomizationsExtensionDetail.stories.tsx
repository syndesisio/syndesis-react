import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { StoryHelper } from '../../.storybook/StoryHelper';
import { Extension } from '@syndesis/models';
import { OptionalIntUtils } from '@syndesis/utils';
import { CustomizationsExtensionDetail } from '../../src';

export const extensionDetailStory = 'used by integrations';

const stories = storiesOf(
  'Customization/CustomizationsExtensionDetail',
  module
);

const integrations = [
  {
    description: "This is Integration 1's description",
    id: 'integration-1',
    name: 'Integration 1',
  },
  {
    description: "This is Integration 2's description",
    id: 'integration-2',
    name: 'Integration 2',
  },
];

const extension = {
  schemaVersion: '1.0',
  name: 'Loop',
  description: 'Add a loop',
  extensionId: 'io.syndesis.extensions:syndesis-extension-loop',
  actions: [
    { name: 'Action 1', description: "This is Action 1's description" },
    { name: 'Action 2', description: "This is Action 2's description" },
    { name: 'Action 3', description: "This is Action 3's description" },
    { name: 'Action 4', description: "This is Action 4's description" },
    { name: 'Action 5', description: "This is Action 5's description" },
  ],
  extensionType: 'Steps',
  uses: OptionalIntUtils.create(integrations.length),
} as Extension;
const notUsedExtension = { ...extension, uses: 0 } as Extension;

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
const propDescription = 'description';
const propName = 'name';
const selectIntegrationText = 'selected integration is ';
const supportedConnectorsText = 'Supported Connectors';
const supportedStepsText = 'Supported Steps';
const typeMessage = 'Step Extension';
const typeText = 'Type';
const updateText = 'Update';
const updateActionText = updateText + ' ' + extension.name;
const updateTip = 'Update this extension';
const usageText = 'Usage';
const usedByIntegrationsMsg =
  'Used by ' + OptionalIntUtils.getValue(extension.uses) + ' integrations';

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
  typeMessage +
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
  '- Verify the table has 2 rows of data and the integration names and descriptions are appropriate\n' +
  '- Verify the integration names show as links\n' +
  '- Verify clicking on the name of the integration prints "' +
  selectIntegrationText +
  '" and then the integration ID';

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
  '- Verify the extension description is "' +
  extension.description +
  '"\n' +
  '- Verify the overview section has a type label with a title of "' +
  typeText +
  '"\n' +
  '- Verify the extension type is "' +
  typeMessage +
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
        i18nSupportedSteps={supportedStepsText}
        i18nType={typeText}
        i18nTypeMessage={typeMessage}
        i18nUpdate={updateText}
        i18nUpdateTip={updateTip}
        i18nUsage={usageText}
        i18nUsageMessage={usedByIntegrationsMsg}
        onDelete={action(deleteActionText)}
        onSelectIntegration={action(selectIntegrationText)}
        onUpdate={action(updateActionText)}
        propName={propName}
        propDescription={propDescription}
        usedByIntegrations={integrations}
      />
    ))
  )
  .add(
    'not used by any integrations',
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
        i18nSupportedSteps={supportedStepsText}
        i18nType={typeText}
        i18nTypeMessage={typeMessage}
        i18nUpdate={updateText}
        i18nUsage={usageText}
        i18nUsageMessage={notUsedByIntegrationsMsg}
        onDelete={action(deleteActionText)}
        onSelectIntegration={action(selectIntegrationText)}
        onUpdate={action(updateActionText)}
        propName={propName}
        propDescription={propDescription}
      />
    ))
  );
