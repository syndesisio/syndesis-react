import { text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { IntegrationDetailTab } from '../../src';

const stories = storiesOf('Integration/IntegrationDetailTab', module);

stories.add(
  'detail tab',
  withNotes('Verify the integration details are being displayed')(() => (
    <IntegrationDetailTab />
  ))
);
