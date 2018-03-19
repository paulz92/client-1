export const PRESENT_LOGIN_MODAL = 'PRESENT_LOGIN_MODAL'
export const PRESENT_REGISTER_MODAL = 'PRESENT_REGISTER_MODAL'
export const PRESENT_POST_INFO_MODAL = 'PRESENT_POST_INFO_MODAL'
export const PRESENT_NEW_POST_MODAL = 'PRESENT_NEW_POST_MODAL'
export const DISMISS_MODAL = 'DISMISS_MODAL'

export const presentLoginModal = () => ({
  type: PRESENT_LOGIN_MODAL,
})

export const presentRegisterModal = () => ({
  type: PRESENT_REGISTER_MODAL,
})

export const presentNewPostModel = () => ({
  type: PRESENT_NEW_POST_MODAL,
})

export const presentPostInfoModal = postId => ({
  type: PRESENT_POST_INFO_MODAL,
  payload: { postId },
})

export const dismissModal = () => ({
  type: DISMISS_MODAL
})
