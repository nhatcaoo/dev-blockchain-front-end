import { Box, InputLabel, MenuItem } from '@mui/material'
import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Card from '../../components/Card'
import Modal from '../../components/Modal'
import useListMyNft from '../../hook/useListMyNft'

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
    const onListMyNft = useListMyNft();
    const [currentItems, setCurrentItems] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [itemModal, setItemModal] = useState({})
    const onCloseModal = () => {
        setOpenModal(false)
    }
    const result = onListMyNft

    useEffect(() => {
        setCurrentItems(result)
    }, [result])
    return (
        <Container>
            <Modal open={openModal} onClose={onCloseModal} itemModal={itemModal} />
            <Box display="flex" justifyContent="center">
            </Box>
            <Box style={{ overflow: 'visible' }}>
                <Box>
                    {currentItems.map((item, index) => {
                        if (item != undefined)
                            return (
                                <Card
                                    type = 'myNft'
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