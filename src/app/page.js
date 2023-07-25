"use client"
import Button from 'components/Button/Button';
import Header from "../../components/Header/Header";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import HeaderLinks from "../../components/Header/HeaderLinks";
import styles from "styles/headerStyle";
import Search from "@mui/icons-material/Search";
import CustomInput from "components/CustomInput/CustomInput";
import SectionNavbars from "Components-Section/SectionNavbar";
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles(styles);
export default function Home() {
    const classes = useStyles();
  return (
    <div>
        <SectionNavbars />
    </div>
  )
}
