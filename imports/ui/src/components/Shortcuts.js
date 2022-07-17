import React from 'react'
import styled from 'styled-components'
import { WindowsExplorer } from '@react95/icons'

const StyledShorcut = styled.div`
    margin-left: 20px;
    margin-top: 20px;
	align-items: center;
`;

function Shortcuts({ openExplorer }) {
  return (
    <div>
      <StyledShorcut>
        <WindowsExplorer
          className="pointer"
          onClick={() => openExplorer()}
        />
        <div>Explorer</div>
      </StyledShorcut>
    </div>
  )
}

export default Shortcuts
