import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Chip from 'material-ui/Chip'
import Button from 'material-ui/Button'

import styles from './index.scss'

export const CarCard = (props) => {
  return (
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
      <div>
        {props.tags.map(tag => <Chip className={styles.carChips} label={tag}/>)}
      </div>
      <div>
        <Button variant="raised" className={styles.carLikeButton}>Like this car</Button>
      </div>
    </Card>
  )
}
  