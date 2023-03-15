import React from 'react'
import { Link } from 'react-router-dom';
import { courseOne } from '../../api/content'

export default function Directory() {
  const sections = courseOne.sections;

  return(
    <div>
      <ul>
        {sections.map(s => (
          <li>
            <Link to={s.path} key={s.title}>{s.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}