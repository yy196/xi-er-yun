import axios from 'axios'
// axios.defaults.baseURL = 'https://www.cei.net.cn/cei/front'
// get_teacher_list
// get_picture_rotation
// get_navigation_list?pageNo=1&pageSize=8
axios

  .get('api/get_picture_rotation')
  .then(({ data: res }) => {
    console.log(res)
  })
  .catch((err) => {
    console.log('error', err)
  })
