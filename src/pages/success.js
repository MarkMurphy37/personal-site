import React from 'react';
import Layout from '../components/layout';
import Helmet from 'react-helmet';
import Emoji from '../components/emoji';

const Success = props => (
	<Layout url="/success">
		<Helmet>
			<title>🙌🏼 Success - MarkMurphy.io</title>
		</Helmet>
		<h1>
			Success! <Emoji symbol="🙌🏼" />
		</h1>
		<div>Thank you for reaching out. I will be in touch shortly!</div>
	</Layout>
);

export default Success;
