import { forwardRef, useState } from 'react'
import * as React from 'react';
import { Box, Button, Switch, Typography, FormControl, InputLabel, MenuItem } from '@mui/material'
import styled from '@emotion/styled'
import useBuyFromSupplier from '../hook/useBuyFromSupplier'
import useSell from '../hook/useSell'
import useApproveAll from '../hook/useApproveAll'
import useCancel from '../hook/useCancel'
import useBuy from '../hook/useBuy'
import useTransfer from '../hook/useTransfer'
import useStake from '../hook/useStake'
import useUnstake from '../hook/useUnstake'
import { ethers } from 'ethers'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';


const StyledImage = styled(Box)`
  height: 200px;
  width: 225px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain, cover;
`
export default forwardRef(function Card(props, ref) {
    const [openSell, setOpenSell] = React.useState(false);
    const [openTransfer, setOpenTransfer] = React.useState(false);
    const [sellPrice, setSellPrice] = React.useState(0);
    const [transferTo, setTransferTo] = React.useState(0);
    const onTransfer = useTransfer()
    const onUnstake = useUnstake()
    const onStake = useStake()
    const handleClickOpenSell = () => {
        setOpenSell(true);
    };
    const handleCloseSell = () => {
        setOpenSell(false);
    };
    const handleClickOpenTransfer = () => {
        setOpenTransfer(true);
    };
    const handleCloseTransfer = () => {
        setOpenTransfer(false);
    };

    const onBuyFromSupplier = useBuyFromSupplier();
    const onBuy = useBuy()
    const onSell = useSell();
    const onApprove = useApproveAll();
    const onCancel = useCancel();
    const { type, item } = props
    return (
        <Box padding="16px" width="100%" >
            <Box display="flex" justifyContent="space-between">
                <Box>
                    <div>tokenId: {item.tokenId}</div>
                    <div>seller: {item.seller}</div>
                    <div>price: {item.price}</div>
                    <div>stake start block: {item.startBlock}</div>
                    <StyledImage
                        style={{
                            backgroundImage: `url("${item.uri}")`,
                        }}
                    />
                    {type == 'buyFromSupplier' ? (<Button onClick={() => {
                        onBuyFromSupplier(item.tokenId, item.price)
                    }} >Buy From Supplier</Button>) : type == 'myNft' ?
                        (<div>
                            <Button onClick={() => {
                                onApprove()
                            }} >Approve</Button>
                            <Button onClick={handleClickOpenSell} >Sell</Button>
                            <Button onClick={handleClickOpenTransfer}>Transfer</Button>
                            <Button onClick={() => {
                                onStake(item.tokenId)
                            }}>Stake</Button>
                        </div>)
                        : type == 'stake' ?
                        <Button onClick={() => {
                            onUnstake(item.itemId)
                        }}>Unstake</Button> :
                        <div>
                            <Button onClick={() => {
                                onBuy(item.itemId, item.price)
                            }}>Buy</Button>
                            <Button onClick={() => {
                                onCancel(item.itemId)
                            }}>Cancel</Button>
                        </div>}

                </Box>
            </Box>
            <Dialog open={openSell} onClose={handleCloseSell}>
                <DialogContent>
                    <DialogContentText>
                        Sell Price:
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="BNB"
                        type="number"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setSellPrice(e.target.value)
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseSell}>Cancel</Button>
                    <Button onClick={() => {
                        onSell(item.tokenId, sellPrice) && handleCloseSell()
                    }} >Sell</Button>
                </DialogActions>
            </Dialog>
            <Dialog open={openTransfer} onClose={handleCloseTransfer}>
                <DialogContent>
                    <DialogContentText>
                        Send your nft to address below:
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="address"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setTransferTo(e.target.value)
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseTransfer}>Cancel</Button>
                    <Button onClick={() => {
                        onTransfer(item.tokenId, transferTo) && handleCloseTransfer()
                    }} >Sell</Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
})