import React, { Component } from 'react'
import { bindActionCreators } from 'redux'

import { ProfCard, ProfileTab } from '@/components'
import { Layout, CarCommentModal, NewPostModal } from '@/containers'
import { withTranslate, withMaterialUI, withReduxPage } from '@/utils'
import styles from './index.scss'

@withReduxPage()
@withTranslate(['Profile', 'common'])
export default class Profile extends Component {
  state = {
    newPostModalOpen: false,
    commentModalOpen: false
  }

  handleNewPostModalOpen = () => {
    this.setState({ newPostModalOpen: true })
  }

  handleNewPostModalClose = () => {
    this.setState({ newPostModalOpen: false })
  }

  handleCommentModalOpen = () => {
    this.setState({ commentModalOpen: true })
  }

  handleCommentModalClose = () => {
    this.setState({ commentModalOpen: false })
  }

  render() {
    return (
      <Layout>
        <div className={styles.profPageHead}>
          <ProfCard 
            openNewPostModal={this.handleNewPostModalOpen}
            name="Test McTest"
            city="Raleigh, NC"
            bio="Hey, I'm a test user from a test city with a test car." />
        </div>
        <div className={styles.profPageTabs}>
          <ProfileTab openCommentModal={this.handleCommentModalOpen}/>
        </div>
        <NewPostModal
          closeModal={this.handleNewPostModalClose}
          shouldNewPostModalBeOpen={this.state.newPostModalOpen} />
        <CarCommentModal 
          closeModal={this.handleCommentModalClose}
          shouldCommentModalBeOpen={this.state.commentModalOpen} />
      </Layout>
    )
  }
}
