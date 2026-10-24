// Works out how many tasks are done, for the stats bar.
export function calculateStats(tasks) {
  const total = tasks.length;
  const done = tasks.filter((task) => task.done).length;
  console.log('Total tasks:', total);
  console.log('Completed tasks:', done);
  console.log('Division result:', done / total);
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);
  return { total, done, percent };
}
