import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

const LogInModal = () => (
  <Modal trigger={<Button>Show Modal</Button>}>
    <Modal.Header>Log In</Modal.Header>
    <Modal.Content image>
    <Form>
        <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
            <Checkbox label='I acknowledge this is not a real login page.' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
    </Form>
    </Modal.Content>
  </Modal>
)

export default LogInModal;