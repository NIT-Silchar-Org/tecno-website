import React from 'react'
import styles from './TecnoTeamCard.module.scss'
import Image from 'next/image'
import { FaFacebook, FaGithub,FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'
const TecnoTeamCard = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={
            data?.posterImage
              ? data?.posterImage
              : 'https://placehold.jp/150x150.png'
          }
          layout="fill"
          objectFit="cover"
          priority="true"
        />
      </div>
      <div className={styles.wrapper_outline}>
        <div className={styles.wrapper}>
          <div className={styles.body}>
            <div className={styles.text_wrapper}>
              <h1 className={styles.name}>{data.name}</h1>
              <h3 className={styles.position}>{data?.position}</h3>
            </div>
            {/* <Image
              src={
                data?.posterImage
                  ? data?.posterImage
                  : 'https://placehold.jp/150x150.png'
              }
              layout="fill"
              objectFit="cover"
              priority="true"
            /> */}

            <div className={styles.socialmedia_wrapper}>
            <div className={styles.icon}>
                <Link href={data?.facebook ? data?.facebook :"/"}>
                  <FaFacebook />
                </Link>
              </div>
              <div className={styles.icon}>
                {data?.github && (
                  <Link href={data?.github ? data?.github : "/"}>
                    <FaGithub />
                  </Link>
                ) }
              </div>
              <div className={styles.icon}>
                <Link href={data?.linkedin ? data?.linkedin :"/"}>
                  <FaLinkedin />
                </Link>
              </div>
            </div>
          </div>
          {/* <div className={styles.overlay}>{data?.name}</div> */}
        </div>
      </div>
    </div>
  )
}

export default TecnoTeamCard
