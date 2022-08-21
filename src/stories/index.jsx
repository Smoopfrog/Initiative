import { storiesOf } from '@storybook/react';
import { action } from "@storybook/addon-actions";
import React from 'react';
import Character from '../components/Character/Character';

storiesOf("Character", module)
  .add("Base", () => <Character />)
  