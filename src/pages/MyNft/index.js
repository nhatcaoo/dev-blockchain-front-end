import { Box, InputLabel, MenuItem } from '@mui/material'
import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Card from '../../components/Card'
import Modal from '../../components/Modal'
const Container = styled(Box)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

> * + * {
  margin-top: 30px !important;
}
`
export default function Marketplace() {
    const uriSample = 'https://storage.googleapis.com/assets.axieinfinity.com/axies/2222242/axie/axie-full-transparent.png';
    const [currentItems, setCurrentItems] = useState([])
    console.log("marketplace")
    const [openModal, setOpenModal] = useState(false)
    const [itemModal, setItemModal] = useState({})
    const onCloseModal = () => {
        setOpenModal(false)
    }
    const temp = [
        { uri: uriSample, tokenId: 1, itemId: 1, owner: '123', price: 221 }, { uri: uriSample, tokenId: 1, itemId: 1, owner: '123', price: 221 }, { uri: uriSample, tokenId: 1, itemId: 1, owner: '123', price: 221 }, { uri: uriSample, tokenId: 1, itemId: 1, owner: '123', price: 221 }, { uri: uriSample, tokenId: 1, itemId: 1, owner: '123', price: 221 }, { uri: uriSample, tokenId: 1, itemId: 1, owner: '123', price: 221 }
    ]
    useEffect(() => {
        setCurrentItems(temp)
    }, [])
    return (
        <Container>
            <Modal open={openModal} onClose={onCloseModal} itemModal={itemModal} />
            <Box display="flex" justifyContent="center">
            </Box>
            <Box style={{ overflow: 'visible' }}>
                <Box>
                    {currentItems.map((item, index) => {
                        return (
                            <Card
                                onClick={() => {
                                    setItemModal(item)
                                    setOpenModal(true)
                                }}
                                onClose={onCloseModal}
                                item={item}
                                key={index}
                            />
                        )
                    })}
                </Box>
            </Box>
        </Container>
    )
}