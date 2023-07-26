"use client"
import React from "react";
import classNames from "classnames";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Header from "../../components/Header/Header";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import HeaderLinks from "../../components/Header/HeaderLinks";
import styles from "styles/headerStyle";
import Search from "@mui/icons-material/Search";
import CustomInput from "components/CustomInput/CustomInput";
import SectionNavbars from "Components-Section/SectionNavbar";
import CardList from "components/CardList/CardList"
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/Button/Button.js";

import imagesStyles from "styles/imagesStyles.js";
import { cardTitle } from "styles/nextjs-material-kit.js";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(styles);
export default function Home() {
    const classes = useStyles();
  return (
    <div>
        <SectionNavbars />
        <CardList/>


    </div>
  )
}
