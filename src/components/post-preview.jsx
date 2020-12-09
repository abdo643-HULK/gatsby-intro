import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import ReadLink from './read-link';
import Image from 'gatsby-image';

const PostPreview = ({ post }) => (
	<article
		css={css`
		display: flex;

			border-bottom: 1px solid #ddd;
			margin-top: 0;
			padding-bottom:1rem;
			
			:first-of-type {
				margin-top 1rem;
			}
		`}
	>
		<Link
			to={post.slug}
			css={css`margin 1rem 1rem 0 0;
			 width: 100px;`}
		>
			<Image
				css={css`
					* {
						margin-top: 0;
					}
				`}
				fluid={post.image.sharp.fluid}
				alt={post.title}
			/>
		</Link>
		<div>
			<h3>{post.title}</h3>
			<p>{post.excerpt}</p>
			<ReadLink to={post.slug}>read this post →</ReadLink>
		</div>
	</article>
);

export default PostPreview;
