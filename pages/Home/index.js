import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import StackGrid, { transitions, easings } from 'react-stack-grid'
import SearchIcon from 'material-ui-icons/Search'

import { CarCard, SearchBar, Title } from '@/components'
import { Layout, CarCommentModal } from '@/containers'

import { fetchPosts, presentPostModal } from '@/actions'
import {
  withTranslate,
  withReduxPage,
  withMaterialUI,
  withGraphQL,
  withApollo
} from '@/utils'
import {
  getLatestPostsQuery,
} from '@/api'

import styles from './index.scss'

@withApollo
@withReduxPage(
  state => ({ carPosts: state.carPosts }),
  dispatch => bindActionCreators({
    fetchPosts,
    presentPostModal
  }, dispatch)
)
@withTranslate(['Home', 'common'])
export default class Home extends Component {
  state = {
    searchVal: "Search cars",
    modalOpen: false
  }

  transition = transitions.scaleDown

  handleInputChange = (event) => {
    event.preventDefault()
    this.setState({ searchVal: event.target.value })
  }

  handleCarLike = (event) => {
    event.preventDefault()
    console.log('clicked to like car')
  }

  async componentDidMount() {
    console.log('props', this.props, this.props.fetchPosts)
    this.props.fetchPosts()
  }

  render() {
    const { transition, props } = this
    const { posts, error, loading } = this.props.carPosts

    return (
      <Layout>
        <div className={styles.root}>
          <StackGrid
            monitorImagesLoaded
            columnWidth={260}
            duration={600}
            gutterWidth={15}
            gutterHeight={15}
            easing={easings.cubicOut}
            appearDelay={60}
            appear={transition.appear}
            appeared={transition.appeared}
            enter={transition.enter}
            entered={transition.entered}
            leaved={transition.leaved}
            className={styles.stackGrid}
          >
            {posts && [...posts, ...posts, ...posts, ...posts].map((car, idx) =>
              <CarCard
                onFavoriteClick={e => { e.stopPropagation() }}
                onCommentClick={e => { e.stopPropagation() }}
                onClick={() => this.props.presentPostModal(car.id)}
                key={car.id + idx}
                carNote={car.body}
                pics={car.pictureUrls}
                avatar={car.owner.avatarUrl}
                tags={car.tags.map(tag => tag.name)}
                handle={car.owner.username}
                nickname={car.nickname}
                year={car.year}
                make={car.carModel.make.name}
                model={car.carModel.name}
              />
            )}
          </StackGrid>
        </div>
      </Layout>
    )
  }
}
