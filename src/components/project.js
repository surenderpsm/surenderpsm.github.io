import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import SectionLayout from './layouts/SectionLayout';
const ProjectItem = ({ data }) => {
    const fm = data.node.frontmatter;
    const content = data.node.html;

    const title = fm.title;
    const link = fm.link;
    const description = fm.description;
    const tags = fm.tags;
    const category = fm.category;
    const icons = fm.icons;
    const demo = fm.demo;
    return (
        <div className="flex flex-col-reverse md:flex-row px-5 pb-10">
            <div>
                <img src={demo.publicURL} className="w-fit" />
            </div>
            <div className="flex flex-row ml-3">
                <div>
                    <h2>{title}</h2>
                    <h3>{description}</h3>
                    <h4>{link}</h4>
                    <div>
                        {tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                        ))}
                    </div>
                    <div>
                        {category.map((cat) => (
                            <span key={cat}>{cat}</span>
                        ))}
                    </div>
                    <div
                        className="content"
                        dangerouslySetInnerHTML={{ __html: content }}
                    ></div>
                </div>
                <div>
                    {icons.map((element) => {
                        return (
                            <GatsbyImage
                                key={element.name}
                                image={getImage(element.icon)}
                                alt={element.name}
                                layout="constrained"
                                className="supplement-icon"
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
const Project = () => {
    const getProjectquery = graphql`
        {
            project: allMarkdownRemark(
                filter: { frontmatter: { slug: { regex: "/project/" } } }
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            link
                            description
                            tags
                            category
                            icons {
                                name
                                icon {
                                    childImageSharp {
                                        gatsbyImageData
                                    }
                                }
                            }
                            demo {
                                publicURL
                            }
                        }
                        html
                    }
                }
            }
        }
    `;
    const data = useStaticQuery(getProjectquery);
    return (
        <SectionLayout title={'PROJECTS'} keepTitleLeft={false}>
            {data.project.edges.map((node) => (
                <ProjectItem key={node.node.id} data={node} />
            ))}
        </SectionLayout>
    );
};
export default Project;
