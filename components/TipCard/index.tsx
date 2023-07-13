import { tipCard } from '../../api/content'
import styles from '../../styles/TipCard.module.css'

export default function TipCard(props:{cardContent:tipCard}) {

  return(
    <div className={`sectionSpacing ${styles.tipCard}`}>
      <p className={`semibold mb-2 ${styles.txtColor}`}>{props.cardContent.heading}</p>

      <div>
        {props.cardContent.text.map((para, index) => (
          <p className={`mb-2 ${styles.txtColor}`} key={index}>{para}</p>
        ))}
      </div>
    </div>
  )
}