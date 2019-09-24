# Config
You need to replace all values from src/environment/environment.ts with your own values.

## Preview


| <img src="https://github.com/Tayeb-Ali/ionic3FullApp/blob/master/ScreenShot/Screen%20Shot%202019-09-24%20at%2007.49.08.png" width="250"/> | 
<img src="https://github.com/Tayeb-Ali/ionic3FullApp/blob/master/ScreenShot/Screen%20Shot%202019-09-24%20at%2007.49.14.png" width="250"/> | 
<img src="https://github.com/Tayeb-Ali/ionic3FullApp/blob/master/ScreenShot/Screen%20Shot%202019-09-24%20at%2007.49.14.png" width="250"/> |

| <img src="https://github.com/Tayeb-Ali/ionic3FullApp/blob/master/ScreenShot/Screen%20Shot%202019-09-24%20at%2007.59.57.png" width="250"/> | 
<img src="https://github.com/Tayeb-Ali/ionic3FullApp/blob/master/ScreenShot/Screen%20Shot%202019-09-24%20at%2008.00.10.png" width="250"/> | 
<img src="https://github.com/Tayeb-Ali/ionic3FullApp/blob/master/ScreenShot/Screen%20Shot%202019-09-24%20at%2008.00.21.png" width="250"/> |

| <img src="https://github.com/Tayeb-Ali/ionic3FullApp/blob/master/ScreenShot/Screen%20Shot%202019-09-24%20at%2008.00.26.png" width="250"/> | 
<img src="https://github.com/Tayeb-Ali/ionic3FullApp/blob/master/ScreenShot/Screen%20Shot%202019-09-24%20at%2008.00.36.png" width="250"/> | 
<img src="https://github.com/Tayeb-Ali/ionic3FullApp/blob/master/ScreenShot/Screen%20Shot%202019-09-24%20at%2008.01.09.png" width="250"/> |


| <img src="https://github.com/Tayeb-Ali/ionic3FullApp/blob/master/ScreenShot/Screen%20Shot%202019-09-24%20at%2008.01.17.png" width="250"/> | 
<img src="https://github.com/Tayeb-Ali/ionic3FullApp/blob/master/ScreenShot/Screen%20Shot%202019-09-24%20at%2008.01.22.png" width="250"/> | 
<img src="https://github.com/Tayeb-Ali/ionic3FullApp/blob/master/ScreenShot/Screen%20Shot%202019-09-24%20at%2008.01.32.png" width="250"/> |


| <img src="https://github.com/Tayeb-Ali/ionic3FullApp/blob/master/ScreenShot/Screen%20Shot%202019-09-24%20at%2008.01.42.png" width="250"/> | 
<img src="https://github.com/Tayeb-Ali/ionic3FullApp/blob/master/ScreenShot/Screen%20Shot%202019-09-24%20at%2008.01.44.png" width="250"/> | 
<img src="https://github.com/Tayeb-Ali/ionic3FullApp/blob/master/ScreenShot/Screen%20Shot%202019-09-24%20at%2008.01.56.png" width="250"/> |


| <img src="https://github.com/Tayeb-Ali/ionic3FullApp/blob/master/ScreenShot/Screen%20Shot%202019-09-24%20at%2008.01.44.png" width="250"/> | 
<img src="https://github.com/Tayeb-Ali/ionic3FullApp/blob/master/ScreenShot/Screen%20Shot%202019-09-24%20at%2008.01.56.png" width="250"/> | 
<img src="https://github.com/Tayeb-Ali/ionic3FullApp/blob/master/ScreenShot/Screen%20Shot%202019-09-24%20at%2008.02.06.png" width="250"/> |


| <img src="https://github.com/Tayeb-Ali/ionic3FullApp/blob/master/ScreenShot/Screen%20Shot%202019-09-24%20at%2008.02.12.png" width="250"/> | 
<img src="https://github.com/Tayeb-Ali/ionic3FullApp/blob/master/ScreenShot/Screen%20Shot%202019-09-24%20at%2008.02.16.png" width="250"/> | 
<img src="https://github.com/Tayeb-Ali/ionic3FullApp/blob/master/ScreenShot/Screen%20Shot%202019-09-24%20at%2008.02.22.png" width="250"/> |


| <img src="https://github.com/Tayeb-Ali/ionic3FullApp/blob/master/ScreenShot/Screen%20Shot%202019-09-24%20at%2008.02.46.png" width="250"/> | 
<img src="https://github.com/Tayeb-Ali/ionic3FullApp/blob/master/ScreenShot/Screen%20Shot%202019-09-24%20at%2008.02.58.png" width="250"/> | 
<img src="https://github.com/Tayeb-Ali/ionic3FullApp/blob/master/ScreenShot/Screen%20Shot%202019-09-24%20at%2008.03.14.png" width="250"/> |



# Workflow
##To run your app in the browser (great for initial development):
- Install all the npm dependencies
`npm install`

- Serve the app in your browser
`ionic serve`

##To run on iOS:
- Add cordova platform
`ionic cordova platform add ios` or `cordova platform add ios`

** *NOTE:* ** If you add the platform using the ionic command, then you may experience that nothing is happening for a while (you will just see 'Running command' in your terminal). In the other hand if you add the platform directly with cordova you will be getting verbose updates on what's doing in the background


- Run it (on your device if connected or in the emulator)
`ionic cordova run ios --prod`

** *NOTE:* ** We include the `--prod` flag to force Angular Ahead of Time compilation for the app


##To run on Android:
- Add cordova platform
`ionic cordova platform add android` or `cordova platform add android`

** *NOTE:* ** If you add the platform using the ionic command, then you may experience that nothing is happening for a while (you will just see 'Running command' in your terminal). In the other hand if you add the platform directly with cordova you will be getting verbose updates on what's doing in the background


- Run it (on your device if connected or in the emulator)
`ionic cordova run android --prod`

** *NOTE:* ** We include the `--prod` flag to force Angular Ahead of Time compilation for the app

##Review ionic CHANGELOG when updating ionic-angular version
https://github.com/driftyco/ionic/blob/master/CHANGELOG.md

# Configs
## Cordova (uses config.xml)
### [Mass saving platforms on an existing project](http://cordova.apache.org/docs/en/latest/platform_plugin_versioning_ref/index.html#mass-saving-platforms-on-an-existing-project)
`cordova platform save`
Use it when you have a pre-existing project and you want to save all the currently added platforms in your project.

## Ionic (uses package.json)
### [Clean and install](https://www.raymondcamden.com/2015/04/20/ionic-adds-a-new-state-feature/)
`ionic state reset`
This will remove everything then bring back what you have specified in the package.json file.

### [Store current state](https://www.raymondcamden.com/2015/04/20/ionic-adds-a-new-state-feature/)
`ionic state save`
To store the current platforms and plugins to the package.json

### [Restore current state](https://www.raymondcamden.com/2015/04/20/ionic-adds-a-new-state-feature/)
`ionic state restore`
This will add in the appropriate plugins and platforms from the package.json
