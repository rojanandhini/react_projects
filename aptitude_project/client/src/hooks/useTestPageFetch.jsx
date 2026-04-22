import { useEffect, useState } from 'react';

// 1. Pass the slug as an argument to the hook
const useTestPageFetch = (slug) => {
    const [test, setTest] = useState(null); // Initialize as null for easier "loading" checks

    const fetchTest = async () => {
        if (!slug) return; // Don't fetch if slug is missing

        try {
            // 2. Use a template literal to insert the real slug variable
            const res = await fetch(`/api/test/${slug}`);

            if (!res.ok) {
                throw new Error(`Server responded with status ${res.status}`);
            }

            const testData = await res.json();

            console.log(testData.data);
            // 3. Set state to the data object (assuming testData.data exists)
            setTest(testData.data); 
        } catch (error) {
            console.error("Data Fetch Error: ", error);
        }
    };

    useEffect(() => {
        fetchTest();
    }, [slug]); // 4. Re-run whenever the slug changes

    return test;
};

export default useTestPageFetch;
