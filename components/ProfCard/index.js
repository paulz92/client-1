import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import styles from './index.scss'
import { NewPostModal } from '../index.js'

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
        <NewPostModal 
          openModal={props.openModal} 
          shouldModalBeOpen={props.shouldModalBeOpen} 
          closeModal={props.closeModal} 
          changed={props.changed}
          newPostInfo={props.newPostInfo}
          tagAdd={props.tagAdd}
          tagDelete={props.tagDelete}
          acceptedDrop={props.acceptedDrop}
          uploadedAvatarURL={props.uploadedAvatarURL} />
      </CardContent>
    </div>
    <CardMedia className={styles.profImage} image="http://moziru.com/images/mystery-clipart-mystery-person-5.jpg" title={`image of ${props.name}`} />
  </Card>