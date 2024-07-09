import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const EducationItem = ({data})=> {
    const fm = data.node.frontmatter
    
    const degreeName = fm.degree
    const institution = fm.institution
    const startDate = fm.startDate
    const endDate = fm.endDate
    const current = fm.current
    const gpa  = fm.GPA
    const location = fm.location
    const logo = fm.logo
    const content = data.node.html
    return(
        <div className="bg-neutral-200 dark:bg-neutral-800 flex flex-col m-2 transition-colors duration-1000 flex-1">
            <div className="bg-[#b6b6b6] flex flex-row justify-between">
                <div className="w-1/2 lg:w-1/4 m-4">
                    <GatsbyImage image={getImage(logo)} alt={institution} layout="constrained"/>
                </div>
                <div className="flex flex-col justify-center align-middle"> 
                        <svg className="size-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>{location}</span>
                </div>
            </div>
            <div>
                {degreeName}
            </div>
            <h2>{degreeName} | {location}</h2>
            <h3>{institution}</h3>
            <p>{startDate} - {endDate}</p>
            {gpa}
            {current?"This is current":""}
            <div className="content" dangerouslySetInnerHTML={{__html: content}}></div>
        </div> 
    )
}
const Education = () => {
  const query = graphql`
{
  education: allMarkdownRemark(
    filter: {frontmatter: {slug: {regex: "/education/"}}}
    sort: {frontmatter: {startDate: ASC}}
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
          logo{
            childImageSharp{
              gatsbyImageData
            }
          }
        }
        html
      }
    }
  }
}
    `
  const data = useStaticQuery(query)
  return(
    <>
        <h1>Education</h1>
        <div className="flex flex-col-reverse md:flex-row sm: justify-around transition-colors duration-1000">
        {data.education.edges.map(node => (
            <EducationItem key={node.node.id} data={node} />
        ))}
      </div>
    </>
  )
}
export default Education

