import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import SectionLayout from './layouts/SectionLayout';

const CertificationItem = ({ data }) => {
    const fm = data.node.frontmatter;

    const badge = fm.badge;
    const verify = fm.verify;
    const title = fm.title;

    return (
        <a href={verify} className='self-start'>
            <GatsbyImage
                image={getImage(badge)}
                alt={title}
                layout="constrained"
                className="w-32 xs:w-44 sm:w-48 md:w-56 lg:w-64 m-3"
            />
        </a>
    );
};

const Certification = () => {
    const query = graphql`
        {
            certification: allMarkdownRemark(
                filter: { frontmatter: { slug: { regex: "/certification/" } } }
                sort: { frontmatter: { rating: DESC } }
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            verify
                            badge {
                                childImageSharp {
                                    gatsbyImageData
                                }
                            }
                        }
                    }
                }
            }
        }
    `;
    const data = useStaticQuery(query);
    return (
        <SectionLayout title={'CERTIFICATIONS'} keepTitleLeft={true}>
            <div className="flex flex-col lg:flex-row justify-start gap-24 basis-full">
                {data.certification.edges.map((node) => (
                    <CertificationItem key={node.node.id} data={node} />
                ))}
            </div>
        </SectionLayout>
    );
};
export default Certification;
