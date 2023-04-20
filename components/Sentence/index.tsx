import { sentence } from "../../api/content";
import Example from "../Example";
import TipCard from "../TipCard";

export default function Sentence(props:{content:sentence}) {
  const data = props.content;

  return (
    <div className="sectionSpacing">
      <p className="italic">{data.definition}</p>

      {data.parts.map((part, index) => (
        <section className="sectionSpacing" key={index}>
          <h3 className="txtSecondary">{part.heading}</h3>

          <div className="my-3">
            {part.text.map((para, index) => (
              <p className="mb-2" key={index}>{para}</p>
            ))}
          </div>

          {part.examples?.length ? (
            <Example examples={part.examples} />
          ): <></>}

          {part.table ? (
            <div className="my-3" dangerouslySetInnerHTML={{__html: part.table}}></div>
          ): <></>}

          {part.tipCards?.map((card, index) => (
            <TipCard key={index} cardContent={card}/>
          ))}
        </section>
      ))}

    </div>
  )
}