import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import useCreateToken from '../../hook/useCreateTokenArtist'
import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > * + * {
    margin-top: 30px !important;
  }
`
export default function CreateByArtist() {
    const [urlImage, setUrlImage] = useState('')
    const [price, setPrice] = useState('')
    const onCreateToken = useCreateToken()

    useEffect(() => {

    }, [])
    return (
        <Container alignContent={"center"}>
            <TextField
                width="20vw"
                label={'Url Image'}
                variant="outlined"
                value={urlImage}
                onChange={(e) => setUrlImage(e.target.value)}
            />
            <TextField
                width="20vw"
                label={'Price'}
                variant="outlined"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <Button onClick={() => {
                onCreateToken(urlImage, price)
            }}>Create Token</Button>

        </Container>
    )
}