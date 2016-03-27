System.register([], function(exports_1) {
    var template;
    return {
        setters:[],
        execute: function() {
            exports_1("template", template = "\n<div class=\"videoplayer\">\n\t<div class=\"videoplayer__player\">\n\t\t<div style=\"width:100%\" *ngFor=\"#video of playlist; #i = index\">\n\t\t\t<youtube-player [src]=\"video\" *ngIf=\"i===selectedIndex && video.type==='youtube'\"></youtube-player>\n\t\t\t<vimeo-player [src]=\"video\" *ngIf=\"i===selectedIndex && video.type==='vimeo'\"></vimeo-player>\n\t\t</div>\n\t</div>\n\t<div class=\"videoplayer__playlist\" *ngIf=\"showPlaylist\">\n\t\t<ul class=\"videoplayer__playlist__list\">\n\t\t\t<li class=\"videoplayer__playlist__list__item\" *ngFor=\"#item of playlist; #i = index\" (click)=\"onSelect(i)\" [ngClass]=\"{'videoplayer__playlist__list__item-selected': i===selectedIndex}\">\n\t\t\t\t{{item.title}}\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</div>\n");
        }
    }
});

//# sourceMappingURL=videoplayer.component.template.js.map
