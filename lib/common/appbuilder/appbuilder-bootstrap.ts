require("../bootstrap");
$injector.require("liveSyncServiceBase", "./services/livesync-service-base");
$injector.require("androidLiveSyncServiceLocator", "./appbuilder/services/livesync/android-livesync-service");
$injector.require("iosLiveSyncServiceLocator", "./appbuilder/services/livesync/ios-livesync-service");
$injector.require("nativeScriptProjectCapabilities", "./appbuilder/project/nativescript-project-capabilities");
$injector.require("cordovaProjectCapabilities", "./appbuilder/project/cordova-project-capabilities");
$injector.require("mobilePlatformsCapabilities", "./appbuilder/mobile-platforms-capabilities");
$injector.require("iOSLogFilter", "./mobile/ios/ios-log-filter");
