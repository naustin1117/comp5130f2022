import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <h3 className={classes.header}>Brought to you by NASA's image API</h3>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
