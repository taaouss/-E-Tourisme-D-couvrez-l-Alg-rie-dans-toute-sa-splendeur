import { Component } from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';
 import "./Popup.css"
 const style = {
    width: '240px',
    height: '600px',

  }   
 class MapContainer extends Component {
    
  render() {
    return (
      <Map
      google={this.props.google} 
      style={style}
      zoom={14}
      initialCenter ={{lat: 28.70406 ,lng : 77.102493 }}  /> 
      );
     }
    }
 export default GoogleApiWrapper({
    apiKey:"AIzaSyAgq6LmG2tWTgMmCIFKitKy0_aZXe67lLk"
 })(MapContainer)
 