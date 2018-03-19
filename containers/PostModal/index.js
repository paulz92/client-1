import { Component } from 'react'
import {
  FormControl,
  Modal,
  Typography,
  TextField,
  Button,
  Chip,
  Avatar
} from 'material-ui'
import { bindActionCreators } from 'redux'

import { withRedux } from '@/utils'
import { commentOnPost } from '@/actions'

import styles from './index.scss'

@withRedux(
  state => ({
    user: state.auth.user,
    carPosts: state.carPosts,
    layout: state.layout
  }),
  dispatch => bindActionCreators({
    commentOnPost
  }, dispatch)
)
export class PostModal extends Component {
  state = {
    commentBody: ''
  }

  handleCommentSubmit(e) {
    e.preventDefault()

    const { commentBody } = this.state
    if (!commentBody) return

    this.props.commentOnPost(this.post.id, commentBody)
    this.setState({ commentBody: '' })
  }

  get post() {
    const { postId } = this.props.layout.modalPayload
    console.log(postId)
    console.log(this.props.carPosts.posts)
    return this.props.carPosts.posts.find(post => post.id === postId)
  }

  render() {
    const { post } = this
    console.log('post', post)

    return (
      <div className={styles.root}>
        <div className={styles.toolbar}>
        </div>
        <div className={styles.content}>
          <div className={styles.outerRow}>
            <div className={styles.mediaContainer}>
              {post.pictureUrls.map((pic, idx) =>
                <img
                  className={styles.media}
                  src={pic}
                  key={idx}
                />
              )}
            </div>
          </div>
          <div className={styles.outerRow}>
            <div className={styles.control}>
              <p className={styles.headline}>
                {post.year} {post.carModel.make.name} {post.carModel.name} &mdash; "{post.nickname}"
              </p>
              <div className={styles.user}>
                <Avatar src={post.owner.avatarUrl} />
                <p>{post.owner.firstname} {post.owner.lastname}</p>
              </div>
              <p className={styles.body}>
                {post.body}
              </p>
              <div className={styles.chips}>
                {post.tags.map((tag, idx) =>
                  <Chip
                    className={styles.chip}
                    key={idx}
                    label={tag.name}
                  />
                )}
              </div>
              <p className={styles.commentsHead}>
                {post.comments.length} comments
              </p>
              <div>
                {post.comments.map(comment =>
                  <div className={styles.comment}>
                    <div className={styles.commentTop}>
                      <Avatar
                        className={styles.commentAvatar}
                        src={comment.commenter.avatarUrl}
                      />
                      <p className={styles.comment}>
                        {comment.commenter.firstname} {comment.commenter.lastname}
                      </p>
                    </div>
                    <p className={styles.commentBody}>
                      {comment.body}
                    </p>
                  </div>
                )}
              </div>
              {this.props.user &&
                <form
                  className={styles.commentForm}
                  onSubmit={e => this.handleCommentSubmit(e)}
                >
                  <TextField
                    autoFocus={this.props.layout.modalPayload.focus}
                    ref="commentField"
                    className={styles.newComment}
                    label="New comment"
                    value={this.state.commentBody}
                    onChange={e => this.setState({ commentBody: e.target.value })}
                    margin="normal"
                  />
                </form>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
