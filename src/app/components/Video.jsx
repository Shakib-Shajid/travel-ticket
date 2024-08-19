
const Video = () => {
    return (
        <div className="flex justify-center my-5 md:my-10">
            <iframe className="aspect-video w-[300px] h-[300px] md:w-[500px] md:h-[400px] lg:w-[800px] lg:h-[500px]" width="760" height="450" src="https://www.youtube.com/embed/d8m4cniVuic?si=FzEBq90yMuhMAqBt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    );
};

export default Video;