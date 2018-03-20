import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import StackGrid, { transitions, easings } from 'react-stack-grid'
import { Button } from 'material-ui'
import SearchIcon from 'material-ui-icons/Search'
import AddIcon from 'material-ui-icons/Add'
import Pin from 'material-ui-icons/FiberPin'

import {
  CarCard,
  SearchBar,
  Title,
  ProgressFlex
} from '@/components'
import { Layout, CarCommentModal } from '@/containers'

import {
  fetchPosts,
  presentPostModal,
  togglePostFavorite,
  presentLoginModal,
  presentNewPostModel,
} from '@/actions'
import {
  withTranslate,
  withReduxPage,
  withMaterialUI,
  withGraphQL,
  withApollo,
  apolloFetch
} from '@/utils'
import {
  getLatestPostsQuery,
  favoritePostMutationString,
  unfavoritePostMutationString,
} from '@/api'

import styles from './index.scss'

@withReduxPage(
  state => ({ carPosts: state.carPosts, user: state.auth.user }),
  dispatch => bindActionCreators({
    fetchPosts,
    presentPostModal,
    presentLoginModal,
    presentNewPostModel,
    togglePostFavorite,
  }, dispatch)
)
@withApollo
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

  async handleCarFavorite(e, id, isFavorited) {
    e.stopPropagation()

    console.log('id => ', id)

    if (!this.isAuthenticated)
      return this.props.presentLoginModal()

    const { errors } = await apolloFetch({
      variables: { post: id },
      query: isFavorited
        ? unfavoritePostMutationString
        : favoritePostMutationString
    })

    this.props.togglePostFavorite(id)
  }

  handleCarComment(e, id) {
    e.stopPropagation()

    if (this.isAuthenticated) {
      this.props.presentPostModal(id, true)
    } else {
      this.props.presentLoginModal()
    }
  }

  handleNewPost() {
    if (this.isAuthenticated) {
      this.props.presentNewPostModel()
    } else {
      this.props.presentLoginModal()
    }
  }

  async componentDidMount() {
    console.log('props', this.props, this.props.fetchPosts)
    this.props.fetchPosts()
  }

  get isAuthenticated() {
    return Boolean(this.props.user)
  }

  get userId() {
    return this.isAuthenticated &&
      this.props.user.id
  }

  render() {
    const { transition, props, userId, isAuthenticated } = this
    const { posts, error, loading } = this.props.carPosts

    return (
      <Layout>
        <div className={styles.root}>
          {!loading || posts ?
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
              {posts && posts.map((car, idx) => {
                const isFavorited = isAuthenticated
                  && car.favorites
                    .find(fav => fav.user && fav.user.id === userId)
                    
                return (
                  <CarCard
                    onFavoriteClick={e => this.handleCarFavorite(e, car.id, isFavorited)}
                    onCommentClick={e => this.handleCarComment(e, car.id)}
                    onClick={() => this.props.presentPostModal(car.id)}
                    isFavorited={isFavorited}
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
                )
              })}
            </StackGrid> :
            <ProgressFlex />
          }
          <Button
            variant="fab"
            color="primary"
            aria-label="New Post"
            className={styles.newFab}
            onClick={() => this.handleNewPost()}
          >
            <AddIcon />
          </Button>
        </div>
      </Layout>
    )
  }
}
