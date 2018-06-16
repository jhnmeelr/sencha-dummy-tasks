Ext.define("DummyTasks.view.Form", {
  extend: "Ext.form.Panel",
  xtype: "form",
  reference: "form",

  flex: 1,
  hidden: true,
  title: "Details",
  margin: "5 5 5 0",
  frame: true,
  bodyPadding: "10 10 0",
  labelWidth: 50,
  anchor: "100%",

  modelValidation: true,

  items: [
    {
      xtype: "displayfield",
      name: "id",
      fieldLabel: "Id",
      bind: "{task.id}"
    },
    {
      xtype: "textfield",
      name: "name",
      fieldLabel: "Name",
      bind: "{task.name}"
    },
    {
      xtype: "datefield",
      name: "startDate",
      fieldLabel: "Start date",
      bind: {
        value: "{task.startDate}",
        maxValue: "{task.endDate}"
      },
      format: "d-m-Y"
    },
    {
      xtype: "datefield",
      name: "endDate",
      fieldLabel: "End date",
      bind: {
        value: "{task.endDate}",
        minValue: "{task.startDate}"
      },
      format: "d-m-Y"
    }
  ],

  buttons: [
    { text: "Submit", handler: "onSubmit" },
    { text: "Cancel", handler: "onCancel" }
  ]
});
