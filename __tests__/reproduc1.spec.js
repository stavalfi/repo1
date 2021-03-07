const inMemoryRxdbAdaptor = require('pouchdb-adapter-memory')
const { addRxPlugin, createRxDatabase } = require('rxdb')

test('test1', async () => {
  addRxPlugin(inMemoryRxdbAdaptor)

  const x = `lsports_db_${Date.now()}`
  const db = await createRxDatabase({
    name: x,
    adapter: 'memory',
  })
  console.log('stav1', await db.destroy())
  console.log('stav2', await db.remove())
})
