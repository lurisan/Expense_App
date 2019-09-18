import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  url = "http://192.168.0.109:8080"
  downloadLoc = ''

  constructor() { }

  ngOnInit() {
    document.addEventListener('deviceReady', function () {
      console.log("device ready")
      alert("device ready")
    }, false)
  }

  sync() {
    // @ts-ignore
    var sync = ContentSync.sync({
      url: this.url,
      id: 'myapp',
      type: 'local'
    });
    sync.on('complete', function (data) {
      if (data.localPath) {
        console.log("synced: ", data.localPath)
        // var url = "file://" + data.localPath + "/www/index.html";
        // alert('Sync complete ' + data + ' changing document.location ' + url);
        // @ts-ignore
        /* ContentSync.loadUrl(
          url
        ); */
      }
    });
    sync.on('error', function (e) {
      console.log("error in sync: ", e)
    });
  }

  download(fileName) {
    let that = this
    let url = this.url + '/' + fileName
    var callback = function (response) {
      console.log(response);
      if (response.progress) {
        console.log(response.progress)
      }
      if (response.archiveURL) {
        console.log(response.archiveURL);
        that.downloadLoc = response.archiveURL;
        alert("Downloaded");
        // that.extract()
      }
    };
    //@ts-ignore 
    ContentSync.download(
      url,
      callback
    );
  }
  extract() {

    /* window.requestFileSystem(PERSISTENT, 1024 * 1024, function (fs) {
      fs.root.getDirectory('zipOutPut', { create: true }, function (fileEntry) {
        var dirUrl = fileEntry.toURL();
        var callback = function (response) {
          console.log(response);
        }
        console.log(dirUrl, archiveURL);
        Zip.unzip(archiveURL, dirUrl, callback);
        console.log(dirUrl)
      });
     });*/

    //@ts-ignore
    // downloader.init({ folder: "file:///storage/self/primary/AAOTA", unzip: true });
    //@ts-ignore
    // downloader.get(this.downloadLoc);
    
    window.resolveLocalFileSystemURL(this.downloadLoc, function (fileSystem) {
      var reader = fileSystem.createReader();
      reader.readEntries(
        function (entries) {
          console.log(entries);
          console.log("extracted")
          alert("extracted")
        },
        function (err) {
          console.log(err);
        }
      );
    }, function (err) {
      console.log(err);
    }
    );
  }
}
