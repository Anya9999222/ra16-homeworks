import {useJsonFetch} from "./hooks/useJsonFetch"

const DataComponent = () => {
    const url = 'http://localhost:7070/data';
    // const opts = {
    //     method: 'GET',
    //     headers: {
    //         'Content-type': 'application/x-www-form-urlencoded'
    //     }
    // }
    const [data, loading, error] = useJsonFetch('http://localhost:7070/data');

    console.log(JSON.stringify(data))

    return(
        <div className="data">
            <div>Status: {data}</div>
        </div>
    )
}

export default DataComponent;