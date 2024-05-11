const DEFAULT_ID = '1';

export const generateId = data => {
    if(data.length == 0) return DEFAULT_ID

    const ids = data.map(x=>x.id)
    const maximumID = Math.max(...ids)
    return (maximumID + 1).toString();
}