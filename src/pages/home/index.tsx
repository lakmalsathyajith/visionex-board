import Card from "../../components/Card";
import DotsIcon from "../../icons/DotsIcon";
import PencilIcon from "../../icons/PencilIcon";
import Plus2Icon from "../../icons/Plus2Icon";
import UserProfileIcon from "../../icons/UserProfileIcon";
import MainLayout from "../../layouts/main";
import styles from "./Home.module.scss";

function HomePage() {
  return (
    <MainLayout>
      <section className={styles["project"]}>
        <div className={styles["project__details"]}>
          <div>
            <div className={styles["project__heading"]}>
              <h1 className={styles["project__title"]}>Sport Xi Project</h1>
              <span className={styles["project__status"]}>In progress</span>
            </div>
            <h2 className={styles["project__description"]}>event production</h2>
          </div>
          <div className={styles["project__assigned"]}>
            assigned
            <div className={styles["project__assigned-user"]}>
              <UserProfileIcon
                width={26}
                height={26}
                className={styles["project__assigned-user-icon"]}
              />
              <UserProfileIcon
                width={26}
                height={26}
                className={styles["project__assigned-user-icon"]}
              />
              <UserProfileIcon
                width={26}
                height={26}
                className={styles["project__assigned-user-icon"]}
              />
              <div className={styles["project__assigned-extra-icon"]}>+2</div>
            </div>
            <div className={styles["project__manage"]}>
              Manage
              <PencilIcon width={16} height={16} variant="faded" />
            </div>
          </div>
        </div>
        <div className={styles["project__divider"]}></div>
        <div className={styles["project__updated"]}>
          last updated on: 04 April, 2022
        </div>
      </section>
      <section className={styles["swimlane"]}>
        <div className={styles["swimlane__tab"]}>
          <div className={styles["swimlane__header"]}>
            <h2 className={styles["swimlane__title"]}>ToDo</h2>
            <div className={styles["swimlane__actions"]}>
              <Plus2Icon />
              <DotsIcon />
            </div>
          </div>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className={styles["swimlane__tab"]}>
          <div className={styles["swimlane__header"]}>
            <h2 className={styles["swimlane__title"]}>In progress</h2>
            <div className={styles["swimlane__actions"]}>
              <Plus2Icon />
              <DotsIcon />
            </div>
          </div>
          <div className={styles["swimlane__card"]}></div>
          <div className={styles["swimlane__card"]}></div>
          <div className={styles["swimlane__card"]}></div>
        </div>
        <div className={styles["swimlane__tab"]}>
          <div className={styles["swimlane__header"]}>
            <h2 className={styles["swimlane__title"]}>Approved</h2>
            <div className={styles["swimlane__actions"]}>
              <Plus2Icon />
              <DotsIcon />
            </div>
          </div>
          <div className={styles["swimlane__card"]}></div>
          <div className={styles["swimlane__card"]}></div>
        </div>
        <div className={styles["swimlane__tab"]}>
          <div className={styles["swimlane__header"]}>
            <h2 className={styles["swimlane__title"]}>Reject</h2>
            <div className={styles["swimlane__actions"]}>
              <Plus2Icon />
              <DotsIcon />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default HomePage;
