import React from 'react';
import {  View } from 'react-native';
import {styles} from '../Styles/HeaderComponent.css';
import {Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text} from 'native-base';
import{Translates} from '../../ResourceFiles/I18n'

export  class HeaderComp extends React.Component {

    render() {
      return (
        <Container >
        <Header noShadow style={styles.Header}>
        <Left>
          <Button transparent>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title >{Translates("Title")}</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Right>
      </Header>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
        </Container>
      );
    }
  }

