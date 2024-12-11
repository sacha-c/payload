import type { FieldServerComponent } from 'payload'

const FieldServerComponentIssue: FieldServerComponent<any, any, { value: () => string }> = (
  props,
) => {
  return <div>{props.value()}</div>
}

export default FieldServerComponentIssue
