import React from 'react'
import styles from '../../styles/Example.module.css'

type examplesArr = string[];

export default function Example(props:{examples:examplesArr}) {
  return (
    <div className={styles.exampleCon}>
      <p className="semibold mb-2">Example:</p>

      {props.examples.map(example => (
        <p key={example} className="mb-1">{example}</p>
      ))}
    </div>
  )
}