$ sudo ionic plugin add phonegap-plugin-barcodescanner
$ sudo ionic plugin add cordova-plugin-crosswalk-webview

$ sudo ionic build android
$ adb install -r platforms/android/build/outputs/apk/android-armv7-debug.apk