import {setLocale} from 'yup'
import * as yup from 'yup'

setLocale({
  mixed: {
    required: (props) => `Trường ${props.path} bắt buộc nhập`
  }
});

const validate = (validationObject) => yup.object().shape(validationObject)

export default validate