import express from "express";
const app = express();
export default app;

import employees from "#db/employees";

app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

app.route("/employees").get((req, res) => {
  res.send(employees);
});

app.route("/employees/random").get((req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[randomIndex];

  res.send(randomEmployee);
});

app.route("/employees/:id").get((req, res) => {
  const { id } = req.params;
  const employeeId = parseInt(id);

  const employee = employees.find((emp) => emp.id === employeeId);

  if (!employee)
    return res.status(404).send("There is no employee with that id.");

  res.send(employee);
});
