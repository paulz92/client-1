import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'

import { Button } from '../components'
import { incrementCount, decrementCount } from '../actions'
import { withTranslate, withRedux, withMaterialUI } from '../utils'

const mapStateToProps = ({ count }) => ({ count })
const mapDispatchToProps = dispatch => (
  bindActionCreators({ incrementCount, decrementCount }, dispatch)
)

const Root = styled.div`
  height: 100vh;
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ButtonContainer = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
`

@withRedux(mapStateToProps, mapDispatchToProps)
@withTranslate(['home', 'common'])
@withMaterialUI()
export default class Home extends Component {
  render() {
    const { t, incrementCount, decrementCount, count } = this.props

    return (
      <div>
        <Root>
          <h1>{t('count', { count: count.count })}</h1>
          <ButtonContainer>
            <Button
              onClick={() => incrementCount()}
              variant="raised"
            >
              {t`increment`}
            </Button>
            <Button
              onClick={() => decrementCount()}
              variant="raised"
            >
              {t`decrement`}
            </Button>
          </ButtonContainer>
        </Root>
      </div>
    )
  }
}

