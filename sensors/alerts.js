const plugin = {
  title: 'Alerts List',
  description: `Alerts list`,
  type: 'table',
  interval: 1000,

  initialized: false,

  columns: ['Name', 'Message',],
  currentValue: [],

  poll () {
    plugin.currentValue.push({
        'Name': `Alert ${(Math.random() * 1000).toFixed(0)}`,
        'Message': `Test message ${(Math.random() * 1000).toFixed(0)}`,
      })
    plugin.initialized = true  
  }
}
module.exports = exports = plugin
