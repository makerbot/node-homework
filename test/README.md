### Everything you need to run this

```sh
# Install Homebrew
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# Install git & node
brew install git node

# Make new directory and clone this repo
mkdir ~/node-homework
cd ~/node-homework
git clone https://github.com/makerbot/node-homework.git

# Install node dependencies
npm install

# Run the tests
npm test
```

To run the server by itself, simply type `npm start`
