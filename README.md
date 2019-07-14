## What is it?

It's a demo project using _Spotify_ API.

## Stack
- React 16.8 w/hooks
- typescript
- prettier + eslint
- modular css (and flex, no framework)

### Features
- Masonry layout
- Debounced search
- Real audio (html5)

Running on node 10.15

![screenshot](https://github.com/libasoles/spotify-exercise/blob/master/screenShots/Screenshot.png)

## Credentials

You will need a Bearer accessToken to run the demo. Set it in config/index.ts

This is because the demo doesn't include an authentication process.

And of course, in real life this token would be provided by a server side layer, but there's no backend in this demo. And I'm actually calling the API through a public proxy.

## How to run
Install packages and run as usual: 

```
yarn install
yarn start
 ```
 
However, you could have issues with node or yarn version. So, alternatively, run with Docker.

```
docker-compose build
docker-compose up -d
docker-compose exec spotifive yarn start
```

Finally
`docker-compose down`

## Demos

![Demo](https://github.com/libasoles/spotify-exercise/blob/master/screenShots/FullscreeDemo.gif)

![Demo](https://github.com/libasoles/spotify-exercise/blob/master/screenShots/CellPhoneDemo.gif)
