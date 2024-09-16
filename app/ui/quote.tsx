import { fetchRandom } from "../lib/data";

export async function Quote() {
    const random = await fetchRandom();
    const el = random.data[0];
    return (
        <div className="h-full flex flex-col justify-center p-4 md:p-12">
            <div className="text-3xl md:text-5xl text-balance mt-auto italic">&ldquo;{el.q.trim()}&rdquo;</div>
            <span className="pt-8 self-end md:self-start">{el.a}</span>
            <div className="mt-auto text-gray-500">
                <span className="text-xs ">&copy; <a href="https://github.com/GiorgioDots/motivational-quotes" target="_blank">GioDots</a> - Thanks<a href="https://zenquotes.io/" target="_blank"> ZenQuotes.io </a>for the APIs</span>
            </div>
        </div>
    );
}
