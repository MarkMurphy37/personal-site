import React from 'react';
import Layout from '../components/layout';
import Helmet from 'react-helmet';
import Emoji from '../components/emoji';
import '../scss/pages/success.scss';

const Success = props => (
	<Layout url="/success">
		<Helmet>
			<title>🙌🏼 Success - MarkMurphy.io</title>
		</Helmet>
		<div className="success-wrapper">
			<h1>
				Success! <Emoji symbol="🙌🏼" />
			</h1>
			<div className="success-content">Thank you for reaching out. I will be in touch shortly!</div>
		</div>
	</Layout>
);

export default Success;
