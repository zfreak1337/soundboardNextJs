import React from "react";
// @material-ui/core components
import {ThemeProvider, makeStyles} from "@mui/styles";
import {createTheme, responsiveFontSizes} from '@mui/material/styles';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

// @material-ui/icons
import Search from "@mui/icons-material/Search";
import Header from "components/Header/Header.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/Button/Button.js";
import styles from "styles/navbarsStyle.js";
let theme = createTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles(styles);



export default function SectionNavbars() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <div id="navbar" className={classes.navbar}>
                <div
                    className={classes.navigation}
                    style={{ backgroundImage: "url('/img/bg.jpg')" }}
                >
                    <Header
                        brand="PrikoliSoundBoard"
                        color="rose"
                        leftLinks={
                            <List className={classes.list}>
                                <ListItem className={classes.listItem}>
                                    <Button
                                        href="https://vk.com/prikoli_na_kazhdiy_denb"
                                        className={classes.navLink}
                                        onClick={() => "location.href='https://vk.com/prikoli_na_kazhdiy_denb"}
                                        color="transparent"


                                    > VK

                                    </Button>
                                </ListItem>
                            </List>
                        }
                        rightLinks={
                            <div>
                                <CustomInput
                                    white
                                    inputRootCustomClasses={classes.inputRootCustomClasses}
                                    formControlProps={{
                                        className: classes.formControl
                                    }}
                                    inputProps={{
                                        placeholder: "Search",
                                        inputProps: {
                                            "aria-label": "Search",
                                            className: classes.searchInput
                                        }
                                    }}
                                />
                                <Button justIcon round color="white">
                                    <Search className={classes.searchIcon} />
                                </Button>
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    );
}