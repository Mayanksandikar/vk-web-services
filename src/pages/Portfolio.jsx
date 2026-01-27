export default function Portfolio() {
    return (
    <section className="px-6 md:px-24 py-32">
    <h2 className="font-serif text-4xl mb-16">Selected work</h2>
    
    
    <div className="grid md:grid-cols-2 gap-16">
    {[1,2,3,4].map(i => (
    <img
    key={i}
    src={`https://images.unsplash.com/random?creative&sig=${i}`}
    className="w-full object-cover"
    />
    ))}
    </div>
    </section>
    );
    }