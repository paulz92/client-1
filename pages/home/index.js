import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'

import { Button } from '@/components'
import { Layout } from '@/containers'
import { incrementCount, decrementCount } from '@/actions'
import { withTranslate, withRedux, withMaterialUI } from '@/utils'

import styles from './index.scss'

const mapStateToProps = ({ count }) => ({ count })
const mapDispatchToProps = dispatch => (
  bindActionCreators({ incrementCount, decrementCount }, dispatch)
)

@withMaterialUI()
@withRedux(mapStateToProps, mapDispatchToProps)
@withTranslate(['home', 'common'])
export default class Home extends Component {
  render() {
    const { t, incrementCount, decrementCount, count } = this.props

    return (
      <Layout>
        <div className={styles.root}>
          <h1>{t('count', { count: count.count })}</h1>
          <div className={styles.buttons}>
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
          </div>
        </div>
      </Layout>
    )
  }
}

