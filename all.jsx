//generate file
app.documents.add(DocumentColorSpace.RGB , 500, 324, 1, DocumentArtboardLayout.RLGridByRow, 20, 4);
//app.documents.addDocument("Web");
//app.documents.addDocumentWithDialogOption("Web", true);


//import image
var document = app.activeDocument;

var newLayer = document.layers.add();
newLayer.name = 'Image Layer';

var imagePlacedItem = newLayer.placedItems.add();
imagePlacedItem.file = File("/Users/glorialiu/Documents/test/input/depth_map.png");
/////////////////////////////
/////change the file path!!!


//trace image
var document = app.activeDocument;
var item = document.layers[0].placedItems[0];

var pluginItem = item.trace();
var tracingOptions = pluginItem.tracing;

tracingOptions.ignoreWhite = true;
tracingOptions.threshold = 255;
tracingOptions.pathFitting = 5.0;
tracingOptions.fills = true;
tracingOptions.strokes = false;
tracingOptions.tracingMode = TracingModeType.TRACINGMODECOLOR;


//save svg
var document = app.activeDocument;
document.exportFile(File('/Users/glorialiu/Documents/test/depthTrace.svg'),ExportType.SVG);
/////////////////////////////
/////change the file path!!!