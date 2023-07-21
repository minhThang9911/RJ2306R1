import React from 'react'

const BasicFormHandling = () => {
  const [form, setForm] = React.useState({
    username: '',
  })

  const handleInputChange = (e) => { 
    setForm({
      ...form,
      username: e.target.value
    })
  }

  //formik + yup + react-i18next
  const handleSubmit = (e) => { 
    e.preventDefault();
    console.log(form)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>Username</label>
      <input type="text" onChange={(e) => handleInputChange(e)} value={form.username} /> 
      {/* blur */}
      <button type='submit'>Submit</button>
    </form>
  )
}

export default BasicFormHandling