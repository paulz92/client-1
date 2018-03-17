import Card, { CardContent, CardMedia, CardHeader } from 'material-ui/Card'
import { Avatar, Typography, Chip, Button, Modal, FormControl, TextField } from 'material-ui'
import Comment from 'material-ui-icons/Comment'
import ThumbsUp from 'material-ui-icons/ThumbUp'

import styles from './index.scss'

export const CarCard = (props) => {
  const carActions = (
    <div>
      <ThumbsUp className={styles.carAction + " " + styles.carActionLike} onClick={props.handleLike} />
      <Comment className={styles.carAction} onClick={props.openModal} />
      <Modal
        className={styles.modalRoot}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={props.shouldModalBeOpen}
        onClose={props.closeModal}
      >
        <div className={styles.getModalStyles}>
          <Typography className={styles.modalTitle} variant="title">
            {`${props.carYear} ${props.carMake} ${props.carModel}`}
          </Typography>
          <img className={styles.modalPic} src={`${props.carPic}`} alt='carpic' />
          <Typography className={styles.carNote} variant="title">
            {props.carNote}
          </Typography>
          <FormControl className={styles.commentBody} onChange={props.changed}>
            <TextField
              label="Add Comment"
              name="comment"
              // value={props.newPostInfo.body}
              multiline
              rows="3"
              margin="normal" />
          </FormControl>
        </div>
      </Modal>
    </div>
  )

  const price = (
    <div className={styles.carPrice}>
      {`${props.price}`} 
    </div>
  )

  return (
    <Card className={styles.carCardRoot}>
      <CardHeader
        classes={{ title: styles.font + " " + styles.fontName, subheader: styles.font }}
        avatar={
          <Avatar aria-label="profpic" className={styles.avatarPic}>
            R
          </Avatar>
        }
        title={props.owner}
        subheader="March 19, 2018"
      />
      <CardMedia className={styles.carPic} image={`${props.carPic}`} title={`image of ${props.carMake} ${props.carModel}`} />
      <CardContent className={styles.carCardContent}>
        <Typography className={styles.carInfo + " " + styles.font + " " + styles.fontCarName} variant="headline" >
          {`${props.carYear} ${props.carMake} ${props.carModel}`}
        </Typography>
        <Typography className={styles.carInfo + " " + styles.font} component="p">
          {props.carNote}
        </Typography>
      </CardContent>
      <div className={styles.carChipsRoot}>
        {props.tags.map(tag => <Chip className={styles.carChips} label={tag} key={tag}/>)}
      </div>
      <div className={styles.carActionsRoot}>
        {props.showPrice ? price : carActions}
      </div>
    </Card>
  )
}
  