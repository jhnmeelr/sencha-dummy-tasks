Ext.define("DummyTasks.view.Main", {
  extend: "Ext.panel.Panel",
  controller: "main",
  viewModel: "main",

  title: "DummyTasks",

  layout: {
    type: "vbox",
    align: "stretch"
  },

  items: [
    { xtype: "controls" },
    { xtype: "filter" },
    { xtype: "content" }
  ]
});

Ext.define("DummyTasks.view.Content", {
  extend: "Ext.panel.Panel",
  xtype: "content",

  layout: {
    type: "hbox",
    align: "stretch"
  },

  flex: 1,

  items: [
    { xtype: "grid" },
    { xtype: "form" }
  ]
});
