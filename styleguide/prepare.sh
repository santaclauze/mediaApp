#!/usr/bin/env bash
set -e
if [[ -n "$DEBUG" ]]; then
 set -x
fi

. <(npx @yeutech-lab/rollup-umd-ci-keys print keys.sh)

npx @yeutech/rollup-umd-scripts doc declinations -k ${GL_TOKEN:-${GITLAB_TOKEN}} -r ${CI_COMMIT_REF_NAME}

npx @rollup-umd/documentation-cli variable \
  PACKAGE_NAME=$(node -p "require('./package.json').name") \
  PACKAGE_DESCRIPTION="$(node -p "require('./package.json').description")" \
  PACKAGE_VERSION=$(node -p "require('./package.json').version") \
  PACKAGE_PEERS="$(npx rollup-umd-scripts peer npm-install-cmd)" \
  NODE_VERSION=$(node --version) \
  NPM_VERSION=$(npm --version) \
  CI_REPOSITORY_URL=${CI_REPOSITORY_URL} \
  CI_PROJECT_URL=${CI_PROJECT_URL} \
  CI_PROJECT_NAMESPACE=${CI_PROJECT_NAMESPACE} \
  CI_PROJECT_NAME=${CI_PROJECT_NAME} \
  DECLINATION_LIST="$(npx @yeutech/rollup-umd-scripts declination list --with-link -k ${GL_TOKEN:-${GITLAB_TOKEN}} -r ${CI_COMMIT_REF_NAME})" \
  IMG_SHIELD_PUBLISHING=$(npx rollup-umd-scripts publish status --badge true) \
  PACKAGE_SCRIPTS="@yeutech/rollup-umd-scripts"
