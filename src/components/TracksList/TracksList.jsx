import Track from '../Track/Track';
import HOCLister from '../HOCLister/HOCLister';

const TracksList = HOCLister(Track, 'container--tiles');

export default TracksList;