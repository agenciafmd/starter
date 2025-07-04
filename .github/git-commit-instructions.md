We use Karma Git Commit
Msg (https://karma-runner.github.io/1.0/dev/git-commit-msg.html) formatting for
all commits. This means that the commit message should be in the following
format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

The first line cannot be longer than 70 characters, the second line is always
blank, and other lines should be wrapped at 80 characters. The type and scope
should always be lowercase as shown below.

Where:

- `<type>` is the type of change that you're committing. It can be one of the
  following:
    - `feat`: A new feature
    - `fix`: A bug fix
    - `docs`: Documentation only changes
    - `style`: Changes that do not affect the meaning of the code (white-space,
      formatting, missing semicolons, etc.)
    - `refactor`: A code change that neither fixes a bug nor adds a feature
    - `perf`: A code change that improves performance
    - `test`: Adding missing or correcting existing tests
    - `chore`: Changes to the build process or auxiliary tools and libraries
      such as documentation generation

- `<scope>` is the scope of the change, e.g. `component`, `service`, `module`,
  `directive`, `pipe`, etc. This is optional and can be omitted if not
  applicable.

- `<subject>` is a short description of the change. It should be concise and
  written in the imperative mood, e.g. "add new feature" or "fix bug in
  component".

- `<body>` is an optional longer description of the change. It can be used to
  explain the motivation for the change, how it was implemented, or any other
  relevant information. It should be wrapped at 80 characters.

- `<footer>` is an optional section that can be used to reference any issues or
  pull requests that are related to the change. It can also be used to
  acknowledge any breaking changes. If there are no issues or pull requests to
  reference, this section can be omitted.

Commit messages must be written in Brazilian Portuguese.
