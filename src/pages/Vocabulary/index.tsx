import React from 'react'
import { useParams } from 'react-router-dom';

import { getPageData } from '../../api/content'

export default function Vocabulary() {
  const params = useParams();
  console.log(params);

  const pageData = getPageData(params);

  return (
    <div>
      {pageData ? (
        <h1>{pageData.pageTitle}</h1>
      ) : (
        <h1>No Page Found</h1>
      )}
    </div>
  )
}