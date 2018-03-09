import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'

import { ProfCard } from '@/components'
import { Layout } from '@/containers'
import { withTranslate, withMaterialUI } from '@/utils'

const Root = styled.div`
  flex-grow: 1;
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`

@withMaterialUI()
@withTranslate(['profile', 'common'])
export default class Profile extends Component {
  state = {
    modalOpen: false,
  };

  handleModalOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleModalClose = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    return (
      <Layout>
        <Root>
          <ProfCard 
            name="Test McTest" 
            city="Raleigh, NC" 
            bio="Hey, I'm a test user from a test city with a test car."
            shouldModalBeOpen={this.state.modalOpen}
            openModal={this.handleModalOpen}
            closeModal={this.handleModalClose} />
        </Root>
      </Layout>
    )
  }
}
