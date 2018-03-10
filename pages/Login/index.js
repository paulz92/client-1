import { Component } from 'react'
import { Card, TextField, Avatar, Button, Typography } from 'material-ui'
import { withTitle } from 'pretty-next'

import { Layout } from '@/containers'
import {
  validateEmail,
  validateUsername,
  validatePassword,
  withTranslate
} from '@/utils'
import styles from './index.scss'

const PLACEHOLDER_AVATAR = '/public/images/user-placeholder.svg'
const KATEUPTON_AVATAR = 'https://pbs.twimg.com/profile_images/887828156886986752/F7XIdhSg_400x400.jpg'

@withTranslate(['home', 'common'])
export default class Login extends Component {

  state = {
    identifier: '',
    identifierIsEmail: false,
    identifierSuccess: false,
    identifierIsValid: false,
    password: '',
    passwordIsValid: false,
    shouldHidePassword: true,
    avatarUrl: PLACEHOLDER_AVATAR,
  }

  async checkIfIdentifierExists(s) {
    // TODO: ping api/user/s
    // if 404, return false
    // if 2XX-3XX, return true
    return true
  }

  componentDidMount() {
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
      password: '',
      passwordIsValid: false,
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

    const { identifier, password, identifierSuccess } = this.state
    if (!identifierSuccess) {
      const doesExist = await this.checkIfIdentifierExists(identifier)
      this.setState({
        identifierSuccess: doesExist,
        avatarUrl: KATEUPTON_AVATAR,
      })

      return this.passwordField.focus()
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
      password,
    } = this.state

    return (
      <Layout>
        <div className={styles.root}>
          <Typography
            className={styles.title}
            variant="headline"
          >
            Please Sign In
          </Typography>
          <Card className={styles.card}>
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
                autoComplete={false}
                ref={textField => this.identifierField = textField}
                onChange={e => this.handleIdentifierChange(e)}
                value={identifier}
              />
              {identifierSuccess ?
                <TextField
                  type={shouldHidePassword ? 'password' : 'text'}
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
      </Layout>
    )
  }
}
