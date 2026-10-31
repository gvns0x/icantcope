import React from 'react';
import '../Item/Item.css';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
    this.mediaRef = React.createRef();
    this.handleLoad = this.handleLoad.bind(this);
  }

  componentDidMount() {
    this.checkCachedMedia();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      this.setState({ loaded: false }, () => this.checkCachedMedia());
    }
  }

  checkCachedMedia() {
    const media = this.mediaRef.current;
    if (!media) return;

    if (media.tagName === 'IMG' && media.complete && media.naturalWidth > 0) {
      this.handleLoad();
    } else if (media.tagName === 'VIDEO' && media.readyState >= 2) {
      this.handleLoad();
    }
  }

  handleLoad() {
    if (!this.state.loaded) {
      this.setState({ loaded: true });
    }
  }

  render() {
    const { type, url, alt, width, height, poster } = this.props;
    const isVideo = type === 'Video';
    const mediaW = width || 1;
    const mediaH = height || 1;
    const loadedClass = this.state.loaded ? 'is-loaded' : '';

    const mediaContent = isVideo ? (
      <video
        ref={this.mediaRef}
        className={`ItemContent ${loadedClass}`}
        playsInline
        autoPlay
        muted
        loop
        poster={poster}
        onLoadedData={this.handleLoad}
        onCanPlay={this.handleLoad}
        onError={this.handleLoad}
      >
        <source src={url} type="video/mp4" />
      </video>
    ) : (
      <img
        ref={this.mediaRef}
        className={`ItemContent ${loadedClass}`}
        alt={alt}
        src={url}
        width={width}
        height={height}
        onLoad={this.handleLoad}
        onError={this.handleLoad}
      />
    );

    return (
      <div
        className={`Item ${loadedClass}`}
        style={{ '--media-w': mediaW, '--media-h': mediaH }}
      >
        {mediaContent}
      </div>
    );
  }
}

export default Item;
