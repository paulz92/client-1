import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import ExpansionPanel, {
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    ExpansionPanelActions,
  } from 'material-ui/ExpansionPanel';
import Stepper, {
    StepContent,
    Step,
    StepLabel,
} from 'material-ui/Stepper'
import TextField from 'material-ui/TextField'


import styles from './index.scss'

// const StepperButtons = ({ onNextClick, onPreviousClick, canProgress, showBack }) => (
//     <div className={styles.stepperButtons}>
//       {showBack ?
//         <Button
//           className={styles.stepperButton}
//           variant="raised"
//           onClick={onPreviousClick}
//         >
//           Go Back
//         </Button> : null
//       }
//       <Button
//         disabled={!canProgress}
//         className={styles.stepperButton}
//         variant="raised"
//         onClick={onNextClick}
//       >
//         Continue
//       </Button>
//     </div>
//   )


const AddButton = ({ onClick }) => (
   <div className={styles.AddButton}> 
   <h2 className={styles.AddBntFont}> Add MeetUp </h2>
    <Button variant="fab" color="secondary" aria-label="add">
          <AddIcon />
    </Button>
    </div>
)


// handleNextStep() {
//     this.setState({
//       activeStep: this.state.activeStep + 1
//     })
//   }

//   handlePreviousStep() {
//     this.setState({
//       activeStep: this.state.activeStep - 1
//     })
//   }

//   render(){
//       const {
//         activeStep,
//   } = this.state

export const CreateMeetUp = (props)=> {
    return(
    <div>
        <AddButton />
        <Stepper 
            className={styles.stepper}
            orientation="vertical"
        >
            <Step key={0}>
                <StepLabel> Where will it be? </StepLabel>
                <StepContent className={styles.StepContent}>
                    <TextField 
                        label={'State'}
                    />
                    <TextField 
                        label={'City'}
                    />
                    <TextField 
                        label={'Address'}
                    />
                {/* <StepperButtons
                  canProgress={true || this.isFirstStepSuccessful}
                  onNextClick={() => this.handleNextStep()}
                  onPreviousClick={() => this.handlePreviousStep()}
                  showBack={false}
                /> */}
                </StepContent>
            </Step>
            <Step key={1}>
                <StepLabel> What Kind of Event? </StepLabel>
                <StepContent className={styles.StepContent}>
                    <TextField 
                        label={'Make'}
                    />
                    <TextField 
                        label={'Cit'}
                    />
                    <TextField 
                        label={'Address'}
                    />
                </StepContent>
            </Step>
            <Step key={2}>
                <StepLabel> Comments </StepLabel>
                <StepContent className={styles.StepContent}>
                    <TextField 
                        label={'Make'}
                    />
                    <TextField 
                        label={'Cit'}
                    />
                    <TextField 
                        label={'Address'}
                    />
                </StepContent>
            </Step>
        </Stepper>
      </div>
    )
 }
// }