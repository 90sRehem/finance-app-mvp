module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["@rehem-packages/eslint-config/react"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
}
