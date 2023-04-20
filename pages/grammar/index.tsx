import { useState } from 'react'
import { courseOne, page } from '../../api/content'
import styles from '../../styles/Grammar.module.css'

import { TfiMenuAlt } from 'react-icons/tfi'
import { RiCloseFill } from 'react-icons/ri'
import Accordian from '../../components/Accordian'

export default function Grammar({children}:any) {
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
    <div className={`container ${styles.directoryCon}`}>
      <aside>
        <button onClick={handleToggle} className={styles.directoryIcon}>
          {directoryOpen ? (
            <RiCloseFill />
          ): (
            <TfiMenuAlt/>
          )}
        </button>
        <ul className={`${styles.directoryList} ${directoryOpen ? styles.open : ""}`}>
          {sections.map((s, index) => {
            const sectionPath = "/grammar/" + s.path; 
            let links = createLinkList(sectionPath, s.pages);

            const accordianContent = {
              title: {
                text: s.title,
                link: sectionPath
              },
              items: links
            }
            return (
              <li key={s.path} className={index === 0 ? "mb-3" : ""}>
                <Accordian type="links" content={accordianContent} theme="light" style={styles.pageLink} />
            </li>
          )})}
        </ul>
      </aside>
        {children}
    </div>
  ) 
}