import * as yup from 'yup'
import validate from '../../utils/validation'

const validateRegisterForm = validate({
  username: yup.string().required().min(2).max(9),
  password: yup.string().required()
})

export default validateRegisterForm