import fetcher from "@/lib/fetcher"
import useSWR from "swr"


const useWorkedTimes = () => {
    const {data, error, isLoading, mutate} = useSWR('/api/workedTime', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false, 
        revalidateOnReconnect: false,
    });

    return {
        data,
        error,
        isLoading,
        mutate
    }
};

export default useWorkedTimes;