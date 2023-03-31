import React from 'react'
import { useParams } from 'react-router-dom';
import { getSectionData } from '../../api/content'

import './styles.css';


export default function Section() {
  const params = useParams()
  console.log(params);

  const sectionData = getSectionData(params.section);

  return (
    <div>
      {sectionData ? (
        <div className="content">
          <section className="imgBanner">
              <img src={require(`../../assets/${sectionData.img}`)} alt=""/>
              <div className="overlay">
              <h1 className="txtLight">{sectionData.title}</h1>
              </div>
          </section>
          <section>
            {sectionData.description.map((p, index) => (
              <p className="mb-1" key={index}>{p}</p>
            ))}
          </section>

          <section className="mt-5 topics">
            <h3 className="txtLight">Jump to a topic</h3>
            <ol>
              {sectionData.pages.map((page, index) => (
                <li key={index} className="linkLight my-2">
                  <a href={`${params.section}/${page.path}`} >{page.pageTitle}</a>
                </li>
              ))}
            </ol>
          </section>
        </div>
      ) : (
        <h1>No Page Found</h1>
      )}
    </div>
  )
}