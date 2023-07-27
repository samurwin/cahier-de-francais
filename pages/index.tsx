import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { Helmet } from 'react-helmet'

import Accordian from '../components/Accordian'

const linkAccordianContent = {
  title: {text:"Resources Used"},
  items: [
    {
      label: "French Pod 101",
      link: "https://www.frenchpod101.com/blog/"
    },
    {
      label: "Super Prof",
      link: "https://superprof.co.uk"
    },
    {
      label: "Grammarly",
      link: "https://www.grammarly.com/"
    }
  ]
}

export default function Home() {

  return (
    <div id="home">
      <Helmet>
        <title>Cahier de Français</title>
      </Helmet>

      <section className="hero container conMargin">
        <div className="heroTxt">
          <h1 className="txtPrimary">Learn French Grammar</h1>
          <p className="txtDark">This website has a variety of reference materials for French grammar and vocabulary. Made by a web developer who is learning french.</p>
          <Link href="/grammar/" className='btnSecondary'>Start Learning!</Link>
        </div>

        <Image src={require('../public/assets/caheir-de-francais-hero.png')} alt="Woman biting pencil while studying" priority={true} />

      </section>

      <section className="container conMargin">
        <div className="highlightCon">
          <div className="highlightBox">
            <h3 className="mb-3">Vocabulary</h3>
            <Link href="/grammar/vocabulary">Start Learning &gt;</Link>
          </div>

          <div className="highlightBox">
            <h3 className="mb-3">Sentance Structure</h3>
            <Link href="/grammar/sentence-structure">Start Learning &gt;</Link> 
          </div>

          <div className="highlightBox">
            <h3 className="mb-3">Verbs & Tenses</h3>
            <p>Coming Soon!</p>
          </div>
        </div>
      </section>

      <section className="container noteFrom conMargin">

        <Image src={require('../public/assets/girl-with-book.png')} alt="Girl taking a nap with book on her face" />

        <div className="noteTxt">
          <h3 className="mb-4">A note from the creator</h3>

          <p className="mb-2">
            I am a web developer who also happens to be learning french! My family is French-Canadian and although my mom moved to Ontario when she was quite young  
            and didn’t maintain the French that she knew from her childhood, it is very much a part of our family and it’s history. For that 
            reason I began learning french a year ago.
          </p>
          <p className="mb-4">
            Although I try my best to create original content for this website, I myself am still learning french (and am not a writer by trade) 
            so I lean heavily on outside resources to create my content. I list the resources I use below.
          </p>

          <Accordian type="links" content={linkAccordianContent} theme="multi" style="resourcesAcc" />
        </div>
      </section>
    </div>
  )
}