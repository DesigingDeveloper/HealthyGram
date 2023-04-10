import React from 'react'; 
import { Container, Header, Icon, Segment } from 'semantic-ui-react'; 
import Head from 'next/head'; 
import MenuBar from '/MenuBar'; 

const Layout = props => { 
    return ( 
        <> 
            <Head> 
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.5.0/semantic.min.css"></link> 
            </Head> 
            <Segment 
            inverted 
            textAlign='center' 
            style={{ minHeight: 340}} 
            > 
            <MenuBar/> 
                <Icon size='huge' name='hospital'/> 
                <Header as='h2' color='blue' style={{ fontSize:'3em', fontWeight:'normal'}} content='Blockchain Medical Records'/> 
                <Header as='h3' style={{ fontSize:'1.5em', fontWeight:'normal'}} content='Ensure that your records are safe and sound'/> 
            </Segment> 
             
            <Container> 
                {props.children} 
            </Container> 
        </> 
    ); 
};

export default Layout;
