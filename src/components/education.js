import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import VerticalHeading from "./subcomponents/verticalHeading"
const EducationItem = ({data})=> {
    const fm = data.node.frontmatter
    
    const degreeName = fm.degree
    const institution = fm.institution
    const startDate = new Date(fm.startDate)
    const endDate = new Date(fm.endDate)
    const current = fm.current
    const gpa  = fm.GPA
    const location = fm.location
    const logo = fm.logo
    const content = data.node.html

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
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
                    <span className="hidden sm:block sm:text-2xl text-left font-extrabold">
                      {degreeName}
                    </span>
                    <span className="font-[Teko] font-normal sm:text-2xl block xl:hidden">{`${months[startDate.getMonth()]} ${startDate.getFullYear()} - ${months[endDate.getMonth()]} ${endDate.getFullYear()}`}</span>

                  </div>
                </div>
                <div className="flex flex-col justify-center items-end">
                        <span className="text-right font-sans text-md sm:text-lg md:text-xl">{location}</span>
                        <span className="font-[Teko] font-normal sm:text-2xl hidden xl:block">{`${months[startDate.getMonth()]} ${startDate.getFullYear()} - ${months[endDate.getMonth()]} ${endDate.getFullYear()}`}</span>

                        
                </div>
            </div>
            <span className="text-xl font-extrabold block sm:hidden text-left">
                      {degreeName}
            </span>
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

