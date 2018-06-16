Ext.define("DummyTasks.data.Model.Task", {
  extend: "Ext.data.Model",
  alias: "model.tasks",

  identifier: "sequential",

  fields: [
    { name: "id", type: "int" },
    { name: "name", type: "string" },
    { name: "startDate", type: "date", dateFormat: "d-m-Y" },
    { name: "endDate", type: "date", dateFormat: "d-m-Y" },
    { name: "status", type: "string", defaultValue: "Stopped" }
  ],

  validators: {
    name: [{ type: "presence" }, { type: "length", min: 1, max: 255 }]
  }
});
