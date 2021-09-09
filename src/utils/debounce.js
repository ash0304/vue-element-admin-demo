import _ from 'lodash'
const debounce_function = (cb, time = 1000) =>
  _.debounce(cb, time, {
    leading: true,
    trailing: false,
  })

export default debounce_function
