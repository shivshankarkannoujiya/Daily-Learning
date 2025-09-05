let expenses = [
  { description: "Groceries", amount: 50, category: "Food" },
  { description: "Electricity Bill", amount: 100, category: "Utilities" },
  { description: "Dinner", amount: 30, category: "Food" },
  { description: "Internet Bill", amount: 50, category: "Utilities" },
];

// TODO: Make it dynamic for category
let expenseReport = expenses.reduce(
  (report, expense) => {
    report[expense.category] += expense.amount;
    return report;
  },
  { Food: 0, Utilities: 0 }
);

let tasks = [
  { description: "Write report", completed: false, priority: 2 },
  { description: "Send email", completed: true, priority: 3 },
  { description: "Prepare Presentation", completed: false, priority: 1 },
];

// TODO: Give the task which are not completed and sort them
const pendingSortedTasks = tasks
  .filter((task) => !task.completed)
  .sort((a, b) => a.priority - b.priority);

let movieRatings = [
  { title: "Movie A", ratings: [4, 5, 3] },
  { title: "Movie B", ratings: [5, 5, 4] },
  { title: "Movie C", ratings: [3, 4, 2] },
];

// TODO: Average movie rating of a particular movie
// let averageRating = movieRatings.map((movie) => {
//     let totalRating = movie.ratings.reduce((sum, rating) => sum + rating, 0)
//     let average = totalRating/movie.ratings.length
//     movie.ratings = average.toFixed(2) //TODO: It will mutate original array
//     return movie
// })

let averageRating = movieRatings.map((movie) => {
  let totalRating = movie.ratings.reduce((sum, rating) => sum + rating, 0);
  let average = totalRating / movie.ratings.length;
  return { title: movie.title, ratings: average.toFixed(2) };
});

console.log(averageRating);
console.log(movieRatings);
