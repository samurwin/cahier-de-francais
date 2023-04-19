import React from 'react'
import { Outlet } from 'react-router-dom'
import { courseOne, page } from '../../api/content'
import './styles.css'

import Accordian from '../../components/Accordian'

export default function Directory() {
  const sections = courseOne.sections;

  function createLinkList(sectionPath:string, sectionPages: page[]) {
    let links : object[]= [];

    sectionPages.map((page, index) => {
      const number = index + 1;
      const link = {
        label: number + ". " + page.pageTitle,
        link: sectionPath + "/" + page.path
      }
      return links.push(link);
    })
    return links;
  }
  return(
    <div className="directoryCon px-3 container">
      <aside>
        <ul className="directoryList">
          {sections.map(s => { 
            let links = createLinkList(s.path, s.pages);

            const accordianContent = {
              title: {
                text: s.title,
                link: s.path
              },
              items: links
            }
            return (
              <li key={s.path} className="sectionLink">
                <Accordian type="links" content={accordianContent} theme="light" style="pageLink" />
            </li>
          )})}
        </ul>
      </aside>

      <Outlet/>
    </div>
  ) 
}