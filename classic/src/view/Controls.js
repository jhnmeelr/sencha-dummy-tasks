Ext.define("DummyTasks.view.Controls", {
  extend: "Ext.panel.Panel",
  xtype: "controls",

  layout: {
    type: "hbox",
    align: "stretch"
  },

  height: 50,

  items: [
    {
      xtype: "button",
      handler: "onAdd",
      text: "Add",
      margin: "5 5",
      iconCls: "fa fa-plus",
      iconAlign: "left"
    },
    {
      xtype: "button",
      reference: "removeButton",
      handler: "onRemove",
      disabled: true,
      text: "Remove",
      margin: "5 5",
      iconCls: "fa fa-times-circle",
      iconAlign: "left"
    },
    {
      xtype: "button",
      reference: "runButton",
      handler: "onRun",
      disabled: true,
      text: "Run",
      margin: "5 5",
      iconCls: "fa fa-play",
      iconAlign: "left"
    },
    {
      xtype: "button",
      reference: "stopButton",
      handler: "onStop",
      disabled: true,
      text: "Stop",
      margin: "5 5",
      iconCls: "fa fa-stop",
      iconAlign: "left"
    }
  ]
});
