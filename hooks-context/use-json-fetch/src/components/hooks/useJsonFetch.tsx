import {useState, useEffect } from 'react';
interface Props {
    url: string,
    opts?: {}
} 
export const useJsonFetch = (url, opts) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            debugger
        try{
            const response = await fetch(url, opts);
            if(!response.ok){
                throw new Error(response.statusText);
            }
            const res = await response.json();
            setData(res);
        } catch(e){
            setError(true);
        } finally{
            setLoading(false)
        }
        }
        fetchData();
        
    }, [url])
    return [data, loading, error] 
}