import { Box, InputLabel, MenuItem } from '@mui/material'
import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Card from '../../components/Card'
import Modal from '../../components/Modal'
import useListTokenDistributed from '../../hook/useListTokenDistributed'
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
    const onTokenDistributed = useListTokenDistributed()
    const [currentItems, setCurrentItems] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [itemModal, setItemModal] = useState({})
    const onCloseModal = () => {
        setOpenModal(false)
    }
    const result = onTokenDistributed

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
                        if(item!=undefined)
                        return (
                            <Card
                                type ='buyFromSupplier'
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