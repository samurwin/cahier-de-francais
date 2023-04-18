import { sentence } from "../../api/content";
import Example from "../Example";

export default function Sentence(props:{content:sentence}) {
  const data = props.content;

  return (
    <div className="sectionSpacing">
      <p className="italic">{data.definition}</p>

      {data.parts.map((part, index) => (
        <section className="sectionSpacing" key={index}>
          <h2 className="txtSecondary">{part.heading}</h2>

          <div className="my-4">
            {part.text.map((para, index) => (
              <p className="mb-2" key={index}>{para}</p>
            ))}
          </div>

          {part.examples?.length ? (
            <Example examples={part.examples} />
          ): <></>}
        </section>
      ))}

    </div>
  )
}