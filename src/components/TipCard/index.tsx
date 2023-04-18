import './style.css'
import { tipCard } from '../../api/content'

export default function TipCard(props:{cardContent:tipCard}) {

  return(
    <div className="tipCard sectionSpacing">
      <p className="semibold mb-2">{props.cardContent.heading}</p>

      <div>
        {props.cardContent.text.map((para, index) => (
          <p className="mb-2" key={index}>{para}</p>
        ))}
      </div>
    </div>
  )
}