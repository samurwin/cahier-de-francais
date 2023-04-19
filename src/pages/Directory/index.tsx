import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { courseOne, page } from '../../api/content'
import './styles.css'

import { TfiMenuAlt } from 'react-icons/tfi'
import { RiCloseFill } from 'react-icons/ri'
import Accordian from '../../components/Accordian'

export default function Directory() {
  const [directoryOpen, setDirectoryOpen] = useState(false);


  function handleToggle() {
    setDirectoryOpen(!directoryOpen);
  }

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
    <div className="directoryCon container">
      <aside>
        <button onClick={handleToggle} className="directoryIcon">
          {directoryOpen ? (
            <RiCloseFill />
          ): (
            <TfiMenuAlt/>
          )}
        </button>
        <ul className={`directoryList ${directoryOpen ? "open" : ""}`}>
          {sections.map((s, index) => { 
            let links = createLinkList(s.path, s.pages);

            const accordianContent = {
              title: {
                text: s.title,
                link: s.path
              },
              items: links
            }
            return (
              <li key={s.path} className={index === 0 ? "mb-3" : ""}>
                <Accordian type="links" content={accordianContent} theme="light" style="pageLink" />
            </li>
          )})}
        </ul>
      </aside>

      <Outlet/>
    </div>
  ) 
}