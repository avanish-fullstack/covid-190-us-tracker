import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import List from '@material-ui/core/List';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import NaturePeopleIcon from '@material-ui/icons/NaturePeople';

const SideBar = (props) => {

  function handleClick(e) {
   props.select(e);
  }

  return (
    <List>
      <ListItem button onClick={() => handleClick('Recovery')}>
        <ListItemIcon>
          <SupervisedUserCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Recovery and Deaths" />
      </ListItem>
      <ListItem button onClick={() => handleClick('hospitalization')}>
        <ListItemIcon>
          <LocalHospitalIcon />
        </ListItemIcon>
        <ListItemText primary="Hospitalization" />
      </ListItem>
      <ListItem button onClick={() => handleClick('Serious')}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Seriously ill" />
      </ListItem>
      <ListItem button onClick={() => handleClick('Critical')}>
        <ListItemIcon>
          <NaturePeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Critical" />
      </ListItem>
      <ListItem button onClick={() => handleClick("Tests")}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Tests Performed" />
      </ListItem>
    </List>);
}

export default SideBar;