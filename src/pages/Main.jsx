import Video from '../components/UI/Video';
import { videos } from '../objects/Videos';
import LeftSide from '../components/LeftSide';
import { ButtonTop } from '../components/UI/ButtonTop';

const Main = () => {
    return (
        <div className="App">
            <div id="top" />
            <LeftSide />
            <div className='videoList'>
                {videos.map((videos) => <Video post={videos} key={videos.id} />)}
            </div>
            <ButtonTop />
        </div>
    )
}

export default Main