import React from "react";
// material-ui components
import { makeStyles } from "@mui/styles";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/Button/Button.js";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import imagesStyles from "styles/imagesStyles.js";
import { Player, ControlBar } from 'video-react';
import { cardTitle } from "styles/nextjs-material-kit.js";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { saveAs } from "file-saver";
import "node_modules/video-react/dist/video-react.css";
import { useClipboard } from 'use-clipboard-copy';
import Search from "@mui/icons-material/Search";

const styles = {
    ...imagesStyles,
    cardTitle,
};

const useStyles = makeStyles(styles);

export default function CardList() {
    const clipboard = useClipboard();
    const classes = useStyles();
    const vata = () => {
        saveAs(
            "https://cdn.discordapp.com/attachments/1133688730641780776/1133688962079268864/vata.mp4",
            "example.pdf"
        );
    };
    return (
        <Container fixed >
            <Grid container spacing={2} justifyContent="space-around">
                <Card style={{width: "15rem"}}>
                    <Player
                        playsInline
                        poster="https://cdn.discordapp.com/attachments/1040595642180976712/1133664605252620338/vata.png"
                        src="https://cdn.discordapp.com/attachments/1133688730641780776/1133688962079268864/vata.mp4"
                    />
                    <CardBody>
                        <Grid container spacing={2} justifyContent="space-around">
                            <h2 className={classes.cardTitle}>Вата ебаная</h2>
                            <Button  color="success" onClick={vata}>
                               DOWNLOAD
                            </Button>
                            <Button justIcon round color="white" onClick={clipboard.copy}>
                                <ContentCopyIcon className={classes.ContentCopyIcon} />
                            </Button>
                            <input ref={clipboard.target} value={'https://cdn.discordapp.com/attachments/1133688730641780776/1133688962079268864/vata.mp4'} readOnly type="hidden" />


                        </Grid>
                    </CardBody>
                </Card>

            </Grid>

        </Container>

    );
}