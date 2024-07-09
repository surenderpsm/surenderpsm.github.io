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
        <div className="bg-neutral-200 dark:bg-neutral-800 flex flex-col m-2">
            <div className="bg-[#b9c23b] flex flex-row justify-start">
                <GatsbyImage image={getImage(logo)} alt={institution} layout="constrained"/>
                <span>{location}</span>
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
        <div className="flex flex-col-reverse md:flex-row sm: justify-around">
        {data.education.edges.map(node => (
            <EducationItem key={node.node.id} data={node} />
        ))}
      </div>
    </>
  )
}
export default Education

