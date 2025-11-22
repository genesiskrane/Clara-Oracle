const { loadAllSecrets } = require("../secrets");

const init = async () => {
  console.info("Initializing Clara DB");
  await loadAllSecrets();
};

module.exports = { init };
