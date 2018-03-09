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
  }

  handleModalOpen = () => {
    this.setState({ modalOpen: true });
  }

  handleModalClose = () => {
    this.setState({ modalOpen: false });
  }

  render() {
    return (
      <Layout>
        
        <div className={styles.profPageHead}>
          <div>
             
          </div>
          <ProfCard 
              shouldModalBeOpen={this.state.modalOpen} 
              openModal={this.handleModalOpen} 
              closeModal={this.handleModalClose}
              name="Test McTest"
              city="Raleigh, NC"
              bio="Hey, I'm a test user from a test city with a test car." />
        </div>
        <div>
        <ProfileTab />
        </div>
      </Layout>
    )
  }
}
