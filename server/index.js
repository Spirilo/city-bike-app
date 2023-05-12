const app = require('./app')
const config = require('./utils/config')
const init = require('./init')

app.listen(config.PORT, () => console.log(`Server running on port ${config.PORT}`))

init
