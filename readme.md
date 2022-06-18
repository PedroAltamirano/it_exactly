
# Pokedex implementation

In this repo you will find an implementation of pokemon api.
A minimal designed pokedex that shows a list of pokemons, and if clicked a detail for each one.


## Deployment

As prerequisites, you will need node + npm, lts version prefered(16.15.0)

Once you clone the repo with

```bash
  $ git clone https://github.com/PedroAltamirano/it_exactly.git
```

install the dependencies using

```bash
  $ yarn
```

after dependencieas are installed you can start the app mode using

```bash
  $ yarn dev
```

or build the app

```bash
  $ yarn build
```

To deploy in production, you can use serverles like vercel, heroku, etc... or use a ci/cd to deploy a container.
## Acknowledgements

This app is built in react and uses:

 - [Vite](https://vitejs.dev/) as bundler
 - [Zustand](https://www.npmjs.com/package/zustand) for storage manager
 - [Tailwind](https://tailwindcss.com/) as css framework
 - [React Query](https://react-query.tanstack.com/) as fetcher, due to saves a cached version and simplifies fetch
 - [React Router](https://reactrouter.com/) for route manage

## Architecture

- You will find the source code inside src folder.
- In page, you will find the actual pages that are rendered.
- In components, exists the abstraction of some general components.
- In interfaces folder, are the interfaces used in the project.
- In services, you can find the fetch methods.
- In store, you will global storage.
- In utils, are some util scripts.
## Authors

- [Pedro Altamirano](https://www.github.com/PedroAltamirano)

