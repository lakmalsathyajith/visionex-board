function groupByStatus(tasks = []) {
  return tasks.reduce((grouped, task) => {
    const { status } = task;
    if (!grouped[status]) {
      grouped[status] = [];
    }
    grouped[status].push(task);
    return grouped;
  }, {});
}

export default groupByStatus;
