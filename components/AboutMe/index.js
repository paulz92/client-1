import Card, { CardContent } from 'material-ui/Card'
import { Avatar, Typography } from 'material-ui'

import styles from './index.scss'

export const AboutMe = (props) => {
  return (
    <Card className={styles.cardRoot}>
      <Avatar
        className={styles.avatar}
        src={props.devPic}
      />
      <CardContent>
        <Typography className={styles.font} variant="headline" component="h1">
          {props.devName}
        </Typography>
        <Typography className={styles.font} component="h2">
          {props.devRole}
        </Typography>
        <Typography className={styles.bio} component="p">
          {props.devBio}
        </Typography>
      </CardContent>
    </Card>
  )
}