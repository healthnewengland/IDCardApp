
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'About'
(function(symbolName){})("About");
//Edge symbol end:'About'

//=========================================================

//Edge symbol: 'MyID'
(function(symbolName){})("MyID");
//Edge symbol end:'MyID'

//=========================================================

//Edge symbol: 'AboutHNE'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_About3}","click",function(sym,e){window.open("http://www.hne.com","_self");});
//Edge binding end
})("AboutHNE");
//Edge symbol end:'AboutHNE'
})(jQuery,AdobeEdge,"EDGE-2609846");