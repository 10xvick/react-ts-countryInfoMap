import * as React from 'react'
import { Circle, CircleMarker, Map, Marker, Polygon, Popup, Rectangle, TileLayer, Tooltip } from 'react-leaflet'
// import './leaflet.css'

export default class Hello extends React.Component {
  state = {
    clicked: 0,
  }

  onClickCircle = () => {
    this.setState({ clicked: this.state.clicked + 1 })
  }

  render() {
    const center = [51.505, -0.09]

    const multiPolygon = [
      [[51.51, -0.12], [51.51, -0.13], [51.53, -0.13]],
      [[51.51, -0.05], [51.51, -0.07], [51.53, -0.07]],
    ]

    const rectangle = [[51.49, -0.08], [51.5, -0.06]]

    const clickedText =
      this.state.clicked === 0
        ? 'Click this Circle to change the Tooltip text'
        : `Circle click: ${this.state.clicked}`

    return (
      <Map center={center} zoom={13}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Map>
    )
  }
}
