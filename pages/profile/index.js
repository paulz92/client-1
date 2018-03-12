import React, { Component } from 'react'
import { bindActionCreators } from 'redux'

import { ProfCard, ProfileTab } from '@/components'
import { Layout } from '@/containers'
import { withTranslate, withMaterialUI } from '@/utils'
import styles from './index.scss'

@withTranslate(['Profile', 'common'])
export default class Profile extends Component {
  state = {
    modalOpen: false,
    newPostInfo: {
      make: '',
      model: '',
      year: '',
      title: '',
      body: '',
      currentTag: '',
      tags: []
    }
  }

  handleModalOpen = () => {
    this.setState({ modalOpen: true });
  }

  handleModalClose = () => {
    this.setState({ modalOpen: false });
  }

  handleInputChange = event => {
    const newPostState = { ...this.state.newPostInfo };
    const keyToUpdate = event.target.name;
    newPostState[keyToUpdate] = event.target.value;
    this.setState({ newPostInfo: newPostState })
  }

  handleNewTagAdded = event => {
    const copyPostState = {...this.state.newPostInfo};
    copyPostState.tags.push(copyPostState.currentTag);
    this.setState({ 
      newPostInfo: {
        ...copyPostState,
        currentTag: ''
      }
    });
  }

  render() {
    return (
      <Layout>
        <div className={styles.profPageHead}>
          <ProfCard 
            shouldModalBeOpen={this.state.modalOpen} 
            openModal={this.handleModalOpen} 
            closeModal={this.handleModalClose}
            newPostInfo={this.state.newPostInfo}
            changed={this.handleInputChange}
            tagAdd={this.handleNewTagAdded}
            name="Test McTest"
            city="Raleigh, NC"
            bio="Hey, I'm a test user from a test city with a test car." />
        </div>
        <div className={styles.profPageTabs}>
          <ProfileTab />
        </div>
      </Layout>
    )
  }
}
