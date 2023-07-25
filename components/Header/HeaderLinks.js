/*eslint-disable*/
'use client'
import React from "react";
import Link from "next/link";
import {makeStyles} from "@mui/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

// @material-ui/icons
import { Apps, CloudDownload } from "@mui/icons-material";


// core components
import CustomDropdown from "components/DropDown/CustomDropdown";
import Button from "components/Button/Button.js";

import styles from "styles/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
    const classes = useStyles();
    return (

            <List className={classes.list}>
                <ListItem className={classes.listItem}>
                    <CustomDropdown
                        noLiPadding
                        navDropdown
                        buttonText="Components"
                        buttonProps={{
                            className: classes.navLink,
                            color: "transparent"
                        }}
                        buttonIcon={Apps}
                        dropdownList={[
                            <Link href="/components">
                                <a className={classes.dropdownLink}>All components</a>
                            </Link>,
                            <a
                                href="https://creativetimofficial.github.io/nextjs-material-kit/#/documentation?ref=njsmk-navbar"
                                target="_blank"
                                className={classes.dropdownLink}
                            >
                                Documentation
                            </a>
                        ]}
                    />
                </ListItem>
                <ListItem className={classes.listItem}>
                    <Button
                        href="https://www.creative-tim.com/product/nextjs-material-kit-pro?ref=njsmk-navbar"
                        color="transparent"
                        target="_blank"
                        className={classes.navLink}
                    >
                        <Icon className={classes.icons}>unarchive</Icon> Upgrade to PRO
                    </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <Button
                        href="https://www.creative-tim.com/product/nextjs-material-kit?ref=njsmk-navbar"
                        color="transparent"
                        target="_blank"
                        className={classes.navLink}
                    >
                        <CloudDownload className={classes.icons} /> Download
                    </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                    {/*<Tooltip title="Delete">
              <IconButton aria-label="Delete">
                <DeleteIcon />
              </IconButton>
            </Tooltip>*/}
                    <Tooltip
                        id="instagram-twitter"
                        title="Follow us on twitter"
                        placement={"top"}
                        classes={{ tooltip: classes.tooltip }}
                    >
                        <Button
                            href="https://twitter.com/CreativeTim?ref=creativetim"
                            target="_blank"
                            color="transparent"
                            className={classes.navLink}
                        >
                            <i className={classes.socialIcons + " fab fa-twitter"} />
                        </Button>
                    </Tooltip>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <Tooltip
                        id="instagram-facebook"
                        title="Follow us on facebook"
                        placement={"top"}
                        classes={{ tooltip: classes.tooltip }}
                    >
                        <Button
                            color="transparent"
                            href="https://www.facebook.com/CreativeTim?ref=creativetim"
                            target="_blank"
                            className={classes.navLink}
                        >
                            <i className={classes.socialIcons + " fab fa-facebook"} />
                        </Button>
                    </Tooltip>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <Tooltip
                        id="instagram-tooltip"
                        title="Follow us on instagram"
                        placement={"top"}
                        classes={{ tooltip: classes.tooltip }}
                    >
                        <Button
                            color="transparent"
                            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                            target="_blank"
                            className={classes.navLink}
                        >
                            <i className={classes.socialIcons + " fab fa-instagram"} />
                        </Button>
                    </Tooltip>
                </ListItem>
            </List>

    );
}
