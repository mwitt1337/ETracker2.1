import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('districts', {
      params: {
        search: search
      }
    })
  },
  show (Id) {
    return Api().get(`districts/${Id}`)
  },
  post (district) {
    return Api().post('districts', district)
  },
  put (district) {
    return Api().put(`districts/${district.Id}`, district)
  }
}
