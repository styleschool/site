import * as React from 'react';

import { withStyles, Theme, StyleRulesCallback } from '@material-ui/core/styles';
import * as classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";

const styles: StyleRulesCallback = (theme: Theme) => ({
  root: {
    width: "50%"
  },

  details: {
    display: "flex"
  },

  direction: {
    display: "flex",
    flexDirection: "column"
  },

  media: {
    width: "100%",
    maxWidth: 200,
    marginLeft: 15
  },

  content: {
    flex: "1 0 auto",
    paddingBottom: 0,
    paddingTop: 0
  }, 
  
  divider: {
    left: 24,
    position: 'relative',
    width: '90%',
  }
});

class Component extends React.Component<any, any> {
  state = {
    expanded: null
  };

  handleChange = (panel:any) => (event:any, expanded:any) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <Card>
          <ExpansionPanel
            expanded={expanded === "panel"}
            onChange={this.handleChange("panel")}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subheading">Наши контакты</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div className={classes.details}>
                <CardMedia
                  className={classes.media}
                  image="/pages/about/panorama.jpg"
                  title="Map"
                />
                <div className={classes.direction}>
                  <CardContent
                    className={classes.content}
                    style={{
                      paddingBottom: 0
                    }}
                  >
                    <List>
                      <ListItem>
                        <ListItemText
                          primary="Адрес:"
                          secondary="129085, Москва, ул. Проспект Мира, д.101, стр. 1, 600 офис."
                        />
                      </ListItem>
                      <Divider component="li" className={classes.divider} />
                      <ListItem>
                        <ListItemText
                          primary="Телефон:"
                          secondary="+7 (495) 221-89-35"
                        />
                      </ListItem>
                      <Divider component="li" className={classes.divider} />
                      <ListItem>
                        <ListItemText
                          primary="E-mail:"
                          secondary={
                            <a href="mailto:info@styleschool.ru">
                              info@styleschool.ru
                            </a>
                          }
                        />
                      </ListItem>
                      <Divider component="li" className={classes.divider} />
                      <ListItem>
                        <ListItemText
                          primary="Время работы:"
                          secondary="Пн - Пт с 10:00 до 19:00 (мск)"
                        />
                      </ListItem>
                    </List>
                  </CardContent>
                </div>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Component);