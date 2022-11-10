import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <h3 className={classes.header}>Nick Austin's website</h3>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
