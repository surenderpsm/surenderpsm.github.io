import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import VerticalHeading from "./subcomponents/verticalHeading"
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
        <div className="bg-transperant dark:bg-black flex flex-col transition-colors duration-1000 px-5">
            <div className="bg-transparent flex flex-row justify-between transition-colors duration-1000">
                
                <div className="flex flex-row justify-between basis-f">
                  <div>
                    <GatsbyImage image={getImage(logo)} alt={institution} layout="constrained" className="w-20 sm:w-32 md:w-44 m-3"/>
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-2xl sm:text-4xl md:text-4xl text-left font-light">
                      {institution}
                    </span>
                    <span className="collapse sm:visible sm:text-2xl text-left font-extrabold">
                      {degreeName}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-end"> 
                        <svg className="size-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-right">{location}</span>
                </div>
            </div>
            <span className="text-xl font-extrabold visible sm:collapse text-left">
                      {degreeName}
            </span>
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
    sort: {frontmatter: {startDate: DESC}}
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
    <section className="section-container bg-orange-500 dark:bg-black">
        <VerticalHeading text={"EDUCATION"}/>
        <div className="flex flex-col justify-start transition-colors duration-1000 basis-full">
          {data.education.edges.map(node => (
              <EducationItem key={node.node.id} data={node} />
          ))}
        </div>
    </section>
  )
}
export default Education

