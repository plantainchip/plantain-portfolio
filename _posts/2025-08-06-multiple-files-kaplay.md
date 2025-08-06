---
layout: blog_design
title:  How I put multiple scenes into their own files in kaplay.js
categories:
- games
---

If you're using kaplay.js like I am, follow the [kaplay installation guide here](https://kaplayjs.com/docs/guides/install/). After you run ``` npx create-kaplay myGame && cd myGame ``` , continue reading

So first of all you can go ahead and delete everything in main.js and replace it with this:

```js
// main.js is super important. do not get rid of this file
import kaplay from "kaplay";
import "kaplay/global"; 

kaplay({
    width: 256,
    height: 224,
    background: [27,27,27],
    scale:2
})

```

In the src folder, make a new js file like scene0.js. Paste the following in there


```js

import "kaplay/global";

export default function(){
    // you can start making your scene in this function.
    debug.log("ohhi world!");
    
}
```

Now back in main.js, you're gonna import the scene and then call 2 functions, [scene](https://kaplayjs.com/docs/api/ctx/scene/) and [go](https://kaplayjs.com/docs/api/ctx/go/), at the bottom. Like this:


```js
import kaplay from "kaplay";
import "kaplay/global";

import scene0 from "./scene0"; // hi

kaplay({
    width: 256,
    height: 224,
    background: [27,27,27],
    scale:2
})

scene("scene0",scene0) // hi
go("scene0") // hi

```

npm run dev and see the log

now if you want to go to a different scene from scene0. You make a new file in src like "scene1.js". Put your stuff in there like this:

```js
import "kaplay/global";

export default function(){
    // make your level 2
    debug.log("ohhi again!");
}
```

Go back to scene0.js and import scene1. Follow the previous steps. Like this

```js
import "kaplay/global";
import scene1 from "./scene1"; // see a pattern?

export default function(){

    debug.log("ohhi world!");

    // this can be anything else like onKeyPress
    wait(3, () => {
        scene("scene1",scene1)
        go("scene1")
    })
    
}
```

Rinse and repeat. Or if you want, import all the scenes in main and have the player go to whichever scene they would like to go to. You can do whatever you want.
<br>
Thanks for reading
<br>
<br>
<br>

