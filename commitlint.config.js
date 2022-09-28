module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['chore', 'feat', 'fix', 'revert']], // commit 正文的前缀
    'subject-max-length': [1, 'always', 30] // subject-max-length 则对应实际的 commit 长度（不包括前缀）
  }
}
