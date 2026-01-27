export default function Contact() {
    return (
    <div className="max-w-5xl mx-auto px-6 py-24">
    <h2 className="text-4xl font-bold mb-10">Let’s Talk</h2>
    <form className="grid gap-5 max-w-lg">
    <input className="p-4 rounded-xl border dark:border-gray-700 bg-transparent" placeholder="Name" />
    <input className="p-4 rounded-xl border dark:border-gray-700 bg-transparent" placeholder="Email" />
    <textarea className="p-4 rounded-xl border dark:border-gray-700 bg-transparent" placeholder="Message" rows="5" />
    <button className="bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-xl font-semibold">Send Message</button>
    </form>
    </div>
    );
    }