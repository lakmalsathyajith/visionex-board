import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["header__logo"]}>
        <img
          className={styles["header__logo-image"]}
          src="/assets/logo.svg"
          alt="Logo"
        />
      </div>
      <button className={styles["header__create-button"]}>
        <span>Create new board</span>
        <img
          className={styles["header__create-icon"]}
          src="assets/icons/Union.svg"
          alt="Plus icon"
        />
      </button>
      <div className={styles["header__action-bar"]}>
        <div className={styles["header__search-bar"]}>
          <img
            className={styles["header__search-icon"]}
            src="/assets/icons/Search.svg"
            alt="Search icon"
          />
          <input
            className={styles["header__search-input"]}
            type="text"
            placeholder="Search tasks"
          />
        </div>
        <div className={styles["header__actions"]}>
          <img
            className={styles["header__action-icon"]}
            src="/assets/icons/Settings.svg"
            alt="Settings icon"
          />
          <img
            className={styles["header__action-icon"]}
            src="/assets/icons/Bell.svg"
            alt="Notifications icon"
          />
          <img
            className={styles["header__action-icon"]}
            src="/assets/icons/User profile.svg"
            alt="User profile icon"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
