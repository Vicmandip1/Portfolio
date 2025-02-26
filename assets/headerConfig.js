document.addEventListener("DOMContentLoaded", function () {
    new FinisherHeader({
        "count": 100,
        "size": {
            "min": 2,
            "max": 76,
            "pulse": 0
        },
        "speed": {
            "x": {
                "min": 0,
                "max": 0.4
            },
            "y": {
                "min": 0,
                "max": 0.6
            }
        },
        "colors": {
            "background": "#201e30",
            "particles": [
                "#fbfcca",
                "#d7f3fe",
                "#ffd0a7"
            ]
        },
        "blending": "lighten",
        "opacity": {
            "center": 1,
            "edge": 0.15
        },
        "skew": -2.4,
        "shapes": [
            "c"
        ]
    });
});
