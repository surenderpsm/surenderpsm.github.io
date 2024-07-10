import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import VerticalHeading from "./subcomponents/verticalHeading"


const ProjectItem = ({data})=> {
    const fm = data.node.frontmatter
    const content = data.node.html
    
    const title = fm.title
    const link = fm.link
    const description = fm.description
    const tags = fm.tags
    const category = fm.category
    const icons  = fm.icons
    return(
        <div key={data.id}>
            <h2>{title} | {description}</h2>
            <h3>{link}</h3>
            <div>
                {
                    tags.map((tag)=>(
                        <span key={tag} >{tag}</span>
                    ))
                }
            </div>
            <div>
                {
                    category.map((cat)=>(
                        <span key={cat} >{cat}</span>
                    ))
                }
            </div>
            <div>
                {
                    icons.map(element => {
                        return <GatsbyImage key={element.name} image={getImage(element.icon)} alt={element.name}/>
                    })
                }
            </div>
            <div className="content" dangerouslySetInnerHTML={{__html: content}}></div>
        </div> 
    )
}
const Project = () => {
  const query = graphql`
{
  project: allMarkdownRemark(filter: {frontmatter: {slug: {regex: "/project/"}}}) {
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
        }
        html
      }
    }
  }
}`
  const data = useStaticQuery(query)
  return(
      <section className="section-container">
        <VerticalHeading text={"PROJECTS"}/>
        {data.project.edges.map(node => (
          <ProjectItem key={node.node.id} data={node} />
        ))}
      </section>
  )
}
export default Project

