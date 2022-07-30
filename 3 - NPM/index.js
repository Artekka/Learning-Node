/* Basic CLI command to install a package using npm is:
npm i __package__ -g
This tells the system to use NPM to i/install a package -g/globally 

Don't forget we have to initialize NPM for our project

npm init

Using the -y flag will automatically say "Yes" to all questions/options.

package.json will be created after going through the prompts. This is what npm will read when determining
what needs to be installed for your project

To add a dev dependency to package.json we would use the dev dependency flag which is --save-dev or -D
A "dev" devependency will only be used when installing the project with the "dev" command rather than the
general "start" command. If you are developing, you would use "npm run dev" command rather than "npm start"

npm i __package__ -D

In the package.json file we can add start, dev, and build scripts to the "scripts" section so that
we can run dev, start, or build

We're using the uuid package so that we can assign a different ID to basically anything in our project.
This could be useful for uniquely identifying errors or user logins or an element that was generated.

In package.json each dependency will have a version associated with it. The format is as such:

X.Y.Z

X = Major version
Y = Minor version
Z = Patch version

You will also see a ^/caret in front of the version number. This tells node to not update the Major
version if there is an update. For instance ^1.2.3 means that the Major version would not be updated.
~1.2.3 means that only the Major version would be updated.
* would mean to update at any time
1.2.3 with no symbols means that that is the only version to install and use

Using npm update will go through the dependencies to see if there are any updates available for the packages
that have been listed in package.json
*/

const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

console.log(format(new Date(), 'MM\/dd\/yyyy\thh:mm:ss'));

console.log(uuid());