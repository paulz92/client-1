import { Layout, AboutMe } from '@/components'
import ExpansionPanel, { ExpansionPanelSummary, ExpansionPanelDetails } from 'material-ui/ExpansionPanel'
import Typography from 'material-ui/Typography'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'

import styles from './index.scss'

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
            Torq is an application for car enthusiasts who have a passion for automobiles and want to connect 
            with other local, likeminded people who share the same interest. Torq is not your average car enthusiast
            website it's a also social media platform for posting and commenting about your personal vehicle, and
            others as well. But it doesn't stop there. Here at Torq, our marketplace allows users to buy and sell the 
            vehicles of their dreams, and our meetup platform permits users to easily plan and attend local car events. 
            Torq is the one stop shop for the car enthusiast in you.
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
          {developers.map((developer, index) => {
            return (
              <AboutMe key={index} devName={developer.name} devRole={developer.role} devBio={developer.bio} devPic={developer.pic} />
            )
          })} 
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}