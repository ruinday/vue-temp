import { service } from './http'

export function get_data(params: number) {
  return service({
    url: '',
    method: 'get',
    params,
  })
}

export function update_data(data: string) {
  return service({
    url: '',
    method: 'post',
    data,
  })
}

// 使用已封装好的axios
// import { get_data, update_data } from '@/request/api'

// export default {
//   methods: {
//     async fetchUserInfo() {
//       try {
//         const response = await getUserInfo({ id: 1 })
//         console.log(response)
//       } catch (error) {
//         console.error(error)
//       }
//     },
//     async updateUser() {
//       try {
//         const response = await updateUserInfo({ name: 'New Name' })
//         console.log(response)
//       } catch (error) {
//         console.error(error)
//       }
//     },
//   },
// }
