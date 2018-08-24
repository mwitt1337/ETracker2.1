import Api from '@/services/api'

export default {
  index (search) {
    return Api().get('districts', {
      params: {
        search: search
      }
    })
  },
  show (districtId) {
    return Api().get(`districts/${districtId}`)
  },
  post (district) {
    return Api().post('districts', district)
  },
  put (district) {
    return Api().put(`districts/${district.id}`, district)
  }
}
