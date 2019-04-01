import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { QueryResults, RowData } from '@syndesis/models';
import * as React from 'react';
import { QueryResultsTable } from '../../../src';

const stories = storiesOf('Data/Views/QueryResultsTable', module);

const columnData1 = [
  {
    label: 'ID',
    name: 'Id',
    type: 'long',
  },
  {
    label: 'Name',
    name: 'Name',
    type: 'varchar',
  },
  {
    label: 'Code',
    name: 'Code',
    type: 'varchar',
  },
];

const columnData2 = [
  {
    label: 'First Name',
    name: 'firstname',
    type: 'varchar',
  },
  {
    label: 'Last Name',
    name: 'lastname',
    type: 'varchar',
  },
  {
    label: 'Age',
    name: 'age',
    type: 'varchar',
  },
  {
    label: 'ID',
    name: 'id',
    type: 'long',
  },
  {
    label: 'City',
    name: 'city',
    type: 'varchar',
  },
  {
    label: 'Country',
    name: 'countrycode',
    type: 'varchar',
  },
];

const rowData1: RowData[] = [
  {
    row: ['1', 'Florida', 'FL'],
  },
  {
    row: ['2', 'Missouri', 'MO'],
  },
  {
    row: ['3', 'Washington', 'WA'],
  },
];

const rowData2: RowData[] = [
  {
    row: ['Jean', 'Frissilla', '43', '111111111', 'Florence', 'Italy'],
  },
  {
    row: ['John', 'Johnson', '25', '222222222', 'Jackson', 'US'],
  },
  {
    row: ['Juan', 'Bautista', '37', '333333333', 'Sao Poulo', 'Brazil'],
  },
  {
    row: ['Jordan', 'Dristol', '36', '444444444', 'Morton', 'Ontario'],
  },
  {
    row: ['Jenny', 'Clayton', '22', '555555555', 'Clearwater', 'US'],
  },
  {
    row: ['Jorge', 'Rivera', '55', '666666666', 'Mexico City', 'Mexico'],
  },
  {
    row: ['Jake', 'Klein', '33', '777777777', 'Watertown', 'US'],
  },
  {
    row: ['Júlia', 'Zhang', '29', '888888888', 'Xianning', 'China'],
  },
];

const queryResults0: QueryResults = {
  columns: [],
  rows: [],
};

const queryResults1: QueryResults = {
  columns: columnData1,
  rows: rowData1,
};

const queryResults2: QueryResults = {
  columns: columnData2,
  rows: rowData2,
};

const sampleNoQuerynotes = '- Verify table contains 3 columns with 5 rows';

const sample3x5notes = '- Verify table contains 3 columns with 5 rows';

const sample6x8notes = '- Verify table contains 6 columns with 8 rows';

const i8nEmptyStateInfo =
  'Query has not yet been executed. Enter virtualization name, SQL query and click SUBMIT';
const i18nEmptyStateTitle = 'NO DATA AVAILABLE';

stories
  .add(
    'No Query Results',
    () => (
      <div>
        <h1>Query Results Table</h1>
        <QueryResultsTable
          i18nEmptyStateTitle={text('i18nEmptyStateTitle', i18nEmptyStateTitle)}
          i18nEmptyStateInfo={text('i18nEmptyStateInfo', i8nEmptyStateInfo)}
          queryResults={queryResults0 as QueryResults}
        />
      </div>
    ),
    { notes: sampleNoQuerynotes }
  )
  .add(
    'Sample 3x5 Table',
    () => (
      <div>
        <h1>Query Results Table</h1>
        <QueryResultsTable
          i18nEmptyStateTitle={text('i18nEmptyStateTitle', i18nEmptyStateTitle)}
          i18nEmptyStateInfo={text('i18nEmptyStateInfo', i8nEmptyStateInfo)}
          queryResults={queryResults1 as QueryResults}
        />
      </div>
    ),
    { notes: sample3x5notes }
  )
  .add(
    'Sample 6x8 Table',
    () => (
      <div>
        <h1>Query Results Table</h1>
        <QueryResultsTable
          i18nEmptyStateTitle={text('i18nEmptyStateTitle', i18nEmptyStateTitle)}
          i18nEmptyStateInfo={text('i18nEmptyStateInfo', i8nEmptyStateInfo)}
          queryResults={queryResults2 as QueryResults}
        />
      </div>
    ),
    { notes: sample6x8notes }
  );
