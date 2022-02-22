import React, {useState} from 'react'
import { Container,Typography,Divider, Button } from '@mui/material';
import DenseAppBar from './Components/DenseAppBar.jsx';
import CategoryAdd from './Components/CategoryAdd.jsx';
import { GifGrid } from './Components/GifGrid.jsx';
const GiphifyApp = () => {
    const [categorias, setCategorias] = useState(['One Punch'])

    return (
        <>
            <DenseAppBar />
            <Container sx={{paddingTop: '60px'}}>
                <CategoryAdd setCategory={setCategorias}/>
                <Divider color="white"/>
                <GifGrid 
                    category={categorias}
                    key={categorias}
                />
            </Container>
        </>
    )
};

export default GiphifyApp;