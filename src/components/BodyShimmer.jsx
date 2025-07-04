import '../assets/body-shimmer.css';

const BodyShimmmer = () => {
    // Create 12 placeholder cards
    return (
        <section className="res-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array(12).fill("").map((_, index) => (
                <div className="shimmer-card w-[273px] h-[285px] rounded-2xl p-2 box-border flex flex-col gap-2 overflow-hidden" key={index}>
                    <div className="shimmer-img shimmer-bg h-[182px] w-full rounded-2xl shimmer-bg"></div>
                    <div className="shimmer-line shimmer-bg short h-4 w-[40%] rounded shimmer-bg"></div>
                    <div className="shimmer-line shimmer-bg medium h-4 w-[60%] rounded shimmer-bg"></div>
                    <div className="shimmer-line shimmer-bg long h-4 w-[80%] rounded shimmer-bg"></div>
                </div>
            ))}
        </section>
    );
};

export default BodyShimmmer;
