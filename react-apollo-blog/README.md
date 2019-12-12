# GraphCMS starter Same Maps with React & Apollo Client 

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

For an overview of how things work in `React` please refer to the [React docs](https://reactjs.org/docs/hello-world.html)

## How to start

Use the SaaS

* GraphCMS API
https://graphcms.com

* MapBox API
https://www.mapbox.com/

* Here API
https://developer.here.com/

* Google Maps API
https://cloud.google.com/maps-platform/

```
git clone https://github.com/Yoosuke/grahcms_maps.git && cd grahcms_maps/react-apollo-blog 
```
## Rename dotenv file

```
.env.sample -> .env
```
## Writing API

```
REACT_APP_GRAPHCMS_API=YOUR API
REACT_APP_MAPBOX_TOKEN=YOUR API
REACT_APP_HERE_ID=YOUR API
REACT_APP_HERE_CODE=YOUR API
REACT_APP_GOOGLE_MAP_KEY=YOUR API
```

```
 yarn && yarn start
```

## React Map Modules Documentation

### Google Map React
https://github.com/google-map-react/google-map-react

### React Map GL (MapBox)
https://uber.github.io/react-map-gl/

### React Leaflet
https://react-leaflet.js.org/

### React Here
https://ordazgustavo.github.io/here-maps-react

## GraphCMS Models && Schema Settings

### Enumerations
DeveloperMap
* Mapbox 
* Here 
* Google 
* Leaflet

### Models
* Author
* Post

### Schema
#### Author
* name (single line text)
* bibliography (multi line text)
* avatar (asset picker)

#### Post
* title (single line text)
* slug (single line text) require uniqe
* dataAndTime (Data And Time)
* coverImage (asset picker)
* content (markdown)
* location (location)
* developer (dropdown)(DeveloperMap)


