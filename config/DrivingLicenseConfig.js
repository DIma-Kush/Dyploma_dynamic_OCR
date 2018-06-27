export default {
  license: 'eyJzY29wZSI6WyJBTEwiXSwicGxhdGZvcm0iOlsiaU9TIiwiQW5kcm9pZCIsIldpbmRvd3MiXSwidmFsaWQiOiIyMDE4LTA3LTI3IiwibWFqb3JWZXJzaW9uIjoiMyIsImlzQ29tbWVyY2lhbCI6ZmFsc2UsInRvbGVyYW5jZURheXMiOjMwLCJzaG93UG9wVXBBZnRlckV4cGlyeSI6dHJ1ZSwiaW9zSWRlbnRpZmllciI6WyJhdC5hbnlsaW5lLmltYWdlVGV4dFRyYW5zbGF0b3IiXSwiYW5kcm9pZElkZW50aWZpZXIiOlsiYXQuYW55bGluZS5pbWFnZVRleHRUcmFuc2xhdG9yIl0sIndpbmRvd3NJZGVudGlmaWVyIjpbImF0LmFueWxpbmUuaW1hZ2VUZXh0VHJhbnNsYXRvciJdfQpyMmtrSFdtbmJkOVNnWlV3alVRbmNwL3dTd2NGMWc0WGZHSjVMUkcvVitsTlA2ZWoxNDdGS3pYMCtaMXBFRG1qajFRVjh4bzRieXUxQ3FVMGk5WVcrblhIb1VmTkJIdWxGYTl0Y2s3MzVVSkJiZW9ldnY1UWV5ZzlQRHFNTXBHYVhRa2JuY2ZmRWxLcjJPSWtDeERwNEs0V0JuUzFDMTZqY3pZeCtLcFlVQWx0SC80MDBISU1zNnBvd1NJV2oyczdCeWR2WFo1UndNMWlHMXYyeFJRYXA4VUkrR3RiVTFwdlZBYUV2Z29NQlRUeUZMWGZCdVlyWXVnUmdoWEx0bW5UL3dzL0dweHNKaDVsQ0x6OU1zVDY0NDl1RnhpWGtlK2ZuMFk5enFkUEoza0c1N0Y2Z2RHbCtYQk0zT1p5b2lEeXdnYzNSaVpHUTlWcWNJb0FDLy85Tnc9PQ==',
  options: {
    "captureResolution":"720",
    "cutout": {
      "style": "rect",
      "maxWidthPercent": "100%",
      "maxHeightPercent": "100%",
      "alignment": "center",
      "ratioFromSize" : {
        "width": 125,
        "height": 85
      },
      "strokeWidth": 2,
      "cornerRadius": 4,
      "strokeColor": "FFFFFF",
      "outerColor": "000000",
      "outerAlpha": 0.3,
      "feedbackStrokeColor": "0099FF"
    },
    "flash": {
      "mode": "manual",
      "alignment": "bottom_right",
      "imageOn": "flash_on",
      "imageOff": "flash_off"
    },
    "beepOnResult": true,
    "vibrateOnResult": true,
    "blinkAnimationOnResult": true,
    "cancelOnResult": true,
    "visualFeedback": {
      "style": "CONTOUR_POINT",
      "strokeColor": "0099FF",
      "strokeWidth": 2
    }
  },
  ocr: {
    "scanMode": "AUTO",
    "aleFile": "anyline_austrian_driving_license.ale",
    "tesseractLanguages": ["eng_no_dict", "deu"],
    "traineddataFiles": ["eng_no_dict.traineddata", "deu.traineddata"],
  }
}