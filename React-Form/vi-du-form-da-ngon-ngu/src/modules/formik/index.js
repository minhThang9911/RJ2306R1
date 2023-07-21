import React from 'react'
import { Formik } from 'formik';
import validateRegisterForm from './validateRegisterForm';

const FormHandling = () => {

  const handleFormSubmit = (values) => {
    console.log(values)
  }

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
        phone: '',
        hobbies: [],
        gender: 'male',
        file: null
      }}
      validateOnBlur={false}
      onSubmit={handleFormSubmit}
      validationSchema={validateRegisterForm}
    >
      {({ handleChange, handleSubmit, errors, values, handleBlur, setFieldValue }) => (
        <>
          <div>
            <label htmlFor="">Username</label>
            <input type="text" name="username" onChange={handleChange} onBlur={handleBlur} value={values.username} />
            {errors.username && <p>{errors.username}</p>}
          </div>

          <div>
            <label htmlFor="">Password</label>
            <input type="password" name="password" onChange={handleChange} value={values.password} />
            {errors.password && <p>{errors.password}</p>}
          </div>

          <div>
            <label htmlFor="">Phone number</label>
            <input type="text" name="phone" onChange={handleChange} value={values.phone} />
          </div>

          <div>
            <label>Hobbies</label>
            <input type='checkbox' name="hobbies" value="football" onChange={handleChange} />Football
            <input type='checkbox' name="hobbies" value="voleyball" onChange={handleChange}/>Voleyball
            <input type='checkbox' name="hobbies" value="badminton" onChange={handleChange}/>Badminton
          </div>

          {/* Radio: gender (Male / Female) */}
          <div>
            <input type='radio' onChange={handleChange} name="gender" value="male"   defaultChecked={values.gender === 'male'} />Male
            <input type='radio' onChange={handleChange} name="gender" value="female" defaultChecked={values.gender === 'female'}/>Female
          </div>

          {/* Event bubbling */}
          <div>
            <input type="file" name="file" onChange={(e) => setFieldValue('file', e.currentTarget.files[0]) } />
          </div>

          <button type='button' onClick={handleSubmit}>Submit</button>
        </>
      )}

    </Formik>
  )
}

export default FormHandling