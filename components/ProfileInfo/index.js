import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import styles from './index.scss'

export const ProfCard = (props) =>
  <Card className={styles.profCardRoot}>
    <div className={styles.userDetails}>
      <CardContent className={styles.content}>
        <Typography className={styles.profInfo} variant="headline" >
          {props.name}
        </Typography>
        <Typography className={styles.profInfo} variant="subheading" >
          {props.city}
        </Typography>
        <Typography className={styles.profInfo} component="p">
          {props.bio}
        </Typography>
      </CardContent>
    </div>
    <CardMedia className={styles.profImage} image="http://moziru.com/images/mystery-clipart-mystery-person-5.jpg" title={`image of ${props.name}`} />
  </Card>