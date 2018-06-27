export default {
  license: 'eyJzY29wZSI6WyJBTEwiXSwicGxhdGZvcm0iOlsiaU9TIiwiQW5kcm9pZCIsIldpbmRvd3MiXSwidmFsaWQiOiIyMDE4LTA3LTI3IiwibWFqb3JWZXJzaW9uIjoiMyIsImlzQ29tbWVyY2lhbCI6ZmFsc2UsInRvbGVyYW5jZURheXMiOjMwLCJzaG93UG9wVXBBZnRlckV4cGlyeSI6dHJ1ZSwiaW9zSWRlbnRpZmllciI6WyJhdC5hbnlsaW5lLmltYWdlVGV4dFRyYW5zbGF0b3IiXSwiYW5kcm9pZElkZW50aWZpZXIiOlsiYXQuYW55bGluZS5pbWFnZVRleHRUcmFuc2xhdG9yIl0sIndpbmRvd3NJZGVudGlmaWVyIjpbImF0LmFueWxpbmUuaW1hZ2VUZXh0VHJhbnNsYXRvciJdfQpyMmtrSFdtbmJkOVNnWlV3alVRbmNwL3dTd2NGMWc0WGZHSjVMUkcvVitsTlA2ZWoxNDdGS3pYMCtaMXBFRG1qajFRVjh4bzRieXUxQ3FVMGk5WVcrblhIb1VmTkJIdWxGYTl0Y2s3MzVVSkJiZW9ldnY1UWV5ZzlQRHFNTXBHYVhRa2JuY2ZmRWxLcjJPSWtDeERwNEs0V0JuUzFDMTZqY3pZeCtLcFlVQWx0SC80MDBISU1zNnBvd1NJV2oyczdCeWR2WFo1UndNMWlHMXYyeFJRYXA4VUkrR3RiVTFwdlZBYUV2Z29NQlRUeUZMWGZCdVlyWXVnUmdoWEx0bW5UL3dzL0dweHNKaDVsQ0x6OU1zVDY0NDl1RnhpWGtlK2ZuMFk5enFkUEoza0c1N0Y2Z2RHbCtYQk0zT1p5b2lEeXdnYzNSaVpHUTlWcWNJb0FDLy85Tnc9PQ==',
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
    "scanMode": "LINE",
    "minCharHeight": 25,
    "maxCharHeight": 65,
    "traineddataFiles": ["USNr.any"],
    "minConfidence": 70
  },
}