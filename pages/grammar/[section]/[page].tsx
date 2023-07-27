import { useRouter } from 'next/router';
import { Helmet } from 'react-helmet'

import { getPageData } from '../../../api/content'
import Vocabulary from '../../../components/Vocabulary';
import Sentence from '../../../components/Sentence';
import Grammar from '../../grammar'

export default function ContentPage() {
  const router = useRouter();
  const { section, page } = router.query;
  const params = {section, page};
  const pageData = getPageData(params);

  return (
    <Grammar>
      <Helmet>
        <title>pageData.pageTitle | Cahier de Français</title>
      </Helmet>
      <div>
        {pageData ? (
          <div className="content">
            {/* Title */}
            <h1 className="txtPrimary">{pageData.pageTitle}</h1>

            {pageData.content ? (
              <Vocabulary content={pageData.content} pageTitle={pageData.pageTitle} />
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
    </Grammar>
  )
}