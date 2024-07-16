import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import SectionLayout from './layouts/SectionLayout';
import { motion, spring } from 'framer-motion';

const theme = 'blue';

const SkillItem = ({ delay, icon, name, color, level, size }) => {
    console.log(delay)
    return (
        <motion.div
            initial={{ scale: 1.4, opacity: 0, translateX: -50}}
            whileInView={{ scale: 1, opacity: 1, translateX: 0}}
            transition={{ type: 'spring', stiffness: 100, delay: delay*0.02 }}
            viewport={{once:true}}
            className={`flex flex-col justify-between flex-grow m-2 min-w-20 md:min-w-20 items-center xs:self-stretch ${color}`}
        >
            {icon && level ? (
                <>
                    {icon}
                    <div className="flex flex-col-reverse justify-between self-stretch m-1">
                        {level}
                        {name}
                    </div>
                </>
            ) : (
                <>
                    {level ? (
                        <>
                            <div className="flex flex-col-reverse justify-between self-stretch m-1 pl-2">
                                {level}
                                {name}
                            </div>
                        </>
                    ) : (
                        name
                    )}
                </>
            )}
        </motion.div>
    );
};

const SkillCategory = ({ data, category, color, levelMatrix }) => {
    return (
        <motion.div
            
            className="flex flex-col m-3 flex-grow"
        >
            <div className="">
                <SkillItem
                    name={
                        <span
                            className={`text-center text-md md:text-xl font-["Noto_Sans_Display"] m-1 min-w-60`}
                        >
                            {category}
                        </span>
                    }
                    color={'bg-neutral-200 dark:bg-neutral-800'}
                />
            </div>
            <div className="flex flex-row flex-wrap justify-between">
                {data.map((data, index) => {
                    const levelMsg = data.level ? (
                        <span
                            className={`${data.icon ? 'text-xs' : 'text-sm'}`}
                        >
                            {levelMatrix[data.level]}
                        </span>
                    ) : null;
                    const icon = data.icon ? (
                        <GatsbyImage
                            image={getImage(data.icon)}
                            alt={data.name}
                            className="aspect-square m-2 p-2 w-20 md:w-28"
                        />
                    ) : null;
                    return (
                        <SkillItem
                            key={index}
                            delay={index}
                            icon={icon}
                            name={
                                <span
                                    className={`${data.icon ? 'text-sm' : 'text-md'}`}
                                >
                                    {data.name}
                                </span>
                            }
                            color={color}
                            level={levelMsg}
                            size={data.level}
                        />
                    );
                })}
            </div>
        </motion.div>
    );
};

const Skills = ({ color }) => {
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
    const tileColor = 'bg-white/80 dark:bg-black/80';
    const data = useStaticQuery(query).skills.edges[0].node;
    const fundamentalSkills = [
        {
            name: 'Programming Languages',
            data: data.frontmatter.pl,
            color: `${tileColor}`,
            levelMatrix: {
                1: 'Used Once',
                2: 'Basic Knowledge',
                3: 'Comfortable',
                4: 'Academic Proficiency',
            },
        },
        {
            name: 'Databases',
            data: data.frontmatter.databases,
            color: `${tileColor}`,
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
            color: `${tileColor}`,
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
            color: `${tileColor}`,
            levelMatrix: {
                1: 'Built one project',
                2: 'Basic Knowledge',
                3: 'Comfortable',
                4: 'Proficient',
            },
        },

        {
            name: 'Tools',
            data: data.frontmatter.tools,
            color: `${tileColor}`,
            levelMatrix: {
                1: 'Little usage',
                2: 'Basic',
                3: 'Comfortable',
            },
        },
    ];

    const sideSkills = [
        {
            name: 'Languages',
            data: data.frontmatter.languages,
            color: `${tileColor}`,
            levelMatrix: {
                1: 'Basic',
                2: 'Proficient',
                3: 'Native',
            },
        },
        {
            name: 'Soft Skills',
            data: data.frontmatter.softskills,
            color: `${tileColor}`,
            levelMatrix: null,
        },
    ];

    return (
        <SectionLayout title={'SKILLS'} color={color}>
            <div className="section-content-wrapper flex flex-col lg:flex-row justify-center ">
                <div className="flex flex-row flex-wrap lg:max-w-screen-md">
                    {fundamentalSkills.map((category, index) => (
                        <SkillCategory
                            key={index}
                            data={category.data}
                            color={category.color}
                            levelMatrix={category.levelMatrix}
                            category={category.name}
                        />
                    ))}
                </div>
                <div className="flex flex-row flex-wrap self-start basis-1/12">
                    {sideSkills.map((category, index) => (
                        <SkillCategory
                            key={index}
                            data={category.data}
                            color={category.color}
                            levelMatrix={category.levelMatrix}
                            category={category.name}
                        />
                    ))}
                </div>
            </div>
        </SectionLayout>
    );
};
export default Skills;
