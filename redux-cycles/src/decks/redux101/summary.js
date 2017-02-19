import React from 'react';

import {
  Slide,
  Heading,
  Appear,
  List,
  ListItem
} from 'spectacle';

const summary = () => (
  <Slide >
    <Heading margin="20px 0" size={4}  textColor="secondary" textAlign="left">
      Summary
    </Heading>
     <List ordered>
      <Appear><ListItem>Predictable state management</ListItem></Appear>
      <Appear><ListItem>View-provider agnostic</ListItem></Appear>
      <Appear><ListItem>Actions, Reducers</ListItem></Appear>
      <Appear><ListItem>Async with middlewares</ListItem></Appear>
    </List>
  </Slide>
);

export default summary;