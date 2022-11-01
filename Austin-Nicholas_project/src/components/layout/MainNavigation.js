import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Spacestagram</div>
      <nav></nav>
    </header>
  );
}
export default MainNavigation;
