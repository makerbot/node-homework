[![Build status](https://travis-ci.org/makerbot/node-homework.svg?branch=master)](https://travis-ci.org/makerbot/node-homework)
[![Dependencies](https://david-dm.org/makerbot/node-homework.svg)](https://david-dm.org/makerbot/node-homework)

### Everything you need to run this

```sh
# Install Homebrew
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# Install git & node
brew install git node

# clone this repo and enter the directory
cd ~/
git clone https://github.com/makerbot/node-homework.git
cd ~/node-homework

# Install node dependencies
npm install

# Run the tests
npm test
```

To run the server by itself, simply type `npm start`, then you can `curl http://localhost:3000/` to hit an endpoint.

### Stuff we used
* [Express](http://expressjs.com/) as the server framework
* [Mocha](http://mochajs.org/) as the test runner
* [Chai](http://chaijs.com/) as the test assertion library

hit meee
thrice
