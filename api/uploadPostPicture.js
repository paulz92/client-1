import { axios } from '@/utils'

export const uploadPostPicture = async file => {
  const formData = new FormData()
  formData.append('file', file)
  
  const { data } = await axios.post('/uploadPostPicture', formData, {
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
  })

  if (!data)
    throw new Error('error uploading post picture; check logs')
  
  return data.uri
}
