const path = require('path')
const exec = require('child_process').exec
const copy = require('copy-dir')

console.log('Build Process Initiated...')
const angularSource = path.join(__dirname, '../', 'Angular')
const cordovaSource = path.join(__dirname, '../', 'Cordova')
const apkSource = path.join(cordovaSource, 'platforms', 'android', 'app', 'build', 'outputs', 'apk', 'debug')

const angularBuildCommand = 'cd ' + angularSource + ' && ng build'
const cordovaBuildCommand = 'cd ' + cordovaSource + ' && cordova build'

const appDestination = path.join(__dirname, '../', 'App')

exec(angularBuildCommand, function (err, out, code) {
    console.log(out)
    if (!err) {
        console.log('Angular Build Complete')
        copy.sync(path.join(angularSource, 'dist'), path.join(cordovaSource))
        exec(cordovaBuildCommand, function (err, out, code) {
            console.log(out)
            if (!err) {
                console.log('Cordova Build Complete')
                copy.sync(apkSource, appDestination)
            } else
                console.log('Cordova Build Error: ', err)
        })
    } else
        console.log('Angular Build Error: ', err)
})