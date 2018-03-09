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
  }

  async checkIfIdentifierExists(s) {
    // TODO: ping api/user/s
    // if 404, return false
    // if 2XX-3XX, return true
    return true
  }

  handleIdentifierChange(e) {
    const { value } = e.target
    const isValidEmail = validateEmail(value)
    const isValidUserName = validateUsername(value)

    this.refs.identifier.focus()
    this.setState({
      identifier: value,
      identifierSuccess: false,
      identifierIsValid: isValidEmail || isValidUserName,
      identifierIsEmail: isValidEmail,
      password: '',
      passwordIsValid: false,
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
        identifierSuccess: doesExist
      })

      return this.refs.password.focus()
    }
  }

  render() {
    const {
      identifier,
      identifierSuccess,
      identifierIsValid,
      identifierIsEmail,
      password,
    } = this.state

    return (
      <Layout>
        <div className={styles.root}>
          <Typography variant="headline">
            Please Sign In
          </Typography>
          <Card className={styles.card}>
            <Avatar
              className={styles.avatar}
              src="https://pbs.twimg.com/profile_images/887828156886986752/F7XIdhSg_400x400.jpg"
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
                onChange={e => this.handleIdentifierChange(e)}
                value={identifier}
                ref="identifier"
              />
              {identifierSuccess ?
                <TextField
                  className={styles.field}
                  label={password.length ? 'Password' : 'Enter your password'}
                  onChange={e => this.handlePasswordChange(e)}
                  value={password}
                  ref="password"
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
