import {Component, OnInit} from 'angular2/core';
import {VideoPlayerComponent} from '../src/videoplayer.component';
import {VideoSource} from "../src/types";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.view.html',
    directives: [VideoPlayerComponent]
})
export class AppComponent implements OnInit {
	videoData: VideoSource[];

	ngOnInit() {
		// hardcode some test data
		this.videoData = [{
				url: 'https://www.youtube.com/embed/YR7UeAeS_-M',
				type: 'youtube',
				title: 'A day at Apex'
			}, {
				url: 'https://player.vimeo.com/video/108679294',
				type: 'vimeo',
				title: 'AFTERGLOW - Lightsuit Segment'
			}, {
				url: 'https://www.youtube.com/embed/gw1PXRsz6II',
				type: 'youtube',
				title: 'Bella Coola - Salomon Freeski TV S9 E04'
			}
		];
	}


} 