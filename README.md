# Get Started 🚀

```
   ____      _            _       _
  / ___|__ _| | ___ _   _| | __ _| |_ ___  _ __
 | |   / _` | |/ __| | | | |/ _` | __/ _ \| '__|
 | |__| (_| | | (__| |_| | | (_| | || (_) | |
  \____\__,_|_|\___|\__,_|_|\__,_|\__\___/|_|

```

## Deploy In:

https://calculator-seven-puce.vercel.app/

Download the project with

### `git clone https://github.com/R0N4LDC1FU3NT3S/calculator.git`

run the following command to launch locally in development mode

### `npm Install`

and

### `npm start`

Open the browser and put the following url [http://localhost:3000](http://localhost:3000)

## Run Docker 🐳

If you have compatibility problems or the application does not run and you have docker installed, you can run the build.sh file with the following command

### `sh build.sh`

Ó

### `./build.sh`

this file will be in charge of creating the image and mounting it for you

## Tecnologies 💻

-   React
-   Webpack

## Best practices 🤖

-   Jest
-   Eslint
-   Prettier
-   Husky

## Views Web

![image](https://user-images.githubusercontent.com/59535805/138643143-c83cb5ed-41fc-4a85-97a4-b85c2e400ac0.png)

## Project Structure

```
├── build.sh
├── Dockerfile
├── jest.config.js
├── LICENSE
├── nginx
|  └── nginx.conf
├── package-lock.json
├── package.json
├── public
|  ├── capture1.png
|  ├── capture2.png
|  ├── capture3.png
|  ├── capture4.png
|  ├── capture5.png
|  └── index.html
├── README.md
├── src
|  ├── Components
|  |  └── App
|  |     ├── App.css
|  |     ├── App.js
|  |     ├── App.test.js
|  |     ├── Calculator
|  |     |  ├── Calculator.css
|  |     |  ├── Calculator.js
|  |     |  ├── Calculator.test.js
|  |     |  ├── Display
|  |     |  |  ├── Display.css
|  |     |  |  ├── Display.js
|  |     |  |  ├── Display.test.js
|  |     |  |  └── __snapshots__
|  |     |  |     └── Display.test.js.snap
|  |     |  ├── Keypad
|  |     |  |  ├── Key
|  |     |  |  |  ├── Key.css
|  |     |  |  |  ├── Key.js
|  |     |  |  |  ├── Key.test.js
|  |     |  |  |  └── __snapshots__
|  |     |  |  |     └── Key.test.js.snap
|  |     |  |  ├── Keypad.css
|  |     |  |  ├── Keypad.js
|  |     |  |  ├── Keypad.test.js
|  |     |  |  └── __snapshots__
|  |     |  |     └── Keypad.test.js.snap
|  |     |  └── __snapshots__
|  |     |     └── Calculator.test.js.snap
|  |     └── __snapshots__
|  |        └── App.test.js.snap
|  ├── index.css
|  ├── index.js
|  └── setupTests.js
└── webpack
   ├── common.js
   ├── dev.js
   └── prod.js

```
