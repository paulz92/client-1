import React from 'react';

import { Layout } from '@/containers'
import styles from './index.scss'
import { AboutPage, Title, AboutMe } from '@/components';

const developers = [
  {
    name: "Charles Kenney",
    role: "Backend Developer",
    bio: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.",
    pic: "/public/images/cuteCharles.png"
  },
  {
    name: "Paul Zavattieri",
    role: "Frontend Developer",
    bio: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.",
    pic: "/public/images/paul-z2.jpeg"
  },
  {
    name: "Emmanuel M.R.",
    role: "Frontend Developer",
    bio: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.",
    pic: "/public/images/eman.jpg"
  },
  {
    name: "Jamal Patterson",
    role: "Frontend Developer",
    bio: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.",
    pic: "/public/images/user-placeholder.svg"
  }
];

export default () => (
  <Layout>
    <div>
      <div className={styles.aboutTorqRoot}>
        <AboutPage />
      </div>
      <Title title="Our Team" />
      <div className={styles.aboutUsRoot}>
        {developers.map(developer => {
          return (
            <AboutMe devName={developer.name} devRole={developer.role} devBio={developer.bio} devPic={developer.pic} />
          )
        })}
      </div>
    </div>
  </Layout>
)