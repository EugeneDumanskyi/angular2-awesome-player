export var template = `
<div class="videoplayer">
	<div class="videoplayer__player">
		<div style="width:100%" *ngFor="#video of playlist; #i = index">
			<youtube-player [src]="video" *ngIf="i===selectedIndex && video.type==='youtube'"></youtube-player>
			<vimeo-player [src]="video" *ngIf="i===selectedIndex && video.type==='vimeo'"></vimeo-player>
		</div>
	</div>
	<div class="videoplayer__playlist" *ngIf="showPlaylist">
		<ul class="videoplayer__playlist__list">
			<li class="videoplayer__playlist__list__item" *ngFor="#item of playlist; #i = index" (click)="onSelect(i)" [ngClass]="{'videoplayer__playlist__list__item-selected': i===selectedIndex}">
				{{item.title}}
			</li>
		</ul>
	</div>
</div>
`;