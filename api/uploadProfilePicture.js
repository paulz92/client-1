import { axios } from '@/utils'

export const uploadProfilePicture = async file => {
  const formData = new FormData()
  formData.append('file', file)
  
  const { data } = await axios.post('/uploadProfilePicture', formData, {
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
  })

  if (!data)
    throw new Error('error uploading profile picture; check logs')
  
  return data.uri
}
