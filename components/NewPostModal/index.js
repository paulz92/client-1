import { FormControl, FormHelperText, Input, InputLabel, Button, Modal, Typography, TextField } from 'material-ui';

import styles from './index.scss'

export const NewPostModal = (props) => {
  return (
    <div>
    <Button onClick={props.openModal} variant="raised" className={styles.createPostButton}>Create Post</Button>
    <Modal
      className={styles.modalRoot}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={props.shouldModalBeOpen}
      onClose={props.closeModal}
    >
      <div className={styles.getModalStyles}>
        <Typography className={styles.modalTitle} variant="title">
          New Post
        </Typography>
        <FormControl className={styles.makeModelYearInput}>
          <InputLabel htmlFor="car-make">Make</InputLabel>
          <Input id="car-make" />
        </FormControl>
        <FormControl className={styles.makeModelYearInput}>
          <InputLabel htmlFor="car-model">Model</InputLabel>
          <Input id="car-model" />
        </FormControl>
        <FormControl className={styles.makeModelYearInput}>
          <InputLabel htmlFor="car-year">Year</InputLabel>
          <Input id="car-year" />
        </FormControl>
        <FormControl className={styles.postTitle}>
          <InputLabel htmlFor="post-title">Post Title</InputLabel>
          <Input id="post-title" />
        </FormControl>
        <FormControl className={styles.postBody}>
          <TextField
            label="Post Body"
            multiline
            rows="10"
            margin="normal" />
        </FormControl>
        <h4>TO DO: Add tags</h4>
        <h4>TO DO: Add photo import</h4>
        <div className={styles.addPostButtonRoot}>
          <Button variant="raised" className={styles.addPostButton}>Add post</Button>
        </div>
      </div>
    </Modal>
    </div>
  )
}