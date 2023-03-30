import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { courseOne } from '../../api/content'
import './styles.css'

export default function Directory() {
  const sections = courseOne.sections;

  return(
    <div className="directoryCon px-3 container">
      <aside>
        <ul className="directoryList">
          {sections.map(s => (
            <li key={s.path} className="sectionLink">
              <Link to={s.path}>{s.title}</Link>
              <ul className="directoryList">
                {s.pages.map(page => (
                  <li key={page.path} className="pageLink">
                    <Link to={`${s.path}/${page.path}`}>{page.pageTitle}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </aside>

      <Outlet/>
    </div>
  )
}