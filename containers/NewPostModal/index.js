import { Component } from 'react'
import { FormControl, FormHelperText, Input, InputLabel, Button, Modal, Typography, TextField, Chip } from 'material-ui';
import PlusIcon from 'material-ui-icons/Add'
import Dropzone from 'react-dropzone'

import styles from './index.scss'

export class NewPostModal extends Component {
  state = {
    newPostInfo: {
      make: '',
      model: '',
      year: '',
      title: '',
      body: '',
      currentTag: '',
      tags: []
    },
    uploadedAvatarURL: ''
  }

  handleInputChange = event => {
    const newPostState = { ...this.state.newPostInfo }
    const keyToUpdate = event.target.name
    newPostState[keyToUpdate] = event.target.value
    this.setState({ newPostInfo: newPostState })
  }

  handleNewTagAdded = event => {
    event.preventDefault()
      if (this.state.newPostInfo.currentTag.length >= 1) {
      const copyPostState = {...this.state.newPostInfo}
      copyPostState.tags.push(copyPostState.currentTag)
      this.setState({ 
        newPostInfo: {
          ...copyPostState,
          currentTag: ''
        }
      })
    }
  }

  handleTagDelete = (event, index) => {
    event.preventDefault()
    const updatedTags = [...this.state.newPostInfo.tags]
    // const deleteIndex = updatedTags.indexOf(val)
    updatedTags.splice(index, 1)
    this.setState({
      newPostInfo: {
        ...this.state.newPostInfo,
        tags: updatedTags
      }
    })
  }

  handlePhotoDrop = (accepted) => {
    this.setState({ uploadedAvatarURL: accepted.shift().preview })
  }

  render() {
    return (
      <Modal
        className={styles.modalRoot}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.props.shouldNewPostModalBeOpen}
        onClose={this.props.closeModal}
      >
        <div className={styles.getModalStyles}>
          <Typography className={styles.modalTitle} variant="title">
            New Post
          </Typography>
          <FormControl className={styles.makeModelYearInput} onChange={this.handleInputChange}>
            <InputLabel htmlFor="car-make">Make</InputLabel>
            <Input name="make" id="car-make" value={this.state.newPostInfo.make} />
          </FormControl>
          <FormControl className={styles.makeModelYearInput} onChange={this.handleInputChange}>
            <InputLabel htmlFor="car-model">Model</InputLabel>
            <Input name="model" id="car-model" value={this.state.newPostInfo.model} />
          </FormControl>
          <FormControl className={styles.makeModelYearInput} onChange={this.handleInputChange}>
            <InputLabel htmlFor="car-year">Year</InputLabel>
            <Input name="year" id="car-year" value={this.state.newPostInfo.year} />
          </FormControl>
          <FormControl className={styles.postTitle} onChange={this.handleInputChange}>
            <InputLabel htmlFor="post-title">Post Title</InputLabel>
            <Input name="title" id="post-title" value={this.state.newPostInfo.title} />
          </FormControl>
          <FormControl className={styles.postBody} onChange={this.handleInputChange}>
            <TextField
              label="Post Body"
              name="body"
              value={this.state.newPostInfo.body}
              multiline
              rows="10"
              margin="normal" />
          </FormControl>
          <form onSubmit={this.handleNewTagAdded}>
            <FormControl className={styles.tagsInput} onChange={this.handleInputChange}>
              <InputLabel htmlFor="add-tags">Add a Tag</InputLabel>
              <Input name="currentTag" id="add-tags" value={this.state.newPostInfo.currentTag}/>
            </FormControl>
            <Button type="submit" className={styles.addTagButton}>
              <PlusIcon className={styles.plusIcon} onClick={this.handleNewTagAdded} />
            </Button>
          </form>
          <div>
            {this.state.newPostInfo.tags.map((tag, index) => 
              <Chip
                key={index}
                className={styles.postChips} 
                label={tag}
                onDelete={(event) => this.handleTagDelete(event, index)} />
            )}
          </div>
          <div className={styles.dropzoneRoot}>
            <Dropzone
              className={styles.dropzone}
              style={{
                background: `url(${this.state.uploadedAvatarURL || '/public/images/user-placeholder.svg'})`
              }}
              accept="image/jpeg, image/png"
              onDrop={accepted => this.handlePhotoDrop(accepted)}>
              {this.state.uploadedAvatarURL.length ? null : 'Drop in an image'}
            </Dropzone>
          </div>
          <div className={styles.addPostButtonRoot}>
            <Button variant="raised" className={styles.addPostButton}>Add post</Button>
          </div>
        </div>
      </Modal>
    )
  }
}