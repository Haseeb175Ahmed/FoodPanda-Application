import React,{Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class GMap extends Component {

  constructor() {
    super();

    this.state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
      };
 }

 onMarkerClick = (props, marker, e) =>
 this.setState({
   selectedPlace: props,
   activeMarker: marker,
   showingInfoWindow: true
 });

 onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
  render() {

    // const{data} = this.state;
    const style = {
        width: '100%',
        height: '50%'
      }
     

    return (
      

      <div >


        <Map google={this.props.google} 
        
        style={style}
          initialCenter={{
            lat: 24.888908,
            lng: 67.063234
          }}
        zoom={14}
        onClick={this.onMapClicked}
        >
        <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

 <InfoWindow onClose={this.onInfoWindowClose}>
 marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
 </InfoWindow>
</Map>

        </div>




    );
  }
}



export default GoogleApiWrapper({
    apiKey: ("AIzaSyDa5DaDWN6VTeXDQVDEr0lH18qBOZYAWuM")
  })(GMap)






