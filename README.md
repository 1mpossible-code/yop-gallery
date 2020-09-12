# Your own paginated YOP-gallery
YOP-gallery is a library that allows easy creating pagination for content

![](https://img.shields.io/github/license/1mpossible-code/yop-gallery?color=blue)
![](https://img.shields.io/github/size/1mpossible-code/yop-gallery/0.1/yop-gallery.min.js?color=green&label=script%20size)

* [Howto](#howto)
    * [Installation](#installation)
* [Features](#features)
* [Documentation](#documentation)
* [Contributors](#contributors)
* [Contacts](#contacts)

# Howto
## Download
To download the library you need to use cURL or Git with the commands in terminal:
###### Git
To download repository with Git you need to open the terminal with supporting [git](https://git-scm.com/) and then run a command
```
git clone https://github.com/1mpossible-code/yop-gallery.git
```
Then you will have the versions in a such folders _(P.S. the last version is 0.1)_

Copy the script to your script folder:
```
cp yop-gallery/0.1/yop-gallery.min.js /your/path/
```
###### cURL
To download the minimal version of YOP-gallery use cURL by running command in terminal:
Open your project script's folder:
```
cd /your/path/
```
and download YOP-gallery:
```
curl -O https://raw.githubusercontent.com/1mpossible-code/yop-gallery/master/0.1/yop-gallery.min.js
```
## Installation
Link it in the **footer** _**NOT IN THE HEADER**_ of your HTML file
```html
<script src="/your/path/yop-gallery.min.js"></script>
```
Then you need to create elements:
* With class `yop_gal` (elements that will be paginated)
* With id `yop-paginator` (If you need a button "show more")
* With id `yop-navigation-paginator` (It's a paginator)

You can put the elements into other tags and give them few more classes, it will not break the program

**_You can see the example of using YOP-gallery in a folder `exapmle`_**

# Documentation
_GitBook documentation coming soon_

To edit preferences you have 3 options which situated on the start of the file `yop-gallery.min.js`:
```
let maxPhotosImages=3,whatVisible=1,currentPage=1;
```
* `maxPhotosImages` is the number of max content blocks with class `yop_gal` on a one page
* `whatVisible` is the number of page that is visible right now
* `currentPage` is the number of active page 

_P.S. If you use different `whatVisible` and `currentPage` it can break the script!_

# Features
- [x] Minified version
- [ ] Object oriented version of program
- [ ] GitBook Documentation
- [ ] Easy configuring
- [ ] Contributing page

If you have a good idea or concept for the program, [please contact the author](#contacts)

# Contributors
_Now contributing page is not created._

If you want to contribute the project, [contact the author](#contacts)

# Contacts
You can mail to `1mpossible@disroot.org` to contact the author

# License
Copyright © 2020 [1mpossible-code](#contacts).
This project is [GPLv3](https://www.gnu.org/licenses/gpl-3.0.html) licensed.