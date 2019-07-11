## What is it?

It's a demo project using _Spotify_ API.

## Stack
- React 16.8 w/hooks
- typescript
- prettier + eslint
- css3 animations and no framework

Running on node 10.15

![screenshot](https://github.com/libasoles/spotify-exercise/blob/master/screenShots/Screenshot.png)

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

## Demo

![Demo](https://github.com/libasoles/spotify-exercise/blob/master/screenShots/FullscreeDemo.gif)