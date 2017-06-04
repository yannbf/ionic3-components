# Barcode Scanner
You can check more info on the docs: https://github.com/phonegap/phonegap-plugin-barcodescanner

In order to use this feature, you have to install the plugin:
```sh
$ ionic plugin add phonegap-plugin-barcodescanner --save --variable CAMERA_USAGE_DESCRIPTION="To scan barcodes"
```

Important note: Since iOS 10 it's mandatory to add a `NSCameraUsageDescription` in the info.plist.

`NSCameraUsageDescription` describes the reason that the app accesses the user’s camera. When the system prompts the user to allow access, this string is displayed as part of the dialog box.

This entry is passed on the `--variable` flag on plugin install.


In case you want to support low end/old devices, make sure to install crosswalk:
```sh
$ ionic plugin add cordova-plugin-crosswalk-webview
```

You can either try it out on a device or try it using an emulator:
```sh
$ ionic build android
$ adb install -r platforms/android/build/outputs/apk/android-armv7-debug.apk
```
