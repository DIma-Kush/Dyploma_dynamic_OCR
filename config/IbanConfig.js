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
    "captureResolution": "1080p",
    "cutout": {
      "style": "rect",
      "maxWidthPercent": "80%",
      "maxHeightPercent": "80%",
      "alignment": "top_half",
      "width": 900,
      "ratioFromSize": {
        "width": 10,
        "height": 1
      },
      "strokeWidth": 2,
      "cornerRadius": 10,
      "strokeColor": "FFFFFF",
      "outerColor": "000000",
      "outerAlpha": 0.3,
      "feedbackStrokeColor": "0099FF"
    },
    "flash": {
      "mode": "manual",
      "alignment": "bottom_right"
    },
    "beepOnResult": true,
    "vibrateOnResult": true,
    "blinkAnimationOnResult": true,
    "cancelOnResult": true,
    "visualFeedback": {
      "style": "contour_point",
      "strokeColor": "0099FF",
      "strokeWidth": 2,
      "fillColor": "110099FF"
    },
    "focus": {
      "mode": "AUTO",
      "interval" : 8000,
      "touchEnabled": true,
      "regionEnabled": true,
      "autoExposureRegionEnabled": true
    }
  },
  ocr: {
    scanMode: "LINE",
    minCharHeight: 25,
    maxCharHeight: 65,
    traineddataFiles: ["USNr.any"],
    minConfidence: 70,
    removeSmallContours: true,
    removeWhitespaces: true,
    charWhitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
    validationRegex: '^[A-Z]{2}([0-9A-Z]\\s*){13,32}$',
  },
}