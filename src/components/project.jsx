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
    const status = fm.status;
    const repo = fm.repo;

    const archived = status === 'Archived';
    const live = status === 'Live';
    const incomplete = status === 'Work in Progress';
    return (
        <div className="flex flex-col-reverse xl:flex-row px-5 pb-10">
            {/* <div className="basis-1/4 flex justify-center">
                <img src={demo.publicURL} className="w-fit" />
            </div> */}
            <div className="flex flex-row">
                {/**
                 * Main content for project
                 */}
                <div>
                    {/**
                     * div for category and outlinks
                     */}
                    <div className="flex flex-row justify-between">
                        <div>
                            {category.map((cat) => (
                                <span
                                    className="tag bg-orange-200 dark:bg-orange-800"
                                    key={cat}
                                >
                                    {cat}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-col justify-start sm:flex-row sm:justify-end">
                            {incomplete && (
                                <div className="tag bg-blue-300 dark:bg-blue-700 font-sans">
                                    Work in Progress
                                </div>
                            )}
                            {live && (
                                <div className="tag bg-green-300 dark:bg-green-700 font-sans">
                                    Live
                                </div>
                            )}
                            {archived && (
                                <div className="tag bg-yellow-300 dark:bg-yellow-700 font-sans">
                                    Archived
                                </div>
                            )}
                            <a href={link}>
                                <svg
                                    className="size-7 m-1 hover:scale-110 animate-pulse"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g>
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path
                                            fill="currentColor"
                                            d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v9l-3.794-3.793-5.999 6-1.414-1.414 5.999-6L12 3h9z"
                                        />
                                    </g>
                                </svg>
                            </a>
                            <a href={repo}>
                                <svg
                                    className="size-7 m-1 hover:scale-110 animate-pulse"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g>
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path
                                            fill="currentColor"
                                            d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
                                        />
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <h2>{title}</h2>

                    <h3>{description}</h3>
                    {/**
                     *
                     */}
                    <div>
                        {tags.map((tag) => (
                            <div
                                className="tag bg-lime-200 dark:bg-lime-800 font-mono"
                                key={tag}
                            >
                                {tag}
                            </div>
                        ))}
                    </div>

                    <div
                        className="content"
                        dangerouslySetInnerHTML={{ __html: content }}
                    ></div>
                </div>

                <div className="flex flex-col items-center flex-wrap">
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
const Project = ({ color }) => {
    const getProjectquery = graphql`
        {
            project: allMarkdownRemark(
                filter: { frontmatter: { slug: { regex: "/project/" } } }
                sort: { frontmatter: { rating: DESC } }
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            status
                            title
                            link
                            repo
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
        <SectionLayout
            title={'PROJECTS'}
            color={color}
            subtitle={"See what I'm upto"}
        >
            <div className="section-content-wrapper flex flex-col justify-start basis-full bg-neutral-400/85 dark:bg-black/30">
                {data.project.edges.map((node) => (
                    <ProjectItem key={node.node.id} data={node} />
                ))}
            </div>
        </SectionLayout>
    );
};
export default Project;
