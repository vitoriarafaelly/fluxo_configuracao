import React from 'react';
import { makeStyles, TextField, Toolbar, IconButton, Button, Typography, Avatar} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function EditarConta(){

    return(
        <div>
            <Toolbar>

                <Typography>Editar conta</Typography>
                <Button>Cancelar</Button>

            </Toolbar>
            <div>
                <Avatar src="./images/garoto.png"></Avatar>
            </div>
            <Button>
                Alterar foto
                </Button>
        
            <Toolbar>

                    <TextField
                        id="outlined-name"
                        variant="outlined"
                        placeholder="Pedro Victor Nascimento Oliveira"
                        style={{ margin: 8 }}
                        fullWidth

                        />
                </Toolbar>

                <Box pt={15}>
                <Toolbar>
                
                    <Button variant="contained" >
                        <IconButton>
                            <CheckCircleIcon/>
                        </IconButton>
                        Salvar      
                    </Button>
                </Toolbar>
                </Box>
        </div>
    );
}
export default EditarConta;