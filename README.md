# Hello Avengers

A GitHub Action that greets a user and logs a timestamped message.

**Author:** yatish  
**Branding:** message-circle icon, blue color

## Inputs

| Input         | Description                      | Default        |
|--------------|----------------------------------|----------------|
| `who-to-greet` | The name of the person to greet | `World`        |
| `log-file`     | Filename for the log output     | `greeting.log` |

## Outputs

| Output          | Description                      |
|-----------------|----------------------------------|
| `greeting-time` | The time the greeting was generated |

## Example Usage

```yaml
- name: Greet someone
  uses: actions-practice-yg/hello-js@v1
  with:
    who-to-greet: 'Mona'
    log-file: 'my-greeting.log'
```