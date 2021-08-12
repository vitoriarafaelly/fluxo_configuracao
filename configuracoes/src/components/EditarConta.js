import React from 'react';
import { makeStyles, TextField, Toolbar, IconButton, Button, Typography, Avatar } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';


const useStyles = makeStyles((theme) => ({

    root: {
        color: theme.palette.primary.main,
    },
    grow: {
        flexGrow: 1
    },
    large: {
        width: theme.spacing(11),
        height: theme.spacing(11),

    },
    boxColor: {
        backgroundColor: '#f9f9f9'
    },
    cancelButton: {
        padding: 3,
        textTransform: 'none',
        borderRadius: '4px',
        height: '5vh',
        fontSize: 13,
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.secondary.main,
    },
    saveButton: {
        textTransform: 'none',
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.secondary.main,
        borderRadius: '4px',
        alignItems: 'center',
        margin: 'auto',
        display: 'flex',
    },
    alterButton: {
        textTransform: 'none',
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.secondary.main,
        borderRadius: '4px',
        padding: 3,
        height: '5vh',

    },
    divAvatar: {
        justifyContent: 'center',
        margin: 'auto',
        display: 'flex',

    },
    typo:{
        padding: theme.spacing(3),
        color: '#818181',
    },


}));

function EditarConta() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.boxColor}>
                <Toolbar className={classes.root}>

                    <Typography variant='h6' style={{ fontWeight: 600 }}>Editar Conta</Typography>
                    <div className={classes.grow} />
                    <div>
                        <Button className={classes.cancelButton} variant="contained">
                            <IconButton className={classes.root}><CloseRoundedIcon /></IconButton>
                            Cancelar
                        </Button>
                    </div>

                </Toolbar>
                <Box >
                    <div className={classes.divAvatar}>
                        <Avatar className={classes.large} src="/images/garoto.png"></Avatar>
                    </div>
                    <div className={classes.divAvatar}>
                        <Button className={classes.alterButton} variant="contained">
                            <IconButton className={classes.root}>
                                <AddPhotoAlternateIcon />
                            </IconButton >
                            Alterar foto
                        </Button>

                    </div>
                </Box>
            </div>
            

            <div style={{ margin: 30 }}>
            <Typography variant='caption' className={classes.typo}>
                    Editar apelido da conta

                
            </Typography>
                <Toolbar>

                    <TextField
                        id="outlined-name"
                        variant="outlined"
                        placeholder="Pedro Victor Nascimento Oliveira"
                        fullWidth

                    />
                </Toolbar>
            </div>

            <Box pt={25}>
                <Toolbar>

                    <div className={classes.divAvatar}>
                        <Button variant="contained" className={classes.saveButton} >
                            <IconButton className={classes.root} size="small">
                                <CheckCircleIcon />
                            </IconButton>
                            Salvar
                        </Button>
                    </div>
                </Toolbar>
            </Box>
        </div>
    );
}
export default EditarConta;