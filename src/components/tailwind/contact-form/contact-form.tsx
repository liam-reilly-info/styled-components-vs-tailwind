import Input from "./input-example"

const ContactFormTW = () => {

    const msg: string = "Hello World!"

    const sayHello = () => {
        alert(msg);
    }

    return <form className="grid border-white border-2  grid-rows-7 rounded-lg shadow-2xl bg-blue-400 py-4 px-8">
        <h1 className="col-span-2 text-black text-4xl mb-8 justify-self-center py-4 font-sans uppercase">
            Tailwind CSS Form
        </h1>

        <label>Name:</label>
        {/* <Input /> */} 
        <input className="h-8 rounded px-2 mb-6" />

        <label>Email:</label>
        <input className="h-8 rounded px-2 mb-6"/>
        
        <label>Phone:</label>
        <input className="h-8 rounded px-2 mb-6"/>

        <label className="pr-4">Message:</label>
        <textarea className="h-20 row-span-2 rounded px-2 self-center"/>
        
        <button onClick={sayHello} className="col-span-2 bg-blue-600 rounded-md h-10 mt-6 hover:h-10 text-white hover:bg-blue-500 hover:text-white" >
            Send
        </button>
    </form>
}

export default ContactFormTW