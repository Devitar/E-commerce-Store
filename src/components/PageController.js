import React, { Component } from 'react';
import { Button, Icon, Menu, Segment, Sidebar, Divider } from 'semantic-ui-react';
import "./scss/PageController.css";

//components
import ProductList from './ProductList';
import { Route, Switch, Redirect, Link } from "react-router-dom";
//import DropDownMenu from './DropDownMenu';
import SearchBar from './SearchBar';
import TopBarInfo from './TopBarInfo';

//pages
import ProductPage from './routes/ProductPage';
import ErrorPage from './routes/ErrorPage';
import Cart from './routes/Cart';
import Category from './routes/Category';

const categoryConversion = {
  "headphones": "Headphones",
  "tv": "Televisions",
  "phone": "Phones",
  "action-camera": "Cameras",
  "watch": "Watches",
  "refrigerator": "Refrigerators"
}

const categoryOptions = [];

Object.keys(categoryConversion).forEach((v,i) => {
  const newName = categoryConversion[v];
  categoryOptions.push(
    {
      text: newName,
      original: v
    }
  )
})


class PageController extends Component {
  state = { visible: false }

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state;

    const allCategoryComponents = categoryOptions.map((category, key) => {
      return(
        <Link to={`/E-commerce-Store/category/${category.original}`} key={key} >
          <Menu.Item>
            {category.text}
          </Menu.Item>
        </Link>
      )
    })
    return (
      <div className="barMain">
        <div className="topBarMain">
          <Button.Group>
              <Button disabled={visible} onClick={this.handleShowClick}>
                  <Icon name="bars" size="large"/>
              </Button>
          </Button.Group>
          <div className="topBarSecondary">
            <div className="companyTop">
                Company Name
            </div>
            <div className="topBarRight">
              <SearchBar />
              <TopBarInfo />
            </div>
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
            className="sideBarObj"
          >
              <Link to="/E-commerce-Store" >
                <Menu.Item>
                  <Icon name='home' />
                  Home
                </Menu.Item>
              </Link>
              <Divider />
              {allCategoryComponents}
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
                <Switch>
                    <Route path="/E-commerce-Store" exact component={ProductList} />
                    <Route path="/E-commerce-Store/product/:productId" component={ProductPage} />
                    <Route path="/E-commerce-Store/404" component={ErrorPage} />
                    <Route path="/E-commerce-Store/cart" component={Cart} />
                    <Route path="/E-commerce-Store/category/:categoryName" component={Category} />
                    <Redirect to="/E-commerce-Store" />
                </Switch>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default PageController;