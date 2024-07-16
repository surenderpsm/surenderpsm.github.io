import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import SectionLayout from './layouts/SectionLayout';

const EducationItem = ({ data }) => {
    const fm = data.node.frontmatter;

    const degreeName = fm.degree;
    const institution = fm.institution;
    const startDate = new Date(fm.startDate);
    const endDate = new Date(fm.endDate);
    const current = fm.current;
    const gpa = fm.GPA;
    const location = fm.location;
    const logo = fm.logo;
    const content = data.node.html;

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const shortHandMonths = [
        'JAN',
        'FEB',
        'MAR',
        'APR',
        'MAY',
        'JUN',
        'JUL',
        'AUG',
        'SEP',
        'OCT',
        'NOV',
        'DEC',
    ];
    return (
        <div className="flex flex-col p-10">
            <div className="flex flex-row justify-between">
                <div className="flex flex-row justify-between">
                    <div>
                        <GatsbyImage
                            image={getImage(logo)}
                            alt={institution}
                            layout="constrained"
                            className="main-icon filter invert dark:invert-0"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <span className="text-sm xs:text-2xl sm:text-3xl lg:text-4xl text-left font-light">
                            {institution}
                        </span>
                        <span className="hidden sm:block sm:text-xl lg:text-2xl text-left font-bold">
                            {degreeName}
                        </span>
                        <span className="font-['Noto_Sans_Display'] font-bold text-[12px] xs:text-base sm:text-2xl block xl:hidden italic">
                            {`${shortHandMonths[startDate.getMonth()]} ${startDate.getFullYear()} - ${shortHandMonths[endDate.getMonth()]} ${endDate.getFullYear()}`}
                        </span>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-end">
                    <span className="text-right font-sans text-[12px] xs:text-base sm:text-lg md:text-xl">
                        {location}
                    </span>
                    <span className="font-['Noto_Sans_Display'] font-black text-lg 2xl:text-2xl hidden xl:block italic">{`${months[startDate.getMonth()]} ${startDate.getFullYear()} - ${months[endDate.getMonth()]} ${endDate.getFullYear()}`}</span>
                    <span className="font-['Teko'] text-sm xs:text-base sm:text-xl md:text-2xl xs:font-semibold">
                        {gpa ? `GPA: ${gpa}` : ''}
                    </span>
                </div>
            </div>
            <span className="text-sm xs:text-xl font-bold block sm:hidden text-left">
                {degreeName}
            </span>
            <div
                className="text-sm xs:text-base md:text-lg"
                dangerouslySetInnerHTML={{ __html: content }}
            ></div>
        </div>
    );
};
const Education = ({ color }) => {
    const query = graphql`
        {
            education: allMarkdownRemark(
                filter: { frontmatter: { slug: { regex: "/education/" } } }
                sort: { frontmatter: { startDate: DESC } }
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            degree
                            institution
                            location
                            GPA
                            startDate
                            endDate
                            current
                            logo {
                                childImageSharp {
                                    gatsbyImageData
                                }
                            }
                        }
                        html
                    }
                }
            }
        }
    `;
    const data = useStaticQuery(query);
    return (
        <SectionLayout title={'EDUCATION'} color={color}>
            <div className="section-content-wrapper min-h-screen flex flex-col justify-start basis-full bg-white/80 dark:bg-black/80">
                {data.education.edges.map((node) => (
                    <EducationItem key={node.node.id} data={node} />
                ))}
            </div>
        </SectionLayout>
    );
};
export default Education;
