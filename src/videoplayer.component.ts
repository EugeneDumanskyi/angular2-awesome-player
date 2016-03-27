///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {Component, OnInit} from 'angular2/core';
import {VideoSource} from './types';
import {YoutubePlayerComponent} from "./youtubeplayer.component";
import {VimeoPlayerComponent} from "./vimeoplayer.component";
import {styles} from "./videoplayer.component.styles";
import {template} from "./videoplayer.component.template";

@Component({
    selector: 'video-player',
	//moduleId: module.id,
    template: template,
    //templateUrl: 'src/videoplayer.view.html',
    //styleUrls: ['src/videoplayer.css'],
    styles: [styles],
    properties: ['playlist:playlist', 'showPlaylist:showPlaylist', 'selectedIndex:selectedIndex'],
	directives: [YoutubePlayerComponent, VimeoPlayerComponent]
})
export class VideoPlayerComponent implements OnInit {
	playlist: VideoSource[];
	showPlaylist: boolean = true;
	selectedIndex: number = 0;

	onSelect(idx: number) {
		this.selectedIndex = idx; 
	}

	ngOnInit() {
/*		var videos: Video[] = [];
		for(let i in this.videos) {
			if (this.ids.indexOf(this.videos[i].id) !== -1) {
				videos.push(this.videos[i]);
			}
		}
		this.videos = videos;*/
	}
}