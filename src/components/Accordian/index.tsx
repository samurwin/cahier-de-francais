import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { IoIosArrowDown } from 'react-icons/io'

type contentObj = {
  title: string,
  items: any[]
}

export default function Accordian(props:{type:string, content:contentObj}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordianDarkCon">
      {props.type === "links" ? (
        <>
          <div className="titleCon" onClick={() => setIsActive(!isActive)}>
            <h4>{props.content.title}</h4>
            <IoIosArrowDown className={`arrowSvg ${isActive ? 'upsideDown' : ''}`}/>
          </div>

          <div className={`itemsCon ${isActive ? "open" : ""}`}>
            {props.content.items.map((item, index) => (
              <Link to={item.link} key={index}>{item.label}</Link>
            ))}
          </div>
        </>
      ): <></>}
    </div>
  )
}