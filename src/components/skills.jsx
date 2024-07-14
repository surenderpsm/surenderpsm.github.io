import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import SectionLayout from './layouts/SectionLayout';

const SkillItem = ({ icon, name, color, level, size }) => {
    return (
        <div className={`flex flex-col justify-between m-1 w-28 md:w-36 ${color}`} >
            {icon && level ? (
                <>
                    {icon}
                    <div className="flex flex-col-reverse justify-between m-1">
                       {level}
                       {name}
                    </div>
                </>
            ) : (
                <>
                    {level ? (
                        <>
                            {name}
                            <div className="flex flex-row justify-start">
                                {level}
                            </div>
                        </>
                    ) : (
                        name
                    )}
                </>
            )}
        </div>
    );
};

const SkillCategory = ({ data, category, color, levelMatrix }) => {
    const textOnlyCategory = (category === 'Soft Skills' || category === 'Languages')
    return (
        <div className='flex flex-row m-3 flex-wrap'>
            <SkillItem name={<span className={`text-md md:text-xl font-["Noto_Sans_Display"] m-1`}>{category}</span>} color={'bg-neutral-200 dark:bg-neutral-900'} />
                {data.map((data, index) => {
                    const levelMsg = data.level
                        ? <span className={`${data.icon?'text-xs':'text-md m-1'}`}>{levelMatrix[data.level]}</span>
                        : null;
                    const icon = data.icon ? (
                        <GatsbyImage
                            image={getImage(data.icon)}
                            alt={data.name}
                            className="aspect-square m-2"
                        />
                    ) : null;
                    return (
                        <SkillItem
                            key={index}
                            icon={icon}
                            name={<span className={`${data.icon?'text-sm':'text-lg m-1'}`}>{data.name}</span>}
                            color={color}
                            level={levelMsg}
                            size = {data.level}
                        />
                    );
                })}
        </div>
    );
};

const Skills = () => {
    const query = graphql`
        {
            skills: allMarkdownRemark(
                filter: { frontmatter: { slug: { regex: "/skills/" } } }
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            databases {
                                icon {
                                    childImageSharp {
                                        gatsbyImageData
                                    }
                                }
                                name
                                level
                            }
                            frameworks {
                                icon {
                                    childImageSharp {
                                        gatsbyImageData
                                    }
                                }
                                name
                                level
                            }
                            cloud {
                                icon {
                                    childImageSharp {
                                        gatsbyImageData
                                    }
                                }
                                name
                                level
                            }
                            pl {
                                icon {
                                    childImageSharp {
                                        gatsbyImageData
                                    }
                                }
                                name
                                level
                            }
                            tools {
                                icon {
                                    childImageSharp {
                                        gatsbyImageData
                                    }
                                }
                                name
                                level
                            }
                            softskills {
                                name
                            }
                            languages {
                                name
                                level
                            }
                        }
                    }
                }
            }
        }
    `;
    const data = useStaticQuery(query).skills.edges[0].node;
    const skills = [
        {
            name: 'Databases',
            data: data.frontmatter.databases,
            color: 'bg-blue-200 dark:bg-blue-800',
            levelMatrix: {
                1: 'Used Once',
                2: 'Basic Knowledge',
                3: 'Comfortable',
                4: 'Proficient',
            },
        },
        {
            name: 'Cloud Platforms',
            data: data.frontmatter.cloud,
            color: 'bg-red-200 dark:bg-red-800',
            levelMatrix: {
                1: 'Deployed once',
                2: 'Basic Operations',
                3: 'Comfortable',
                4: 'Proficient',
            },
        },
        {
            name: 'Frameworks',
            data: data.frontmatter.frameworks,
            color: 'bg-green-200 dark:bg-green-800',
            levelMatrix: {
                1: 'Built one project',
                2: 'Basic Knowledge',
                3: 'Comfortable',
                4: 'Proficient',
            },
        },
        {
            name: 'Programming Languages',
            data: data.frontmatter.pl,
            color: 'bg-orange-200 dark:bg-orange-900',
            levelMatrix: {
                1: 'Used Once',
                2: 'Basic Knowledge',
                3: 'Comfortable',
                4: 'Proficient',
            },
        },
        {
            name: 'Tools',
            data: data.frontmatter.tools,
            color: 'bg-yellow-200 dark:bg-yellow-900',
            levelMatrix: {
                1: 'Little usage',
                2: 'Basic',
                3: 'Comfortable',
            },
        },
        {
            name: 'Languages',
            data: data.frontmatter.languages,
            color: 'bg-indigo-300 dark:bg-indigo-900',
            levelMatrix: {
                1: 'Basic',
                2: 'Proficient',
                3: 'Native Language',
            },
        },
        {
            name: 'Soft Skills',
            data: data.frontmatter.softskills,
            color: 'bg-slate-300 dark:bg-slate-900',
            levelMatrix: null,
        },
    ];

    return (
        <SectionLayout title={'SKILLS'} keepTitleLeft={false} keepTitleTop={true}>
            <div className="flex flex-col justify-start">
                {skills.map((category, index) => (
                    <SkillCategory
                        key={index}
                        data={category.data}
                        color={category.color}
                        levelMatrix={category.levelMatrix}
                        category={category.name}
                    />
                ))}
            </div>
        </SectionLayout>
    );
};
export default Skills;
