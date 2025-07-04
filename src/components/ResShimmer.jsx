const ResShimmer = () => {
    return (
        <section className="max-w-[800px] min-h-[800px] mx-auto">
            <div className="flex flex-col gap-4 my-16">
                <div className="shimmer-bg max-w-3/4 min-h-8 rounded"></div>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full h-[300px]">
                <div className="shimmer-bg rounded"></div>
                <div className="shimmer-bg rounded"></div>
            </div>
        </section>
    )
}

export default ResShimmer;