let list = []

function deleteTask(index, list) {
  const taskIndex = index - 1;

  if (taskIndex >= 0 && taskIndex < list.length) {
    list.splice(taskIndex, 1);
    list.forEach((task, i) => {
      task.index = i + 1;
    });
    saveTasksToLocalStorage();

    if (listContainer) {
      displayItemsByIndex();
    }

    return true;
  }
  return false;
}

module.export{ deleteTask }
