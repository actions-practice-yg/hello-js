# Hello World Action

A GitHub Action that greets a user and logs a timestamped message.

## Inputs

| Input | Description | Default |
|-------|-------------|---------|
| `who-to-greet` | The name of the person to greet | `World` |
| `log-file` | Filename for the log output | `greeting.log` |

## Outputs

| Output | Description |
|--------|-------------|
| `greeting-time` | ISO timestamp of the greeting |

## Example Usage

```yaml
- name: Greet someone
  uses: your-username/hello-world-action@v1
  with:
    who-to-greet: 'Mona'
    log-file: 'my-greeting.log'