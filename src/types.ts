/**
 * VideoSource interface
 *
 * url   -> video url
 * type  -> supported types: 'youtube', 'vimeo'
 * title -> title to display in playlist
 */
export interface VideoSource {
    url: string;
    type: string;
    title: string;
}

/**
 * Base class for all video players
 */
export class GenericVideoPlayer {
    src: VideoSource;
}