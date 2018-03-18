import Card, { CardContent, CardMedia } from 'material-ui/Card';
import { Button } from 'material-ui'
import Typography from 'material-ui/Typography';

import styles from './index.scss'
import { NewPostModal } from '@/containers'

export const ProfCard = (props) =>
  <Card className={styles.profCardRoot}>
    <div className={styles.userDetails}>
      <CardContent className={styles.content}>
        <Typography className={styles.profInfo + " " + styles.name} variant="headline" >
          {props.name}
        </Typography>
        <Typography className={styles.profInfo} variant="subheading" >
          {props.city}
        </Typography>
        <Typography className={styles.profInfo} component="p">
          {props.bio}
        </Typography>
        <Button onClick={props.openNewPostModal} variant="raised" className={styles.createPostButton}>Create Post</Button>
      </CardContent>
    </div>
    <CardMedia className={styles.profImage} image="http://moziru.com/images/mystery-clipart-mystery-person-5.jpg" title={`image of ${props.name}`} />
  </Card>