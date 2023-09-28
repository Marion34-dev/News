# Welcome to the News Challenge!

This JavaScript program contains a single page application built in React that sends requests to the Guardian API to get the headline, thumbnail, original URL as well as article summary data and display them. Vitest is used for testing and V8 for coverage.


-------
## This app has been deployed at the following address:
https://main--newschallenge.netlify.app
_______

### Classic N-tier architecture:

Persistence layer: <br>
° Article Data store<br>

Business Logic Layer:<br>
° Request all articles<br>
° Request specific article<br>
° Request original article<br>

Presentational Layer:<br>
° View all articles<br>
° View specific article<br>
° View original article <br>

### User stories

:white_check_mark: 1.

```
As a busy politician
So I know what the big stories of the day are
I can see all of today's headlines in one place
```

:white_check_mark: 2.

```
As a busy politician
So that I have something nice to look at
I can see a relevant picture to illustrate each news article when I browse headlines
```

:white_check_mark: 3.

```
As a busy politician
So that I can get an in depth understanding of a very important story
I can click a news headline to see a summary and a photo of the news article
```

:white_check_mark: 4.

```
As a busy politician
So I can get a few more details about an important story
I can click on a news article summary title and be redirected to the original article
```

:white_check_mark: 5.

```
As a busy politician
Just in case my laptop breaks
I can read the site comfortably on my phone
```

## How to use

You can fork and clone this repo to your local machine. <br>
You will need to have node installed, preferable its latest version (I have used v18.16.0), as well as npm.

You can then run the following commands:

### `npm run preview`

Run this command to view the website in the browser. <br>
You will be able to view all the headlines of the day, to click to read the summary of the article, or to click on its title to be redirected to the original URL address.

### `npm test`

From the `package.json` file, launch the integrated terminal and you will be able to run the command and test the React components.

### `npm run coverage`

Alternatively, you can type this command to run the tests and get the following coverage report from V8

```
---------------------|---------|----------|---------|---------|-------------------
File                 | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
---------------------|---------|----------|---------|---------|-------------------
All files            |     100 |      100 |     100 |     100 |
 Article.jsx         |     100 |      100 |     100 |     100 |
 HeadlineWrapper.jsx |     100 |      100 |     100 |     100 |
---------------------|---------|----------|---------|---------|-------------------
```


### Preview of this React app

![Screenshot 2023-08-19 at 15 29 19](https://github.com/Marion34-dev/News/assets/125993993/ad11f67b-ed65-492c-91ca-bb7dbb776c2c)

If you click on the `More info` button
![Screenshot 2023-08-19 at 15 29 41](https://github.com/Marion34-dev/News/assets/125993993/4d48a9a8-3309-4657-940e-ae6fab5d2b07)
