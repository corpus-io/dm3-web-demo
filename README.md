# dm3-web
## Getting Started

### Build

```
git clone -b main https://github.com/corpus-ventures/dm3.git
git clone https://github.com/corpus-ventures/dm3-web-demo.git
cd dm3 && yarn && yarn build
cd packages/react && yarn link
cd ../../../dm3-web-demo/ && yarn link “dm3-react”
```


### Usage

```
yarn start
```

