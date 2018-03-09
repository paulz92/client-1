export const validateEmail = s =>
  /^([a-z0-9_\-\.])+\@([a-z0-9_\-\.])+\.([a-z]{2,4})$/i.test(s)

export const validateUsername = s =>
  /^[a-z][a-z0-9-_]{2,16}$/i.test(s)

export const validatePassword = s => 
  /^.{8,32}$/i.test(s)
