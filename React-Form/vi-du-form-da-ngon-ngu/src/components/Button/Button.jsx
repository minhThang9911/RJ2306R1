import styles from './Button.module.css'


const Button = ({ children }) => { 
  return (
    <button className={styles['red']}>{children}</button>
  )
}

export default Button