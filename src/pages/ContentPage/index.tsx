import { useParams } from 'react-router-dom';

import { getPageData } from '../../api/content'
import Vocabulary from '../../components/Vocabulary';
import Sentence from '../../components/Sentence';

export default function ContentPage() {
  const params = useParams();
  console.log(params);

  const pageData = getPageData(params);

  return (
    <div>
      {pageData ? (
        <div className="content">
          {/* Title */}
          <h1 className="txtPrimary">{pageData.pageTitle}</h1>

          {pageData.content ? (
            <Vocabulary content={pageData.content} />
          ): pageData.sentence ?(
            <Sentence content={pageData.sentence} />
          ): (
            <></>
          )}
        </div>
      ): (
        <h1>No Page Found</h1>
      )}

    </div>
  )
}