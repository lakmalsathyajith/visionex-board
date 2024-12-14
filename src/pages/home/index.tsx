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
              <UserProfileIcon />
              <UserProfileIcon />
              <UserProfileIcon />
            </div>
            <span>Manage</span>
          </div>
        </div>
      </section>
      <section className="swimlane">jkjkhgh76yrgerfgdg</section>
    </MainLayout>
  );
}

export default HomePage;
