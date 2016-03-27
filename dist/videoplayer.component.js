System.register(['angular2/core', "./youtubeplayer.component", "./vimeoplayer.component", "./videoplayer.component.styles", "./videoplayer.component.template"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, youtubeplayer_component_1, vimeoplayer_component_1, videoplayer_component_styles_1, videoplayer_component_template_1;
    var VideoPlayerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (youtubeplayer_component_1_1) {
                youtubeplayer_component_1 = youtubeplayer_component_1_1;
            },
            function (vimeoplayer_component_1_1) {
                vimeoplayer_component_1 = vimeoplayer_component_1_1;
            },
            function (videoplayer_component_styles_1_1) {
                videoplayer_component_styles_1 = videoplayer_component_styles_1_1;
            },
            function (videoplayer_component_template_1_1) {
                videoplayer_component_template_1 = videoplayer_component_template_1_1;
            }],
        execute: function() {
            VideoPlayerComponent = (function () {
                function VideoPlayerComponent() {
                    this.showPlaylist = true;
                    this.selectedIndex = 0;
                }
                VideoPlayerComponent.prototype.onSelect = function (idx) {
                    this.selectedIndex = idx;
                };
                VideoPlayerComponent.prototype.ngOnInit = function () {
                    /*		var videos: Video[] = [];
                            for(let i in this.videos) {
                                if (this.ids.indexOf(this.videos[i].id) !== -1) {
                                    videos.push(this.videos[i]);
                                }
                            }
                            this.videos = videos;*/
                };
                VideoPlayerComponent = __decorate([
                    core_1.Component({
                        selector: 'video-player',
                        //moduleId: module.id,
                        template: videoplayer_component_template_1.template,
                        //templateUrl: 'src/videoplayer.view.html',
                        //styleUrls: ['src/videoplayer.css'],
                        styles: [videoplayer_component_styles_1.styles],
                        properties: ['playlist:playlist', 'showPlaylist:showPlaylist', 'selectedIndex:selectedIndex'],
                        directives: [youtubeplayer_component_1.YoutubePlayerComponent, vimeoplayer_component_1.VimeoPlayerComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VideoPlayerComponent);
                return VideoPlayerComponent;
            })();
            exports_1("VideoPlayerComponent", VideoPlayerComponent);
        }
    }
});

//# sourceMappingURL=videoplayer.component.js.map
