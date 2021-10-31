# HackOverflow 
We are so excited to share our idea and its working prototype with you guys. We had the immense pleasure while brainstorming ideas on this project under the HackOverflow hackathon.

We, thank you for this wonderful opportunity you have given to us.


# Problem Statement
We all listen to songs and thus, online song streaming platforms Spotify, Amazon Music, Apple Music, and other indigenous platforms have taken birth and have redefined the music industry. 
As per the internal surveys, and feedback of music lovers around the globe two problems are very commonly faced by users.


1. People listen to songs all the time, even while working. More than 50% of people need lyrics while listening to songs. But streaming platforms have lyrics only in-built, meaning users have to go into the app every time to see lyrics which can be frustrating.
2. Even though people are listening to music online, there are still many users who need songs or some songs on their devices for offline uses. No streaming platform gives that option without taking extra money. 


# Solution
*Our solution to this problem is a transparent application/widget which automatically shows time-synced lyrics of the current playing song and gives options to download the song with two simple clicks.*    

# Prototype
                      Our thoughts are stars , We cannot fathom into constellation


Due to time constraints and the amount of time, it takes to add multiple functionalities in an application of such magnitude we could only build a prototype that has the following features.

⚫ With our website, you can  **log in to your Spotify account**

⚫ Our website detects the current playing song only if you click on the **Check Now Playing**

⚫ Our website shows a thumbnail of the current playing song and other details like the artist name

⚫ Our website doesn't have time-synced lyrics till now, instead, it will show you **complete lyrics** of the currently playing song

⚫ Our website gives you the **option to download** the current playing song with the button **Download Now**
```
Interesting fact: Spotify recently added time synced-lyrics features due the demand made by multiple users and not every song has lyrics on Spotify, let alone time-sycned lyrics.
```
# Steps to run the application

### 1) Create an App
- Visit https://developer.spotify.com/ 
- Log in and create an app
- Enter `http//localhost:8888/callback` as the redirect uri
- Save your changes
- Copy down the following: Redirect uri, client id, client secret
- Now navigate to Spotify-Lyrics/auth-server/authorization_code/app.js and paste the redirect uri, client id, client secret
 ![image](https://user-images.githubusercontent.com/81186992/139585961-475f6d9e-f5c9-4ab3-9e9c-49845558004e.png)


### 2)  Start Auth Server
- Navigate to the auth-server directory `cd auth-server`
- Install the dependencies `npm install`
- Run the Server `node authorization_code/app.js`

### 3)  Start Client
- Navigate to the auth-server directory `cd client`
- Install the dependencies `npm install`
- Install axios dependencies `npm i axios`
- Run the Server `npm start`

### 4)  Use the App
- Make sure you have a song playing (or paused) on a Spotify app
- Visit http://localhost:3000
- Click 'Log in with Spotify' and log in
- Click the 'Check Now Playing' Button
- Your currently playing song's name and album art should appear
- You can Download the song by 'Download Now'.

# Bugs and their Solutions

### Bugs in the app

- Lyrics of all songs are not available due to usage of a free API in the developmental process 
- Wrong songs can be downloaded because we are using youtube search to download the song.
- User experience is not friendly since when using it for the first time user has to create a developer account on Spotify and make changes to the code.
- Some exceptions are not handled properly.

### Possible solutions and future improvements

- Instead of free API for lyrics we can use paid API where we get lyrics of more niche songs
- For improving download accuracy, we can fetch the first 10 results which are very easy and we can analyze those videos by duration and channel subscribers, etc. So we can select an appropriate video and download that.
- For improving user experience Spotify enables us to add 25 users and we can add more if we request them. So what it takes, is an email of a user's Spotify account and add it to our client id which makes the user experience smooth.



# Team Details

### Team Name:

The Pseudocodes

### Team Members:

Akash Yadav

Shreyas Kasliwal

Sudeep Gangwar


