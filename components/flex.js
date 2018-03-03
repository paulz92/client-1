import styled from 'styled-components'

export const Flex = (props) => {
  const el = props.el ?
    () => <el {...props} /> :
    () => <div {...props} />

  return styled(el)`
    display: flex;
    align-items: ${props => props.alignItems || 'center'};
    justify-content: ${props => props.justifyContent || 'center'};
  `
}
