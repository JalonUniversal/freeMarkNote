module.exports = {
  "src/**/*.{js,ts,react}": [
    "eslint --fix --ext .js,.ts,.react",
    "prettier --write",
  ],
};