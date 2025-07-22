const Contact = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <form className="p-8">
                <input className="p-2 border m-4" type="text" placeholder="name" />
                <input className="p-2 border m-4" type="text" placeholder="message" />
                <button className="border p-2 rounded hover:text-amber-700 transition-transform duration-300 hover:scale-110">Submit</button>
            </form>
        </div>
    )
}

export default Contact;