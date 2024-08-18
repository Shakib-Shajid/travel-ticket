
const Video = () => {
    return (
        <div className="flex justify-center my-10">
            <iframe className="aspect-video" width="760" height="450" src="https://www.youtube.com/embed/d8m4cniVuic?si=FzEBq90yMuhMAqBt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    );
};

export default Video;