import {
    container,
    title,
    grayColor
} from "styles/nextjs-material-kit.js";
import headerLinksStyle from "styles/headerLinksStyle.js";

const navbarsStyle = (theme) => ({
    section: {

        paddingTop: "0"
    },
    container,
    title: {
        ...title,
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    navbar: {
        marginBottom: "-20px",
        zIndex: "100",
        position: "relative",
        overflow: "hidden",
        "& header": {
            borderRadius: "0"
        }
    },
    navigation: {
        backgroundPosition: "center center",
        backgroundSize: "cover",
        marginTop: "0",

    },
    formControl: {

        margin: "10px 0 0 0 !important",
        paddingTop: "0"
    },
    inputRootCustomClasses: {
        margin: "0!important"
    },
    searchIcon: {
        width: "20px",
        height: "20px",
        color: "inherit"
    },
    ...headerLinksStyle(theme),
    img: {
        width: "40px",
        height: "40px",
        borderRadius: "50%"
    },
    imageDropdownButton: {

        padding: "0px",
        top: "4px",
        borderRadius: "50%",
        marginLeft: "5px"
    }
});

export default navbarsStyle;
