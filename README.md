# Polaris Explorer

Polaris Blockchain Explorer is available on https://wavesexplorer.com

## Setup

Install [NodeJS](https://nodejs.org/en/download/)

Install [yarn](https://yarnpkg.com/lang/en/docs/install/)

Install gulp-cli:
```
yarn global add gulp-cli
```

## Run locally

From the project directory run:

```
yarn install 
yarn start
```

Your browser will open local version of Polaris Explorer automatically.

## Build

Build process creates ./dist directory with Polaris Explorer distribution that supports mainnet, testnet and a custom network. 
To create the distribution, run from the project directory:
```
gulp buildOfficialProd
```

# System Requirement: <br>
**OS Linux/Windows:** 8GB RAM to Compile Code.

## Steps to Compile Code:
 
1. Download the repo.  
2. Install npm.
3. Install Python2 or python3 and Yarn 1.22.17.
4. `yarn install`.
5. Install the Docker.
6. Enter into directory `cd polaris-explorer`.
7. `docker build -t explorer .` [Where explorer is the name of docker, it will build an image]
8. `docker images` To check the list of images.
9. `docker run -d -p 3000:3000 -p 8080:8080 explorer`
10. `docker ps` To check the running docker images.
11. `docker save explorer > explorer.tar` To Save the explorer docker to a tar file.
12. Move the tar file to another server location. Install Docker, Yarn and npm on another server.
13. `docker load < explorer.tar`
14. `docker start explorer` or follow step 9
15. `docker ps` To check the running docker images.
16. Explorer is running at port http://x.x.x.x:8080.
17. Set Reverse proxy and domain to node ip and add Explorer ip.
18. **General info** will be visible when https is added to node name.

