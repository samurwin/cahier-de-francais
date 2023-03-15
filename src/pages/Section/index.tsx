import React from 'react'
import { useParams } from 'react-router-dom';
import { getSectionData } from '../../api/content'


export default function Section() {
  const params = useParams()
  console.log(params);

  const sectionData = getSectionData(params.section);

  return (
    <div>
      {sectionData ? (
        <h1>{sectionData.title}</h1>
      ) : (
        <h1>No Page Found</h1>
      )}
    </div>
  )
}