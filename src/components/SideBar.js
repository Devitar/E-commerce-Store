import React, { Component } from 'react';
import { Button, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react';
import "./scss/SideBar.css";

//components
import ProductList from './ProductList';
import { Route, Switch, Redirect, Link } from "react-router-dom";
import ProductPage from './routes/ProductPage';
import DropDownMenu from './DropDownMenu';

class SideBar extends Component {
  state = { visible: false }

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state;

    return (
      <div className="sideBarMain">
        <div className="topBarMain">
        <Button.Group>
            <Button disabled={visible} onClick={this.handleShowClick}>
                <Icon name="bars" />
            </Button>
        </Button.Group>
        <div className="companyTop">
            Via Maris Co.
        </div>
        </div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
              <Link to="/" >
                <Menu.Item as='a'>
                  <Icon name='home' />
                  Home
                </Menu.Item>
              </Link>
            <Menu.Item>
                <DropDownMenu />
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
                <Switch>
                    <Route path="/" exact component={ProductList} />
                    <Route path="/product/:productId" component={ProductPage} />
                    <Redirect to="/" />
                </Switch>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default SideBar