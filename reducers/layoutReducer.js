import {
  PRESENT_LOGIN_MODAL,
  PRESENT_REGISTER_MODAL,
  PRESENT_POST_MODAL,
  PRESENT_NEW_POST_MODAL,
  DISMISS_MODAL,
} from '@/actions'

const initialState = {
  modalType: null,
  modalPayload: null,
  modalPresented: false,
};

export default (state = initialState, action) => {
  const { payload, type } = action

  switch (type) {
    case PRESENT_LOGIN_MODAL:
      return { ...state, modalType: 'LOGIN', modalPresented: true }
    case PRESENT_REGISTER_MODAL:
      return { ...state, modalType: 'REGISTER', modalPresented: true }
    case PRESENT_POST_MODAL:
      return { ...state, modalType: 'POST', modalPayload: payload, modalPresented: true }
    case PRESENT_NEW_POST_MODAL:
      return { ...state, modalType: 'NEW_POST', modalPresented: true }
    case DISMISS_MODAL:
      return { ...state, modalPresented: false }
    default: 
      return state
  }
}
