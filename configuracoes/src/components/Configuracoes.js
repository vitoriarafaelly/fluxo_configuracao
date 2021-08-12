import React from 'react';
import { makeStyles, TextField, Toolbar, IconButton, Button, Typography, Avatar, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Divider from '@material-ui/core/Divider';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ListAltIcon from '@material-ui/icons/ListAlt';

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
    button: {
        margin: theme.spacing(1),
        textTransform: 'none',
        backgroundColor: '#fafafa',
        borderRadius: '8px',
        color: theme.palette.primary.main,
    },
    listButton: {
        textTransform: 'none',
        backgroundColor: '#fafafa',
        borderRadius: '8px',
        color: theme.palette.primary.main,
    },
    divList: {
        justifyContent: 'center',
        margin: 'auto',
        display: 'flex',
    },
    divider: {
        justifyContent: 'center',
    },
    tLarge: {

        marginLeft: theme.spacing(3),


    },
}));
function Configuracoes() {
    const classes = useStyles();

    return (
        <div>
            <Box className={classes.boxColor}>
                <Toolbar >
                    <Typography variant='h6' style={{ fontWeight: 600 }} className={classes.root}>
                        Configurações</Typography>

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
                <Divider variant="middle" />
                <div>
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
                </div>
            </Box>
            <Box>
                <Toolbar>
                    <div className={classes.divList}>
                        <Button variant="contained" className={classes.listButton}
                            startIcon={<ListAltIcon />}>
                            Ver todas</Button>
                    </div>
                </Toolbar>
            </Box>
            <Box>
                <div>
                    <Toolbar>
                        <Typography>
                            Informações pessoais
                        </Typography>
                    </Toolbar>
                    <Divider variant="middle" />
                    <Toolbar>
                        <Typography>
                            Gerenciar contas
                        </Typography>
                    </Toolbar>
                    <Divider variant="middle" />
                    <Toolbar>
                        <Typography>
                            Gerenciar cartões
                        </Typography>
                    </Toolbar>
                    <Divider variant="middle" />
                    <Toolbar>
                        <Typography>
                            Ajuda
                        </Typography>
                    </Toolbar>
                    <Divider variant="middle" />
                    <Toolbar>
                        <Typography>
                            Sair da conta
                        </Typography>
                    </Toolbar>
                    <Divider variant="middle" />
                </div>

            </Box>

            <Box>
                <Toolbar>
                    <div>
                        <Button variant="contained" className={classes.button}
                            startIcon={<ArrowBackIosIcon />}>Voltar</Button>
                    </div>
                </Toolbar>
            </Box>
        </div>

    );
}

export default Configuracoes;