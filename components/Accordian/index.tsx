import { useState } from 'react'
import Link from 'next/link'
import styles from '../../styles/Accordian.module.css'
import { IoIosArrowDown } from 'react-icons/io'

type contentObj = {
  title: {
    text: string;
    link?: string;
  }
  items: any[]
}

type theme = "multi" | "solid";

export default function Accordian(props:{type:string, content:contentObj, theme:theme, style?:string}) {
  const [isActive, setIsActive] = useState(false);

  let itemConColor = "";
  let accordianConColor = "";
  let txtColor = "";

  switch(props.theme){
    case "multi":
      itemConColor = styles.multiItemCon;
      accordianConColor = styles.multiAccordianCon;
      txtColor = styles.txtInverse;
      break;
    case "solid":
      itemConColor = styles.solidAccordian;
      accordianConColor = styles.solidAccodian;
      txtColor = styles.txtColor;
      break;
  }

  return (
    <div className={`${!props.style ? '' : props.style} ${accordianConColor}`}>
      {props.type === "links" ? (
        <>
          <div id="titleCon" className={`${styles.titleCon} ${txtColor}`} onClick={() => setIsActive(!isActive)}>
            {props.content.title.link ? (
              <Link href={props.content.title.link}>
                <h4 className={txtColor}>{props.content.title.text}</h4>
              </Link>
            ): <><h4 className={txtColor}>{props.content.title.text}</h4></> }

            <IoIosArrowDown className={`${styles.arrowSvg} ${isActive ? styles.upsideDown : ""}`}/>
          </div>

          <div id="itemsCon" className={`${styles.itemsCon} ${itemConColor} ${txtColor} ${isActive ? styles.open : ""}`}>
            {props.content.items.map((item, index) => (
              <Link href={item.link} key={index}>{item.label}</Link>
            ))}
          </div>
        </>
      ): <></>}
    </div>
  )
}