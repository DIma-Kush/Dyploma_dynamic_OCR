export default {
  license: 'eyJzY29wZSI6WyJBTEwiXSwicGxhdGZvcm0iOlsiaU9TIiwiQW5kcm9pZCIsIldpbmRv\n' +
  'd3MiXSwidmFsaWQiOiIyMDE4LTA3LTI3IiwibWFqb3JWZXJzaW9uIjoiMyIsImlzQ29t\n' +
  'bWVyY2lhbCI6ZmFsc2UsInRvbGVyYW5jZURheXMiOjMwLCJzaG93UG9wVXBBZnRlckV4\n' +
  'cGlyeSI6dHJ1ZSwiaW9zSWRlbnRpZmllciI6WyJhdC5hbnlsaW5lLmltYWdlVGV4dFRy\n' +
  'YW5zbGF0b3IuYXBwIl0sImFuZHJvaWRJZGVudGlmaWVyIjpbImF0LmFueWxpbmUuaW1h\n' +
  'Z2VUZXh0VHJhbnNsYXRvci5hcHAiXSwid2luZG93c0lkZW50aWZpZXIiOlsiYXQuYW55\n' +
  'bGluZS5pbWFnZVRleHRUcmFuc2xhdG9yLmFwcCJdfQpmRWd0L1lCNVhySFUweExsMkxE\n' +
  'NVNSMVJiL3daelB6WmxJczFVdW10N2VrVkhMbG0xTDJmQXpRQVpsRG1LSFc5cUpKeUtx\n' +
  'NGExZVdFQTIySmhiMSs3R3IrZlYwREZSaWFjcFdVWHpnNGUvVU9yNjJ2TVJDL3RWaDlC\n' +
  'WlBwa0ZyYWFXY1pWb3lEZ2ozSERWL2ZmVnc5YkhOMVNYMEVtVUVxeTBNMWpnR0Y4dUkz\n' +
  'V2JtK21LNmYvYkdqcWR2ajd5bTIyMzhjNm5kaHpGU1pyK0pYYUpBMEZtT0VnbGxSNStJ\n' +
  'OTJiOVhiQ0lHQWJNTVpuQjFrZGNGalhKL09ENlBPblhzbkVyaXp4Qy91TlZYaXlCUGJF\n' +
  'UjFJL3FXSFBqREhML0tiVVZ2YitMRWlFUVVhaHhha2VvZ0hHTTNYVWhDYjdGUnk0blpG\n' +
  'ckg4eldWTDJzT0pTbjV3Qmc9PQ==',
  options: {
    "cutout": {
        "style": "rect",
        "maxWidthPercent": "70%",
        "alignment": "top_half",
        "ratioFromSize": {
            "width": 62,
            "height": 9
        },
        "outerColor": "000000",
        "outerAlpha": 0.3,
        "strokeWidth": 1,
        "strokeColor": "FFFFFF",
        "cornerRadius": 2,
        "feedbackStrokeColor": "0099FF",
    },
    "flash": {
      "mode": "manual",
      "alignment": "bottom_left",
      "imageOn": "ic_flash_on",
      "imageOff": "ic_flash_off"
    },
    "visualFeedback": {
        "animation": "traverse_multi",
        "animationDuration" : 250,
        "style": "contour_rect",
        "strokeWidth": 2,
        "strokeColor": "0099FF"
    },
    "beepOnResult": false,
    "vibrateOnResult": true,
    "blinkAnimationOnResult": true,
    "cancelOnResult": true,
    "reportingEnabled": true
  },
  ocr: {
    "scanMode": "AUTO",
    "aleFile": "vin.ale",
    "traineddataFiles": ["vin.any"],
    "minConfidence": 0
  },
}