# MySambaDiary

This is the repository for My Samba Diary.

The repository mainly consists of two separate elements, that are running **seperately** in two ports.
```
Server
sambaproject (ie. client)
```
## Server
1. Go to server-folder with command **cd server**
2. To run server, install dependencies with command **npm install**. 
3. Once it has installed the dependencies, just give a command **npm start** and the server starts listening at port 3001
4. Make sure, that the local database is switched on. Otherwise it throws an error.

Npm start will do a command nodemon app.js, where nodemon allows the compiler restart everytime there are changes made in backend code.

## Client
1. Go to client-folder with command **cd sambaproject** (if you are in server-folder, type first **cd ..** to return to root folder)
2. To run the client, install dependencies with command **npm install**
3. Once it has installed the dependencies, just give a command **npm run serve** and the server starts (usually) listening in port 8080

If any new node_module is going to be installed, remember to add --save at the end of the npm install [new_dep_going_to_get_installed]
command, so that it will update the package.json too.

```
npm install [new_dep_going_to_get_installed] --save
```
Package.json is the file, where npm reads the dependencies

## Building

In development phase, it's nice to allow two hosts running simultaneously: one for frontend and one from backend. This way, coding is easier and faster because it allows us to do "live coding", which means the hosts detect changes in the code and recompile both frontend and backend project. 

However, when we are going for production, we don't need this functionality anymore and it would be nice idea to have only one host running the whole program. This can be reached by doing ``` npm run build``` in frontend directory. This turns all the vue-files to normal .js-files, css-files and html-files that are stored into dist-folder.

## About Vue

The basic HTML document usually describes a page, that contains different HTML-elements that are something like this
```
<Element>Actual content</Element>
```
HTML-page has always CSS-stylesheet imported for the whole page and JavaScript imported for the whole page aswell, which can make the page and hence the application hard to maintain.

Now, what if, we can split the page into smaller components? And that's the idea behind modern front-end frameworks.

In Vue, the components are called components. Normal HTML-like document can be split into many components, that interact with their
parent and child-components.

## Folder structure

Inside both folders, there are src-folders, that contains all the source code we are going to write.

### Client

In client src, there are two folders

#### View

Contains more page-like files

### Components

Contains pure components
