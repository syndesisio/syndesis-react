import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { linkTo } from '@storybook/addon-links';
import { withNotes } from '@storybook/addon-notes';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ExtensionListItem, ExtensionListView } from '../../src';
import { extensionImportStory } from './ExtensionImport.stories';

const description =
  'Extensions provide custom features for use in integrations. Find out more at Syndesis Help.';
const importText = 'Import Extension';
const importTip = 'Import extension from your filesystem';
const title = 'Extensions';

const extensions = [
  <ExtensionListItem
    detailsPageLink={'/extensions/id-0'}
    extensionDescription="id-0 description goes here"
    extensionId={'id-0'}
    extensionName={'id-0 name'}
    i18nCancelText={'Cancel'}
    i18nDelete={'Delete'}
    i18nDeleteModalMessage={
      'Are you sure you want to delete the "id-0" extension?'
    }
    i18nDeleteModalTitle={'Confirm Delete?'}
    i18nDetails={'Details'}
    i18nExtensionType={'Step Extension'}
    i18nUpdate={'Update'}
    i18nUsedByMessage={'Used by 0 integration(s)'}
    onDelete={action('Delete id-0')}
    onUpdate={action('Update id-0')}
    usedBy={0}
  />,
  <ExtensionListItem
    detailsPageLink={'/extensions/id-1'}
    extensionId={'id-1'}
    extensionName={'id-1 name'}
    i18nCancelText={'Cancel'}
    i18nDelete={'Delete'}
    i18nDeleteModalMessage={
      'Are you sure you want to delete the "id-1" extension?'
    }
    i18nDeleteModalTitle={'Confirm Delete?'}
    i18nDetails={'Details'}
    i18nExtensionType={'Step Extension'}
    i18nUpdate={'Update'}
    i18nUsedByMessage={'Used by 1 integration(s)'}
    onDelete={action('Delete id-1')}
    onUpdate={action('Update id-1')}
    usedBy={1}
  />,
  <ExtensionListItem
    detailsPageLink={'/extensions/id-2'}
    extensionId={'id-2'}
    extensionName={'id-2 name'}
    i18nCancelText={'Cancel'}
    i18nDelete={'Delete'}
    i18nDeleteModalMessage={
      'Are you sure you want to delete the "id-2" extension?'
    }
    i18nDeleteModalTitle={'Confirm Delete?'}
    i18nDetails={'Details'}
    i18nExtensionType={'Step Extension'}
    i18nUpdate={'Update'}
    i18nUsedByMessage={'Used by 2 integration(s)'}
    onDelete={action('Delete id-2')}
    onUpdate={action('Update id-2')}
    usedBy={2}
  />,
];

const stories = storiesOf(
  'Customization/Extensions/Component/ExtensionListView',
  module
);

const hasExtensionsTestNotes =
  '- Verify page title is "' +
  title +
  '"\n' +
  '- Verify page description is "' +
  description +
  '"\n' +
  '- Verify toolbar is displayed\n' +
  '- Verify toolbar contains an "' +
  importText +
  '" button\n' +
  '- Verify the "' +
  importText +
  '" button is enabled\n' +
  '- Verify the "' +
  importText +
  '" button has a tooltip of "' +
  importTip +
  '"\n' +
  '- Verify empty state component does not show\n' +
  '- Verify results message shows ' +
  extensions.length +
  ' Results\n' +
  '- Verify ' +
  extensions.length +
  ' extension list items are displayed';

const noExtensionsTestNotes =
  '- Verify page title is "' +
  title +
  '"\n' +
  '- Verify page description is "' +
  description +
  '"\n' +
  '- Verify toolbar is displayed\n' +
  '- Verify toolbar contains an "' +
  importText +
  '" button\n' +
  '- Verify the "' +
  importText +
  '" button is enabled\n' +
  '- Verify the "' +
  importText +
  '" button has a tooltip of "' +
  importText +
  '"\n' +
  '- Verify empty state component is displayed and has an import extension button\n' +
  '- Verify no extension list items are displayed\n' +
  '- Verify results message shows 0 Results';

stories
  .add(
    'no extensions',
    withNotes(noExtensionsTestNotes)(() => (
      <Router>
        <ExtensionListView
          activeFilters={[]}
          currentFilterType={{
            filterType: 'text',
            id: 'name',
            placeholder: text('placeholder', 'Filter by name'),
            title: text('title', 'Name'),
          }}
          currentSortType={'sort'}
          currentValue={''}
          filterTypes={[]}
          isSortAscending={true}
          linkImportExtension={linkTo('Customization', extensionImportStory)}
          resultsCount={0}
          sortTypes={[]}
          onUpdateCurrentValue={action('onUpdateCurrentValue')}
          onValueKeyPress={action('onValueKeyPress')}
          onFilterAdded={action('onFilterAdded')}
          onSelectFilterType={action('onSelectFilterType')}
          onFilterValueSelected={action('onFilterValueSelected')}
          onRemoveFilter={action('onRemoveFilter')}
          onClearFilters={action('onClearFilters')}
          onToggleCurrentSortDirection={action('onToggleCurrentSortDirection')}
          onUpdateCurrentSortType={action('onUpdateCurrentSortType')}
          i18nDescription={text('i18nDescription', description)}
          i18nEmptyStateInfo={text(
            'i18nEmptyStateInfo',
            'There are no extensions available. Please click on the button below to import one.'
          )}
          i18nEmptyStateTitle={text('i18nEmptyStateTitle', importText)}
          i18nLinkImportExtension={text('i18nLinkImportExtension', importText)}
          i18nName={text('i18nName', 'Name')}
          i18nNameFilterPlaceholder={text(
            'i18nNameFilterPlaceholder',
            'Filter by Name...'
          )}
          i18nResultsCount={text('i18nResultsCount', '0 Results')}
          i18nTitle={text('i18nTitle', title)}
        />
      </Router>
    ))
  )
  .add(
    'has extensions',
    withNotes(hasExtensionsTestNotes)(() => (
      <Router>
        <ExtensionListView
          activeFilters={[]}
          currentFilterType={{
            filterType: 'text',
            id: 'name',
            placeholder: text('placeholder', 'Filter by name'),
            title: text('title', 'Name'),
          }}
          currentSortType={'sort'}
          currentValue={''}
          filterTypes={[]}
          isSortAscending={true}
          linkImportExtension={linkTo('Customization', extensionImportStory)}
          resultsCount={0}
          sortTypes={[]}
          onUpdateCurrentValue={action('onUpdateCurrentValue')}
          onValueKeyPress={action('onValueKeyPress')}
          onFilterAdded={action('onFilterAdded')}
          onSelectFilterType={action('onSelectFilterType')}
          onFilterValueSelected={action('onFilterValueSelected')}
          onRemoveFilter={action('onRemoveFilter')}
          onClearFilters={action('onClearFilters')}
          onToggleCurrentSortDirection={action('onToggleCurrentSortDirection')}
          onUpdateCurrentSortType={action('onUpdateCurrentSortType')}
          i18nDescription={text('i18nDescription', description)}
          i18nEmptyStateInfo={text(
            'i18nEmptyStateInfo',
            'There are no extensions available. Please click on the button below to import one.'
          )}
          i18nEmptyStateTitle={text('i18nEmptyStateTitle', importText)}
          i18nLinkImportExtension={text('i18nLinkImportExtension', importText)}
          i18nLinkImportExtensionTip={importTip}
          i18nName={text('i18nName', 'Name')}
          i18nNameFilterPlaceholder={text(
            'i18nNameFilterPlaceholder',
            'Filter by Name...'
          )}
          i18nResultsCount={text(
            'i18nResultsCount',
            extensions.length + ' Results'
          )}
          i18nTitle={text('i18nTitle', title)}
          children={extensions}
        />
      </Router>
    ))
  );
