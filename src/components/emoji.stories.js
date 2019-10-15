import React from 'react';
import { storiesOf } from '@storybook/react';
import Emoji from './emoji';

storiesOf('Emoji', module).add('default', () => (
	<Emoji symbol="😎" label={'Emoji wearing sunglasses'} />
));
