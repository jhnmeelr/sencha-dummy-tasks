Ext.define("DummyTasks.Application", {
  extend: "Ext.app.Application",
  name: "DummyTasks",
  requires: [
    "DummyTasks.data.Model.Task",
    "DummyTasks.app.ViewController.Main",
    "DummyTasks.app.ViewModel.Main",
    "DummyTasks.view.Main",
    "DummyTasks.view.Controls",
    "DummyTasks.view.Filter",
    "DummyTasks.view.Grid",
    "DummyTasks.view.Form"
  ]
});
