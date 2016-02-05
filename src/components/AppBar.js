import React  from 'react'

import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button'
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close'
import IconMenu from 'material-ui/lib/menus/icon-menu'
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert'
import MenuItem from 'material-ui/lib/menus/menu-item'
import FontIcon from 'material-ui/lib/font-icon'
import CircularProgress from 'material-ui/lib/circular-progress'
import Snackbar from 'material-ui/lib/snackbar'

export default ({loading}) => (
  <AppBar
    className="appbar"
    title="Blueberry Interview"
    iconElementLeft={
      <IconButton>
        <FontIcon className="material-icons">explore</FontIcon>
      </IconButton> }
    iconElementRight={
      <div>
        {loading > 0 && <CircularProgress size={0.5} color="white" />}
      </div>} />
);