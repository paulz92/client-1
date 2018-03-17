import { Component } from 'react'
import { 
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Paper,
  Typography,
  TextField,
} from 'material-ui'
import Dropzone from 'react-dropzone'

import { Title } from '@/components'
import { Layout } from '@/containers'
import {
  validateEmail,
  validatePassword,
  validateUsername,
  withTranslate,
  withApollo,
  withGraphQL,
  apolloFetch
} from '@/utils'
import {
  findUserByEmail,
  findUserByUsername,
  uploadProfilePicture,
  createUserMutation,
} from '@/api'

import styles from './index.scss'

const StepperButtons = ({ onNextClick, onPreviousClick, canProgress, showBack, onSubmit }) => (
  <div className={styles.stepperButtons}>
    {showBack ?
      <Button
        className={styles.stepperButton}
        variant="raised"
        onClick={onPreviousClick}
      >
        Go Back
      </Button> : null
    }
    <Button
      disabled={!canProgress}
      className={styles.stepperButton}
      variant="raised"
      onClick={async e => {
        let success = true
        if (typeof onSubmit === 'function')
          success = await onSubmit(e)

        if (success && typeof onNextClick === 'function')
          onNextClick(e)
      }}
    >
      Continue
    </Button>
  </div>
)

@withApollo
@withGraphQL({ createUser: createUserMutation })
@withTranslate(['home', 'common'])
export default class Register extends Component {
  state = {
    username: '',
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    confirmPassword: '',
    isValidEmail: false,
    isValidPassword: false,
    isValidUsername: false,
    isUniqueEmail: false,
    isUniqueUsername: false,
    isPasswordConfirmed: false,
    hasFocusedEmail: false,
    hasFocusedUsername: false,
    hasFocusedPassword: false,
    hasFocusedConfirmPassword: false,
    hasFocusedFirstname: false,
    hasFocusedLastname: false,
    shouldHidePasswords: true,
    uploadedAvatarUrl: '',
    activeStep: 0,
    accepted: [],
    rejected: [],
  }

  get isFirstStepSuccessful() {
    const {
      isValidEmail,
      isValidPassword,
      isValidUsername,
      isPasswordConfirmed,
      isUniqueEmail,
      isUniqueUsername,
    } = this.state

    return isValidEmail
      && isValidPassword
      && isValidUsername
      && isPasswordConfirmed
      && isUniqueEmail
      && isUniqueUsername
  }

  get isSecondStepSuccessful() {
    const {
      firstname,
      lastname,
    } = this.state

    return firstname.length
      && lastname.length
  }

  async isUsernameUnique() {
    const { errors } = await apolloFetch({
      query: findUserByUsername,
      variables: { user: this.state.username },
    })

    return Boolean(errors ? errors.length : false)
  }

  async isEmailUnique() {
    const { errors } = await apolloFetch({
      query: findUserByEmail,
      variables: { email: this.state.email }
    })

    return Boolean(errors ? errors.length : false)
  }

  handleUsernameChange(e) {
    const { value } = e.target
    
    const isValidUsername = validateUsername(value)

    this.setState({
      username: value,
      isValidUsername,
    })
  }

  handleEmailChange(e) {
    const { value } = e.target

    const isValidEmail = validateEmail(value)

    this.setState({
      email: value,
      isValidEmail,
    })
  }

  handlePasswordChange(e) {
    const { value } = e.target
    const { confirmPassword } = this.state

    const isValidPassword = validatePassword(value)
    const isPasswordConfirmed = value === confirmPassword

    this.setState({
      password: value,
      isPasswordConfirmed,
      isValidPassword,
    })
  }

  handleConfirmPasswordChange(e) {
    const { value } = e.target
    const { password } = this.state

    const isPasswordConfirmed = value === password

    this.setState({
      confirmPassword: value,
      isPasswordConfirmed,
    })
  }

  handleFirstnameChange(e) {
    const { value } = e.target
    this.setState({ firstname: value })
  }

  handleLastnameChange(e) {
    const { value } = e.target
    this.setState({ lastname: value })
  }

  handleNextStep() {
    this.setState({
      activeStep: this.state.activeStep + 1
    })
  }

  handlePreviousStep() {
    this.setState({
      activeStep: this.state.activeStep - 1
    })
  }

  async handleRegisterSubmit() {
    const {
      firstname,
      lastname,
      username,
      email,
      password,
      uploadedAvatarUrl
    } = this.state

    try {
      const data = await this.props.createUser({
        variables: {
          firstname,
          lastname,
          username,
          email,
          password,
          avatarUrl: uploadedAvatarUrl
        }
      })

      console.log('data =>', data)
    } catch (err) {
      console.error(`Error registering new user: ${err.message}`)
      return false
    }

    return true
  }

  async handleEmailBlur() {
    const isUniqueEmail = this.state.isValidEmail
      ? await this.isEmailUnique()
      : false

    this.setState({
      hasFocusedEmail: true,
      isUniqueEmail,
    })
  }

  async handleUsernameBlur() {
    const isUniqueUsername = this.state.isValidUsername
      ? await this.isUsernameUnique()
      : false

    this.setState({
      hasFocusedUsername: true,
      isUniqueUsername,
    })
  }

  async handleAvatarUpload(accepted) {
    const file = accepted.shift()
    let uri

    try {
      uri = await uploadProfilePicture(file)
    } catch (err) {console.error(err)}

    this.setState({
      uploadedAvatarUrl: uri || file.preview,
    })
  }

  render() {
    const {
      email,
      username,
      password,
      confirmPassword,
      firstname,
      lastname,
      activeStep,
      isValidEmail,
      isValidUsername,
      isValidPassword,
      isUniqueEmail,
      isUniqueUsername,
      isPasswordConfirmed,
      hasFocusedEmail,
      hasFocusedUsername,
      hasFocusedPassword,
      hasFocusedConfirmPassword,
      hasFocusedFirstname,
      hasFocusedLastname,
      shouldHidePasswords,
      uploadedAvatarUrl,
    } = this.state

    return (
      <Layout>
        <Title title="Register" />
        <div className={styles.root}>
          <Stepper
            className={styles.stepper}
            activeStep={activeStep}
            orientation="vertical"
          >
            <Step key={0}>
              <StepLabel>Create your personal account</StepLabel>
              <StepContent className={styles.stepContent}>
                <TextField
                  className={styles.field}
                  label={email.length ? 'Email' : 'Enter your email'}
                  error={hasFocusedEmail && (!isValidEmail || !isUniqueEmail)}
                  onBlur={() => this.handleEmailBlur()}
                  onChange={e => this.handleEmailChange(e)}
                  value={email}
                  helperText={
                    hasFocusedEmail && (!isUniqueEmail || !isValidEmail)
                      ? !isValidEmail
                        ? 'This email is invalid'
                        : 'This email is taken'
                      : null
                  }
                />
                <TextField
                  className={styles.field}
                  label={username.length ? 'Username' : 'Enter your username'}
                  error={hasFocusedUsername && (!isValidUsername || !isUniqueUsername)}
                  onBlur={() => this.handleUsernameBlur()}
                  onChange={e => this.handleUsernameChange(e)}
                  value={username}
                  helperText={
                    hasFocusedUsername && (!isUniqueUsername || !isValidUsername)
                      ? !isValidUsername
                        ? 'This username is invalid'
                        : 'This username is taken'
                      : null
                  }
                />
                <TextField
                  className={styles.field}
                  label={password.length ? 'Password' : 'Enter your password' }
                  error={hasFocusedPassword && !isValidPassword}
                  onBlur={() => this.setState({ hasFocusedPassword: true })}
                  onChange={e => this.handlePasswordChange(e)}
                  value={password}
                  type={shouldHidePasswords ? 'password' : 'text'}
                  helperText={
                    hasFocusedPassword && !isValidPassword
                      ? 'This password is invalid'
                      : null
                  }
                />
                <TextField
                  className={styles.field}
                  label={confirmPassword.length ? 'Confirmed password' : 'Confirm your password' }
                  error={hasFocusedConfirmPassword && !isPasswordConfirmed}
                  onBlur={() => this.setState({ hasFocusedConfirmPassword: true })}
                  onChange={e => this.handleConfirmPasswordChange(e)}
                  value={confirmPassword}
                  type={shouldHidePasswords ? 'password' : 'text'}
                  helperText={
                    hasFocusedConfirmPassword && !isPasswordConfirmed
                      ? 'Does not match password'
                      : null
                  }
                />
                <StepperButtons
                  canProgress={this.isFirstStepSuccessful}
                  onNextClick={() => this.handleNextStep()}
                  onPreviousClick={() => this.handlePreviousStep()}
                  showBack={false}
                />
              </StepContent>
            </Step>
            <Step key={1}>
              <StepLabel>Setup your profile</StepLabel>
              <StepContent className={styles.stepContent}>
                <Dropzone
                  className={styles.dropzone}
                  style={{
                    background: `url(${uploadedAvatarUrl || '/public/images/user-placeholder.svg'})`
                  }}
                  accept="image/jpeg, image/png"
                  onDrop={accepted => this.handleAvatarUpload(accepted)}
                >
                  {uploadedAvatarUrl.length ? null : 'Drop in an image'}
                </Dropzone>
                <TextField
                  className={styles.field}
                  label={firstname.length ? 'First name' : 'Enter your first name' }
                  error={hasFocusedFirstname && !firstname.length}
                  onBlur={() => this.setState({ hasFocusedFirstname: true })}
                  onChange={e => this.handleFirstnameChange(e)}
                  value={firstname}
                  helperText={
                    hasFocusedFirstname && !firstname.length
                      ? 'Your first name is required'
                      : null
                  }
                />
                <TextField
                  className={styles.field}
                  label={lastname.length ? 'Last name' : 'Enter your last name' }
                  error={hasFocusedLastname && !lastname.length}
                  onBlur={() => this.setState({ hasFocusedLastname: true })}
                  onChange={e => this.handleLastnameChange(e)}
                  value={lastname}
                  helperText={
                    hasFocusedLastname && !lastname.length
                      ? 'Your last name is required'
                      : null
                  }
                />
                <StepperButtons
                  canProgress={this.isSecondStepSuccessful}
                  onNextClick={() => this.handleNextStep()}
                  onPreviousClick={() => this.handlePreviousStep()}
                  showBack={true}
                  onSubmit={() => this.handleRegisterSubmit()}
                />
              </StepContent>
            </Step>
            <Step key={2}>
              <StepLabel>Share your first ride</StepLabel>
              <StepContent>
                <Typography>Coming soon</Typography>
              </StepContent>
            </Step>
          </Stepper>
        </div>
      </Layout>
    )
  }
}
