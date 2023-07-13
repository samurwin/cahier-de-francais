import { typeOfWord } from '../../api/content'
import Example from '../Example';
import styles from '../../styles/Vocabulary.module.css'

export default function Vocabulary(props:{ content:typeOfWord[], pageTitle:string }) {

  return (
    <>
      {/* Type of Words */}
      {props.content.map((word, index) => (
        <section className="sectionSpacing" key={index}>
           {word.heading === props.pageTitle ? (
            <></>
          ): ( 
            <h2 className="mb-2">{word.heading}</h2>
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
              <h3 className="txtRed">Types of {word.heading}</h3>

              {word.typesOf?.map((typeOf) => (
                <div key={typeOf.heading} className="my-4">
                  <h4>{typeOf.heading}</h4>

                  {typeOf.text.map((para, index) => (
                    <p key={index} className="italic">{para}</p>
                  ))}

                  {typeOf.examples?.length ? (
                    <Example examples={typeOf.examples}/>
                  ): <></>}

                  {typeOf.table ? (
                    <div className={`my-3 ${styles.table}`} dangerouslySetInnerHTML={{__html: typeOf.table}}></div>
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
              <div key={index} className="my-4">
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
    </>
  )
}