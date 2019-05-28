import React from 'react';
import styled from 'styled-components';
import { mediaBreakpointUp } from '@bootstrap-styled/css-mixins/lib/breakpoints';

const Container = styled.div`
    ${props => `
        margin-right: auto;
        margin-left: auto;
        padding-left: 10px;
        padding-right: 10px;
        ${mediaBreakpointUp('sm', props.theme['$grid-breakpoints'],`
            width: 740px;
        `)}
        ${mediaBreakpointUp('md', props.theme['$grid-breakpoints'],`
            width: 960px;
        `)}
        ${mediaBreakpointUp('lg', props.theme['$grid-breakpoints'],`

            width: 1160px;
        `)}
        ${mediaBreakpointUp('xl', props.theme['$grid-breakpoints'],`
            width: 1580px;
        `)}
    `}
`;

export default Container;