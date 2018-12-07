import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import '../scss/pages/blog.scss';

export default function Blog({ data }) {
	const { edges: posts } = data.allMarkdownRemark;
	return (
		<Layout url={'/blog'}>
			<div className="blog-wrapper">
				{posts
					.filter(post => post.node.frontmatter.title.length > 0)
					.map(({ node: post }) => {
						return (
							<Link key={post.frontmatter.path} to={post.frontmatter.path}>
								<div className="blog-post-preview" key={post.id}>
									<h1>{post.frontmatter.title}</h1>
									<small>{post.frontmatter.date}</small>
									<p>{post.frontmatter.description}</p>
								</div>
							</Link>
						);
					})}
			</div>
		</Layout>
	);
}

export const pageQuery = graphql`
	query BlogQuery {
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
					excerpt(pruneLength: 250)
					id
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
						description
						path
					}
				}
			}
		}
	}
`;
