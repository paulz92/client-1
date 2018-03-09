import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'

import { ProfCard, ProfileTab } from '@/components'
import { Layout } from '@/containers'
import { withTranslate, withMaterialUI } from '@/utils'

@withTranslate(['profile', 'common'])
export default class Profile extends Component {
  render() {
    return (
      <Layout>
        <div>
          <ProfileTab />
        </div>
      </Layout>
    )
  }
}
