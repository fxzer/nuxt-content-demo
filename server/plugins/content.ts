export default defineNitroPlugin((nitroApp) => {
  console.log('[ nitroApp ]-2', nitroApp)
  nitroApp.hooks.hook('content:file:beforeParse', (file) => {
    if (file._id.endsWith('.md')) {
      file.body = file.body.replace(/react/g, 'vue')
    }
  })
})
