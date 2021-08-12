import React from 'react';
import { makeStyles, TextField, Toolbar, IconButton, Button, Typography, Avatar, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles((theme) => ({

    root: {
        color: theme.palette.primary.main,
    },
    grow: {
        flexGrow: 1
    },
    boxColor: {
        backgroundColor: '#f9f9f9'
    },
    large: {
        width: theme.spacing(8),
        height: theme.spacing(8),

    },
    buttonVoltar: {
        margin: theme.spacing(1),
        textTransform: 'none',
        backgroundColor: '#fafafa',
        borderRadius: '8px',
    },
    tLarge: {

        marginLeft: theme.spacing(3),

    },

}));
function TodasContas() {
    const classes = useStyles();

    return (
        <div>
            <Box className={classes.boxColor}>
                <Toolbar >
                    <Typography variant='h6' style={{ fontWeight: 600 }} className={classes.root}>
                        Todas as contas</Typography>

                </Toolbar>
                <div>
                    <Toolbar>
                        <Avatar src="/images/avatar2.png" className={classes.large}></Avatar>
                        <div className={classes.tLarge}>
                            <Typography >
                                Luiza Ananda Macêdo
                            </Typography>
                            <Typography >
                                Conta: 12345-0
                            </Typography>
                            <Typography>
                                Banquinho
                            </Typography>

                        </div>
                        <div className={classes.grow} />
                        <IconButton>
                            <CheckCircleIcon className={classes.root}></CheckCircleIcon>
                        </IconButton>
                    </Toolbar>
                </div>
            </Box>
            <Divider variant="middle" />
            <Toolbar>
                <TextField
                    id="outlined-name"
                    variant="outlined"
                    placeholder="Buscar pelo nome conta"
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </Toolbar>

            <Box>
                <Toolbar>
                    <Avatar src="/images/avatar2.png" className={classes.large}></Avatar>
                    <div className={classes.tLarge}>

                        <Typography >
                            Luiza Ananda Macêdo
                        </Typography>
                        <Typography >
                            Conta: 12345-0
                        </Typography>
                        <Typography>
                            Banquinho
                        </Typography>
                    </div>
                    <div className={classes.grow} />
                    <IconButton>
                        <CheckCircleIcon className={classes.root}></CheckCircleIcon>
                    </IconButton>

                </Toolbar>
            </Box>
            <Divider variant="middle" />
            <Box>
                <Toolbar>
                    <Avatar src="/images/garoto.png" className={classes.large}></Avatar>
                    <div className={classes.tLarge}>

                        <Typography >
                            Pedro Victor da Silva
                        </Typography>
                        <Typography >
                            Conta: 12344-0
                        </Typography>
                        <Typography>
                            Bancão
                        </Typography>

                    </div>
                    <div className={classes.grow} />
                    <IconButton>
                        <CheckCircleIcon className={classes.root}></CheckCircleIcon>
                    </IconButton>
                </Toolbar>
            </Box>
            <Box pt={25}>
                <Toolbar>

                    <Button variant="contained" className={classes.buttonVoltar}
                        startIcon={<ArrowBackIosIcon />} >
                        Voltar
                    </Button>
                </Toolbar>
            </Box>
        </div>

    );
}

export default TodasContas;