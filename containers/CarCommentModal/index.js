import { Component } from 'react'
import { FormControl, Modal, Typography, TextField, Button, Chip } from 'material-ui';

import styles from './index.scss'

export class CarCommentModal extends Component {
  state = {
    carCommentModal: {
      carYear: "Info for",
      carMake: "car",
      carModel: "clicked",
      carNote: "Car note for car clicked",
      carPic: "https://media.ed.edmunds-media.com/ford/excursion/2003/oem/2003_ford_excursion_4dr-suv_eddie-bauer_fq_oem_1_500.jpg",
      tags: ["tags for", "car", "clicked"],
      comments: ["comments associated", "with the car that", "was clicked by the user"],
      commentBody: ""
    }
  }

  handleCommentChange = (event) => {
    event.preventDefault()
    const newCarCommentModal = { ...this.state.carCommentModal }
    newCarCommentModal.commentBody = event.target.value
    this.setState({ carCommentModal: newCarCommentModal })
  }

  handleAddComment = (event) => {
    event.preventDefault()
      if (this.state.carCommentModal.commentBody.length >= 1) {
      const newCarCommentModal = { ...this.state.carCommentModal }
      const commentsArray = [ ...newCarCommentModal.comments ]
      commentsArray.push(this.state.carCommentModal.commentBody)
      newCarCommentModal.comments = commentsArray
      newCarCommentModal.commentBody = ""
      this.setState({ carCommentModal: newCarCommentModal })
    }
  }

  render() {
    return (
      <div>
        <Modal
          className={styles.modalRoot}
          aria-labelledby="car-comment-modal"
          aria-describedby="car-comment-modal"
          open={this.props.shouldCommentModalBeOpen}
          onClose={this.props.closeModal}
        >
          <div className={styles.getModalStyles}>
            <Typography className={styles.modalTitle} variant="title">
              {`${this.state.carCommentModal.carYear} ${this.state.carCommentModal.carMake} ${this.state.carCommentModal.carModel}`}
            </Typography>
            <img className={styles.modalPic} src={`${this.state.carCommentModal.carPic}`} alt='carpic' />
            <Typography className={styles.carNote} variant="title">
              {this.state.carCommentModal.carNote}
            </Typography>
            <div className={styles.carChipsRoot}>
              {this.state.carCommentModal.tags.map(tag => <Chip className={styles.carChips} label={tag} key={tag}/>)}
            </div>
            <div className={styles.commentsRoot}>
              {this.state.carCommentModal.comments.map((comment, index) => (
                <div key={index}>
                  <Typography className={styles.comment}>{comment}</Typography>
                  <hr />
                </div>))
              }
            </div>
            <FormControl className={styles.commentBody} onChange={this.handleCommentChange}>
              <TextField
                label="Add Comment"
                name="comment"
                value={this.state.carCommentModal.commentBody}
                multiline
                rows="3"
                margin="normal" />
            </FormControl>
            <div className={styles.commentButtonRoot}>
              <Button className={styles.addCommentButton} onClick={this.handleAddComment}>Add Comment</Button>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}