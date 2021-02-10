import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
const useStyles = makeStyles(styles);

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <title>Ria Generater</title>
        </div>
        <div id="inputs">
          <div className={classes.title}>
            <h3>入力するところ</h3>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                id="regular"
                inputProps={{
                  placeholder: "Regular"
                }}
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
          </GridContainer>
        </div>

        <footer className={styles.footer}>
          <a
            href="https://marbou090.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by marbou
          </a>
        </footer>
      </div>
    </div>
  )
}
