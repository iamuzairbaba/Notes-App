import {
    AppBar,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { AddCircleOutline, SubjectOutlined } from "@material-ui/icons";
import React from "react";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { format } from "date-fns";

const drawerWidth = 240;

const useStyles = makeStyles((theme)=>{
    return {
        page: {
            background: "#f9f9f9",
            width: "100%",
          },
          drawer: {
            width: drawerWidth,
          },
          drawerPaper: {
            width: drawerWidth,
          },
          root: {
            display: "flex",
          },
          active: {
            background: "#f4f4f4",
          },
          title: {
            padding: theme.spacing(2)
          },
          appbar: {
              width: `calc(100% - ${drawerWidth}px)`
          },
          toolbar: theme.mixins.toolbar,
          date: {
            flexGrow: '1'
          },
          avatar: {
            marginLeft: theme.spacing(2)
          }
    }
  
});

function Layout({ children }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutline color="secondary" />,
      path: "/create",
    }
  ];
  return (
    <div className={classes.root}>
        <AppBar
          className={classes.appbar}
          elevation={1}
        >
            <Toolbar>
                <Typography className={classes.date}>
                    Welcome to Uzair's Website     {format(new Date(), 'do MMMM Y')}'s Tasks
                </Typography>
                <Typography>
                    Personal
                </Typography>
                <Avatar src="/avatar.png" className={classes.avatar} />
            </Toolbar>
        </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>Uzair's Notepad</Typography>
        </div>
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              className={
                location.pathname === item.path ? classes.active : null
              }
              onClick={() => history.push(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.text}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
      
      <div className={classes.page}>
      <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
}

export default Layout;
