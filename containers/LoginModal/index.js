import { Component } from 'react'
import { Card, TextField, Avatar, Button, Typography } from 'material-ui'
import { withTitle } from 'pretty-next'
import { graphql, compose } from 'react-apollo'
import { bindActionCreators } from 'redux'

import { Layout } from '@/containers'
import {
  getAuthSubjectByEmail,
  getAuthSubjectByUsername,
  loginMutation,
  loginWithEmailMutation,
} from '@/api'
import {
  validateEmail,
  validateUsername,
  validatePassword,
  withApollo,
  withGraphQL,
  withRedux,
  apolloFetch
} from '@/utils'
import { setUser, dismissModal } from '@/actions'
import styles from './index.scss'

const PLACEHOLDER_AVATAR = '/public/images/user-placeholder.svg'

@withGraphQL({
  login: loginMutation,
  loginWithEmail: loginWithEmailMutation
})
@withRedux(
  null,
  dispatch => bindActionCreators({
    setUser,
    dismissModal
  }, dispatch)
)
export class LoginModal extends Component {
  state = {
    identifier: '',
    identifierIsEmail: false,
    identifierSuccess: false,
    identifierIsValid: false,
    didJustFetch: false,
    password: '',
    passwordIsValid: false,
    shouldHidePassword: true,
    firstname: null,
    avatarUrl: PLACEHOLDER_AVATAR,
  }

  async checkIfIdentifierExists(s) {
    const { data, errors } = await apolloFetch(
      this.state.identifierIsEmail ?
      {
        query: getAuthSubjectByEmail,
        variables: { email: s }
      } :
      {
        query: getAuthSubjectByUsername,
        variables: { user: s }
      }
    )

    if (errors || (errors && errors.length))
      return false
    
    const { avatarUrl, firstname } = data.subject
    this.setState({ avatarUrl, firstname })

    return true
  }

  handleIdentifierChange(e) {
    const { value } = e.target
    const isValidEmail = validateEmail(value)
    const isValidUserName = validateUsername(value)

    this.setState({
      identifier: value,
      identifierSuccess: false,
      identifierIsValid: isValidEmail || isValidUserName,
      identifierIsEmail: isValidEmail,
      didJustFetch: false,
      password: '',
      passwordIsValid: false,
      firstname: null,
      avatarUrl: PLACEHOLDER_AVATAR,
    })
  }

  handlePasswordChange(e) {
    const { value } = e.target
    const isValidPassword = validatePassword(value)

    this.setState({
      password: value,
      passwordIsValid: isValidPassword
    })
  }

  async handleSubmit(e) {
    e.preventDefault()

    const {
      identifier,
      password,
      identifierSuccess,
      identifierIsEmail
    } = this.state

    if (!identifierSuccess) {
      const doesExist = await this.checkIfIdentifierExists(identifier)
      console.log('doesExist', doesExist)
      this.setState({
        didJustFetch: true,
        identifierSuccess: doesExist,
      })

      return this.passwordField.focus()
    }

    console.log(this.props)

    const { data, errors } = identifierIsEmail ?
      await this.props.loginWithEmail({
        variables: { email: identifier, pass: password }
      }) :
      await this.props.login({
        variables: { user: identifier, pass: password }
      })

    console.log(data, errors)

    if (errors) {
      console.log('errors loggin in', errors)
    } else {
      this.props.setUser(data.buffer)
      this.props.dismissModal()
    }
  }

  render() {
    const {
      identifier,
      identifierSuccess,
      identifierIsValid,
      identifierIsEmail,
      shouldHidePassword,
      avatarUrl,
      firstname,
      password,
      didJustFetch,
    } = this.state

    return (
      <div className={styles.root}>
        <Typography
          className={styles.title}
          variant="headline"
        >
          Please Sign In
        </Typography>
        <Card className={styles.card}>
          {firstname ?
            <Typography className={styles.greeting}>
              Hello, {`${firstname[0].toUpperCase()}${firstname.slice(1)}`}.
            </Typography> : null
          }
          <Avatar
            className={styles.avatar}
            src={avatarUrl}
          />
          <form
            className={styles.form}
            onSubmit={e => this.handleSubmit(e)}
          >
            <TextField
              className={styles.field}
              label={
                identifierIsValid
                  ? identifierIsEmail
                      ? 'Email'
                      : 'Username'
                  : 'Enter your username or email'
              }
              type="text"
              autoFocus
              autoComplete={false}
              onChange={e => this.handleIdentifierChange(e)}
              value={identifier}
              errorText="user not found"
              error={didJustFetch && !identifierSuccess}
            />
            {identifierSuccess ?
              <TextField
                type={shouldHidePassword ? 'password' : 'text'}
                autoFocus
                autoComplete={false}
                className={styles.field}
                label={password.length ? 'Password' : 'Enter your password'}
                ref={textField => this.passwordField = textField}
                onChange={e => this.handlePasswordChange(e)}
                value={password}
              /> : null
            }
            <Button
              type="submit"
              className={styles.button}
              disabled={!identifierIsValid}
              variant="raised"
            >
              {identifierSuccess ? 'Sign In' : 'Next'}
            </Button>
          </form>
        </Card>
      </div>
    )
  }
}
