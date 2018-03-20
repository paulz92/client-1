import { Component } from 'react'
import { TextField, MenuItem, Button } from 'material-ui'
import { bindActionCreators } from 'redux'
import Dropzone from 'react-dropzone'
import PhotoCameraIcon from 'material-ui-icons/PhotoCamera'

import {
  getCarSelectionOptionsQuery,
  uploadPostPicture,
  createCarPostMutationString,
} from '@/api'
import {
  withGraphQL,
  withRedux,
  apolloFetch
} from '@/utils'
import {
  addPost,
  dismissModal
} from '@/actions'
import styles from './index.scss'

function* getRange(start, end) {
  end = end + 1
  while (start < end) {
    yield start
    start++
  }
}

@withGraphQL({
  selectionOptions: getCarSelectionOptionsQuery
})
@withRedux(
  null,
  dispatch => bindActionCreators({
    addPost,
    dismissModal
  }, dispatch)
)
export class NewPostModal extends Component {
  state = {
    pictureUris: [],
    nickname: '',
    make: '',
    model: '',
    year: null,
    description: ''
  }

  get makeOptions() {
    const { selectionOptions } = this.props

    return selectionOptions
      && selectionOptions.data
  }

  get modelOptions() {
    const { makeOptions, state } = this
    const { make } = state

    const $make = makeOptions
      && makeOptions
        .find(m => m.name === make)
    
    return $make
      && $make.models
  }

  get yearOptions() {
    const { modelOptions, state } = this
    const { model } = state

    const $model = modelOptions
      && modelOptions.find(m => m.name === model)
    
    if (!$model) return

    const { firstYear, lastYear } = $model
    return Array.from(getRange(
      firstYear,
      lastYear || (new Date).getFullYear()
    )).reverse()
  }

  get canSubmit() {
    const {
      pictureUris,
      nickname,
      make,
      model,
      year,
      description
    } = this.state

    return pictureUris[0]
      && nickname
      && make
      && model
      && year
      && description
  }

  handleMakeChange(e) {
    const { value } = e.target
    this.setState({
      make: value
    })
  }

  handleModelChange(e) {
    const { value } = e.target

    this.setState({
      model: value
    })
  }

  handleYearChange(e) {
    const { value } = e.target

    this.setState({
      year: value
    })
  }

  async handleFormSubmit(e) {
    e.preventDefault()

    const {
      pictureUris,
      nickname,
      make,
      model,
      year,
      description
    } = this.state

    if (!this.canSubmit) return

    const { data, errors } = await apolloFetch({
      query: createCarPostMutationString,
      variables: {
        nickname,
        year: parseInt(year, 10),
        carModelName: model,
        carMakeName: make,
        pictureUrls: pictureUris,
        body: description,
        tags: ['foo'],
      }
    })

    if (errors) throw errors

    this.props.addPost(data.newPost)
    setTimeout(() => this.props.dismissModal(), 0)
  }

  async handlePictureUpload(accepted, rejected) {
    console.log('accepted', accepted)
    console.log('rejected', rejected)
    const file = accepted.shift()
    let uri

    try {
      uri = await uploadPostPicture(file)
    } catch (err) { console.error(err) }

    this.setState({
      pictureUris: [ ...this.state.pictureUris, uri ]
    })
  }

  render() {
    const {
      state,
      makeOptions,
      modelOptions,
      yearOptions,
      canSubmit
    } = this

    console.log('makes', makeOptions)
    console.log('models', modelOptions)
    console.log('year', yearOptions)

    const {
      pictureUris,
      nickname,
      make,
      model,
      year,
      description
    } = state

    return (
      <div className={styles.root}>
        <div className={styles.toolbar}>
        </div>
        <div className={styles.content}>
          <div className={styles.mediaContainer}>
            {pictureUris && pictureUris.map((uri, idx) =>
              <img
                key={idx}
                src={uri}
                className={styles.image}
              />
            )}
            <Dropzone className={styles.dropzone}
              accept=""
              onDrop={(accepted, rejected) => this.handlePictureUpload(accepted, rejected)}
            >
              <PhotoCameraIcon className={styles.cameraIcon} />
              <p>Click or drag and drop here to upload</p>
            </Dropzone>
          </div>
          <form
            onSubmit={e => this.handleFormSubmit(e)}
            className={styles.form}
          >
            <TextField
              autoFocus
              autoComplete={false}
              label="Nickname"
              value={nickname}
              className={styles.field}
              styles={{marginBottom: '25px !important'}}
              onChange={e => this.setState({ nickname: e.target.value })}
            />
            <TextField
              select
              label="Make"
              value={make}
              className={styles.field}
              disabled={!Boolean(makeOptions)}
              onChange={e => this.handleMakeChange(e)}
            >
              {makeOptions && makeOptions.map(({ name }) =>
                <MenuItem
                  key={name}
                  value={name}
                >
                  {name}
                </MenuItem>
              )}
            </TextField>
            <TextField
              select
              label="Model"
              value={model}
              className={styles.field}
              disabled={!Boolean(modelOptions)}
              onChange={e => this.handleModelChange(e)}
            >
              {modelOptions && modelOptions.map(({ name }) =>
                <MenuItem
                  key={name}
                  value={name}
                >
                  {name}
                </MenuItem>
              )}
            </TextField>
            <TextField
              select
              label={Boolean(year) || "Year"}
              value={year}
              className={styles.field}
              disabled={!Boolean(yearOptions)}
              onChange={e => this.handleYearChange(e)}
            >
              {yearOptions && yearOptions.map(n =>
                <MenuItem
                  key={n}
                  value={n && n.toString()}
                >
                  {n}
                </MenuItem>
              )}
            </TextField>
            <TextField
              multiline
              rows="2"
              rowsMax="4"
              autoComplete={false}
              label="Description"
              value={description}
              className={styles.field}
              onChange={e => this.setState({ description: e.target.value })}
            />
            <Button
              variant="raised"
              type="submit"
              disabled={!canSubmit}
            >
              Create Post
            </Button>
          </form>
        </div>
      </div>
    )
  }
}
