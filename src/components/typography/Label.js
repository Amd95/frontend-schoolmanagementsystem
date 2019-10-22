import styled from 'styled-components';
import theme from '../../theme/theme';

const Label = styled.label`
    font-family:${theme.font.fontFamily};
    font-size: 14px;
    font-weight:bold;
    color: ${theme.colors.main};
    padding-bottom:-3em;
    
    /* color: ${theme.colors.gray}; */
`

export default Label;