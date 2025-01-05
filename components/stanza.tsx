function Stanza({ text, bgColor }: { text: string; bgColor: string }) {
    return (
        <section className={`w-full py-8 px-4 ${bgColor} transition-all duration-500`}>
            <p className="text-lg text-center leading-relaxed whitespace-pre-wrap">{text}</p>
        </section>
    );
}

export default Stanza;