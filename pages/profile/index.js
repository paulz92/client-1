import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'

import { Button, Layout } from '@/components'
import { incrementCount, decrementCount } from '@/actions'
import { withTranslate, withRedux, withMaterialUI } from '@/utils'

const mapStateToProps = ({ count }) => ({ count })
const mapDispatchToProps = dispatch => (
  bindActionCreators({ incrementCount, decrementCount }, dispatch)
)

const Root = styled.div`
  flex-grow: 1;
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`

// const ButtonContainer = styled.div`
//   width: 250px;
//   display: flex;
//   justify-content: space-between;
// `

@withMaterialUI()
@withRedux(mapStateToProps, mapDispatchToProps)
@withTranslate(['profile', 'common'])
export default class Profile extends Component {
  render() {
    // const { t, incrementCount, decrementCount, count } = this.props

    return (
      <Layout>
        <Root>
          <div>
            <h1>Profile Page</h1>
          </div>
          <div>
            <h1>name</h1>
          </div>
          <div>
            <h1>location</h1>
          </div>
          <div>
            <h1>Bio</h1>
          </div>
          
        </Root>
      </Layout>
    )
  }
}
