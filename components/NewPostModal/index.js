import { FormControl, FormHelperText, Input, InputLabel, Button, Modal, Typography, TextField, Chip } from 'material-ui';
import PlusIcon from 'material-ui-icons/Add'

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
        <FormControl className={styles.makeModelYearInput} onChange={props.changed}>
          <InputLabel htmlFor="car-make">Make</InputLabel>
          <Input name="make" id="car-make" value={props.newPostInfo.make} />
        </FormControl>
        <FormControl className={styles.makeModelYearInput} onChange={props.changed}>
          <InputLabel htmlFor="car-model">Model</InputLabel>
          <Input name="model" id="car-model" value={props.newPostInfo.model} />
        </FormControl>
        <FormControl className={styles.makeModelYearInput} onChange={props.changed}>
          <InputLabel htmlFor="car-year">Year</InputLabel>
          <Input name="year" id="car-year" value={props.newPostInfo.year} />
        </FormControl>
        <FormControl className={styles.postTitle} onChange={props.changed}>
          <InputLabel htmlFor="post-title">Post Title</InputLabel>
          <Input name="title" id="post-title" value={props.newPostInfo.title} />
        </FormControl>
        <FormControl className={styles.postBody} onChange={props.changed}>
          <TextField
            label="Post Body"
            name="body"
            value={props.newPostInfo.body}
            multiline
            rows="10"
            margin="normal" />
        </FormControl>
        <form onSubmit={props.tagAdd}>
          <FormControl className={styles.tagsInput} onChange={props.changed}>
            <InputLabel htmlFor="add-tags">Add a Tag</InputLabel>
            <Input name="currentTag" id="add-tags" value={props.newPostInfo.currentTag}/>
          </FormControl>
          <Button type="submit" className={styles.addTagButton}>
            <PlusIcon className={styles.plusIcon} onClick={props.tagAdd} />
          </Button>
        </form>
        <div>
          {props.newPostInfo.tags.map(tag => 
            <Chip 
              className={styles.postChips} 
              label={tag}
              onDelete={(event) => props.tagDelete(event, tag)} 
              key={tag} />
          )}
        </div>
        <h4>TO DO: Add photo import</h4>
        <div className={styles.addPostButtonRoot}>
          <Button variant="raised" className={styles.addPostButton}>Add post</Button>
        </div>
      </div>
    </Modal>
    </div>
  )
}