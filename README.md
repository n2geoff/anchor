# Anchor

> fasten your apps!

Tiny (1kb) utility library that creates a unique global application registry.

Useful for composing single-page-apps or developing a Micro-Frontend architecture


## API

    Anchor(register = {}, [mix = []])

- `register` {Object} - initial object registry (optional)
- `mixin` {Array} - extend anchor directly (optional)

## Quick Start

`Anchor` is the superfood for your application entry file

```js
// app.js

import anchor from 'anchor.js';

let app = new Anchor();

app.register('version', '1.0.0');
app.register('log', console);

export app;

```

Now  `app` can do

```js
// another.js

import app from 'app.js';

app.log.info('using app version', app.version); // using app version 1.0.0
```

You can also initialize `Anchor` with an object to front-load the registry instead of using `app.register()`

```js
let app = new Anchor({
	'version': '1.0.0',
	'log': console,
	...
});
```



>  TIP: Connect multiple spas together, on each spa use `app.register` to extend that spas functionality on its bootstrap file



The `Anchor mixin` option acts more like a *merge*, rather than a `registry` and is useful to `mixin` objects directly, for example:

```js
// app.js

import anchor from 'anchor.js';
import mitt from 'mitt.js'; // event library

let app = new Anchor({}, [mitt()]); // adds on, off, emit, all to app

```

  `app` now has `on`, `off`, `emit`, and `all` event functions bolted on (unsafe), so you can do

```js
app.on('my-event', dostuff);
```



Of course we are only talking about not using a namespace vs not using a namespace.  You can achieve the same thing with `app.register('events', mitt())` and it is safer, but a *tiny* bit more typing :)

```js
app.events.emit('my-event', " I'm your huckel berry");
```



> WARNING: `mixin` has no safe guards and will overwrite existing duplicate functionality



## Tests

    npm test

> NOTE: requires `deno` to execute module-based client-side test runner

and lint via

    npm run lint

## Support

Please open [an issue](https://github.com/n2geoff/anchor/issues/new) for support.

## Contributing

Anyone is welcome to contribute, however, if you decide to get involved, please take a moment to review the [guidelines](CONTRIBUTING.md), they're minimalistic;)

## License

[MIT](LICENSE) 2021 Geoff Doty