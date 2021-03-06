import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { Button, DialogContainer, NavigationDrawer, SVGIcon, FontIcon, Grid, Cell } from 'react-md';
import Paper from '../components/Paper'
import * as Icons from 'react-icons/lib/md';


// import menu from 'icons/menu.svg';
// import arrowBack from 'icons/arrow_back.svg';
// import inboxListItems from '../constants/inboxListItems';
import loremIpsum from 'lorem-ipsum';

export default class Simple extends PureComponent {
  constructor() {
    super();
    this.navitems = [{
      key: 'inbox',
      primaryText: 'Inbox',
      leftIcon: <FontIcon>inbox</FontIcon>,
      active: true,
    }, {
      key: 'starred',
      primaryText: 'Starred',
      leftIcon: <FontIcon>star</FontIcon>,
    }, {
      key: 'send-mail',
      primaryText: 'Send mail',
      leftIcon: <FontIcon>send</FontIcon>,
    }, {
      key: 'drafts',
      primaryText: 'Drafts',
      leftIcon: <FontIcon>drafts</FontIcon>,
    }, { key: 'divider', divider: true }, {
      key: 'all-mail',
      primaryText: 'All mail',
      leftIcon: <FontIcon>mail</FontIcon>,
    }, {
      key: 'trash',
      primaryText: 'Trash',
      leftIcon: <FontIcon>delete</FontIcon>,
    }, {
      key: 'spam',
      primaryText: 'Spam',
      leftIcon: <FontIcon>warning</FontIcon>,
    }];
    // Update the items so they have an onClick handler to change the current page
    this.navItems = this.navitems.map((item) => {
      if (item.divider) {
        return item;
      }

      return {
        ...item,
        onClick: () => this.setPage(item.key, item.primaryText)
      };
    });

    this.state = {
      renderNode: document.getElementById('navigation-drawer-demo'),
      visible: true,
      key: this.navitems[0].key,
      page: this.navitems[0].primaryText,
    };
  }

  setPage = (key, page) => {
    this.navItems = this.navItems.map((item) => {
      if (item.divider) {
        return item;
      }

      return { ...item, active: item.key === key };
    });

    this.setState({ key, page });
  };

  show = () => {
    this.setState({ visible: true });
  };

  hide = () => {
    this.setState({ visible: false, renderNode: null });
  };

  handleShow = () => {
    this.setState({ renderNode: document.getElementById('navigation-drawer-demo') });
  };

  render() {
    const { visible, page, renderNode } = this.state;
    return (
      <div>
        {/* <Button raised onClick={this.show}>Open the Demo</Button> */}
        <DialogContainer
          id="navigation-drawer-demo"
          aria-label="Navigation Drawer Demo"
          visible={visible}
          fullPage
          focusOnMount={true}
          onShow={this.handleShow}
          onHide={this.hide}
        >
          <NavigationDrawer
            renderNode={renderNode}
            navItems={this.navItems}
            mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
            tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
            desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
            toolbarTitle="Hello, World!"
            contentId="main-demo-content"
            temporaryIcon={<FontIcon>dehaze</FontIcon>}
            persistentIcon={<FontIcon>close</FontIcon>}
            contentClassName="md-grid"
          >
            <h2 className="md-cell md-cell--12">Currently on page: {page}</h2>
            <Grid className="grid-example">
              {
                Array.from(Array(3)).map((_, i) => 
                  <Cell key={i} size={4}>
                    <Paper body={page} depth={0}></Paper>
                  </Cell>
                )
              }
            </Grid>
          </NavigationDrawer>
        </DialogContainer>
      </div>
    );
  }
}
