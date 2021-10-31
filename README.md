# HackOverflow 
We are so exicted to share our idea and its working prototype with you guys. We had immense pleasaure while brainstroming ideas on this project under the HackOverflow hackathon.

We, thank you for this wonderful opportunity you have given to us.


# Problem Statement
We all listen to songs and thus, online song streaming platforms Spotify, Amazon music, Apple music and other indenious platforms have taken birth and have redefined the music industry.
As per the internal surveys, and feedback of music lovers around the globe there are two problems which are very commonly faced by users.

1. People listen to songs all the time, even while working. More than 50% people need lyrics while listening to songs. But streaming platforms have lyrics only in-built meaning users have to go in the app everytime to see lyrics which can be frsutating.

2. Even though people are listening to music online, there are still many users who need songs or some songs in their device for offline uses. No streaming platform gives that option without taking extra money. 


# Solution
*Our solution to this problem is a transparent application/widget which automatically shows time-synced lyrics of currently playing song, and gives options to download the song with two simple clicks.*    

# Prototype
                      Our thoughts are stars , We cannot fathom into constellation


Due to time constratint and the amount of time it takes to add muliple functionality in an application of such magnitude we could only build a prototype which has the following features.  

⚫ With our website, you can **log in to your spotify account**

⚫ Our website detects the current playing song only if you click on the **Check Now Playing**

⚫ Our website shows thumbnail of current playing song and other details like artist name

⚫ Our website doesn't have time-sycned lyrics till now, instead it will show you **complete lyrics** of the currently playing song

⚫ Our website gives you **option to download** the current playing song with the button **Download Now**.
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
- ![image](https://user-images.githubusercontent.com/81186992/139585961-475f6d9e-f5c9-4ab3-9e9c-49845558004e.png)


### 2)  Start Auth Server
- Navigate to the auth-server directory `cd auth-server`
- Install the dependencies `npm install`
- Paste in the redirect uri, client id, and client secret you copied in step 1
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

### 5)   Bugs in the app
- Since we are using the free API for lyrics , so lyrics for all songs are not available 
- For download part we are downloading the first youtube search so sometimes that can be irregular. 
- User experience is not friendly since when using it for the first time he has to create developer account on spotify and make changes to the code.
- Some exceptions are not handled properly.

### 6) Possible solutions and future improvements
- Instead of free API for lyrics we can use paid API where we get lyrics of more niche songs
- For improving download accuracy , we can fetch first 10 results which is very easy and we can analyse those videos by duration and channel subscribers etc. So we can select appropriate video and download that.
- For improving user experience Spotify enables to add 25 users and we can add more if we request them.So what it takes, is an email of a user's spotify account and add it to our client id which make user experience smooth.


