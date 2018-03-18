import { FormControl, Modal, Typography, TextField, Button, Chip } from 'material-ui';

import styles from './index.scss'

export const CarCommentModal = (props) => {
  return (
    <div>
      <Modal
        className={styles.modalRoot}
        aria-labelledby="car-comment-modal"
        aria-describedby="car-comment-modal"
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
          <div className={styles.carChipsRoot}>
            {props.tags.map(tag => <Chip className={styles.carChips} label={tag} key={tag}/>)}
          </div>
          <div className={styles.commentsRoot}>
            {props.currentComments.map((comment, index) => (
              <div key={index}>
                <Typography className={styles.comment}>{comment}</Typography>
                <hr />
              </div>))
            }
          </div>
          <FormControl className={styles.commentBody} onChange={props.changed}>
            <TextField
              label="Add Comment"
              name="comment"
              value={props.commentBody}
              multiline
              rows="3"
              margin="normal" />
          </FormControl>
          <div className={styles.commentButtonRoot}>
            <Button className={styles.addCommentButton} onClick={props.addComment}>Add Comment</Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}