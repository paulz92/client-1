import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import styles from './index.scss'

export const CarCard = (props) =>
  <Card className={styles.carCardRoot}>
    <CardMedia className={styles.carPic} image={`${props.carPic}`} title={`image of ${props.carMake} ${props.carModel}`} />
    <CardContent className={styles.carCardContent}>
      <Typography className={styles.carInfo} variant="headline" >
        {`${props.carYear} ${props.carMake} ${props.carModel}`}
      </Typography>
      <Typography className={styles.carInfo} component="p">
        {props.carNote}
      </Typography>
    </CardContent>
  </Card>