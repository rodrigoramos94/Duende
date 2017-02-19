

export function getRealtimePrice(symbol){
    return 'SELECT * FROM pm.finance WHERE symbol="' + symbol + '"'
}