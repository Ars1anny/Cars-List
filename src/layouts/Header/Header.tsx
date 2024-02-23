import css from './header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
        <img className={css.logo} src="https://cdn-icons-png.flaticon.com/128/3295/3295243.png" alt="logo" />
        <h1 className={css.title}>CARS-LIST</h1>
    </header>
  )
}

export default Header