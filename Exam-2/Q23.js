/*
Q23. Filter Active Users: Given user objects with name and status, use filter() to display only active users.
*/

const users = [
  { name: "Rahul", status: "active" },
  { name: "Priya", status: "inactive" },
  { name: "Amit", status: "active" },
  { name: "Sneha", status: "inactive" },
  { name: "Arjun", status: "active" },
];

// Filter active users
const activeUsers = users.filter((user) => user.status === "active");

// Display active users
activeUsers.forEach((user) => {
  console.log(user.name);
});
