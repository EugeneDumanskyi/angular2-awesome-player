import {Component, OnInit} from 'angular2/core';
import {VideoSource, GenericVideoPlayer} from './types';

@Component({
    selector: 'vimeo-player',
    template: '<iframe width="100%" height="350px" [src]="src.url" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>',
    properties: ['src:src']
})
export class VimeoPlayerComponent extends GenericVideoPlayer {
}