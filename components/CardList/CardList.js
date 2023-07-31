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
    const clipboard2 = useClipboard();
    const classes = useStyles();
    const vata = () => {
        saveAs(
            "https://cdn.discordapp.com/attachments/1133688730641780776/1133688962079268864/vata.mp4",
            "vata.mp4"
        );
    };
    const untekuGolovuPiloy = () => {
        saveAs(
            "https://cdn.discordapp.com/attachments/1133688730641780776/1134355208147836998/untekuGolovuPiloy.mp4",
            "untekuGolovuPiloy.mp4"
        );
    };
    const kasetnimibombami = () => {
        saveAs(
            "https://cdn.discordapp.com/attachments/1133688730641780776/1134355041302630560/kasetnimibombami.mp4",
            "kasetnimibombami.mp4"
        );
    };
    const Prostitutka = () => {
        saveAs(
            "https://cdn.discordapp.com/attachments/1133688730641780776/1135467484728787015/Prostitutka.mp4",
            "Prostitutka.mp4"
        );
    };
    const fuckyou = () => {
        saveAs(
            "https://cdn.discordapp.com/attachments/1133688730641780776/1135468863019032607/fuckyou.mp4",
            "fuckyou.mp4"
        );
    };
    const chmoebanoe = () => {
        saveAs(
            "https://cdn.discordapp.com/attachments/1133688730641780776/1135476314791485580/chmoebanoe.webm",
            "chmoebanoe.mp4"
        );
    };
    const soy = () => {
        saveAs(
            "https://cdn.discordapp.com/attachments/1133688730641780776/1135477277317148792/soy.mp4",
            "soy.mp4"
        );
    };
    const ukrop = () => {
        saveAs(
            "https://cdn.discordapp.com/attachments/1133688730641780776/1135482948645290084/ukrop.mp4",
            "ukrop.mp4"
        );
    };
    const ozon = () => {
        saveAs(
            "https://cdn.discordapp.com/attachments/1133688730641780776/1135483878644125768/tidaun.mp4",
            "ozon.mp4"
        );
    };
    const goblinPidori = () => {
        saveAs(
            "https://cdn.discordapp.com/attachments/1133688730641780776/1135489702049357854/vivsepidori.webm",
            "goblinPidori.mp4"
        );
    };
    const shiziki = () => {
        saveAs(
            "https://cdn.discordapp.com/attachments/1133688730641780776/1135490541765791825/shiziki.mp4",
            "shiziki.mp4"
        );
    };
    const skuf = () => {
        saveAs(
            "https://cdn.discordapp.com/attachments/1133688730641780776/1135491375136243742/skuf.mp4",
            "skuf.mp4"
        );
    };
    const bukvalnoya = () => {
        saveAs(
            "https://cdn.discordapp.com/attachments/1133688730641780776/1135495700822634577/bukvalnoya.mp4",
            "bukvalnoya.mp4"
        );
    };
    const utrechko = () => {
        saveAs(
            "https://cdn.discordapp.com/attachments/1133688730641780776/1135496750124249159/dobroeutrechko.webm",
            "dobroeutrechko.mp4"
        );
    };
    const clown = () => {
        saveAs(
            "https://cdn.discordapp.com/attachments/1133688730641780776/1135497643578110065/clown.mp4",
            "clown.mp4"
        );
    };
    const etorealno = () => {
        saveAs(
            "https://cdn.discordapp.com/attachments/1133688730641780776/1135498543486992394/pogoditeEtoreal.mp4",
            "pogoditeEtoreal.mp4"
        );
    };
    const very = () => {
        saveAs(
            "https://cdn.discordapp.com/attachments/1133688730641780776/1135500031517016140/yatebetavery.webm",
            "yatebetavery.mp4"
        );
    };
    const hohol = () => {
        saveAs(
            "https://cdn.discordapp.com/attachments/1133688730641780776/1135503107443404800/hohol.mp4",
            "hohol.mp4"
        );
    };
    const vmoyomgorode = () => {
        saveAs(
            "https://cdn.discordapp.com/attachments/1133688730641780776/1135503107443404800/hohol.mp4",
            "hohol.mp4"
        );
    };


    return (
        <Container fixed >
            <Grid container spacing={2} justifyContent="space-around">
                <Card style={{width: "17rem"}}>
                    <Player
                        playsInline
                        poster="https://cdn.discordapp.com/attachments/1040595642180976712/1133664605252620338/vata.png"
                        src="https://cdn.discordapp.com/attachments/1133688730641780776/1133688962079268864/vata.mp4"
                    />
                    <CardBody>
                        <Grid container spacing={2} justifyContent="space-around">
                            <h3 className={classes.cardTitle}>Вата ебаная</h3>
                            <Button  color="rose" onClick={vata}>
                               DOWNLOAD
                            </Button>
                            <Button justIcon round color="rose" onClick={clipboard.copy}>
                                <ContentCopyIcon className={classes.ContentCopyIcon} />
                            </Button>
                            <input ref={clipboard.target} value={'https://cdn.discordapp.com/attachments/1133688730641780776/1133688962079268864/vata.mp4'} readOnly type="hidden" />


                        </Grid>
                    </CardBody>
                </Card>
                <Card style={{width: "17rem"}}>
                    <Player
                        playsInline
                        poster="https://cdn.discordapp.com/attachments/1133688730641780776/1135440504411127879/image.png"
                        src="https://cdn.discordapp.com/attachments/1133688730641780776/1134355208147836998/untekuGolovuPiloy.mp4"
                    />
                    <CardBody>
                        <Grid container spacing={2} justifyContent="space-around">
                            <h3 className={classes.cardTitle}>Унтерку голову</h3>
                            <Button  color="rose" onClick={untekuGolovuPiloy}>
                                DOWNLOAD
                            </Button>
                            <Button justIcon round color="rose" onClick={clipboard.copy}>
                                <ContentCopyIcon className={classes.ContentCopyIcon} />
                            </Button>
                            <input ref={clipboard.target} value={'https://cdn.discordapp.com/attachments/1133688730641780776/1134355208147836998/untekuGolovuPiloy.mp4'} readOnly type="hidden" />


                        </Grid>
                    </CardBody>
                </Card>
                <Card style={{width: "17rem"}}>
                    <Player
                        playsInline
                        poster="https://cdn.discordapp.com/attachments/1133688730641780776/1135441365623382067/image.png"
                        src="https://cdn.discordapp.com/attachments/1133688730641780776/1134355041302630560/kasetnimibombami.mp4"
                    />
                    <CardBody>
                        <Grid container spacing={2} justifyContent="space-around">
                            <h3 className={classes.cardTitle}>Кассетными бомбами</h3>
                            <Button  color="rose" onClick={kasetnimibombami}>
                                DOWNLOAD
                            </Button>
                            <Button justIcon round color="rose" onClick={clipboard.copy}>
                                <ContentCopyIcon className={classes.ContentCopyIcon} />
                            </Button>
                            <input ref={clipboard.target} value={'https://cdn.discordapp.com/attachments/1133688730641780776/1134355041302630560/kasetnimibombami.mp4'} readOnly type="hidden" />


                        </Grid>
                    </CardBody>
                </Card>
                <Card style={{width: "17rem"}}>
                    <Player
                        playsInline
                        poster="https://media.discordapp.net/attachments/1133688730641780776/1135467629985927259/image.png"
                        src="https://cdn.discordapp.com/attachments/1133688730641780776/1135467484728787015/Prostitutka.mp4"
                    />
                    <CardBody>
                        <Grid container spacing={2} justifyContent="space-around">
                            <h3 className={classes.cardTitle}>Проститутка</h3>
                            <Button  color="rose" onClick={Prostitutka}>
                                DOWNLOAD
                            </Button>
                            <Button justIcon round color="rose" onClick={clipboard.copy}>
                                <ContentCopyIcon className={classes.ContentCopyIcon} />
                            </Button>
                            <input ref={clipboard.target} value={'https://cdn.discordapp.com/attachments/1133688730641780776/1135467484728787015/Prostitutka.mp4'} readOnly type="hidden" />


                        </Grid>
                    </CardBody>
                </Card>
                <Card style={{width: "17rem"}}>
                    <Player
                        playsInline
                        fluid={false}
                        height='60%'
                        width='100%'
                        poster="https://media.discordapp.net/attachments/1133688730641780776/1135471480914845696/image.png"
                        src="https://cdn.discordapp.com/attachments/1133688730641780776/1135468863019032607/fuckyou.mp4"
                    />
                    <CardBody>
                        <Grid container spacing={2} justifyContent="space-around">
                            <h3 className={classes.cardTitle}>Пашол нахуй</h3>
                            <Button  color="rose" onClick={fuckyou}>
                                DOWNLOAD
                            </Button>
                            <Button justIcon round color="rose" onClick={clipboard.copy}>
                                <ContentCopyIcon className={classes.ContentCopyIcon} />
                            </Button>
                            <input ref={clipboard.target} value={'https://cdn.discordapp.com/attachments/1133688730641780776/1135468863019032607/fuckyou.mp4'} readOnly type="hidden" />


                        </Grid>
                    </CardBody>
                </Card>
                <Card style={{width: "17rem"}}>
                    <Player
                        playsInline
                        poster="https://media.discordapp.net/attachments/1133688730641780776/1135476626382135427/image.png"
                        src="https://cdn.discordapp.com/attachments/1133688730641780776/1135476314791485580/chmoebanoe.webm"
                    />
                    <CardBody>
                        <Grid container spacing={2} justifyContent="space-around">
                            <h3 className={classes.cardTitle}>Чмо ебаное заткнися</h3>
                            <Button  color="rose" onClick={chmoebanoe}>
                                DOWNLOAD
                            </Button>
                            <Button justIcon round color="rose" onClick={clipboard.copy}>
                                <ContentCopyIcon className={classes.ContentCopyIcon} />
                            </Button>
                            <input ref={clipboard.target} value={'https://cdn.discordapp.com/attachments/1133688730641780776/1135476314791485580/chmoebanoe.webm'} readOnly type="hidden" />


                        </Grid>
                    </CardBody>
                </Card>
                <Card style={{width: "17rem"}}>
                    <Player
                        playsInline
                        poster="https://media.discordapp.net/attachments/1133688730641780776/1135477360892846151/image.png"
                        src="https://cdn.discordapp.com/attachments/1133688730641780776/1135477277317148792/soy.mp4"
                    />
                    <CardBody>
                        <Grid container spacing={2} justifyContent="space-around">
                            <h3 className={classes.cardTitle}>Чмукич сойка</h3>
                            <Button  color="rose" onClick={soy}>
                                DOWNLOAD
                            </Button>
                            <Button justIcon round color="rose" onClick={clipboard.copy}>
                                <ContentCopyIcon className={classes.ContentCopyIcon} />
                            </Button>
                            <input ref={clipboard.target} value={'https://cdn.discordapp.com/attachments/1133688730641780776/1135477277317148792/soy.mp4'} readOnly type="hidden" />


                        </Grid>
                    </CardBody>
                </Card>
                <Card style={{width: "17rem"}}>
                    <Player
                        playsInline
                        poster="https://media.discordapp.net/attachments/1133688730641780776/1135483108095967383/image.png"
                        src="https://cdn.discordapp.com/attachments/1133688730641780776/1135482948645290084/ukrop.mp4"
                        fluid={false}
                        height='60%'
                        width='100%'
                    />
                    <CardBody>
                        <Grid container spacing={2} justifyContent="space-around">
                            <h3 className={classes.cardTitle}>Укроп под колесами</h3>
                            <Button  color="rose" onClick={ukrop}>
                                DOWNLOAD
                            </Button>
                            <Button justIcon round color="rose" onClick={clipboard.copy}>
                                <ContentCopyIcon className={classes.ContentCopyIcon} />
                            </Button>
                            <input ref={clipboard.target} value={'https://cdn.discordapp.com/attachments/1133688730641780776/1135482948645290084/ukrop.mp4'} readOnly type="hidden" />


                        </Grid>
                    </CardBody>
                </Card>
                <Card style={{width: "17rem"}}>
                    <Player
                        playsInline
                        fluid={false}
                        height='60%'
                        width='100%'
                        poster="https://media.discordapp.net/attachments/1133688730641780776/1135484608402686022/image.png"
                        src="https://cdn.discordapp.com/attachments/1133688730641780776/1135483878644125768/tidaun.mp4"
                    />
                    <CardBody>
                        <Grid container spacing={2} justifyContent="space-around">
                            <h3 className={classes.cardTitle}>Запомни дибил</h3>
                            <Button  color="rose" onClick={ozon}>
                                DOWNLOAD
                            </Button>
                            <Button justIcon round color="rose" onClick={clipboard.copy}>
                                <ContentCopyIcon className={classes.ContentCopyIcon} />
                            </Button>
                            <input ref={clipboard.target} value={'https://cdn.discordapp.com/attachments/1133688730641780776/1135483878644125768/tidaun.mp4'} readOnly type="hidden" />


                        </Grid>
                    </CardBody>
                </Card>
                <Card style={{width: "17rem"}}>
                    <Player
                        playsInline
                        poster="https://media.discordapp.net/attachments/1133688730641780776/1135490089653391361/image.png"
                        src="https://cdn.discordapp.com/attachments/1133688730641780776/1135489702049357854/vivsepidori.webm"
                    />
                    <CardBody>
                        <Grid container spacing={2} justifyContent="space-around">
                            <h3 className={classes.cardTitle}>Вы все пидоры</h3>
                            <Button  color="rose" onClick={goblinPidori}>
                                DOWNLOAD
                            </Button>
                            <Button justIcon round color="rose" onClick={clipboard.copy}>
                                <ContentCopyIcon className={classes.ContentCopyIcon} />
                            </Button>
                            <input ref={clipboard.target} value={'https://cdn.discordapp.com/attachments/1133688730641780776/1135489702049357854/vivsepidori.webm'} readOnly type="hidden" />


                        </Grid>
                    </CardBody>
                </Card>
                <Card style={{width: "17rem"}}>
                    <Player
                        playsInline
                        poster="https://media.discordapp.net/attachments/1133688730641780776/1135490647453876295/image.png"
                        src="https://cdn.discordapp.com/attachments/1133688730641780776/1135490541765791825/shiziki.mp4"
                    />
                    <CardBody>
                        <Grid container spacing={2} justifyContent="space-around">
                            <h3 className={classes.cardTitle}>Мы все шизики</h3>
                            <Button  color="rose" onClick={shiziki}>
                                DOWNLOAD
                            </Button>
                            <Button justIcon round color="rose" onClick={clipboard.copy}>
                                <ContentCopyIcon className={classes.ContentCopyIcon} />
                            </Button>
                            <input ref={clipboard.target} value={'https://cdn.discordapp.com/attachments/1133688730641780776/1135490541765791825/shiziki.mp4'} readOnly type="hidden" />


                        </Grid>
                    </CardBody>
                </Card>
                <Card style={{width: "17rem"}}>
                    <Player
                        playsInline
                        poster="https://media.discordapp.net/attachments/1133688730641780776/1135491582422958100/image.png"
                        src="https://cdn.discordapp.com/attachments/1133688730641780776/1135491375136243742/skuf.mp4"
                    />
                    <CardBody>
                        <Grid container spacing={2} justifyContent="space-around">
                            <h3 className={classes.cardTitle}>Жопу ставлю</h3>
                            <Button  color="rose" onClick={skuf}>
                                DOWNLOAD
                            </Button>
                            <Button justIcon round color="rose" onClick={clipboard.copy}>
                                <ContentCopyIcon className={classes.ContentCopyIcon} />
                            </Button>
                            <input ref={clipboard.target} value={'https://cdn.discordapp.com/attachments/1133688730641780776/1135491375136243742/skuf.mp4'} readOnly type="hidden" />


                        </Grid>
                    </CardBody>
                </Card>
                <Card style={{width: "17rem"}}>
                    <Player
                        playsInline
                        fluid={false}
                        height='60%'
                        width='100%'
                        poster="https://media.discordapp.net/attachments/1133688730641780776/1135495843131162694/image.png"
                        src="https://cdn.discordapp.com/attachments/1133688730641780776/1135495700822634577/bukvalnoya.mp4"
                    />
                    <CardBody>
                        <Grid container spacing={2} justifyContent="space-around">
                            <h3 className={classes.cardTitle}>Буквально я</h3>
                            <Button  color="rose" onClick={bukvalnoya}>
                                DOWNLOAD
                            </Button>
                            <Button justIcon round color="rose" onClick={clipboard.copy}>
                                <ContentCopyIcon className={classes.ContentCopyIcon} />
                            </Button>
                            <input ref={clipboard.target} value={'https://cdn.discordapp.com/attachments/1133688730641780776/1135495700822634577/bukvalnoya.mp4'} readOnly type="hidden" />


                        </Grid>
                    </CardBody>
                </Card>
                <Card style={{width: "17rem"}}>
                    <Player
                        playsInline
                        poster="https://media.discordapp.net/attachments/1133688730641780776/1135496894303449168/image.png"
                        src="https://cdn.discordapp.com/attachments/1133688730641780776/1135496750124249159/dobroeutrechko.webm"
                    />
                    <CardBody>
                        <Grid container spacing={2} justifyContent="space-around">
                            <h3 className={classes.cardTitle}>Доброе утречкаа</h3>
                            <Button  color="rose" onClick={utrechko}>
                                DOWNLOAD
                            </Button>
                            <Button justIcon round color="rose" onClick={clipboard.copy}>
                                <ContentCopyIcon className={classes.ContentCopyIcon} />
                            </Button>
                            <input ref={clipboard.target} value={'https://cdn.discordapp.com/attachments/1133688730641780776/1135496750124249159/dobroeutrechko.webm'} readOnly type="hidden" />


                        </Grid>
                    </CardBody>
                </Card>
                <Card style={{width: "17rem"}}>
                    <Player
                        playsInline
                        fluid={false}
                        height='60%'
                        width='100%'
                        poster="https://media.discordapp.net/attachments/1133688730641780776/1135497737144631347/image.png"
                        src="https://cdn.discordapp.com/attachments/1133688730641780776/1135497643578110065/clown.mp4"
                    />
                    <CardBody>
                        <Grid container spacing={2} justifyContent="space-around">
                            <h3 className={classes.cardTitle}>Фоткаю клоуна</h3>
                            <Button  color="rose" onClick={clown}>
                                DOWNLOAD
                            </Button>
                            <Button justIcon round color="rose" onClick={clipboard.copy}>
                                <ContentCopyIcon className={classes.ContentCopyIcon} />
                            </Button>
                            <input ref={clipboard.target} value={'https://cdn.discordapp.com/attachments/1133688730641780776/1135497643578110065/clown.mp4'} readOnly type="hidden" />


                        </Grid>
                    </CardBody>
                </Card>
                <Card style={{width: "17rem"}}>
                    <Player
                        playsInline
                        poster="https://media.discordapp.net/attachments/1133688730641780776/1135498735028277299/image.png"
                        src="https://cdn.discordapp.com/attachments/1133688730641780776/1135498543486992394/pogoditeEtoreal.mp4"
                        fluid={false}
                        height='60%'
                        width='100%'
                    />
                    <CardBody>
                        <Grid container spacing={2} justifyContent="space-around">
                            <h3 className={classes.cardTitle}>Погодите это реально?</h3>
                            <Button  color="rose" onClick={etorealno}>
                                DOWNLOAD
                            </Button>
                            <Button justIcon round color="rose" onClick={clipboard.copy}>
                                <ContentCopyIcon className={classes.ContentCopyIcon} />
                            </Button>
                            <input ref={clipboard.target} value={'https://cdn.discordapp.com/attachments/1133688730641780776/1135498543486992394/pogoditeEtoreal.mp4'} readOnly type="hidden" />


                        </Grid>
                    </CardBody>
                </Card>
                <Card style={{width: "17rem"}}>
                    <Player
                        playsInline
                        poster="https://media.discordapp.net/attachments/1133688730641780776/1135500148538085436/image.png"
                        src="https://cdn.discordapp.com/attachments/1133688730641780776/1135500031517016140/yatebetavery.webm"
                    />
                    <CardBody>
                        <Grid container spacing={2} justifyContent="space-around">
                            <h3 className={classes.cardTitle}>Я тебе так верю</h3>
                            <Button  color="rose" onClick={very}>
                                DOWNLOAD
                            </Button>
                            <Button justIcon round color="rose" onClick={clipboard2.copy}>
                                <ContentCopyIcon className={classes.ContentCopyIcon} />
                            </Button>
                            <input ref={clipboard2.target} value={'https://cdn.discordapp.com/attachments/1133688730641780776/1135500031517016140/yatebetavery.webm'} readOnly type="hidden" />
                        </Grid>
                    </CardBody>
                </Card>
                <Card style={{width: "17rem"}}>
                    <Player
                        playsInline
                        poster="https://media.discordapp.net/attachments/1133688730641780776/1135503225458536479/image.png"
                        src="https://cdn.discordapp.com/attachments/1133688730641780776/1135503107443404800/hohol.mp4"
                        fluid={false}
                        height='60%'
                        width='100%'
                    />
                    <CardBody>
                        <Grid container spacing={2} justifyContent="space-around">
                            <h3 className={classes.cardTitle}>Грустная свинка</h3>
                            <Button  color="rose" onClick={hohol}>
                                DOWNLOAD
                            </Button>
                            <Button justIcon round color="rose" onClick={clipboard.copy}>
                                <ContentCopyIcon className={classes.ContentCopyIcon} />
                            </Button>
                            <input ref={clipboard.target} value={'https://cdn.discordapp.com/attachments/1133688730641780776/1135503107443404800/hohol.mp4'} readOnly type="hidden"  />


                        </Grid>
                    </CardBody>
                </Card>
            </Grid>

        </Container>


    );
}