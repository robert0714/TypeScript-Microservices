# Gearing up for the Journey

page 70-72

## Node.js clusters and multithreading

sample: \node-clusters

```bash

$ yarn add body-parser cookie-parser debug express typescript

$ yarn add @types/debug  @types/node  @types/body-parser  @types/express  

$ pm2 start dist/bin/www.js -i 4

$ pm2 reload dist/bin/www.js 

$ pm2 scale dist/bin/www.js 10

$ pm2 kill

$ pm2 -h

```

## Async/await

page 72

### Retrying failed requestss

page 73

```bash

[handing-asynchronous-nature]$ node ./dist/retry_failed_req.js

```

### Multiple requests in parallel

page 74


```bash
[handing-asynchronous-nature]$ node ./dist/multiple_parallel.js
first response is  { userId: 1,
  id: 1,
  title:
   'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body:
   'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto' }
 second response is  { userId: 1,
  id: 2,
  title: 'qui est esse',
  body:
   'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla' }
third response is  { userId: 1,
  id: 3,
  title:
   'ea molestias quasi exercitationem repellat qui ipsa sit aut',
  body:
   'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut' }

```


## Streams

page 75

```bash

[node-streams]$ cd dist/
[dist]$  node  stream_test.js
this method is called at the end of all transformations
Transformation:- { name: 'Parth', id: 1 }

```