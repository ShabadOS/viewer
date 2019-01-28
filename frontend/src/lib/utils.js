import newGithubIssueUrl from 'new-github-issue-url'

export const issueUrl = ( { id, gurmukhi, page, source } ) => newGithubIssueUrl( {
  user: 'ShabadOS',
  repo: 'Database',
  assignee: 'Sarabveer',
  labels: [ 'correction' ],
  title: `${id}`,
  body: `
> Use the preview tab to see the example given below. Edit the relevant information and preview the changes before submitting. You may delete these instructions.

| Key | Value |
| --- | --- |
| ID | ${id} |
| Source | ${source} |
| Page | ${page} |
| Line | \`\`\`${gurmukhi}\`\`\` |
| Correction | \`\`\`THIS\`\`\` ≠ \`\`\`THAT\`\`\`  |

PROOF (EDITION)

Image:
`,
} )