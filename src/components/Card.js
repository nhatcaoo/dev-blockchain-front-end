import { forwardRef, useState } from 'react'
import { Box, Button, Switch, Typography, FormControl, InputLabel, MenuItem } from '@mui/material'
import styled from '@emotion/styled'

const StyledImage = styled(Box)`
  height: 200px;
  width: 225px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain, cover;
`
export default forwardRef(function Card(props, ref) {
    const { item } = props

    return (
        <Box padding="16px" width="100%" >
            <Box display="flex" justifyContent="space-between">
                <Box>
                    <div>tokenId: {item.tokenId}</div>
                    <div>owner: {item.owner}</div>
                    <div>price: {item.price}</div>
                    <StyledImage
                        style={{
                            backgroundImage: `url("${item.uri}")`,
                        }}
                    />
                    <Button>buy</Button>
                    <Button>Sell</Button>
                    <Button>Transfer</Button>
                    <Button>Cancel</Button>
                    <Button>Stake</Button>
                </Box>
            </Box>
        </Box>
    )
})