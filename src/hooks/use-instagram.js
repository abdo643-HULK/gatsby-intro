import { graphql, useStaticQuery } from 'gatsby';

const useInsta = () => {
	const data = useStaticQuery(graphql`
		query {
			allInstaNode(limit: 12) {
				nodes {
					id
					caption
					username
					localFile {
						childImageSharp {
							fluid(maxWidth: 120, maxHeight: 120) {
								...GatsbyImageSharpFluid_withWebp
							}
						}
					}
				}
			}
		}
	`);

	return data.allInstaNode.nodes.map((node) => ({
		...node.localFile.childImageSharp,
		id: node.id,
		caption: node.caption,
		userid: node.username,
	}));
};

export default useInsta;