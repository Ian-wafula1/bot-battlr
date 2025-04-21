import Bot from "../components/Bot"
import SortBar from "../components/SortBar"
import useFetch from "../hooks/useFetch"
import Filter from "../components/Filter"

export default function Collection() {
    const {data: bots, loading, error} = useFetch('http://localhost:8001/bots')
    if (loading) {
        return <div className="loading">Loading...</div>
    }
    if (error) {
        return <div className="error">Fetch error!</div>
    }
    return (
        <main>
            <h1>Bot Collection</h1>
            <div className="utilities">
                <SortBar />
                <Filter />
            </div>
            <div className="bots">
                {bots.map((bot, index) => {
                    return <Bot index={index + 1} key={bot.id} bot={bot} />
                })}
            </div>
        </main>
    )
}