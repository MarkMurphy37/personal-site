import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from './layout';
import Emoji from '../components/emoji';
import '../scss/components/blog-post.scss';

export default function Template({ data }) {
	const { markdownRemark: post } = data;
	const coffee = '☕';

	return (
		<Layout url={post.frontmatter.path}>
			<Helmet title={`${post.frontmatter.title} - Mark Murphy`} />
			<div className="blog-post-wrapper">
				<div className="blog-post">
					<h1>{post.frontmatter.title}</h1>
					<small>
						{post.frontmatter.date} •{' '}
						<Emoji
							symbol={coffee.repeat(
								Math.ceil(post.fields.readingTime.minutes / 5)
							)}
						/>{' '}
						{post.fields.readingTime.text}
					</small>
					<div
						className="blog-post-content"
						dangerouslySetInnerHTML={{ __html: post.html }}
					/>
				</div>
			</div>
		</Layout>
	);
}

export const pageQuery = graphql`
	query BlogPostByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				path
				title
			}
			fields {
				readingTime {
					text
					minutes
				}
			}
		}
	}
`;
