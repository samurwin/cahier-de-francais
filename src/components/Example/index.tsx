import React from 'react'

import './style.css';

type examplesArr = string[];

export default function Example(props:{examples:examplesArr}) {
  return (
    <div className="exampleCon">
      <p className="semibold mb-2">Example:</p>

      {props.examples.map(example => (
        <p className="mb-1">{example}</p>
      ))}
    </div>
  )
}