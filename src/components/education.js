import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const EducationItem = ({data})=> {
    const education = data.node.frontmatter
    
    const degreeName = education.degree
    const institution = education.institution
    const startDate = education.startDate
    const endDate = education.endDate
    const current = education.current
    const gpa  = education.GPA
    const location = education.location
    const content = data.node.html
    return(
        <div>
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
                  frontmatter {
                      degree
                      institution
                      location
                      GPA
                      startDate
                      endDate
                      current
                  }
                  html
              }
          }
      }
    }
    `
  const data = useStaticQuery(query)
  return(
      <div>
        <h1>Education</h1>
        {data.education.edges.map(edu => (
          <EducationItem data={edu} />
        ))}
      </div>
  )
}
export default Education

