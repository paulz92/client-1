import { Component } from 'react'
import { IconButton, Avatar } from 'material-ui'
import Comment from 'material-ui-icons/Comment'
import Favorite from 'material-ui-icons/Favorite'
import styled from 'styled-components'

import styles from './index.scss'

export class CarCard extends Component {
  state = {
    isHovered: false,
  }

  render() {
    const {
      pics,
      onFavoriteClick,
      onCommentClick,
      onClick,
      avatar,
      handle,
      nickname,
      year,
      make,
      model
    } = this.props

    const {
      isHovered
    } = this.state

    return (
      <div className={styles.root}
        onClick={onClick}
        onMouseEnter={() => this.setState({ isHovered: true })}
        onMouseLeave={() => this.setState({ isHovered: false })}
      >
        <div className={styles.outer}>
          <div className={styles.inner}>
            <div className={styles.mediaContainer}>
              {pics && pics.map((pic, idx) =>
                <img
                  style={{filter: isHovered ? 'brightness(0.6)' : null}}
                  key={idx}
                  className={styles.media}
                  src={pic}
                />
              )}
              {isHovered && <div className={styles.infoContainer}>
                <p>"{nickname}"</p>
                <p>{year} {make} {model}</p>
              </div>}
            </div>
            <div className={styles.toolBar}>
              <div className={styles.userContainer}>
                <Avatar
                  className={styles.avatar}
                  src={avatar}
                />
                {isHovered && <p className={styles.handle}>
                  @{handle}
                </p>
                }
              </div>
              <div className={styles.actions}>
                <IconButton
                  onClick={onFavoriteClick}
                  className={styles.action}
                >
                  <Favorite />
                </IconButton>
                <IconButton
                  onClick={onCommentClick}
                  className={styles.action}
                >
                  <Comment />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
