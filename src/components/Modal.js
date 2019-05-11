import React, { Component } from 'react';
import './scss/Modal.css';

//components
import { Link } from 'react-router-dom';
import { Button, Header, Icon, Modal as SemanticModal } from 'semantic-ui-react';


class Modal extends Component {
  state = { 
      modalOpen: false,
      onNoPress: null
    }

  componentWillReceiveProps(props) {
    this.setState({ modalOpen: props.open, onNoPress: props.onNoPress });
  }

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => {
    this.setState({ modalOpen: false })
  };

  render() {
    return (
      <SemanticModal
        // trigger={<Button onClick={this.handleOpen}>Show Modal</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header icon='shopping cart' content='Cart' />
        <SemanticModal.Content>
          <span className="mainModalText">Item added to cart! Would you like to go there now?</span>
        </SemanticModal.Content>
        <SemanticModal.Actions>
          <Link to='/E-commerce-Store/cart'>
            <Button color='green' onClick={this.handleClose} inverted>
              <Icon name='checkmark' /> Yes
            </Button>
          </Link>
          <Button color='red' onClick={this.props.onNoPress} inverted>
            <Icon name='x' /> No
          </Button>
        </SemanticModal.Actions>
      </SemanticModal>
    )
  }
}

export default Modal;