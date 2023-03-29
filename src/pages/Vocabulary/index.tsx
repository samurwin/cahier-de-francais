import React from 'react'
import { useParams } from 'react-router-dom';

import { getPageData } from '../../api/content'
import Example from '../../components/Example';
import './styles.css'

export default function Vocabulary() {
  const params = useParams();
  console.log(params);

  const pageData = getPageData(params);

  return (
    <div>
      {pageData ? (
        <div className="content">
          {/* Title */}
          <h1 className="txtPrimary">{pageData.pageTitle}</h1>

          {/* Type of Words */}
          {pageData.content.map((word, index) => (
            <section className="sectionSpacing" key={index}>
              {word.name === pageData.pageTitle ? (
                <></>
              ): (
                <h2 className="txtSecondary mb-2">{word.name}</h2>
              )}

              {/* Definition */}
              <div>
                <p className="italic">{word.definition.text}</p>
                {word.definition.examples?.length ? (
                  <Example examples={word.definition.examples}/>
                ): (<></>)}
              </div>

              {/* Types Of */}
              {word.typesOf?.length ? (
                <div className="my-5">
                  <h3>Types of {word.name}</h3>

                  {word.typesOf?.map((typeOf) => (
                    <div key={typeOf.name} className="my-4">
                      <h4>{typeOf.name}</h4>

                      <p className="italic">{typeOf.definition}</p>
                      {typeOf.examples?.length ? (
                        <Example examples={typeOf.examples}/>
                      ): <></>}

                      {typeOf.table ? (
                        <div className="my-3" dangerouslySetInnerHTML={{__html: typeOf.table}}></div>
                      ) : <></>}
                    </div>
                  ))}
                </div>
              ) : <></>}

            {/* Rules */}
            {word.rules?.length ? (
              <div>
                <h3>Rules</h3>
                {word.rules?.map((rule, index) => (
                  <div className="my-4">
                    <p className="bold txtSecondary">Rule {index + 1}:</p>
                    <p>{rule.definition}</p>

                    {rule.examples?.length ? (
                      <Example examples={rule.examples}/>
                    ): <></>}
                  </div>
                ))}
              </div>
            ): <></>}

            </section>
          ))}
        </div>
      ) : (
        <h1>No Page Found</h1>
      )}
    </div>
  )
}