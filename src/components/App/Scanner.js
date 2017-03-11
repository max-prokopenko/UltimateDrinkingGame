import React from 'react';
import Quagga from 'quagga';


export default React.createClass({
    propTypes: {
        onDetected: React.PropTypes.func.isRequired
    },
    render() {
        return (
            <div id="interactive" className="viewport"/>
        );
    },

    componentDidMount() {
       Quagga.init({
            inputStream : {
              name : "Live",
              type : "LiveStream"
            },
            numOfWorkers: 0,
            locate: true,
            halfSample: true,
            patchSize: "medium", // x-small, small, medium, large, x-large
            debug: {
                showCanvas: true,
                showPatches: true,
                showFoundPatches: true,
                showSkeleton: true,
                showLabels: true,
                showPatchLabels: true,
                showRemainingPatchLabels: true,
                boxFromPatches: {
                  showTransformed: true,
                  showTransformedBox: true,
                  showBB: true
                }
            },
            decoder : {
              readers : ["ean_reader"]
            }           
          }, function() {
              console.log("Initialization finished. Ready to start");
              Quagga.start();
          });

        
        Quagga.onProcessed(function(result) {
            
            var drawingCtx = Quagga.canvas.ctx.overlay,
                drawingCanvas = Quagga.canvas.dom.overlay;

            if (result) {
                console.log("result");
                if (result.boxes) {
                    drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
                    result.boxes.filter(function (box) {
                        return box !== result.box;
                    }).forEach(function (box) {
                        Quagga.ImageDebug.drawPath(box, {x: 0, y: 1}, drawingCtx, {color: "green", lineWidth: 2});
                    });
                }

                if (result.box) {
                    Quagga.ImageDebug.drawPath(result.box, {x: 0, y: 1}, drawingCtx, {color: "#00F", lineWidth: 2});
                }

                if (result.codeResult && result.codeResult.code) {
                    Quagga.ImageDebug.drawPath(result.line, {x: 'x', y: 'y'}, drawingCtx, {color: 'red', lineWidth: 3});
                }
            }
        });

        Quagga.onDetected(this.onDetected);
    },

    componentWillUnmount() {
        Quagga.offDetected(this.onDetected);
    },

    onDetected(result) {
        
        this.props.onDetected(result);
    }
});