Ext.define("DummyTasks.view.Grid", {
  extend: "Ext.grid.Panel",
  xtype: "grid",
  reference: "grid",

  flex: 3,
  frame: true,
  margin: "5 5 5 5",

  columnLines: true,
  selModel: { type: "checkboxmodel" },
  viewConfig: { emptyText: "No data to display" },

  bind: {
    store: "{TaskStore}",
    selection: "{task}"
  },

  listeners: {
    beforeselect: "listenForGridBeforeSelect",
    select: "listenForGridSelect",
    deselect: "listenForGridSelect",
  },

  columns: [
    { xtype: "gridcolumn", flex: 1, text: "ID", dataIndex: "id" },
    { xtype: "gridcolumn", flex: 5, text: "Name", dataIndex: "name" },
    {
      xtype: "gridcolumn",
      flex: 5,
      text: "Start date",
      dataIndex: "startDate",
      renderer: Ext.util.Format.dateRenderer("d-m-Y")
    },
    {
      xtype: "gridcolumn",
      flex: 5,
      text: "End date",
      dataIndex: "endDate",
      renderer: Ext.util.Format.dateRenderer("d-m-Y")
    },
    { xtype: "gridcolumn", flex: 5, text: "Status", dataIndex: "status" }
  ]
});
