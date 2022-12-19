# Shape validation module

This repository contains an external component that can be injected into the [Community Solid Server](https://github.com/CommunitySolidServer/CommunitySolidServer/) (CSS).
It allows to constrain an [`ldp:Container`](https://www.w3.org/TR/ldp/) to only have resources that conform to a given shape. 

Instructions on how to constrain a given container can be found [here](documentation/constrained-containers.md).

## Running the server

Clone this repository, then install the packages
```sh
npm i
```
To run the server with your current folder as storage, use:
```sh
npm run start
```

Configurations for in-memory storage and file storage without setup are also provided.

## Feedback and questions

Do not hesitate to [report a bug](https://github.com/woutslabbinck/shape-validator-component/issues).

Further questions can also be asked to [Wout Slabbinck](mailto:wout.slabbinck@ugent.be) (developer and maintainer of this repository).

## TODOs

- [x] make https://github.com/woutslabbinck/community-server/tree/feat/shape-support work in this directory
  - [x] override link header attempt
- [x] make the tests work
  - [x] unit
  - [x] integration
- [x] add README.md
- [ ] move to CSS organization
- [ ] ask feedback Joachim (zal pas na Januari zijn)
- [ ] publish op npm: https://www.npmjs.com/org/community-solid-server
