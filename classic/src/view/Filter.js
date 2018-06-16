Ext.define("DummyTasks.view.Filter", {
  extend: "Ext.panel.Panel",
  xtype: "filter",

  layout: {
    type: "vbox",
    align: "stretch"
  },

  height: 50,
  margin: "0 5",
  frame: true,

  items: [
    {
      xtype: "textfield",
      fieldLabel: "Name",
      emptyText: "Enter filter text ...",
      maxWidth: 300,
      labelWidth: 50,
      margin: "7 10",

      listeners: {
        change: "listenForFilterChange"
      }
    }
  ]
});
