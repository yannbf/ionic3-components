import { Injectable } from '@angular/core';
import { Camera } from 'ionic-native';

@Injectable()
export class CameraProvider {

  constructor() {
  }

  getPictureFromCamera() {
    return this.getImage(Camera.PictureSourceType.CAMERA, true);
  }

  getPictureFromPhotoLibrary() {
    return this.getImage(Camera.PictureSourceType.PHOTOLIBRARY);
  }

  // This method takes optional parameters to make it more customizable
  getImage(pictureSourceType, crop = false, quality = 50, allowEdit = true, saveToAlbum = true) {
    let options = {
      quality: quality,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: pictureSourceType,
      allowEdit: allowEdit,
      encodingType: Camera.EncodingType.PNG,
      saveToPhotoAlbum: saveToAlbum
    };

    // If set to crop, restricts the image to a square of 600 by 600
    if (crop) {
      options["targetWidth"] = 600;
      options["targetHeight"] = 600;
    }

    return Camera.getPicture(options).then(imageData => {
      let base64Image = 'data:image/png;base64,' + imageData;
      return base64Image;
    }, error => {
      console.log("CAMERA ERROR -> " + JSON.stringify(error));
    });
  }
}
