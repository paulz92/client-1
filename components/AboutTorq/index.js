import { Title, Layout, AboutMe } from '@/components'
import ExpansionPanel, { ExpansionPanelSummary, ExpansionPanelDetails } from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'; 

import styles from './index.scss'

import React from 'react'
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
]
export const AboutTorq = (props) => {
  return (
   <div>
    <ExpansionPanel className={styles.rootPanel}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={styles.fontTitle}>
          About Torq
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography className={styles.font}>
          Torq was created as an application for car enthusiasts who have a passion for automobiles 
          and want to connect with other local likeminded people who share the same interest. Torq not
          your average car enthusiast website it's a also social media platform for posting and commenting 
          about your personal and other enthusiasts vechiles. But it doesn't stop there here at Torq you may
          also find the vechiles of your dreams in our marketplace for those who wish to buy/sell, vechiles 
          and a meetup site for people to plan local car events. Torq the one stop shop for the car enthusiast
          in you.
        </Typography>
      </ExpansionPanelDetails>
        </ExpansionPanel>
            <ExpansionPanel className={styles.rootPanel}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={styles.fontTitle}>
                  Our Team
                </Typography>
              </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <Typography className={styles.font}>              
            <div className={styles.aboutUsRoot}>
              {developers.map((developer, index) => {
                return (
                  <AboutMe key={index} devName={developer.name} devRole={developer.role} devBio={developer.bio} devPic={developer.pic} />
                )
              })} 
            </div>
          </Typography>
          </ExpansionPanelDetails>
            </ExpansionPanel>
            </div>
  );
}