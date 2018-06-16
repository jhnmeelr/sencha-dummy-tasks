Ext.define("DummyTasks.app.ViewModel.Main", {
  extend: "Ext.app.ViewModel",
  alias: "viewmodel.main",

  stores: {
    TaskStore: {
      model: "DummyTasks.data.Model.Task",
    }
  }
});
