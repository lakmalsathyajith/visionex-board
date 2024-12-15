import { useEffect, useState } from "react";
import Badge from "../../components/Badge";
import Swimlane from "../../components/Swimlane";
import PencilIcon from "../../icons/PencilIcon";
import UserProfileIcon from "../../icons/UserProfileIcon";
import MainLayout from "../../layouts/main";
import styles from "./Home.module.scss";
import {
  fetchProjects,
  setSelectedProject,
} from "../../store/actions/projectActions";
import { useDispatch, useSelector } from "react-redux";
import formatDate from "../../utils/dateFormatter";
import groupByStatus from "../../utils/groupTasks";
import { SwimlaneContextProvider } from "../../context/SwimlaneContext";

function HomePage() {
  const dispatch = useDispatch();
  const { projects, selectedProject } = useSelector((state) => state.projects);
  const groupedTasks = groupByStatus(selectedProject.tasks);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  useEffect(() => {
    if (projects.length) {
      dispatch(setSelectedProject(projects[1]));
    }
  }, [dispatch, projects]);

  console.log(groupedTasks);

  return (
    <MainLayout>
      <section className={styles["project"]}>
        <div className={styles["project__details"]}>
          <div>
            <div className={styles["project__heading"]}>
              <h1 className={styles["project__title"]}>
                {selectedProject.name}
              </h1>
              <span className={styles["project__status"]}>In progress</span>
            </div>
            <h2 className={styles["project__description"]}>
              {selectedProject.description}
            </h2>
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
          Last updated on: {formatDate(selectedProject.lastUpdated)}
        </div>
      </section>
      <SwimlaneContextProvider>
        <Swimlane>
          <Swimlane.Tab
            label={<Badge variant="todo" />}
            data={groupedTasks["todo"]}
            id="todo"
          />
          <Swimlane.Tab
            label={<Badge variant="inprogress" />}
            data={groupedTasks["in-progress"]}
            id="in-progress"
          />
          <Swimlane.Tab
            label={<Badge variant="approved" />}
            data={groupedTasks["approved"]}
            id="approved"
          />
          <Swimlane.Tab
            label={<Badge variant="reject" />}
            data={groupedTasks["rejected"]}
            id="rejected"
          />
        </Swimlane>
      </SwimlaneContextProvider>
    </MainLayout>
  );
}

export default HomePage;
