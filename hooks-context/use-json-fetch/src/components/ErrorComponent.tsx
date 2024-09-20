import useJsonFetch from "./hooks/useJsonFetch"

const ErrorComponent = () => {
    const url = 'http://localhost:7070/error';
    const opts = {}
    const [data, loading, error] = useJsonFetch(url, opts);

    console.log(error)

    return(
        <div className="error"></div>
    )
}

export default ErrorComponent;