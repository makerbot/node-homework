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

To run the server by itself, simply type `npm start`

### Stuff we used
* [Express](http://expressjs.com/) as the server framework
* [Mocha](http://mochajs.org/) as the test runner
* [Chai](http://chaijs.com/) as the test assertion library
