import Typography from 'material-ui/Typography'
import Modal from 'material-ui/Modal'
import Button from 'material-ui/Button'

import styles from './index.scss'

export const NewPostModal = (props) => {
  return (
    <div>
    <Button onClick={props.openModal} variant="raised" className={styles.createPostButton}>Create Post</Button>
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={props.shouldModalBeOpen}
      onClose={props.closeModal}
    >
      <div>
        <Typography variant="title" id="modal-title">
          Text in a modal
        </Typography>
        <Typography variant="subheading" id="simple-modal-description">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </div>
    </Modal>
    </div>
  )
}