import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { StoryHelper } from '../../.storybook/StoryHelper';
import { formBuilder } from '../../src/FormBuilder/FormBuilder';
import { FormData } from './sample.properties';

const stories = storiesOf('Components', module);

stories
  .addDecorator(story => <StoryHelper>{story()}</StoryHelper>)
  .add('FormBuilder', () => (
    <div>
      <h2>Basic Form Example</h2>
      {formBuilder(FormData.BasicForm.properties)}
      <h2>Native Form Controls Example</h2>
      {formBuilder(FormData.NativeControls.properties)}
      {/* <h2>Custom Form Controls Example</h2> */}
      {/* {formBuilder(FormData.CustomControls.properties)} */}
    </div>
  ));
