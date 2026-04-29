import React from 'react';
import { useParams } from 'react-router-dom'; // Assuming you use react-router
import useTestPageFetch from '../hooks/useTestPageFetch';
import { Link } from 'react-router-dom';
const TestPage = () => {
    const { slug } = useParams(); // Get the slug from the URL
    const test = useTestPageFetch(slug);
    
    
 
   console.log(test);
    // Handle loading or not found state
    if (!test) return <div className="p-10">Loading {slug} page...</div>;

    return (
        <div className="w-full p-8 flex flex-col items-center">
            {/* Image Section */}
            <div className="w-full max-w-4xl mb-6">
                <img 
                    src={test?.img} 
                    alt={test?.title} 
                    className="w-full h-64 object-cover rounded-xl shadow-lg" 
                />
            </div>

            {/* Content Section */}
            <div className="w-full max-w-4xl space-y-6">
                <div className="border-b pb-4">
                    <h1 className="text-4xl font-bold text-gray-800">{test.title}</h1>
                    <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                        {test?.description}
                    </p>
                </div>

                {/* Topics Section */}
                <div className="bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-600">Topics Covered</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {/* 2. Split the string into an array to map it */}
                        {test.topics.split(', ').map((topic, i) => (
                            <li key={i} className="flex items-center space-x-2">
                                <span className="text-blue-500">•</span>
                                <span className="capitalize">{topic}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Call to Action */}
                <Link to={`/quiz/entry/${slug}`}>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition">
                    Start {slug} Practice Test
                </button></Link>
            </div>
        </div>
    );
};

export default TestPage;
