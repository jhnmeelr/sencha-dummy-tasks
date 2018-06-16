Ext.define("DummyTasks.app.ViewController.Main", {
  extend: "Ext.app.ViewController",
  alias: "controller.main",

  listenForFilterChange: function(view, value) {
    var vm = this.getViewModel(),
      store = vm.getStore("TaskStore");

    store.filter('name', value);
  },

  listenForGridBeforeSelect: function(view, record) {
    var vm = this.getViewModel(),
      record = vm.get("task");

    if (record && record.dirty) {
      Ext.toast({
        title: "FAILURE",
        html: "Details have not submitted",
        width: 200,
        align: "tr"
      });
    }
  },

  listenForGridSelect: function(view, record) {
    var vm = this.getViewModel(),
      form = this.lookupReference("form"),
      grid = this.lookupReference("grid"),
      removeButton = this.lookupReference("removeButton"),
      selection = grid.getSelectionModel().getSelection();

    selection.length === 1 ? form.show() : form.hide();
    selection.length >= 1 ? removeButton.enable() : removeButton.disable();

    refreshActionButtons(this);
  },

  onSubmit: function() {
    var vm = this.getViewModel(),
      form = this.lookupReference("form");

    if (form.isValid()) {
      Ext.MessageBox.confirm({
        title: "Submit confirmation",
        msg: "Are you sure to confirm?",
        buttons: Ext.Msg.OKCANCEL,
        fn: function(button) {
          if (button == "ok") {
            vm.get("task").commit();

            Ext.toast({
              title: "SUCCESS",
              html: "Details added successfully",
              width: 200,
              align: "tr"
            });
          }
        }
      });
    }
  },

  onCancel: function() {
    var vm = this.getViewModel(),
      record = vm.get("task");

    Ext.MessageBox.confirm({
      title: "Cancel confirmation",
      msg: "Are you sure to cancel?",
      buttons: Ext.Msg.OKCANCEL,
      fn: function(button) {
        if (button == "ok") {
          if (record.dirty) {
            record.reject();
          } else {
            Ext.toast({
              title: "FAILURE",
              html: "Nothing to cancel",
              width: 200,
              align: "tr"
            });
          }
        }
      }
    });
  },

  onAdd: function() {
    var vm = this.getViewModel(),
      store = vm.getStore("TaskStore");
      record = Ext.create("DummyTasks.data.Model.Task", {});

    store.add(record);
  },

  onRemove: function() {
    var grid = this.lookupReference("grid"),
      removeButton = this.lookupReference("removeButton"),
      store = grid.getStore(),
      records = grid.getSelectionModel().getSelection();

    store.remove(records);
    removeButton.disable();
  },

  onRun: function() {
    onAction(this, "run");
    refreshActionButtons(this);
  },

  onStop: function() {
    onAction(this, "stop");
    refreshActionButtons(this);
  }
});

function refreshActionButtons(context) {
  var grid = context.lookupReference("grid"),
    runButton = context.lookupReference("runButton"),
    stopButton = context.lookupReference("stopButton"),
    selection = grid.getSelectionModel().getSelection(),
    statuses = [];

  selection.forEach(record => statuses.push(record.data.status));

  statuses.includes("Stopped") ? runButton.enable() : runButton.disable();
  statuses.includes("Running") ? stopButton.enable() : stopButton.disable();
}

function onAction(context, type) {
  var grid = context.lookupReference("grid"),
    store = grid.getStore(),
    records = grid.getSelectionModel().getSelection(),
    status = type === "run" ? "Running" : "Stopped";

  records.forEach(record => {
    record.set("status", status);
    record.commit();
  });
}
