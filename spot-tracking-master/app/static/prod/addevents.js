define(["utils"],function(e){"use strict";function n(){e.getObjects("/racepoints").then(t.parseResponse,e.logger),window.__DEBUG_EVENTS__={internal:s,api:t}}var t,s;return s={},t={parseResponse:function(n){var t,i;for(t=0,i=n.race_points.length;i>t;t+=1)e.createEventPoint(n.race_points[t]);window.obstacles=n.race_points,s.obstacles=n.race_points}},{init:n}});
//# sourceMappingURL=addevents.js
//# sourceMappingURL=addevents.js.map