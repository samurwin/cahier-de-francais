import React from 'react'
import { useRouter } from 'next/router'
import { getSectionData } from '../../../api/content'
import Image from 'next/image';

import styles from "../../../styles/Section.module.css";
import Grammar from '../../grammar';


export default function Section() {
  const router = useRouter();
  const { section } = router.query;
  const sectionData = getSectionData(section);

  return (
    <Grammar>
      <div>
        {sectionData ? (
          <div className="content">
            <section className={styles.imgBanner}>
                <Image src={require(`../../../public/assets/${sectionData.img}`)} alt="" priority={true} />
                <div className={styles.overlay}>
                <h1 className="txtLight">{sectionData.title}</h1>
                </div>
            </section>
            <section>
              {sectionData.description.map((p, index) => (
                <p className="mb-2" key={index}>{p}</p>
              ))}
            </section>

            <section className={`mt-5 ${styles.topics}`}>
              <h3 className="txtLight">Jump to a topic</h3>
              <ol>
                {sectionData.pages.map((page, index) => (
                  <li key={index} className="linkLight my-2">
                    <a href={`${section}/${page.path}`} >{page.pageTitle}</a>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        ) : (
          <h1>No Page Found</h1>
        )}
      </div>
    </Grammar>

  )
}