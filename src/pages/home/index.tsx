import UserProfileIcon from "../../icons/UserProfileIcon";
import MainLayout from "../../layouts/main";
import styles from "./Home.module.scss";

function HomePage() {
  return (
    <MainLayout>
      <section className={styles["project"]}>
        <div className={styles["project__details"]}>
          <div className={styles["project__heading"]}>
            <h1 className={styles["project__title"]}>Sport Xi Project</h1>
            <span className={styles["project__status"]}>In progress</span>
          </div>
          <h2 className={styles["project__description"]}>event production</h2>
          <div className={styles["project__assigned"]}>
            assigned
            <div className={styles["project__assigned-user"]}>
              <UserProfileIcon
                className={styles["project__assigned-user-icon"]}
              />
              <UserProfileIcon
                className={styles["project__assigned-user-icon"]}
              />
              <UserProfileIcon
                className={styles["project__assigned-user-icon"]}
              />
              <div className={styles["project__assigned-extra-icon"]}>+2</div>
            </div>
            <div className={styles["project__manage"]}>Manage</div>
          </div>
        </div>
        <div className={styles["project__divider"]}></div>
        <div className={styles["project__updated"]}>
          last updated on: 04 April, 2022
        </div>
      </section>
      <section className="swimlane">jkjkhgh76yrgerfgdg</section>
    </MainLayout>
  );
}

export default HomePage;
