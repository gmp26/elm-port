Elm.Stamps = Elm.Stamps || {};
Elm.Stamps.make = function (_elm) {
   "use strict";
   _elm.Stamps = _elm.Stamps || {};
   if (_elm.Stamps.values)
   return _elm.Stamps.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _A = _N.Array.make(_elm),
   _E = _N.Error.make(_elm),
   $moduleName = "Stamps",
   $Basics = Elm.Basics.make(_elm),
   $Color = Elm.Color.make(_elm),
   $Graphics$Collage = Elm.Graphics.Collage.make(_elm),
   $Graphics$Element = Elm.Graphics.Element.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Mouse = Elm.Mouse.make(_elm),
   $Native$Json = Elm.Native.Json.make(_elm),
   $Native$Ports = Elm.Native.Ports.make(_elm),
   $Signal = Elm.Signal.make(_elm),
   $Text = Elm.Text.make(_elm),
   $Window = Elm.Window.make(_elm);
   var scene = F2(function (_v0,
   locs) {
      return function () {
         switch (_v0.ctor)
         {case "_Tuple2":
            return function () {
                 var drawPentagon = function (_v4) {
                    return function () {
                       switch (_v4.ctor)
                       {case "_Tuple2":
                          return $Graphics$Collage.rotate($Basics.toFloat(_v4._0))($Graphics$Collage.move({ctor: "_Tuple2"
                                                                                                          ,_0: $Basics.toFloat(_v4._0) - $Basics.toFloat(_v0._0) / 2
                                                                                                          ,_1: $Basics.toFloat(_v0._1) / 2 - $Basics.toFloat(_v4._1)})($Graphics$Collage.filled(A4($Color.hsla,
                            $Basics.toFloat(_v4._0),
                            0.9,
                            0.6,
                            0.7))(A2($Graphics$Collage.ngon,
                            5,
                            20))));}
                       _E.Case($moduleName,
                       "between lines 25 and 27");
                    }();
                 };
                 return $Graphics$Element.layers(_L.fromArray([A3($Graphics$Collage.collage,
                                                              _v0._0,
                                                              _v0._1,
                                                              A2($List.map,
                                                              drawPentagon,
                                                              locs))
                                                              ,$Text.plainText("Tap to stamp a pentagon.")]));
              }();}
         _E.Case($moduleName,
         "between lines 24 and 29");
      }();
   });
   var reset = $Native$Ports.portIn("reset",
   $Native$Ports.incomingSignal(function (v) {
      return _U.isJSArray(v) ? {ctor: "_Tuple0"} : _E.raise("invalid input, expecting JSArray but got " + v);
   }));
   var events = A2($Signal.merge,
   A2($Signal._op["<~"],
   $Maybe.Just,
   A2($Signal.sampleOn,
   $Mouse.clicks,
   $Mouse.position)),
   A2($Signal._op["<~"],
   $Basics.always($Maybe.Nothing),
   reset));
   var clickLocations = function () {
      var update = F2(function (event,
      locations) {
         return function () {
            switch (event.ctor)
            {case "Just":
               return A2($List._op["::"],
                 event._0,
                 locations);
               case "Nothing":
               return _L.fromArray([]);}
            _E.Case($moduleName,
            "between lines 17 and 20");
         }();
      });
      return A3($Signal.foldp,
      update,
      _L.fromArray([]),
      events);
   }();
   var main = A3($Signal.lift2,
   scene,
   $Window.dimensions,
   clickLocations);
   var count = $Native$Ports.portOut("count",
   $Native$Ports.outgoingSignal(function (v) {
      return v;
   }),
   A2($Signal._op["<~"],
   $List.length,
   clickLocations));
   _elm.Stamps.values = {_op: _op
                        ,events: events
                        ,clickLocations: clickLocations
                        ,scene: scene
                        ,main: main};
   return _elm.Stamps.values;
};