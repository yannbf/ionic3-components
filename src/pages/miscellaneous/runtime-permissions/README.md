On newer android versions, permissions are handled differently. In most of the cases, the plugins take care of the permissions, but sometimes there are some exceptions.
In order to ask or check for user permissions, the Diagnostic plugin is needed.

Docs: https://ionicframework.com/docs/v2/native/diagnostic/

You have to install the plugin with:
```sh
$ ionic plugin add cordova.plugins.diagnostic --save